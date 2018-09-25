package es.tid.cog.dl;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import java.io.IOException;
import java.util.HashMap;

import es.tid.cog.eventbus.events.MessageToBotEvent;

import es.tid.cog.model.Model.ConversationInit;
import es.tid.cog.model.Model.From;

import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import static es.tid.cog.dl.DirectlineAPI.BASE_URL;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

// EVENTBUS: esta clase publica eventos a eventbus a traves de nuestros dispachers
import es.tid.cog.eventbus.dispatchers.BotMessageDispatcher;

public class DLManager implements MessageCallback {
    private static String TAG = DLManager.class.getSimpleName();

    private static DLManager sInstance;

    public static String sDirectlinePrimaryKey;
    public static String sConversationId;

    private DirectlineAPI mDirectlineAPI;

    private Call<From>       mSendMessage;
    private ConversationInit mConversationInit;
    private Activity         mActivityContext;

    /**
     * Get Instance method
     *
     * @param context
     * @param directlinePrimaryKey
     * @return
     */
    public static DLManager getInstance(Activity context, String directlinePrimaryKey) {
        if (sInstance == null && context != null) {
            sInstance = new DLManager(context, directlinePrimaryKey);
        } else {
            sInstance.init(2);
        }
        return sInstance;
    }

    private DLManager(Activity context, String directlinePrimaryKey) {
        Log.d(TAG, "__TT__DLManager()__");
        mActivityContext = context;
        this.sDirectlinePrimaryKey = directlinePrimaryKey;

        initialize(context);

        // EVENTBUS: registramos esta clase como suscriptora de eventos eventbus
        register();
    }

    //-----------------------------------------------
    // INICIALIZANDO CONEXIONES DIRECTLINE DEL BOT...
    //-----------------------------------------------

    private void initialize(Context context) {
        Log.d(TAG, "__TT__initialize()__");
        init(1); //build client initChat start message
    }

    private void init(int i) {
        Log.d(TAG, "__TT__init(i)__i=" + i);

        buildDirectlineApiMSBT();
        //buildDirectlineApiAURA();

        Call<ConversationInit> call = mDirectlineAPI.getConversationId();
        call.enqueue(new Callback<ConversationInit>() {
            @Override
            public void onResponse(Call<ConversationInit> call,
                                   retrofit2.Response<ConversationInit> response) {

                Log.d(TAG,
                    "__TT__enqueue__Conversation ID = " + response.body().getConversationId());

                sConversationId = response.body().getConversationId();
                mConversationInit = response.body();
                Log.d(TAG, "__TT__enqueue__Conversation ID = " + mConversationInit);
                initStreaming();
            }

            @Override
            public void onFailure(Call<ConversationInit> call, Throwable t) {
                Log.d(TAG, "__TT__enqueue__Failure");
            }
        });
    }

