package es.tfg.cog.chat;

import android.app.Activity;
import android.content.Context;
import android.support.design.widget.FloatingActionButton;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.ListView;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;

import es.tfg.cog.model.Model.SimulatedStatus;

import es.tfg.cog.chat.chatadapter.ChatAdapter;
import es.tfg.cog.chat.chatadapter.ChatMessage;

import pl.tajchert.waitingdots.DotsTextView;


// EVENTBUS: registro en eventbus
import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

// EVENTBUS: esta clase se suscribe a alguno de nuestros eventos de eventbus
import es.tfg.cog.eventbus.events.ASREvent;
import es.tfg.cog.eventbus.events.MessageAnalizedFromBotEvent;
import es.tfg.cog.eventbus.events.PartialASREvent;

// EVENTBUS: esta clase genera eventos hacia eventbus por medio
// del SpeechDispatcher y el BotMessageDispatcher
import es.tfg.cog.eventbus.dispatchers.SpeechDispatcher;
import es.tfg.cog.eventbus.dispatchers.BotMessageDispatcher;

public class ChatView extends LinearLayout {

    private static String TAG = ChatView.class.getSimpleName();

    private EditText               mEditText;
    private ListView               mMessagesContainer;
    private ImageButton            mSendBtn;
    private ChatAdapter            mChatAdapter;
    private ArrayList<ChatMessage> mChatHistory;

    public static String sConversationId;

    private Activity mActivityContext;
    private View     mView;

    private FloatingActionButton mSpeakFloatingButton;
    private boolean              mUsespeech;
    private DotsTextView         dotsTextView;

    public ChatView(Activity context, boolean useSpeech) {
        super(context);
        this.mActivityContext = context;
        this.mUsespeech = useSpeech;

        initialize(context);

        // EVENTBUS: registramos esta clase ChatView como suscriptora de eventos eventbus
        register();
    }

    private void initialize(Context context) {
        mView = inflate(context, R.layout.chatview, this);

        // inicializamos el Speech View Things ...
        initSpeechView(mUsespeech);

        // inicializamos el chat...
        initChat();
    }

    /**
     * Inicializa las cosas de la vista relacionadas con el speech, usando el
     * parámetro useSpeech
     * que se ha determinado de la petición de permisos de acceso al audio
     * que se le solicitó al usuario.
     *
     * @param useSpeech nos indica si debe activarse la parte de voz o no
     */
    public void initSpeechView(boolean useSpeech) {
        if (useSpeech) {
            mSpeakFloatingButton = (FloatingActionButton) findViewById(R.id.fab);
            mSpeakFloatingButton.show();
            mSpeakFloatingButton.setOnClickListener(new OnClickListener() {
                @Override
                public void onClick(View view) {
                    // EVENTBUS: Despachando evento de cambio de estado del reconocimiento
                    SpeechDispatcher.toggleASREvent();
                }
            });
        } else {
            mSpeakFloatingButton = (FloatingActionButton) findViewById(R.id.fab);
            mSpeakFloatingButton.hide();
        }
    }

