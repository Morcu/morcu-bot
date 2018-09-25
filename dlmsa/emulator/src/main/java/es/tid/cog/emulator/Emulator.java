package es.tid.cog.emulator;

import android.util.Log;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import es.tid.cog.eventbus.events.MessageFromBotEvent;
import es.tid.cog.eventbus.events.MessageWithStatusToBotEvent;
import es.tid.cog.model.Model.ChannelData.Button;
import es.tid.cog.model.Model.ChannelData.Element;
import es.tid.cog.model.Model.From;
import es.tid.cog.model.Model.SimulatedStatus;

// EVENTBUS: esta clase publica eventos a eventbus a traves de nuestros dispachers
import es.tid.cog.eventbus.dispatchers.BotMessageDispatcher;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

public class Emulator {
    private static String TAG = Emulator.class.getSimpleName();

    private JsonObject      mLastMessage;
    private SimulatedStatus mSimulatedStatus;

    private From    mFrom;

    public Emulator(final From from) {
        mFrom = from;
        register();
    }

    private void generateMessageToBot(String message, final SimulatedStatus simulatedStatus) {

        mSimulatedStatus = simulatedStatus;

        Log.d(TAG, "__TT__generateActivity__0__message__" + message);

        if (message == null || message.length() == 0) {
            return;
        }

        HashMap<String, Object> activity = null;
        if (message.equals("@help")) {

            ArrayList<Object> entities = new ArrayList<Object>();
            HashMap<String, Object> entity = new HashMap<String, Object>();
            entities.add(entity);

            HashMap<String, Object> value = new HashMap<String, Object>();
            value.put("intent", "common.help");
            value.put("entities", entities);

            HashMap<String, Object> auraCommand = new HashMap<String, Object>();
            auraCommand.put("type", "help");
            auraCommand.put("value", value);

            activity = this.getMockedActivity(message, auraCommand);
            Log.d(TAG, "__TT__generateActivity__1_@help_activity" + activity);
        } else if (message.equals("@init")) {

            ArrayList<Object> entities = new ArrayList<Object>();
            HashMap<String, Object> entity = new HashMap<String, Object>();
            entity.put("type", "tv.init.type");
            entity.put("value", "start");
            entity.put("score", "1");
            entities.add(entity);

            HashMap<String, Object> value = new HashMap<String, Object>();
            value.put("intent", "tv.init");
            value.put("entities", entities);

            HashMap<String, Object> auraCommand = new HashMap<String, Object>();
            auraCommand.put("type", "init");
            auraCommand.put("value", value);

            activity = this.getMockedActivity(message, auraCommand);
            Log.d(TAG, "__TT__generateActivity__1_@init_activity" + activity);
        } else if (message.equals("@postinit")) {

            ArrayList<Object> entities = new ArrayList<Object>();
            HashMap<String, Object> entity = new HashMap<String, Object>();
            entity.put("type", "tv.init.type");
            entity.put("value", "post_start");
            entity.put("score", "1");
            entities.add(entity);

            HashMap<String, Object> value = new HashMap<String, Object>();
            value.put("intent", "tv.init");
            value.put("entities", entities);

            HashMap<String, Object> auraCommand = new HashMap<String, Object>();
            auraCommand.put("type", "init");
            auraCommand.put("value", value);

            activity = this.getMockedActivity(message, auraCommand);
            Log.d(TAG, "__TT__generateActivity__1_@postinit_activity" + activity);
        } else if (message.contains("@")) {
            activity = generateActivityFromButton(message);
            Log.d(TAG, "__TT__generateActivity__1_@n_activity" + activity);
        } else {
            activity = this.getMockedActivity(message, null);
            Log.d(TAG, "__TT__generateActivity__2__activity" + activity);
        }

        BotMessageDispatcher.processMessageToBot(activity);
    }

