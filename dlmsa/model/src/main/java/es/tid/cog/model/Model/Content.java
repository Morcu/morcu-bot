package es.tid.cog.model.Model;

import java.util.ArrayList;

public class Content {
    private String            title;
    private String            subtitle;
    private ArrayList<Image>  images;
    private ArrayList<Button> buttons;
    private Button            tap;

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(final String subtitle) {
        this.subtitle = subtitle;
    }

    public ArrayList<Image> getImages() {
        return images;
    }

    public void setImages(final ArrayList<Image> images) {
        this.images = images;
    }

    public ArrayList<Button> getButtons() {
        return buttons;
    }

    public void setButtons(final ArrayList<Button> buttons) {
        this.buttons = buttons;
    }

    public Button getTap() {
        return tap;
    }

    public void setTap(final Button tap) {
        this.tap = tap;
    }

    @Override
    public String toString() {
        return "Content{" + "title='" + title + '\'' + ", subtitle='" + subtitle + '\''
            + ", images=" + images + ", buttons=" + buttons + ", tap=" + tap + '}';
    }

}

