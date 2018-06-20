
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel


def main():
    md = pd.read_csv('movies_metadata.csv')
    print(md.shape)

    links_small = pd.read_csv('links_small.csv')
    links_small = links_small[links_small['tmdbId'].notnull()]['tmdbId'].astype('int')

    md = md.drop([19730, 29503, 35587])
    # Check EDA Notebook for how and why I got these indices.
    md['id'] = md['id'].astype('int')

    smd = md[md['id'].isin(links_small)]
    print(smd.shape)

    # build a recommender using movie descriptions and taglines
    smd['tagline'] = smd['tagline'].fillna('')
    smd['description'] = smd['overview'] + smd['tagline']
    smd['description'] = smd['description'].fillna('')

    # Cosine Similarity to calculate a numeric quantity that denotes the similarity between two movies.
    tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 2), min_df=0, stop_words='english')
    tfidf_matrix = tf.fit_transform(smd['description'])

    print(tfidf_matrix.shape)

    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

    print(cosine_sim[0])

    smd = smd.reset_index()
    titles = smd['title']
    indices = pd.Series(smd.index, index=smd['title'])

    print(get_recommendations('The Godfather', indices, cosine_sim, titles).head(10))


def get_recommendations(title, indices, cosine_sim, titles):
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:31]
    movie_indices = [i[0] for i in sim_scores]
    return titles.iloc[movie_indices]


if __name__ == "__main__":
    main()
