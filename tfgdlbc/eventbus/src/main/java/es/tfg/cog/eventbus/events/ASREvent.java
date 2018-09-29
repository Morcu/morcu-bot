package es.tfg.cog.eventbus.events;

import java.util.ArrayList;

public class ASREvent {

    private final ArrayList<String> texts;

    public ASREvent(final ArrayList<String> texts) {
        this.texts = texts;
    }

    public ArrayList<String> getTexts() {
        return texts;
    }
}
