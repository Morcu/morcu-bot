package es.tid.cog.eventbus.dispatchers;

import org.greenrobot.eventbus.EventBus;

import es.tid.cog.eventbus.events.OpenWebViewEvent;

public class WebViewDispatcher {
    public static void processUrl(final String url) {
        EventBus.getDefault().post(new OpenWebViewEvent(url));
    }
}
