package es.tfg.cog.model.Model;


public class Attachment {
    private String contentType;
    private Content content;

    public String getContentType() {
        return contentType;
    }

    public void setContentType(final String contentType) {
        this.contentType = contentType;
    }

    public Content getContent() {
        return content;
    }

    public void setContent(final Content content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Attachment{" + "contentType='" + contentType + '\'' + ", content=" + content + '}';
    }
}

