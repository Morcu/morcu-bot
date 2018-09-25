package es.tid.cog.eventbus.events;

public class ShowPopUpEvent {

    private final String mMessage;
    private Type mType = Type.INFO;

    public enum Type {
        INFO, HELP, ERROR;
    }

    public ShowPopUpEvent(final Type type, final String message) {
        mMessage = message;
        mType = type;
    }

    public ShowPopUpEvent(final String message) {
        mMessage = message;
    }

    public String getMessage() {
        return mMessage;
    }

    public Type getType() {
        return mType;
    }
}
