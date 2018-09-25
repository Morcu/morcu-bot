package es.tid.cog.chat.chatadapter;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.azoft.carousellayoutmanager.CarouselLayoutManager;
import com.azoft.carousellayoutmanager.CenterScrollListener;
import com.azoft.carousellayoutmanager.ItemTransformation;
import com.google.gson.JsonObject;
import com.squareup.picasso.Picasso;

import org.json.JSONException;
import org.json.JSONObject;

import es.tid.cog.chat.R;
import es.tid.cog.model.Model.ChannelData.Element;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import es.tid.cog.eventbus.dispatchers.WebViewDispatcher;
import es.tid.cog.eventbus.dispatchers.BotMessageDispatcher;
import es.tid.cog.model.Model.MessageToBotByButton;

public class ChatAdapter extends BaseAdapter {
    private static String TAG = ChatAdapter.class.getSimpleName();
    public static int INVALID_POSITION = -1;

    private final List<ChatMessage> mChatMessages;
    private Context mContext;

    public ChatAdapter(Context context, List<ChatMessage> chatMessages) {
        this.mContext = context;
        this.mChatMessages = chatMessages;
    }

    @Override
    public int getCount() {
        if (mChatMessages != null) {
            return mChatMessages.size();
        } else {
            return 0;
        }
    }

    @Override
    public ChatMessage getItem(int position) {
        if (mChatMessages != null) {
            return mChatMessages.get(position);
        } else {
            return null;
        }
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(final int position, View convertView, ViewGroup parent) {
        ViewHolder holder;
        ChatMessage chatMessage = getItem(position);
        LayoutInflater vi =
                (LayoutInflater) mContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);

        //if (convertView == null) {
        convertView = vi.inflate(R.layout.list_item_chat_message, null);
        holder = createViewHolder(convertView);
        convertView.setTag(holder);
        //} else {
        //    holder = (ViewHolder) convertView.getTag();
        //}

        boolean myMsg = chatMessage.getIsme();
        // para marcar si es un mensaje propio o del bot
        setAlignment(holder, myMsg);

        holder.txtInfo.setText(chatMessage.getDate());

        if (!myMsg) {
            if (chatMessage.getMessage() != null) {
                holder.txtMessage.setVisibility(View.VISIBLE);
                holder.carrousell.setVisibility(View.GONE);
                holder.txtMessage.setText(chatMessage.getMessage());
            } else if (chatMessage.getElements() != null) {
                holder.txtMessage.setVisibility(View.GONE);
                holder.carrousell.setVisibility(View.VISIBLE);
                final CarrousellAdapter carrousellAdapter =
                        new CarrousellAdapter(mContext, chatMessage.getElements());
                final CarouselLayoutManager carouselLayoutManager =
                        new CarouselLayoutManager(CarouselLayoutManager.HORIZONTAL, false);
                initRecyclerView(holder.carrousell, carouselLayoutManager, carrousellAdapter);
            }
        } else {
            holder.txtMessage.setVisibility(View.VISIBLE);
            holder.carrousell.setVisibility(View.GONE);
            holder.txtMessage.setText(chatMessage.getMessage());
        }

        return convertView;
    }

    public void add(ChatMessage message) {
        mChatMessages.add(message);
    }

    public void add(List<ChatMessage> messages) {
        mChatMessages.addAll(messages);
    }

    private void setAlignment(ViewHolder holder, boolean isMe) {
        int gravity = Gravity.RIGHT;
        int align1 = RelativeLayout.ALIGN_PARENT_LEFT;
        int align2 = RelativeLayout.ALIGN_PARENT_RIGHT;
        int msgBg = R.drawable.in_message_bg;

        if (!isMe) {
            gravity = Gravity.RIGHT;
            align1 = RelativeLayout.ALIGN_PARENT_LEFT;
            align2 = RelativeLayout.ALIGN_PARENT_RIGHT;
            msgBg = R.drawable.in_message_bg;

        } else {
            gravity = Gravity.LEFT;
            align1 = RelativeLayout.ALIGN_PARENT_RIGHT;
            align2 = RelativeLayout.ALIGN_PARENT_LEFT;
            msgBg = R.drawable.out_message_bg;
        }

        holder.contentWithBG.setBackgroundResource(msgBg);

        LinearLayout.LayoutParams layoutParams =
                (LinearLayout.LayoutParams) holder.contentWithBG.getLayoutParams();
        layoutParams.gravity = gravity;
        holder.contentWithBG.setLayoutParams(layoutParams);

        RelativeLayout.LayoutParams lp =
                (RelativeLayout.LayoutParams) holder.content.getLayoutParams();
        lp.addRule(align1, 0);
        lp.addRule(align2);
        holder.content.setLayoutParams(lp);
        layoutParams = (LinearLayout.LayoutParams) holder.txtMessage.getLayoutParams();
        layoutParams.gravity = gravity;
        holder.txtMessage.setLayoutParams(layoutParams);

        layoutParams = (LinearLayout.LayoutParams) holder.txtInfo.getLayoutParams();
        layoutParams.gravity = gravity;
        holder.txtInfo.setLayoutParams(layoutParams);
    }

