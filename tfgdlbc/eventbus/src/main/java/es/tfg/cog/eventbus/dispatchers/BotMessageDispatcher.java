package es.tfg.cog.eventbus.dispatchers;

import org.greenrobot.eventbus.EventBus;

import java.util.ArrayList;
import java.util.HashMap;

import com.google.gson.JsonObject;

import es.tfg.cog.eventbus.events.MessageAnalizedFromBotEvent;
import es.tfg.cog.eventbus.events.MessageToBotEvent;
import es.tfg.cog.eventbus.events.MessageFromBotEvent;
import es.tfg.cog.eventbus.events.MessageWithStatusToBotEvent;

import es.tfg.cog.model.Model.Attachment;
import es.tfg.cog.model.Model.ChannelData.Element;
import es.tfg.cog.model.Model.MessageToBotByButton;
import es.tfg.cog.model.Model.SendMessage;
import es.tfg.cog.model.Model.SimulatedStatus;

public class BotMessageDispatcher {

    // TODO preparar una forma unificada de mensajes recibidos del bot

    public static void processMessageFromBot(final JsonObject message) {
        EventBus.getDefault().post(new MessageFromBotEvent(message));
    }
    public static void processBotMessage(final String text) {
        EventBus.getDefault().post(new MessageAnalizedFromBotEvent(text));
    }
    public static void processBotMessageTyping() {
        EventBus.getDefault().post(new MessageAnalizedFromBotEvent(true));
    }
    public static void processBotMessageCarrousell(final ArrayList<Element> elements) {
        EventBus.getDefault().post(new MessageAnalizedFromBotEvent(elements));
    }

    public static void processBotMessageChoices(final String text, final ArrayList<Attachment>
        attachments) {
        EventBus.getDefault().post(new MessageAnalizedFromBotEvent(text, attachments));
    }



    // TODO preparar una forma unificada de mensajes para enviar al bot

    public static void processMessageToBot(final SendMessage message) {
        EventBus.getDefault().post(message);
    }


    public static void processMessageToBot(final String message) {
        //EventBus.getDefault().post(new MessageToBotEvent(message, null));
    }



    public static void processMessageToBot(final MessageToBotByButton message) {
        //EventBus.getDefault().post(new MessageToBotEvent(null, message));
    }


    public static void processMessageToBot(final HashMap<String, Object> message) {
        EventBus.getDefault().post(new MessageToBotEvent(message));
    }

    public static void processMessageToBot(final String message, SimulatedStatus simulatedStatus) {
        EventBus.getDefault().post(new MessageWithStatusToBotEvent(message, simulatedStatus));
    }
}
