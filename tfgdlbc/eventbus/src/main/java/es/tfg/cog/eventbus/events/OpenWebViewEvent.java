package es.tfg.cog.eventbus.events;

public class OpenWebViewEvent {

    private String url;

    public OpenWebViewEvent(final String url) {
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(final String url) {
        this.url = url;
    }
}
