package es.tfg.cog.model.Model.ChannelData;

import java.util.ArrayList;

public class Payload {
    private String    template_type;
    private ArrayList<Element> elements;

    public String getTemplate_type() {
        return template_type;
    }

    public void setTemplate_type(final String template_type) {
        this.template_type = template_type;
    }

    public ArrayList<Element> getElements() {
        return elements;
    }

    public void setElements(final ArrayList<Element> elements) {
        this.elements = elements;
    }

    @Override
    public String toString() {
        return "Payload{" + "template_type='" + template_type + '\'' + ", elements=" + elements
            + '}';
    }
}
