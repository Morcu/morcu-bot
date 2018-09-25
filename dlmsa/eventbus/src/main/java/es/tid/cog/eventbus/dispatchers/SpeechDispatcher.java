package es.tid.cog.eventbus.dispatchers;

import android.util.Log;

import org.greenrobot.eventbus.EventBus;

import java.util.ArrayList;

import es.tid.cog.eventbus.events.ASREvent;
import es.tid.cog.eventbus.events.PartialASREvent;
import es.tid.cog.eventbus.events.ToggleASREvent;

public class SpeechDispatcher {
    public static void processASREvent(final ArrayList<String> texts) {
        Log.v("SpeechDispatcher", "__TT__processASREvent__texts__" + texts.toString());
        EventBus.getDefault().post(new ASREvent(texts));
    }
    public static void processPartialASREvent(final ArrayList<String> texts) {
        Log.v("SpeechDispatcher", "__TT__processPartialASREvent__texts__" + texts.toString());
        EventBus.getDefault().post(new PartialASREvent(texts));
    }
    public static void toggleASREvent() {
        Log.v("SpeechDispatcher", "__TT__toggleASREvent__");
        EventBus.getDefault().post(new ToggleASREvent());
    }
}
