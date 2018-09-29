package es.tfg.cog.model.Model;

/*
    intent: 'random',
    contentTopic: 'CINE',
    frase: 'Estas opciones podrían encajar con tus gustos.' } },
*/
// TODO Completar Ctx
public class Ctx {
    private String frase;

    public String getFrase() {
        return frase;
    }

    public void setFrase(final String frase) {
        this.frase = frase;
    }

    @Override
    public String toString() {
        return "Ctx{" + "frase='" + frase + '\'' + '}';
    }
}

