package es.tfg.cog.model.Model;

public class SendMessage {
    String  type;
    String  text;
    From    from;
    Payload payload;

    public SendMessage(String type, From from, String text) {
        this.type = type;
        this.text = text;
        this.from = from;
    }

    public SendMessage(String type, From from, String text, Payload paload) {
        this.type = type;
        this.text = text;
        this.from = from;
        this.payload = paload;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public From getFrom() {
        return from;
    }

    public void setFrom(From from) {
        this.from = from;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Payload getPayload() {
        return payload;
    }

    public void setPayload(final Payload payload) {
        this.payload = payload;
    }
}
