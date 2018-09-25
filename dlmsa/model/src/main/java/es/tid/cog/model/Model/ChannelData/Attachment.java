package es.tid.cog.model.Model.ChannelData;

public class Attachment {
    private String type;
    private Payload payload;

    public String getType() {
        return type;
    }

    public void setType(final String type) {
        this.type = type;
    }

    public Payload getPayload() {
        return payload;
    }

    public void setPayload(final Payload payload) {
        this.payload = payload;
    }

    @Override
    public String toString() {
        return "Attachment{" + "type='" + type + '\'' + ", payload=" + payload + '}';
    }
}

