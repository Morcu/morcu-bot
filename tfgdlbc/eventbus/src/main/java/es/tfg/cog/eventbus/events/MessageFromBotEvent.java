package es.tfg.cog.eventbus.events;

import com.google.gson.JsonObject;

public class MessageFromBotEvent {

    private final JsonObject message;

    public MessageFromBotEvent(final JsonObject message) {
        this.message = message;
    }

    public JsonObject getMessage() {
        return message;
    }
}
