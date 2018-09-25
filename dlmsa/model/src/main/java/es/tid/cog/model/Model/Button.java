package es.tid.cog.model.Model;

public class Button {
    private String type;
    private String title;
    private String value;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getValue() {
        return value;
    }

    public void setValue(final String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Button{" + "type='" + type + '\'' + ", title='" + title + '\'' + ", value='" + value
            + '\'' + '}';
    }
}

