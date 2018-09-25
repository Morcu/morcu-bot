package es.tid.cog.msa;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.StrictMode;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.support.v4.app.ActivityCompat;
import android.util.Log;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.Random;

import es.tid.cog.chat.ChatView;
import es.tid.cog.dl.DLManager;
import es.tid.cog.emulator.Emulator;
import es.tid.cog.eventbus.events.OpenWebViewEvent;
import es.tid.cog.model.Model.Credentials;
import es.tid.cog.model.Model.From;
import es.tid.cog.model.Model.Payload;
import es.tid.cog.speech.SpeechManager;

public class MainActivity extends AppCompatActivity {
    private final String   TAG        = getClass().getSimpleName();
    private final int REQUEST_AUDIO_CODE = 123;

    private       boolean  mUseSpeech = false;

    private       ChatView mChatView  = null;
    private DLManager     mDLManager;
    private SpeechManager mSpeechManager;
    private Emulator      mEmulator;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        checkPermissions();

        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);

        // Inicializamos el emulador
        initEmulator();

        // Inicializamos los manager de DirectLine y de Speech
        initDLManager();
        initSpeechManager();

        // Inicializamos la vista del chat
        mChatView = new ChatView(this, mUseSpeech);
        setContentView(mChatView);

        register();
    }


    private void initEmulator() {
        // TODO intentar descoplar el Model
        From    from;

        from = new From();
        Random rnd = new Random();
        int n = rnd.nextInt(900000);

        //TODO poner estos datos en configuraciones
        from.setId("DL-USER" + n);
        from.setName("CogDLUser" + n);

        mEmulator = new Emulator(from);
    }

    /**
     * Inicializa el DL Manager
     */
    private void initDLManager() {
        //TODO poner estos datos en configuraciones
        final String botName = "DL-MS+A";
        final String directlinePrimaryKey =
            //"5Cx8OLT2X98.cwA.1j4.FGE7LsMoVuBtww9vQYNuC6lwoVBWYrb-5DHGzBbOeO0"; // J
            //"sccvRjdQVbw.cwA.8tQ.3tw3MFQtgG9bcqYf5xxHgW-lUYKymaoSFNCoIzI-SJY";  //MS+A
            //"IWixc2S5WaU.cwA.DEw.DV8nbC-BijSw5TbtNimDJuvrp45GpsKCRW4wPTtqYeY"; //MP-AURA DEV
            "QyKjl6KL-XQ.cwA.UTM.puyqrjpLvO1Briz7TjM7q_VqqAOflJ3jN0ryBGvkEiU";
        mDLManager =
            DLManager.getInstance(this, directlinePrimaryKey);
    }

    /**
     * Inicializa el Speech Manager
     */
    private void initSpeechManager() {
        mSpeechManager = SpeechManager.getInstance(this);
    }

    /**
     * Chequea algunos permisos
     */
    private void checkPermissions() {

        if (ContextCompat.checkSelfPermission(this,
            Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {

            // Debemos mostrar alguna explicación al usuario?
            if (ActivityCompat
                .shouldShowRequestPermissionRationale(this, Manifest.permission.RECORD_AUDIO)) {
                // Con explicación:
                // Show an expanation to the user *asynchronously* -- don't block
                // this thread waiting for the user's response! After the user
                // sees the explanation, try again to request the permission.
            } else {
                // Sin explicación: solicitamos el permiso de grabación de audio directamente.
                ActivityCompat.requestPermissions(this,
                        new String[]{Manifest.permission.RECORD_AUDIO},
                        REQUEST_AUDIO_CODE);
            }
        } else {
            mUseSpeech = true;
            if (mChatView != null) {
                mChatView.initSpeechView(mUseSpeech);
            }
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[],
                                           int[] grantResults) {
        switch (requestCode) {
            case REQUEST_AUDIO_CODE: {
                // Si se cancela la petición, el array de resultados estará vacio.
                if (grantResults.length > 0
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    mUseSpeech = true;
                    if (mChatView != null) {
                        mChatView.initSpeechView(mUseSpeech);
                    }
                } else {
                    // permiso denegado, ok! Desactivar la funcionalidad que dependa de ello.
                    mUseSpeech = false;
                }
                return;
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

    /**
     * Suscripción al evento de apertura de webview
     *
     * @param event
     */
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(final OpenWebViewEvent event) {
        final String url = event.getUrl();
        Intent intent = new Intent(this, WebViewActivity.class);
        intent.putExtra("url", url);
        startActivity(intent);
    }


}