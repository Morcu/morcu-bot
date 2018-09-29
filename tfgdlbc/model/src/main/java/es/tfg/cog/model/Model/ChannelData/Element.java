package es.tfg.cog.model.Model.ChannelData;

import java.util.ArrayList;

public class Element {
    private String            title;
    private String            image_url;
    private String            subtitle;
    private DefaultAction     default_action;
    private ArrayList<Button> buttons;

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(final String image_url) {
        this.image_url = image_url;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(final String subtitle) {
        this.subtitle = subtitle;
    }

    public DefaultAction getDefault_action() {
        return default_action;
    }

    public void setDefault_action(final DefaultAction default_action) {
        this.default_action = default_action;
    }

    public ArrayList<Button> getButtons() {
        return buttons;
    }

    public void setButtons(final ArrayList<Button> buttons) {
        this.buttons = buttons;
    }

    @Override
    public String toString() {
        return "Element{" + "title='" + title + '\'' + ", image_url='" + image_url + '\''
            + ", subtitle='" + subtitle + '\'' + ", default_action=" + default_action + ", buttons="
            + buttons + '}';
    }
}