    private HashMap<String, Object> generateActivityFromButton(String comando) {

        // se revisan los datos del ultimo mensaje
        // se pilla la sugerencia @index
        // se compone el mensaje como que se ha pulsado un boton de sugerencia
        Log.d(TAG, "__TT__generateActivityFromButton__0__comando__" + comando + "|" + comando
            .replace("@", "") + "|");

        JsonObject lastChannelData = this.mLastMessage.getAsJsonObject("channelData");
        JsonObject content = lastChannelData.getAsJsonObject("content");
        JsonArray actions = content.getAsJsonArray("actions");

        int index = Integer.parseInt(comando.replace("@", "")) - 1;
        JsonObject button = actions.get(index).getAsJsonObject();

        String message = button.get("text").getAsString();  // OJO al formato de este text
        String auraCommandType = button.get("type").getAsString();
        JsonObject auraCommandValue = button.get("value").getAsJsonObject();

        HashMap<String, Object> auraCommand = new HashMap<String, Object>();
        auraCommand.put("type", auraCommandType);
        auraCommand.put("value", auraCommandValue);

        HashMap<String, Object> activity = this.getMockedActivity(message, auraCommand);

        Log.d(TAG, "__TT__generateActivityFromButton__1__activity__" + activity);

        return activity;
    }

    private HashMap<String, Object> getMockedActivity(String message,
                                                      HashMap<String, Object> auraCommand) {

        String messageFormat = "pon [" + message + ":audiovisual_channel]";

        // Una estructura Mockeada de una Activity con channelData
        String auraEventType = "message";

        HashMap<String, String> device = new HashMap<String, String>();
        device.put("type", "android.cell");
        device.put("deviceId", "i9909");
        device.put("interfaceLanguaje", "es-ES");

        HashMap<String, String> channel = new HashMap<String, String>();
        channel.put("modality", "text");

        HashMap<String, Object> screenId = new HashMap<String, Object>();
        screenId.put("id", "id");
        screenId.put("nme", "FICHA");
        screenId.put("pg", "FICHA");
        screenId.put("ucid", "12541524");
        screenId.put("vod", true);
        screenId.put("promo", "xxx");
        screenId.put("taste", "x");

        HashMap<String, Object> application = new HashMap<String, Object>();
        application.put("playMode", "local");
        application.put("screenId", screenId);

        /*
        HashMap<String, Object> userSTBListElem = new HashMap<String, Object>();
        userSTBListElem.put("friendlyName", "friendlyName");
        userSTBListElem.put("deviceId", "Mi-29283");
        userSTBListElem.put("remote_play_allowed", true);
        userSTBListElem.put("remote_play_on", true);
        */
        int nstbs = this.mSimulatedStatus.getNstbs();
        nstbs = nstbs < 0 || nstbs > 3 ? 1 : nstbs;
        ArrayList<Object> userSTBList = new ArrayList<Object>();
        for (int i = 0; i < nstbs; i++) {
            HashMap<String, Object> userSTBListElem = new HashMap<String, Object>();
            userSTBListElem.put("friendlyName", "friendlyName_" + i);
            userSTBListElem.put("deviceId", "Mi-29283");
            userSTBListElem.put("remote_play_allowed", this.mSimulatedStatus.isRpa());
            userSTBListElem.put("remote_play_on", this.mSimulatedStatus.isRpo());

            userSTBList.add(userSTBListElem);
        }

        HashMap<String, Object> userContext = new HashMap<String, Object>();
        userContext.put("userAccountNumber", "334-I923223");
        userContext.put("userProductList", this.mSimulatedStatus.getSus());
        userContext.put("userPurchaseList", "PT-222");
        userContext.put("userProfile", "OTT");
        userContext.put("userSTBList", userSTBList);

        HashMap<String, Object> location = new HashMap<String, Object>();
        location.put("logical", this.mSimulatedStatus.isHome() ? "home" : "outsidehome");

        HashMap<String, Object> appContext = new HashMap<String, Object>();
        appContext.put("device", device);
        appContext.put("channel", channel);
        appContext.put("application", application);
        appContext.put("location", location);
        appContext.put("userContext", userContext);

        HashMap<String, Object> fullAura = new HashMap<String, Object>();
        fullAura.put("voice", true);
        fullAura.put("cards", "none");

        HashMap<String, Object> auraMode = new HashMap<String, Object>();
        auraMode.put("fullAura", fullAura);

        HashMap<String, Object> channelData = new HashMap<String, Object>();
        channelData.put("appContext", appContext);
        channelData.put("auraMode", auraMode);
        channelData.put("customAuraContent", true);
        if (auraCommand != null) {
            channelData.put("auraCommand", auraCommand);
        }

        HashMap<String, Object> from = new HashMap<String, Object>();
        from.put("id", mFrom.getId());
        from.put("name", mFrom.getName());

        HashMap<String, Object> clientCapabilities = new HashMap<String, Object>();
        clientCapabilities.put("type", "ClientCapabilities");
        clientCapabilities.put("requiresBotState", true);
        clientCapabilities.put("supportsTts", true);
        clientCapabilities.put("supportsListening", true);

        ArrayList<Object> entities = new ArrayList<Object>();
        entities.add(clientCapabilities);

        HashMap<String, Object> activity = new HashMap<String, Object>();
        activity.put("type", auraEventType);
        activity.put("text", message);
        //activity.put("text", messageFormat);
        //activity.put("text", "pon [telecinco:audiovisual_channel]");
        //activity.put("text", "pon [" + message + ":audiovisual_channel]");
        activity.put("locale", "es");
        activity.put("textFormat", "plain");
        activity.put("from", from);
        activity.put("timestamp", new Date().toString());
        activity.put("entities", entities);
        activity.put("channelData", channelData);

        return activity;
    }


