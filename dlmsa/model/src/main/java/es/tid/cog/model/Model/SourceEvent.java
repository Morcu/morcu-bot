package es.tid.cog.model.Model;

public class SourceEvent {
    From     sender;
    From     recipient;
    Long     timestamp;
    PostBack postback;

    public SourceEvent(final From sender, final From recipient, final Long timestamp,
                       final PostBack postback) {
        this.sender = sender;
        this.recipient = recipient;
        this.timestamp = timestamp;
        this.postback = postback;
    }

    public From getSender() {
        return sender;
    }

    public void setSender(final From sender) {
        this.sender = sender;
    }

    public From getRecipient() {
        return recipient;
    }

    public void setRecipient(final From recipient) {
        this.recipient = recipient;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(final Long timestamp) {
        this.timestamp = timestamp;
    }

    public PostBack getPostback() {
        return postback;
    }

    public void setPostback(final PostBack postback) {
        this.postback = postback;
    }

    @Override
    public String toString() {
        return "SourceEvent{" + "sender=" + sender + ", recipient=" + recipient + ", timestamp="
            + timestamp + ", postback=" + postback + '}';
    }
}
