package es.tfg.cog.model.Model.ChannelData;

public class ChannelData {
    private Attachment attachment;

    public Attachment getAttachment() {
        return attachment;
    }

    public void setAttachment(final Attachment attachment) {
        this.attachment = attachment;
    }

    @Override
    public String toString() {
        return "ChannelData{" + "attachment=" + attachment + '}';
    }
}

