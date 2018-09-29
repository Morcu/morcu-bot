package es.tfg.cog.eventbus.dispatchers;

import org.greenrobot.eventbus.EventBus;

import es.tfg.cog.eventbus.events.OpenWebViewEvent;

public class WebViewDispatcher {
    public static void processUrl(final String url) {
        EventBus.getDefault().post(new OpenWebViewEvent(url));
    }
}
