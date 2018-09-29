package es.tfg.cog.model.Model;

import java.util.ArrayList;

public class Address {
    private Descriptor             descriptor;
    private ArrayList<Recommended> recommended;

    public Descriptor getDescriptor() {
        return descriptor;
    }

    public void setDescriptor(final Descriptor descriptor) {
        this.descriptor = descriptor;
    }

    public ArrayList<Recommended> getRecommended() {
        return recommended;
    }

    public void setRecommended(final ArrayList<Recommended> recommended) {
        this.recommended = recommended;
    }

    @Override
    public String toString() {
        return "Address{" + "descriptor=" + descriptor + ", recommended=" + recommended + '}';
    }
}

