package es.tfg.bc;

import android.os.Bundle;

import android.app.Activity;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import org.json.JSONException;
import org.json.JSONObject;

public class WebViewActivity extends Activity {

    private WebView webView;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view);

        /*
        webView = (WebView) findViewById(R.id.webView1);
        webView.getSettings().setLoadsImagesAutomatically(true);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setWebViewClient(new MyBrowser());
        */
        Bundle extras = getIntent().getExtras();

        String url = extras.getString("url");
        try {
            JSONObject reader = new JSONObject(url);


            TextView titulo = (TextView) findViewById(R.id.title);
            TextView titulo_orig = (TextView) findViewById(R.id.original_title);
            TextView date = (TextView) findViewById(R.id.date);
            TextView summary = (TextView) findViewById(R.id.resumen);
            ImageView imagen = (ImageView) findViewById(R.id.imagen_info);


            Picasso.with(this).load(reader.getString("url")).into(imagen);
            titulo.setText(reader.getString("titulo"));
            titulo_orig.setText(reader.getString("orig_title"));
            date.setText(reader.getString("date"));
            summary.setText(reader.getString("sum"));

            //webView.loadUrl(url);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    private class MyBrowser extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }
    }

}