    public void processMessageFromBot(JsonObject message) {
        Log.d(TAG, "__TT__processMessageFromBot__" + message);
        if (message != null) {
            final JsonElement jsonWatermark = message.get("watermark");
            final String watermark = jsonWatermark != null ? jsonWatermark.getAsString() : null;

            JsonArray activities = message.getAsJsonArray("activities");
            JsonObject activity = activities.get(0).getAsJsonObject();
            JsonObject from = activity.getAsJsonObject("from");
            //TODO: Esta puesto el if negado ya que el id puede variar, se puede poner par que solo pueda procesar la informacion de un solo usuario
            if (!mFrom.getId().equals(from.get("id").getAsString())) {
                Log.d(TAG, "__TT__messageRecieved__MSG DEL BOT__");

                // Distribuir el renderizado de prueba del mensaje con eventbus
                JsonObject channelData = activity.getAsJsonObject("channelData");
                Log.d(TAG, channelData.toString());
                if (channelData != null) {
                    mLastMessage = activity;

                    JsonArray attachment = channelData.getAsJsonArray("attachment");

                    if(attachment != null){
                        Log.d(TAG, attachment.toString());
                        Log.d(TAG, "Attachment true");
                        BotMessageDispatcher.processBotMessageCarrousell(this.renderAttachment(attachment));
                    }else {
                        BotMessageDispatcher.processBotMessage(this.renderChannelData(channelData));
                    }
                } else {
                    String sinChannelData = "channelData == null :-(";
                    BotMessageDispatcher.processBotMessage(sinChannelData);
                }
            } else {
                // Mensaje auto generado por el móvil... lo ignoramos
                Log.d(TAG, "__TT__messageRecieved__MSG AUTO__");
            }
        }
    }

