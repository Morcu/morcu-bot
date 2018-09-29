package es.tfg.cog.model.Model;

import java.util.ArrayList;

public class Chat {
    private String                watermark;
    private ArrayList<Activities> activities;

    public String getWatermark() {
        return watermark;
    }

    public void setWatermark(String watermark) {
        this.watermark = watermark;
    }

    public ArrayList<Activities> getActivities() {
        return activities;
    }

    public void setActivities(ArrayList<Activities> activities) {
        this.activities = activities;
    }

    @Override
    public String toString() {
        return "Chat{" + "watermark='" + watermark + '\'' + ", activities=" + activities + '}';
    }
}