    private ViewHolder createViewHolder(View v) {
        ViewHolder holder = new ViewHolder();
        holder.txtMessage = (TextView) v.findViewById(R.id.txtMessage);
        holder.content = (LinearLayout) v.findViewById(R.id.content);
        holder.contentWithBG = (LinearLayout) v.findViewById(R.id.contentWithBackground);
        holder.txtInfo = (TextView) v.findViewById(R.id.txtInfo);
        holder.carrousell = (RecyclerView) v.findViewById(R.id.carousell);
        return holder;
    }

    private static class ViewHolder {
        public TextView txtMessage;
        public TextView txtInfo;
        public LinearLayout content;
        public LinearLayout contentWithBG;
        public RecyclerView carrousell;
    }

    private void initRecyclerView(final RecyclerView recyclerView,
                                  final CarouselLayoutManager layoutManager,
                                  final CarrousellAdapter adapter) {
        // enable zoom effect. this line can be customized
        layoutManager.setPostLayoutListener(new CarouselZoomPostLayoutListenerJJ());

        recyclerView.setLayoutManager(layoutManager);
        // we expect only fixed sized item for now
        recyclerView.setHasFixedSize(true);
        // sample adapter with random data
        recyclerView.setAdapter(adapter);
        // enable center post scrolling
        recyclerView.addOnScrollListener(new CenterScrollListener());

        layoutManager
                .addOnItemSelectionListener(new CarouselLayoutManager.OnCenterItemSelectionListener() {

                    @Override
                    public void onCenterItemChanged(final int adapterPosition) {
                        if (INVALID_POSITION != adapterPosition) {
                            adapter.notifyItemChanged(adapterPosition);
                        }
                    }
                });
    }

    private static final class CarrousellAdapter
            extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

        @SuppressWarnings("UnsecureRandomNumberGeneration")
        private final Random mRandom = new Random();
        private Context mContext;
        private ArrayList<Element> mElements;

        LayoutInflater inflater;

        CarrousellAdapter(Context context, ArrayList<Element> elements) {
            this.mContext = context;
            this.mElements = elements;

            this.inflater =
                    (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        }

        @Override
        public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
            View view = inflater.inflate(R.layout.item_view, null);
            RecyclerView.ViewHolder holder = new CardHolder(view);
            return holder;
        }

        @Override
        public void onBindViewHolder(RecyclerView.ViewHolder holder, final int position) {
            final Element element = mElements.get(position);
            final String title = element.getTitle();

            ((CardHolder) holder).title.setText(title);
            ((CardHolder) holder).subTitle.setText(element.getSubtitle());
            Picasso.with(mContext).load(element.getImage_url())
                    .into((ImageView) ((CardHolder) holder).image);

            final ArrayList<es.tid.cog.model.Model.ChannelData.Button> buttons =
                    element.getButtons();

            int buttonsSize = buttons.size();
            Log.i(TAG, "__JJ__onClick: BUTTONS " + buttonsSize);
            //int buttonsSize = 0;
            if (buttonsSize == 3) {
                Button buttonWidget = null;
                es.tid.cog.model.Model.ChannelData.Button button = null;
                boolean isPostBack = false;
                boolean isWebUrl = false;

                // si llegan 3 botones de momento se supone que son
                // el de ya visto en el indice 0
                // el de más similares en el indice 1
                // el de ver ahora en el indice 2
                // TODO comprobarlo y pintar los botones bien, dejando de suponer

                int YA_VISTO = 0;
                int MAS_SIMILARES = 1;
                int VER_MAS = 2;

                buttonWidget = ((CardHolder) holder).yaVisto;
                button = buttons.get(YA_VISTO);
                isWebUrl = "web_url".equals(button.getType());
                if (isWebUrl) {
                    final String url = button.getUrl();
                    buttonWidget.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(final View view) {
                            Log.i(TAG, "__JJ__onClick: YA VISTO " + title);
                            WebViewDispatcher.processUrl(url);
                        }
                    });
                }

