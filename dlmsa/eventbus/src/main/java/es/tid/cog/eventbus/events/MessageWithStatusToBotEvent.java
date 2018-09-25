package es.tid.cog.eventbus.events;

import es.tid.cog.model.Model.SimulatedStatus;

public class MessageWithStatusToBotEvent {

    private String          message         = null;
    private SimulatedStatus simulatedStatus = null;

    public MessageWithStatusToBotEvent(final String message,
                                       final SimulatedStatus simulatedStatus) {
        this.message = message;
        this.simulatedStatus = simulatedStatus;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(final String message) {
        this.message = message;
    }

    public SimulatedStatus getSimulatedStatus() {
        return simulatedStatus;
    }

    public void setSimulatedStatus(final SimulatedStatus simulatedStatus) {
        this.simulatedStatus = simulatedStatus;
    }

    @Override
    public String toString() {
        return "MessageWithStatusToBotEvent{" + "message='" + message + '\'' + ", simulatedStatus="
            + simulatedStatus + '}';
    }
}
