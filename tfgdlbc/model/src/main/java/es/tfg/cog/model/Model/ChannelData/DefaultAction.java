package es.tfg.cog.model.Model.ChannelData;

public class DefaultAction {
    private String type;
    private String title;
    private String url;
    private String webview_height_ratio;
    private String webview_share_button;
    private String payload;

    public String getType() {
        return type;
    }

    public void setType(final String type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(final String url) {
        this.url = url;
    }

    public String getWebview_height_ratio() {
        return webview_height_ratio;
    }

    public void setWebview_height_ratio(final String webview_height_ratio) {
        this.webview_height_ratio = webview_height_ratio;
    }

    public String getWebview_share_button() {
        return webview_share_button;
    }

    public void setWebview_share_button(final String webview_share_button) {
        this.webview_share_button = webview_share_button;
    }

    public String getPayload() {
        return payload;
    }

    public void setPayload(final String payload) {
        this.payload = payload;
    }

    @Override
    public String toString() {
        return "DefaultAction{" + "type='" + type + '\'' + ", title='" + title + '\'' + ", url='"
            + url + '\'' + ", webview_height_ratio='" + webview_height_ratio + '\''
            + ", webview_share_button='" + webview_share_button + '\'' + ", payload='" + payload
            + '\'' + '}';
    }
}