    /**
     * usando la primary key
     */
    private void buildDirectlineApiMSBT() {
        Log.d(TAG, "__TT__buildDirectlineApiMSBT()__");

        OkHttpClient.Builder httpClient = new OkHttpClient.Builder();
        httpClient.addInterceptor(new Interceptor() {
            @Override
            public Response intercept(Chain chain) throws IOException {
                Request original = chain.request();
                String basicAuth = "Bearer " + sDirectlinePrimaryKey;
                Request request = original.newBuilder()
                    .header("Authorization", basicAuth.trim())
                    .header("Content-Type", "application/json")
                    .header("Accept", " application/json")
                    .method(original.method(), original.body()).build();
                return chain.proceed(request);
            }
        });

        OkHttpClient client = httpClient.build();
        Retrofit retrofit = new Retrofit.Builder().baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create()).client(client).build();
        mDirectlineAPI = retrofit.create(DirectlineAPI.class);
        Log.d(TAG, "__TT__buildDirectlineApiMSBT()__Client Created__");
    }

    /**
     * Usando el token de aura
     */
    private void buildDirectlineApiAURA() {

        final String token = this.getToken();

        Log.d(TAG, "__TT__buildDirectlineApiAURA__" + token);

        OkHttpClient.Builder httpClient = new OkHttpClient.Builder();
        httpClient.addInterceptor(new Interceptor() {
            @Override
            public Response intercept(Chain chain) throws IOException {
                Request original = chain.request();
                String basicAuth = "Bearer " + token;
                Request request = original.newBuilder()
                    .header("Authorization", basicAuth.trim())
                    .header("Content-Type", "application/json")
                    .header("Accept", " application/json")
                    .method(original.method(), original.body()).build();
                return chain.proceed(request);
            }
        });

        OkHttpClient client = httpClient.build();
        Retrofit retrofit = new Retrofit.Builder().baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create()).client(client).build();

        mDirectlineAPI = retrofit.create(DirectlineAPI.class);

        Log.d(TAG, "__TT__buildDirectlineApiAURA()__Client Created__");
    }

    /**
     * pillar el token de aura...
     *
     * @return
     */
    private String getToken() {
        String DIRECT_LINE_AURA_TOKENS_URL =
            "https://aura-utils-dev-movistar.azurewebsites.net/auraservices/v1/token?"
                + "code=I4kNfJ2lg6eCJbxHzzQUaGCuVivxJhTrsEVgQzwcwTOD7XhEisV6Jg==";

        try {
            OkHttpClient.Builder httpClient = new OkHttpClient.Builder();
            OkHttpClient client = httpClient.build();

            Request request = new Request.Builder().url(DIRECT_LINE_AURA_TOKENS_URL).build();

            Response response = client.newCall(request).execute();

            Gson gson = new Gson();
            JsonElement responseElement = gson.fromJson(response.body().string(), JsonElement.class);
            final JsonObject responseJson = responseElement.getAsJsonObject();
            Log.d(TAG, "__TT__getToken__responseJson__" + responseJson);

            String token = responseJson.get("token").getAsString();
            Log.d(TAG, "__TT__getToken__token__" + token);

            return token;
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "nada";
    }

    private void initStreaming() {
        try {
            Log.d(TAG, "__TT__initStreaming__1_");
            WebSocketRecieve webSocketRecieve =
                new WebSocketRecieve(mConversationInit.getStreamUrl(), DLManager.this);
            webSocketRecieve.run();
            Log.d(TAG, "__TT__initStreaming__2_");
        } catch (Exception e) {
            Log.d(TAG, "__TT__initStreaming__e__" + e.toString());
            e.printStackTrace();
        }
    }

    //----------------------------
    // ENVIANDO MENSAJES AL BOT...
    //----------------------------

    /**
     * Enviar un mensaje al bot por directline
     * @param message
     */
    private void sendMessageToBot(HashMap<String, Object> message) {

        boolean permitidoEnviarMensaje = true;
        Log.d(TAG, "__TT__sendMessageToBot__0__permitidoEnviarMensaje__" + permitidoEnviarMensaje);
        Log.d(TAG, "__TT__sendMessageToBot__0__message__" + message);

        if (permitidoEnviarMensaje && message != null) {

            // Se envía el mensaje como una tabla hash
            // que requiere el api
            // ...de momento no se emplean POJOS

            mSendMessage = mDirectlineAPI.sendChatMessage(sConversationId, message);
            mSendMessage.enqueue(new Callback<From>() {
                @Override
                public void onResponse(Call<From> call, retrofit2.Response<From> response) {
                    Log.d(TAG, "__TT__sendMessageToBot__1__Response__" + response);
                    Log.d(TAG, "__TT__sendMessageToBot__1__body__" + response.body());
                }

                @Override
                public void onFailure(Call<From> call, Throwable t) {
                    Log.d(TAG, "__TT__sendMessageToBot__1__onFailure" + t);
                    t.printStackTrace();
                }
            });
        }
    }

    //-------------------------------
    // RECIBIENDO MENSAJES DEL BOT...
    //-------------------------------

    /**
     * Recepción de un mensaje procedente del bot
     * @param message
     */
    @Override
    public void messageRecieved(String message) {

        Log.d(TAG, "__TT__messageRecieved__s__|" + message + "|");

        if (message != null && message.length() > 0) {
            Gson gson = new Gson();

            // Se lee el mensaje recibido como un JsonElement
            // y se convierte en un JsonObject
            // ...de momento no se emplean POJOS

            JsonElement messageAsElement = gson.fromJson(message, JsonElement.class);
            final JsonObject messageAsJsonObject = messageAsElement.getAsJsonObject();

            Log.d(TAG, "__TT__messageRecieved__result__|" + messageAsJsonObject + "|");

            if (messageAsJsonObject != null) {
                mActivityContext.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        BotMessageDispatcher.processMessageFromBot(messageAsJsonObject);
                    }
                });
            }
        }
    }

    // -------------------------------------------
    // -------------EVENTBUS----------------------
    // -------------------------------------------

    /**
     * Registro en eventbus
     */
    public void register() {
        unregister();
        Log.d(TAG, "[register in eventbus]");
        EventBus.getDefault().register(this);
    }

    /**
     * Desregistro de eventbus
     */
    public void unregister() {
        if (EventBus.getDefault().isRegistered(this)) {
            Log.w(TAG, "[unregister from eventbus]");
            EventBus.getDefault().unregister(this);
        }
    }

    // -----------------------------------------------------------------
    // ---------------SUSCRIPCIONES A EVENTOS DEL EVENTBUS--------------
    // -----------------------------------------------------------------

    // TODO: completar suscripciones...

    /**
     * Suscripción al evento de envio de mensaje al bot
     *
     * @param message
     */
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(final MessageToBotEvent message) {
        Log.d(TAG, "__TT__onEvent__MessageWithStatusToBotEvent__]");
        sendMessageToBot(message.getMessage());
    }

}

