package es.tfg.cog.speech;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import android.speech.RecognitionListener;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.Set;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import me.xdrop.fuzzywuzzy.FuzzySearch;

// EVENTBUS: esta clase publica eventos a eventbus a través de nuestros dispachers
import es.tfg.cog.eventbus.dispatchers.SpeechDispatcher;
import es.tfg.cog.eventbus.events.ToggleASREvent;

public class SpeechManager {

    private static String TAG = SpeechManager.class.getSimpleName();

    private static SpeechManager sInstance;

    private final Context mContext;

    protected Intent           mSpeechRecognizerIntent;
    protected SpeechRecognizer mGoogleSpeechRecognizer;

    /**
     * Get instance method.
     *
     * @param context
     */
    public static SpeechManager getInstance(final Context context) {
        if (sInstance == null && context != null) {
            sInstance = new SpeechManager(context);
        }
        return sInstance;
    }

    private SpeechManager(final Context context) {
        this.mContext = context;

        // EVENTBUS: registramos esta clase como suscriptora de eventos eventbus
        register();

        initGoogleSpeechRecognizer();
    }

    private void initGoogleSpeechRecognizer() {
        mGoogleSpeechRecognizer = SpeechRecognizer.createSpeechRecognizer(mContext);
        mGoogleSpeechRecognizer.setRecognitionListener(new GoogleRecognitionListener());
        mSpeechRecognizerIntent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        mSpeechRecognizerIntent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,
            RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        mSpeechRecognizerIntent.putExtra(RecognizerIntent.EXTRA_CONFIDENCE_SCORES, true);
        mSpeechRecognizerIntent.putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true);
    }

    protected class GoogleRecognitionListener implements RecognitionListener {

        private final String TAG = GoogleRecognitionListener.class.getSimpleName();

        @Override
        public void onBeginningOfSpeech() {
        }

        @Override
        public void onEndOfSpeech() {
        }

        @Override
        public void onReadyForSpeech(Bundle params) {
        }

        @Override
        public void onRmsChanged(float rmsdB) {
        }

        @Override
        public void onBufferReceived(byte[] buffer) {
        }

        @Override
        public void onError(int error) {
            Log.e(TAG, "__TT__onError__:" + error);
            if (error == SpeechRecognizer.ERROR_NO_MATCH) {
                mGoogleSpeechRecognizer.startListening(mSpeechRecognizerIntent);
            } else {
                //restartSearch(KWS_SEARCH);
            }
            //mPocketSphinxRecognizer.startListening(KWS_SEARCH);
        }

        @Override
        public void onPartialResults(Bundle partialResults) {
            Log.d(TAG, "__TT__onPartialResults__");
            ArrayList<String> heard = getResults(partialResults, "PR");
            if (heard != null) {
                // EVENTBUS: Despachando mensaje de resultado parcial de asr
                SpeechDispatcher.processPartialASREvent(heard);
            }
        }

        @Override
        public void onResults(Bundle results) {
            Log.d(TAG, "__TT__onResults__");

            ArrayList<String> heard = getResults(results, "R");
            if (heard != null) {
                // EVENTBUS: Despachando mensaje de resultado final de asr
                SpeechDispatcher.processASREvent(heard);
            }
        }

        @Override
        public void onEvent(int eventType, Bundle params) {

        }

        private ArrayList<String> getResults(Bundle results, String t) {
            ArrayList<String> heard = null;

            Set<String> s = results.keySet();
            Iterator<String> it = s.iterator();
            while (it.hasNext()) {
                Log.d(TAG, "__TT__Google_getResults__it__" + t + "__" + it.next());
            }

            if ((results != null) && 
                results.containsKey(android.speech.SpeechRecognizer.RESULTS_RECOGNITION)) {
                Log.d(TAG, "__TT__Google_getResults__s.size__" + t + "__" + s.size());

                // nos quedamos con los resultados de reconocimiento
                heard =
                    results.getStringArrayList(android.speech.SpeechRecognizer.RESULTS_RECOGNITION);

                // mostramos los scores de la confianza de lo que google dice que ha oido
                // y analizamos sospechosos de "Aura"
                if (heard != null && heard.size() > 0) {
                    int hSize = heard.size();
                    Log.d(TAG, "__TT__Google_getResults__heard__" + t + "__" + heard);

                    float[] confidences =
                        results.getFloatArray(android.speech.SpeechRecognizer.CONFIDENCE_SCORES);

                    if (confidences != null && confidences.length == hSize) {
                        Log.d(TAG, "__TT__Google_getResults__scores_size__" + t +
                                "__"+ confidences.length);

                        for (int i = 0; i < hSize; i++) {
                            Log.d(TAG, "__TT__Google_getResults__heard(i)__" + t +
                                "__" + "heard(" + i + ")" + heard.get(i) +
                                "__" + "confidence:" + confidences[i]);
                        }
                    }

                    // analizamos un poquito a los sospechosos de "Aura",
                    // tanto en los resultados parciales
                    // como en el resultado final del reconocedor
                    if ("R".equals(t) || "PR".equals(t)) {
                        analizaSospechososYDaCambiazoSiProcede(heard, t);
                    }
                } else {
                    heard = null;
                }
            }

            return heard;
        }

        private void analizaSospechososYDaCambiazoSiProcede(ArrayList<String> heard, String t) {

            // una clase de conveniencia
            class Info {
                int                order;
                int                maxRatio;
                int                indexMaxRatio;
                ArrayList<Integer> allRatios;
                String[]           trozos;

                public Info(final int order, final int maxRatio, final int indexMaxRatio,
                            final ArrayList<Integer> allRatios, String[] trozos) {
                    this.order = order;
                    this.maxRatio = maxRatio;
                    this.indexMaxRatio = indexMaxRatio;
                    this.allRatios = allRatios;
                    this.trozos = trozos;
                }

                @Override
                public String toString() {
                    return "Info{" +
                        "order=" + order +
                        ", maxRatio=" + maxRatio +
                        ", indexMaxRatio=" + indexMaxRatio +
                        ", allRatios=" + allRatios +
                        ", trozos=" + trozos +
                        '}';
                }
            }

            ArrayList<Info> allInfo = new ArrayList<Info>();

            // por cada uno de los casos entregados en la lista heard por google
            for (int i = 0; i < heard.size(); i++) {
                String frase = heard.get(i);

                if (frase != null) {
                    //Log.d(TAG, "__TT__Google_aSYDCSP_frase__" + t + "__" + frase);
                    String[] trozos = frase.split(" ");
                    ArrayList<Integer> trozosRatios = new ArrayList<Integer>();
                    int maxRatio = 0;
                    int indexMaxRatio = -1;
                    for (int j = 0; j < trozos.length; j++) {
                        int offsetPotenciador = 0;
                        String tj = trozos[j];
                        String tjLC = tj.toLowerCase();

                        // aquí igual se podrían manejar estructuras con unas listas
                        // a potenciar y penalizar más chulis... precalculadas...
                        // pero para probar ahora vale así... :-)

                        // algunas palabras se potencian un poco
                        if(tjLC.equals("ahora")) {
                            offsetPotenciador = 1;
                        }
                        // algunas se potencian mucho
                        if(tjLC.equals("aure") || tjLC.equals("auren") || tjLC.equals("aureo")) {
                            offsetPotenciador = 40;
                        }

                        // otras palabras las penalizamos un poco
                        if(tjLC.equals("ayuda") || tjLC.equals("ajuda")) {
                            offsetPotenciador = -1;
                        }
                        // otras palabras las penalizamos mucho
                        if(tjLC.equals("para") || tjLC.equals("parar")) {
                            offsetPotenciador = -40;
                        }

                        // calculamos la distancia o ratio de la palabra "aura"
                        // a todas las palabras de la frase
                        // y retocamos ligeramente el ratio con el offsetPotenciador
                        int ratio = FuzzySearch.ratio("aura", tj) + offsetPotenciador;
                        trozosRatios.add(ratio);

                        if (ratio > maxRatio) {
                            maxRatio = ratio;
                            indexMaxRatio = j;
                        }
                    }
                    Log.d(TAG, "__TT__Google_aSYDCSP_Max_Index__" + t +
                        "__" + maxRatio +
                        "__" + indexMaxRatio +
                        "__" + trozosRatios +
                        "__" + frase);

                    allInfo.add(new Info(i, maxRatio, indexMaxRatio, trozosRatios, trozos));
                }
            }

            //Log.d(TAG, "__TT__Google_aSYDCSP_allInfo__" + t + "__" + allInfo);

            // ordenamos la collección de allInfo por rmaxRatio decreciente
            Collections.sort(allInfo, new Comparator<Info>() {
                public int compare(Info i1, Info i2) {
                    if (i1.maxRatio > i2.maxRatio) return -1;
                    if (i1.maxRatio < i2.maxRatio) return 1;
                    return 0;
                }
            });

            Info infoFirst = null;
            int CUANTOS_MINIMO = 2;  // cuantos casos como mínimo deben de tener ratio adecuado
            int UMBRAL_DECISION = 67; // empírico-mágico después de algunas pruebas

            // quitamos todas aquellas frases cuyo maxRatio esté por debajo del UMBRAL_DECISION
            // para todos los candidatos menos el primero que es la frase que google quiere entregar
            for (int i = allInfo.size() -1; i >= 0; i--) {
                if (allInfo.get(i).order == 0) {
                    infoFirst = allInfo.get(i);
                } else {
                    if (allInfo.get(i).maxRatio < UMBRAL_DECISION) {
                        allInfo.remove(i);
                    }
                }
            }

            int sizeOfBigEnougth = allInfo.size();
            boolean maxRatioIsBigInEnougthCases = sizeOfBigEnougth >= CUANTOS_MINIMO;
            boolean atLeastFirstIsBigEnougth = infoFirst.maxRatio > UMBRAL_DECISION;

            Log.d(TAG, "__TT__Google_aSYDCSP_FLAG__" + t +
                "__" + maxRatioIsBigInEnougthCases +
                "__" + sizeOfBigEnougth +
                "__" + atLeastFirstIsBigEnougth);

            // Si tenememos suficientes casos con un ratio superior al UMBRAL_DECISION
            // o si solo tenemos un caso con UMBRAL_DECISION suficiente, pero es el de infoFirst,
            // intentamos dar el cambiazo por "Aura"
            if (maxRatioIsBigInEnougthCases || (sizeOfBigEnougth == 1 && atLeastFirstIsBigEnougth)) {
                int indexMaxFirst = infoFirst.indexMaxRatio;
                int indexMaxBig = allInfo.get(0).indexMaxRatio;

                Log.d(TAG, "__TT__Google_aSYDCSP_indexMax__" + t +
                    "__" + indexMaxFirst +
                    "__" + indexMaxBig +
                    "__" + infoFirst);

                int UMBRAL_NUM_PALABRAS = 5;
                int DISTANCIA_MAXIMA_TOLERADA = 1;

                boolean indicesSonIguales = indexMaxFirst == indexMaxBig;
                boolean indicesDifierenRazonablementePoco =
                    (infoFirst.trozos.length >= UMBRAL_NUM_PALABRAS &&
                    Math.abs(indexMaxFirst - indexMaxBig) < DISTANCIA_MAXIMA_TOLERADA);

                // Si el índice de maxRatio del caso de máximo ratio
                // y el índice del caso infoFirst coinciden,
                // o yendo un poco más allá en frases de muchas palabras (con más de
                // UMBRAL_NUM_PALABRAS palabras)
                // habría que explorar la cercania de los índices en DISTANCIA_MAXIMA_TOLERADA
                //
                // entonces damos el cambiazo :-)
                if (indicesSonIguales || indicesDifierenRazonablementePoco) {

                    String fraseOri = "";
                    for (int j = 0; j < infoFirst.trozos.length; j++) {
                        fraseOri += " " + infoFirst.trozos[j];
                    }

                    // se produce el cambiazo
                    // de momento solo damos el cambiazo una sola vez en la frase,
                    // por ahora, con una vez ya se muestra la viabilidad del asunto
                    // y generalizando este experimento se podría cambiar más veces...
                    infoFirst.trozos[indexMaxFirst] = "Aura";

                    String frase = "";
                    for (int j = 0; j < infoFirst.trozos.length; j++) {
                        frase += " " + infoFirst.trozos[j];
                    }

                    heard.set(0, frase.trim() + (t.equals("XX") ? "\n" + fraseOri.trim() : ""));

                    Log.d(TAG, "__TT__Google_aSYDCSP_frase__" + t + "__" + frase);
                }
            }

            Log.d(TAG, "__TT__Google_aSYDCSP_allInfo__sort__" + t + "__" + allInfo);
        }
    }

    private void toggleReco() {
        // según sea el estado del reconocedor, este toggle
        // arrancará o parará o cambiará el estado adecuadamente...
        // por ahora solo arranca el reco... ya lo iremos completando...
        mGoogleSpeechRecognizer.startListening(mSpeechRecognizerIntent);
    }

    public void reset() {
        sInstance = null;
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
     * Suscripcion al evento de cambio de estado de reconocimiento
     *
     * @param toggleASREvent
     */
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(final ToggleASREvent toggleASREvent) {
        if (sInstance != null) {
            sInstance.toggleReco();
        }
    }

}
