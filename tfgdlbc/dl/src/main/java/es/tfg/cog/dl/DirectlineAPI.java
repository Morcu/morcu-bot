package es.tfg.cog.dl;

import java.util.HashMap;

import es.tfg.cog.model.Model.ConversationInit;
import es.tfg.cog.model.Model.From;
import es.tfg.cog.model.Model.MessageToBotByButton;
import es.tfg.cog.model.Model.SendMessage;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface DirectlineAPI {
    final static String BASE_URL = "https://directline.botframework.com/v3/directline/";

    //  ("Authorization", basicAuth)
    @POST("conversations")
    Call<ConversationInit> getConversationId();

    @POST("conversations/{id}/activities")
    Call<From> sendChatMessage(@Path("id") String conversationId,
                               @Body SendMessage sendMessage);

    @POST("conversations/{id}/activities")
    Call<From> sendChatMessage(@Path("id") String conversationId,
                               @Body MessageToBotByButton sendMessage);


    @POST("conversations/{id}/activities")
    Call<From>  sendChatMessage(@Path("id") String conversationId,
                                @Body HashMap<String, Object> body);

}
