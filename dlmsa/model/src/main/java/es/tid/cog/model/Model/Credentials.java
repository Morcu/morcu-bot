package es.tid.cog.model.Model;

/*

    "credentials": {
        "firstName": "Test",
        "accountId": "UN000000011014-TEF",
        "suscripcion": "PS-FUSFAMPC,PS-PREMEXPC,PS-SELEPPC,PS-YOPLAYPC",
        "userhash": "7X7f7t8G8W8h8u",
        "deviceId": "876987e8-b759-4c1a-9135-55923d3649f0_BC",
        "homezonetoken": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1ODM4ZDU4NjNjODJkNTk1MjcxYTA5MmYiLCJpYXQiOjE0OTA5NjcxMzcsImlzcyI6Ijg3Njk4N2U4LWI3NTktNGMxYS05MTM1LTU1OTIzZDM2NDlmMF9CQyIsImV4cCI6MTQ5MTAxMDMzN30.4TlR8NAaTxVq4RGBFSKT_kFitOQiNgHW9RBw3WBe3-w",
        "locale": "en-us"
    }
     */

public class Credentials {
    private String firstName;
    private String accountId;
    private String suscription;
    private String userhash;
    private String deviceId;
    private String homezonetoken;
    private String locale;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(final String firstName) {
        this.firstName = firstName;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(final String accountId) {
        this.accountId = accountId;
    }

    public String getSuscription() {
        return suscription;
    }

    public void setSuscription(final String suscription) {
        this.suscription = suscription;
    }

    public String getUserhash() {
        return userhash;
    }

    public void setUserhash(final String userhash) {
        this.userhash = userhash;
    }

    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(final String deviceId) {
        this.deviceId = deviceId;
    }

    public String getHomezonetoken() {
        return homezonetoken;
    }

    public void setHomezonetoken(final String homezonetoken) {
        this.homezonetoken = homezonetoken;
    }

    public String getLocale() {
        return locale;
    }

    public void setLocale(final String locale) {
        this.locale = locale;
    }

    @Override
    public String toString() {
        return "Credentials{" + "firstName='" + firstName + '\'' + ", accountId='" + accountId
            + '\'' + ", suscription='" + suscription + '\'' + ", userhash='" + userhash + '\''
            + ", deviceId='" + deviceId + '\'' + ", homezonetoken='" + homezonetoken + '\''
            + ", locale='" + locale + '\'' + '}';
    }
}

