package es.tfg.cog.model.Model;

/*
    id: 1501364005987,
    carouselType: 0,
    genre: '',
    contentType: 0,
    showMoreCard: false,
    options: [],
    ctx: {}
*/
// TODO Completar Descriptor
public class Descriptor {
    private String id;
    private Ctx    ctx;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Ctx getCtx() {
        return ctx;
    }

    public void setCtx(final Ctx ctx) {
        this.ctx = ctx;
    }

    @Override
    public String toString() {
        return "Descriptor{" + "id='" + id + '\'' + ", ctx=" + ctx + '}';
    }
}

