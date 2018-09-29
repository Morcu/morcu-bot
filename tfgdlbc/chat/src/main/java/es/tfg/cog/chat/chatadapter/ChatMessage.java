package es.tfg.cog.chat.chatadapter;

import java.util.ArrayList;

import es.tfg.cog.model.Model.Attachment;
import es.tfg.cog.model.Model.ChannelData.Element;

public class ChatMessage {
    private long    id;
    private boolean isMe;
    private String  message;
    private Long    userId;
    private String  dateTime;

    //TODO: capsula de carrousell
    private ArrayList<Element> elements;

    //TODO: capsula de choice
    private ArrayList<Attachment> attachments;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean getIsme() {
        return isMe;
    }

    public void setMe(boolean isMe) {
        this.isMe = isMe;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getDate() {
        return dateTime;
    }

    public void setDate(String dateTime) {
        this.dateTime = dateTime;
    }

    public ArrayList<Element> getElements() {
        return elements;
    }

    public void setElements(final ArrayList<Element> elements) {
        this.elements = elements;
    }

    public ArrayList<Attachment> getAttachments() { return attachments; }

    public void setAttachments(final ArrayList<Attachment> attachments) {
        this.attachments = attachments;
    }
}
