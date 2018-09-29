package es.tfg.cog.eventbus.events;

import java.util.ArrayList;

import es.tfg.cog.model.Model.Attachment;
import es.tfg.cog.model.Model.ChannelData.Element;

public class MessageAnalizedFromBotEvent {

    private String  text       = null;
    private boolean typing     = false;
    private boolean carrousell = false;
    private boolean choice = false;
    private ArrayList<Element>    elements;
    private ArrayList<Attachment> attachments;

    public MessageAnalizedFromBotEvent(final String text) {
        this.text = text;
    }

    public MessageAnalizedFromBotEvent(final boolean typing) {
        this.typing = typing;
    }

    public MessageAnalizedFromBotEvent(final ArrayList<Element> elements) {
        this.carrousell = true;
        this.elements = elements;
    }

    public MessageAnalizedFromBotEvent(final String text, final ArrayList<Attachment> attachments) {
        this.choice = true;
        this.text = text;
        this.attachments = attachments;
    }

    public String getText() {
        return text;
    }

    public void setText(final String text) {
        this.text = text;
    }

    public boolean isTyping() {
        return typing;
    }

    public void setTyping(final boolean typing) {
        this.typing = typing;
    }

    public boolean isCarrousell() {
        return carrousell;
    }

    public void setCarrousell(final boolean carrousell) {
        this.carrousell = carrousell;
    }

    public boolean isChoice() { return choice; }

    public void setChoice(final boolean choice) { this.choice = choice; }


    public ArrayList<Element> getElements() {
        return elements;
    }

    public void setElements(final ArrayList<Element> elements) {
        this.elements = elements;
    }

    public ArrayList<Attachment> getAttachments() {
        return attachments;
    }

    public void setAttachments(final ArrayList<Attachment> attachments) {
        this.attachments = attachments;
    }
}
