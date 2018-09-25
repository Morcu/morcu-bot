package es.tid.cog.model.Model;

public class Recommended {
    private String id;
    private String title;
    private String genre;
    private String year;
    private String imageUrl;

    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(final String genre) {
        this.genre = genre;
    }

    public String getYear() {
        return year;
    }

    public void setYear(final String year) {
        this.year = year;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(final String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Recommended{" + "id='" + id + '\'' + ", title='" + title + '\'' + ", genre='"
            + genre + '\'' + ", year='" + year + '\'' + ", imageUrl='" + imageUrl + '\'' + '}';
    }
}

