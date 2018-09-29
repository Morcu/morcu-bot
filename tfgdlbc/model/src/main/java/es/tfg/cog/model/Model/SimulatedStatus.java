package es.tfg.cog.model.Model;

public class SimulatedStatus {
    private boolean home;
    private boolean rpa;
    private boolean rpo;
    private String sus;
    private int nstbs;

    public SimulatedStatus(final boolean home, final boolean rpa, final boolean rpo,
                           final String sus, final int nstbs) {
        this.home = home;
        //*this.rpa = rpa;
        this.rpo = rpo;
        this.sus = sus;
        this.nstbs = nstbs;
    }

    public boolean isHome() {
        return home;
    }

    public boolean isRpa() {
        return rpa;
    }

    public boolean isRpo() {
        return rpo;
    }

    public String getSus() {
        return sus;
    }

    public int getNstbs() {
        return nstbs;
    }
}
