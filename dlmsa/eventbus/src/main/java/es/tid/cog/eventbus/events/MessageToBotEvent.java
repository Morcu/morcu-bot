package es.tid.cog.eventbus.events;

import java.util.HashMap;

public class MessageToBotEvent {

    private HashMap<String, Object> message;

    public MessageToBotEvent(final HashMap<String, Object> message) {
        this.message = message;
    }

    public HashMap<String, Object> getMessage() {
        return message;
    }
}
