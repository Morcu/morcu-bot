package es.tfg.cog.eventbus.events;

import java.util.ArrayList;

public class PartialASREvent {

    private final ArrayList<String> texts;

    public PartialASREvent(final ArrayList<String> texts) {
        this.texts = texts;
    }

    public ArrayList<String> getTexts() {
        return texts;
    }
}
