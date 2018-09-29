package es.tfg.cog.model.Model;

public class Conversation {
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Conversation{" + "id='" + id + '\'' + '}';
    }
}

