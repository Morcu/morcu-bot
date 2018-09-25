package es.tid.cog.model.Model;

import java.util.ArrayList;

import es.tid.cog.model.Model.ChannelData.ChannelData;

public class Activities {
    private String                type;
    private String                text;
    private String                locale;
    private String                textFormat;
    private String                id;
    private String                channelId;
    private Conversation          conversation;
    private From                  from;
    private ArrayList<Attachment> attachments;
    private ArrayList<Entity>     entities;
    private ChannelData           channelData;
    private String                replyToId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getChannelId() {
        return channelId;
    }

    public void setChannelId(String channelId) {
        this.channelId = channelId;
    }

    public Conversation getConversation() {
        return conversation;
    }

    public void setConversation(Conversation conversation) {
        this.conversation = conversation;
    }

    public From getFrom() {
        return from;
    }

    public void setFrom(From from) {
        this.from = from;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public ArrayList<Attachment> getAttachments() {
        return attachments;
    }

    public void setAttachments(final ArrayList<Attachment> attachments) {
        this.attachments = attachments;
    }

    public ArrayList<Entity> getEntities() {
        return entities;
    }

    public void setEntities(final ArrayList<Entity> entities) {
        this.entities = entities;
    }

    public String getReplyToId() {
        return replyToId;
    }

    public void setReplyToId(final String replyToId) {
        this.replyToId = replyToId;
    }

    public ChannelData getChannelData() {
        return channelData;
    }

    public void setChannelData(final ChannelData channelData) {
        this.channelData = channelData;
    }

    @Override
    public String toString() {
        return "Activities{" + "id='" + id + '\'' + ", text='" + text + '\'' + ", channelId='"
            + channelId + '\'' + ", conversation=" + conversation + ", from=" + from + ", type='"
            + type + '\'' + ", attachments=" + attachments + ", entities=" + entities
            + ", channelData=" + channelData + ", replyToId='" + replyToId + '\'' + '}';
    }
}

