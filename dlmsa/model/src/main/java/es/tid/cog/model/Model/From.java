package es.tid.cog.model.Model;

public class From {
    private String id;
    private String name;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "From{" + "id='" + id + '\'' + ", name='" + name + '\'' + '}';
    }
}
