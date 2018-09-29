package es.tfg.cog.model.Model;

import java.util.ArrayList;

public class SendMessageCHDT {
    String  type;
    String  text;
    String  locale;
    String  textFormat;
    From    from;
    String  timestamp;
    private ArrayList<EntityA> entities;


    Payload payload;

    public SendMessageCHDT(String type, From from, String text) {
        this.type = type;
        this.text = text;
        this.from = from;
    }

    public SendMessageCHDT(String type, From from, String text, Payload paload) {
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
