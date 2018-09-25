package es.tid.cog.eventbus.dispatchers;

import org.greenrobot.eventbus.EventBus;

import es.tid.cog.eventbus.events.ShowPopUpEvent;

public class ShowPopUpDispatcher {
    public static void showInfo(final String msg) {
        EventBus.getDefault().post(new ShowPopUpEvent(ShowPopUpEvent.Type.INFO, msg));
    }
    public static void showHelp(final String msg) {
        EventBus.getDefault().post(new ShowPopUpEvent(ShowPopUpEvent.Type.HELP, msg));
    }
    public static void showError(final String msg) {
        EventBus.getDefault().post(new ShowPopUpEvent(ShowPopUpEvent.Type.ERROR, msg));
    }
}
