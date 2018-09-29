package es.tfg.cog.model.Model;

public class Payload {
    private String userId;
    private String system;
    private Credentials credentials;

    public String getUserId() {
        return userId;
    }

    public void setUserId(final String userId) {
        this.userId = userId;
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(final String system) {
        this.system = system;
    }

    public Credentials getCredentials() {
        return credentials;
    }

    public void setCredentials(final Credentials credentials) {
        this.credentials = credentials;
    }

    @Override
    public String toString() {
        return "Payload{" + "userId='" + userId + '\''
            + ", system='" + system + '\'' + ", credentials=" + credentials + '}';
    }
}