                buttonWidget = ((CardHolder) holder).masSimilares;
                button = buttons.get(MAS_SIMILARES);
                isPostBack = "postBack".equals(button.getType());
                final MessageToBotByButton msg =
                        new MessageToBotByButton("message", null, button.getTitle(),
                                button.getPayload());
                if (isPostBack) {
                    buttonWidget.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(final View view) {
                            Log.i(TAG, "__JJ__onClick: MAS SIMILARES " + title);
                            BotMessageDispatcher.processMessageToBot(msg);
                        }
                    });
                }

                buttonWidget = ((CardHolder) holder).verAhora;
                button = buttons.get(VER_MAS);
                isWebUrl = "web_url".equals(button.getType());
                if (isWebUrl) {
                    final String url = button.getUrl();
                    buttonWidget.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(final View view) {
                            Log.i(TAG, "__JJ__onClick: VER AHORA " + title);
                            WebViewDispatcher.processUrl(url);
                        }
                    });
                }
            } else if (buttonsSize == 1) {
                Button buttonWidget = null;
                es.tid.cog.model.Model.ChannelData.Button button = null;
                boolean isPostBack = false;
                boolean isWebUrl = false;


                int YA_VISTO = 0;

                //((CardHolder) holder).masSimilares.setVisibility(View.GONE);
                //((CardHolder) holder).verAhora.setVisibility(View.GONE);
                buttonWidget = ((CardHolder) holder).yaVisto;
                button = buttons.get(YA_VISTO);
                isWebUrl = !button.getUrl().isEmpty();
                if (isWebUrl) {
                    final String url = button.getUrl();
                    final String titulo = button.getTitle();
                    final String orig_title = button.getOriginal_title();
                    final String date = button.getDate();
                    final String summary = button.getSummary();

                    buttonWidget.setOnClickListener(new View.OnClickListener() {

                        @Override
                        public void onClick(final View view) {
                            Log.i(TAG, "__JJ__onClick: YA VISTO " + title);
                            JSONObject json = new JSONObject();
                            try {
                                json.put("titulo", titulo);
                                json.put("orig_title", orig_title);
                                json.put("date", date);
                                json.put("sum", summary);
                                json.put("url", url);
                                WebViewDispatcher.processUrl(json.toString());
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }


                        }

                    });
                }

                /*
                // si llega 1 boton de momento se supone que es
                // o el de more en el indice 0
                // o el de me_refiero_a_esa con indice 0
                // TODO comprobarlo y pintar los botones bien, dejando de suponer

                int MORE_OR_ESA = 0;

                ((CardHolder) holder).yaVisto.setVisibility(View.GONE);
                ((CardHolder) holder).verAhora.setVisibility(View.GONE);

                Button buttonWidget = ((CardHolder) holder).masSimilares;
                es.tid.cog.model.Model.ChannelData.Button button = buttons.get(MORE_OR_ESA);
                boolean isPostBack = "postBack".equals(button.getType());
                String buttonTitle = button.getTitle();
                String payload = button.getPayload();
                boolean isButtonSimilarContent = payload.indexOf("BUTTON_SIMILAR_CONTENT") > 0;
                buttonWidget.setText(isButtonSimilarContent ? "Parecida a esta" : buttonTitle);
                buttonWidget.setWidth(3 * buttonWidget.getWidth());
                final MessageToBotByButton msg =
                    new MessageToBotByButton("message", null, buttonTitle, button.getPayload());

                Log.i(TAG, "__JJ__onClick: MORE_OR_ESA__msg__ " + msg);

                if (isPostBack) {
                    buttonWidget.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(final View view) {
                            Log.i(TAG, "__JJ__onClick: MORE_OR_ESA " + title);
                            BotMessageDispatcher.processMessageToBot(msg);
                        }
                    });
                }
            */
            } else {
                // Si no vienen 3 botones, de momento se oculta el botonerio
                // esto pasa con la card de ver más del final
                ((CardHolder) holder).yaVisto.setVisibility(View.GONE);
                ((CardHolder) holder).masSimilares.setVisibility(View.GONE);
                ((CardHolder) holder).verAhora.setVisibility(View.GONE);
            }
        }

        @Override
        public int getItemCount() {
            return mElements.size();
        }
    }

    public static class CardHolder extends RecyclerView.ViewHolder {
        TextView title;
        TextView subTitle;
        ImageView image;

        // De momento un conjunto fijo de botones
        Button yaVisto;
        Button masSimilares;
        Button verAhora;

        public CardHolder(View itemView) {
            super(itemView);
            title = (TextView) itemView.findViewById(R.id.cardTitle);
            subTitle = (TextView) itemView.findViewById(R.id.cardSubTitle);
            image = (ImageView) itemView.findViewById(R.id.cardImage);

            yaVisto = (Button) itemView.findViewById(R.id.yaVisto);
            //masSimilares = (Button) itemView.findViewById(R.id.masSimilares);
            //verAhora = (Button) itemView.findViewById(R.id.verAhora);
        }
    }

    // efectos de zoom personalizados
    public class CarouselZoomPostLayoutListenerJJ
            implements CarouselLayoutManager.PostLayoutListener {

        @Override
        public ItemTransformation transformChild(@NonNull final View child,
                                                 final float itemPositionToCenterDiff,
                                                 final int orientation) {
            final float scale =
                    (float) (2 * (2 * -StrictMath.atan(Math.abs(itemPositionToCenterDiff) + 1) / Math.PI
                            + 1));

            // because scaling will make view smaller in its center,
            // then we should move this item to the top or bottom to make it visible
            final float translateY;
            final float translateX;
            if (CarouselLayoutManager.VERTICAL == orientation) {
                final float translateYGeneral = child.getMeasuredHeight() * (1 - scale) / 2f;
                translateY = Math.signum(itemPositionToCenterDiff) * translateYGeneral;
                translateX = 0;
            } else {
                final float translateXGeneral = child.getMeasuredWidth() * (1 - scale) / 2f;
                translateX = Math.signum(itemPositionToCenterDiff) * translateXGeneral;
                translateY = 0;
            }

            return new ItemTransformation(scale, scale, translateX, translateY);
        }
    }

}
