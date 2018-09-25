package es.tid.cog.model.Model;

public class EntityA {
    String type;
    boolean requiresBotState;
    boolean supportsTts;
    boolean supportsListening;

    public EntityA(final String type, final boolean requiresBotState, final boolean supportsTts,
                   final boolean supportsListening) {
        this.type = type;
        this.requiresBotState = requiresBotState;
        this.supportsTts = supportsTts;
        this.supportsListening = supportsListening;
    }

    public String getType() {
        return type;
    }

    public void setType(final String type) {
        this.type = type;
    }

    public boolean isRequiresBotState() {
        return requiresBotState;
    }

    public void setRequiresBotState(final boolean requiresBotState) {
        this.requiresBotState = requiresBotState;
    }

    public boolean isSupportsTts() {
        return supportsTts;
    }

    public void setSupportsTts(final boolean supportsTts) {
        this.supportsTts = supportsTts;
    }

    public boolean isSupportsListening() {
        return supportsListening;
    }

    public void setSupportsListening(final boolean supportsListening) {
        this.supportsListening = supportsListening;
    }

    @Override
    public String toString() {
        return "EntityA{" + "type='" + type + '\'' + ", requiresBotState=" + requiresBotState
            + ", supportsTts=" + supportsTts + ", supportsListening=" + supportsListening + '}';
    }
}

