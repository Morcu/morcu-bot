package es.tid.cog.model.Model;

import java.util.Date;

public class MessageToBotByButton {
    String      type;
    String      text;
    String      value;
    From        from;
    Payload     payload;
    SourceEvent sourceEvent;

    public MessageToBotByButton(String type, From from, String title, String payload) {
        this.type = type;
        this.text = payload;  //TODO recordar revisar esta asignacion de payloads
        this.value = payload;
        this.from = from;
        this.sourceEvent =
            new SourceEvent(from, from, new Date().getTime(), new PostBack(title, payload));
    }

    public String getType() {
        return type;
    }

    public void setType(final String type) {
        this.type = type;
    }

    public String getText() {
        return text;
    }

    public void setText(final String text) {
        this.text = text;
    }

    public String getValue() {
        return value;
    }

    public void setValue(final String value) {
        this.value = value;
    }

    public From getFrom() {
        return from;
    }

    public void setFrom(final From from) {
        this.from = from;
    }

    public Payload getPayload() {
        return payload;
    }

    public void setPayload(final Payload payload) {
        this.payload = payload;
    }

    public SourceEvent getSourceEvent() {
        return sourceEvent;
    }

    public void setSourceEvent(final SourceEvent sourceEvent) {
        this.sourceEvent = sourceEvent;
    }

    @Override
    public String toString() {
        return "MessageToBotByButton{" + "type='" + type + '\'' + ", text='" + text + '\''
            + ", value='" + value + '\'' + ", from=" + from + ", payload=" + payload
            + ", sourceEvent=" + sourceEvent + '}';
    }
}