    /**
     * Inicializa el chat
     */
    private void initChat() {
        dotsTextView = (DotsTextView) findViewById(R.id.dots);
        mMessagesContainer = (ListView) mView.findViewById(R.id.messagesContainer);
        mEditText = (EditText) mView.findViewById(R.id.messageEdit);
        mSendBtn = (ImageButton) mView.findViewById(R.id.chatSendButton);
        initChatHistory();
        mSendBtn.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View view) {
                String messageText = mEditText.getText().toString();
                showTextOrSpeechMessageAndSendToBot(messageText);
            }
        });
    }

    /**
     * Inicializa el historico de mensajes del chat
     * TODO: completar este proceson
     */
    private void initChatHistory() {
        mChatHistory = new ArrayList<ChatMessage>();
        mChatAdapter = new ChatAdapter(mActivityContext, mChatHistory);
        mMessagesContainer.setAdapter(mChatAdapter);
    }

    /**
     * Muestra un mensaje en el chat
     *
     * @param message
     */
    public void displayMessage(ChatMessage message) {
        mChatAdapter.add(message);
        mChatAdapter.notifyDataSetChanged();
        scroll();
    }

    private void scroll() {
        mMessagesContainer.setSelection(mMessagesContainer.getCount() - 1);
    }

    /**
     * Añadimos la respuesta del bot en la ventana del chat
     *
     * @param message
     */
    public void addResponseFromBotToChat(ChatMessage message) {

        // TODO pensar en el chat history para que pueda guardar todo tipo de messages
        //      no solo string,
        // TODO pensar en reconstruir el mChatHistory cuando proceda (giros de pantalla, vuelta
        //      de background, etc)
        /*
        //mChatHistory.add(msg);
        for (int i = 0; i < mChatHistory.size(); i++) {
            ChatMessage msg = mChatHistory.get(i);
            displayMessage(msg);
        }
        */

        if(dotsTextView.isPlaying() || ! dotsTextView.isHide()) {
            dotsTextView.hideAndStop();
        }

        displayMessage(message);
    }

    /**
     * Mostramos en la ventana del chat los mensajes del reconocedor
     * y los enviamos al bot
     *
     * @param message
     */
    public void showTextOrSpeechMessageAndSendToBot(String message) {
        if (TextUtils.isEmpty(message)) {
            return;
        }

        ChatMessage chatMessage = new ChatMessage();
        chatMessage.setMe(true);
        chatMessage.setId(122); //dummy
        chatMessage.setMessage(message);
        chatMessage.setDate(DateFormat.getDateTimeInstance().format(new Date()));

        mEditText.setText("");
        displayMessage(chatMessage);

        dotsTextView.showAndPlay();

        if (sConversationId != "") {
            sendTextOrSpeechMessageToBot(message);
        }
    }

    /**
     * Envia un mensaje al bot a través de directline
     *
     * @param message
     */
    public void sendTextOrSpeechMessageToBot(String message) {
        CheckBox home = (CheckBox) mView.findViewById(R.id.home);
        CheckBox rpa = (CheckBox) mView.findViewById(R.id.rpa);
        CheckBox rpo = (CheckBox) mView.findViewById(R.id.rpo);
        EditText sus = (EditText) mView.findViewById(R.id.sus);
        EditText nstbs = (EditText) mView.findViewById(R.id.nstbs);

        SimulatedStatus simulatedStatus = new SimulatedStatus(
            home.isChecked(),
            rpa.isChecked(),
            rpo.isChecked(),
            sus.getText().toString(),
            Integer.parseInt(nstbs.getText().toString())
        );

        // EVENTBUS: Despachando evento de envio de mensaje al bot
        // (en este caso con un estado simulado)
        BotMessageDispatcher.processMessageToBot(message, simulatedStatus);
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

    /**
     * Suscripción al evento de reconocimiento completo
     *
     * @param asrEvent
     */
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(final ASREvent asrEvent) {
        final ArrayList<String> texts = asrEvent.getTexts();
        for (String text : texts) {
            //Toast.makeText(this, text, Toast.LENGTH_SHORT).show();

            EditText editText = (EditText) findViewById(R.id.messageEdit);
            editText.setText(text);

            showTextOrSpeechMessageAndSendToBot(text);

            return;
        }
    }

    /**
     * Suscripcion al evento de reconocimiento parcial
     *
     * @param partialASREvent
     */
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(final PartialASREvent partialASREvent) {
        final ArrayList<String> commands = partialASREvent.getTexts();
        for (String command : commands) {
            EditText editText = (EditText) findViewById(R.id.messageEdit);
            editText.setText(command);
        }
    }

    /**
     * Suscripcion al evento de un mensaje de texto del bot
     *
     * @param messageAnalizedFromBotEvent
     */
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(final MessageAnalizedFromBotEvent messageAnalizedFromBotEvent) {
        if (messageAnalizedFromBotEvent.isTyping()) {
            dotsTextView.showAndPlay();
        } else if (messageAnalizedFromBotEvent.isCarrousell()) {
            ChatMessage message = new ChatMessage();
            message.setMe(false);
            message.setDate(DateFormat.getDateTimeInstance().format(new Date()));
            message.setElements(messageAnalizedFromBotEvent.getElements());

            addResponseFromBotToChat(message);
        } else {
            ChatMessage message = new ChatMessage();
            message.setMe(false);
            message.setDate(DateFormat.getDateTimeInstance().format(new Date()));
            message.setMessage(messageAnalizedFromBotEvent.getText());
            if (messageAnalizedFromBotEvent.isChoice()) {
                message.setAttachments(messageAnalizedFromBotEvent.getAttachments());
            }
            message.setMessage(messageAnalizedFromBotEvent.getText());

            addResponseFromBotToChat(message);
        }
    }

}

