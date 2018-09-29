package es.tfg.cog.model.Model;

public class PostBack {
    private String title;
    private String payload;

    public PostBack(final String title, final String payload) {
        this.title = title;
        this.payload = payload;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getPayload() {
        return payload;
    }

    public void setPayload(final String payload) {
        this.payload = payload;
    }

    @Override
    public String toString() {
        return "PostBack{" + "title='" + title + '\'' + ", payload='" + payload + '\'' + '}';
    }
}