    public String renderChannelData(JsonObject channelData) {
        String compo = "";

        JsonObject error = channelData.getAsJsonObject("error");
        JsonObject intent = channelData.getAsJsonObject("intent");
        JsonObject content = channelData.getAsJsonObject("content");
        JsonObject customData = channelData.getAsJsonObject("customData");
        JsonArray actions = content.getAsJsonArray("actions");

        String text = content.get("text").getAsString();

        if (error != null) {
            compo += cl("____ERROR____");
            compo += cl(error.get("code").getAsString());
            compo += cl(error.get("message").getAsString());
            compo += cl("");
        }

        if (customData != null) {
            //compo += cl("____CUSTOM DATA____");
            //compo += cl(customData.get("type").getAsString());
            //compo += cl(customData.getAsJsonObject("data").get("description").getAsString());
            compo += cl("");
        }

        if (intent != null) {
            //compo += cl("____INTENT AND TEXT____");
            //compo += cl(intent.get("id").getAsString());
            //compo += cl(intent.get("name").getAsString());
            compo += cl("");
            compo += cl(text);
            compo += cl("");
        }
        actions = null;
        if (actions != null) {
            boolean fullScreen = channelData.get("fullScreen").getAsBoolean() || false;

            compo += cl("____SUGGESTIONS____");
            compo += cl("FullScreen = " + fullScreen);
            compo += cl("");

            int numActions = actions.size();
            for (int i = 0; i < numActions; i++) {
                JsonObject action = actions.get(i).getAsJsonObject();

                compo += cl("____ " + action.get("text").getAsString());

                //compo += cl(action.get("name").getAsString() + "-" +
                //        action.get("type").getAsString() + '-' +
                //        action.get("style").getAsString());

                compo += cl(action.get("value").getAsJsonObject().get("intent").getAsString());
                //compo += cl(action.get("value").getAsString());
            }
        }

        return compo;
    }

    public ArrayList<Element> renderAttachment(JsonArray attachment){
        ArrayList<Element> elements = new ArrayList<Element>();
        for (int i = 0; i < attachment.size(); i++) {
            Element elm = new Element();
            JsonObject att = attachment.get(i).getAsJsonObject();
            elm.setTitle(att.get("title").getAsString());
            elm.setImage_url(att.get("image_url").getAsString());
            //elm.setSubtitle(att.get("subtitle").getAsString());
            Button btn = new Button();
            btn.setTitle(att.get("title").getAsString());
            btn.setUrl(att.get("image_url").getAsString());
            btn.setDate(att.get("date").getAsString());
            btn.setSummary(att.get("sum").getAsString());
            btn.setOriginal_title(att.get("original_title").getAsString());



            //btn.setUrl("https://stackoverflow.com/questions/10403020/how-to-hide-elements-in-graphical-layout");
            btn.setPayload("BUTTON_SIMILAR_CONTENT");
            ArrayList<Button> buttons = new ArrayList<Button>();
            buttons.add(btn);
            elm.setButtons(buttons);
            elements.add(elm);
        }
        return elements;
    }
    private String cl(String content) {
        return content + "\n";
    }


    // -------------------------------------------
    // -------------EVENTBUS----------------------
    // -------------------------------------------

    /**
     * Registro en eventbus
     */
    public void register() {
        unregister();
        Log.d(TAG, "[register in eventbus]");
        EventBus.getDefault().register(this);
    }

    /**
     * Desregistro de eventbus
     */
    public void unregister() {
        if (EventBus.getDefault().isRegistered(this)) {
            Log.w(TAG, "[unregister from eventbus]");
            EventBus.getDefault().unregister(this);
        }
    }

    // -----------------------------------------------------------------
    // ---------------SUSCRIPCIONES A EVENTOS DEL EVENTBUS--------------
    // -----------------------------------------------------------------

    // TODO: completar suscripciones...

    /**
     * Suscripción al evento de envio de mensaje al bot
     *
     * @param message
     */
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(final MessageWithStatusToBotEvent message) {
        Log.d(TAG, "__TT__onEvent__MessageWithStatusToBotEvent__]");
        generateMessageToBot(message.getMessage(), message.getSimulatedStatus());
    }

    /**
     * Suscripción al evento de recepción de mensaje del bot
     *
     * @param message
     */
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(final MessageFromBotEvent message) {
        Log.d(TAG, "__TT__onEvent__MessageFromBotEvent__]");
        processMessageFromBot(message.getMessage());
    }
}
