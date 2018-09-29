package es.tfg.cog.dl;

import android.util.Log;

import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.WebSocket;
import okhttp3.WebSocketListener;
import okio.ByteString;

public class WebSocketRecieve extends WebSocketListener {
    String          mStreamURL;
    MessageCallback mMessageCallback;

    private static String TAG = WebSocketRecieve.class.getSimpleName();

    WebSocketRecieve(String streamURL, MessageCallback messageCallback) {
        this.mStreamURL = streamURL;
        this.mMessageCallback = messageCallback;
    }

    public void run() {
        OkHttpClient client =
            new OkHttpClient.Builder().readTimeout(1000, TimeUnit.MILLISECONDS).build();

        Request request = new Request.Builder().url(mStreamURL).build();
        client.newWebSocket(request, this);

        // Trigger shutdown of the dispatcher's executor so this process can exit cleanly.
        client.dispatcher().executorService().shutdown();
    }

    @Override
    public void onMessage(WebSocket webSocket, String text) {
        Log.d(TAG, "__TT__WSR__onMsg_1_" + text);
        mMessageCallback.messageRecieved(text);
    }

    @Override
    public void onMessage(WebSocket webSocket, ByteString bytes) {
        Log.d(TAG, "__TT__WSR__onMsg_2_" + bytes.toString());
        Log.d(TAG, bytes.hex());
    }

    @Override
    public void onClosed(WebSocket webSocket, int code, String reason) {
        Log.d(TAG, "__TT__WSR__onClosed_3_" + (webSocket.toString() + code + reason));
    }

    @Override
    public void onFailure(WebSocket webSocket, Throwable t, Response response) {
        Log.d(TAG,"__TT__WSR__onFailure_4_");
        t.printStackTrace();
    }
}
