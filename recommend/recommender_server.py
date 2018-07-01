# encoding: utf-8

from flask import Flask, jsonify, request
from flask_restful import Resource, Api
import numpy as np
import pandas as pd
import json
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity
from nltk.stem.snowball import SnowballStemmer

app = Flask(__name__)
api = Api(app)

titles = None
indices = None
cosine_sim_cb = None
cosine_sim_r = None
smd = None


def main():

    global titles
    global indices
    global cosine_sim_cb
    global cosine_sim_r
    global smd
    md = pd.read_csv('movies_metadata.csv')
    md = md.drop([19730, 29503, 35587])
    print(md.shape)

    links_small = pd.read_csv('links_small.csv')
    links_small = links_small[links_small['tmdbId'].notnull()]['tmdbId'].astype('int')

    md['year'] = pd.to_datetime(md['release_date'], errors='coerce').apply(
        lambda x: str(x).split('-')[0] if x != np.nan else np.nan)

    # Read and merge credits and keywords
    credits = pd.read_csv('credits.csv')
    keywords = pd.read_csv('keywords.csv')

    keywords['id'] = keywords['id'].astype('int')
    credits['id'] = credits['id'].astype('int')

    # Check EDA Notebook for how and why I got these indices.
    md['id'] = md['id'].astype('int')

    md = md.merge(credits, on='id')
    md = md.merge(keywords, on='id')

    smd = md[md['id'].isin(links_small)]
    print(smd.shape)

    # evaluate string that contains Python literals
    smd['cast'] = smd['cast'].apply(literal_eval)
    smd['crew'] = smd['crew'].apply(literal_eval)
    smd['keywords'] = smd['keywords'].apply(literal_eval)
    smd['genres'] = smd['genres'].apply(literal_eval)

    # Adding lengths
    smd['cast_size'] = smd['cast'].apply(lambda x: len(x))
    smd['crew_size'] = smd['crew'].apply(lambda x: len(x))

    # add directors
    smd['director'] = smd['crew'].apply(get_director)

    # Cleaning data

    # only list values
    smd['cast'] = smd['cast'].apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])
    # get the top 3
    smd['cast'] = smd['cast'].apply(lambda x: x[:3] if len(x) >= 3 else x)
    # only list values
    smd['keywords'] = smd['keywords'].apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])
    # lowercase and remove spaces
    smd['cast'] = smd['cast'].apply(lambda x: [str.lower(i.replace(" ", "")) for i in x])
    smd['director'] = smd['director'].astype('str').apply(lambda x: str.lower(x.replace(" ", "")))

    # Mention director 3 times to give it more weight relative to the entire cast
    smd['director'] = smd['director'].apply(lambda x: [x, x, x])

    # calculate the frequenct counts of every keyword that appears in the dataset.
    s = smd.apply(lambda x: pd.Series(x['keywords']), axis=1).stack().reset_index(level=1, drop=True)
    s.name = 'keyword'

    s = s.value_counts()
    print(s[:5])

    # Remove keywords that apear ony once
    s = s[s > 1]

    # Convert every word to its stem
    stemmer = SnowballStemmer('english')

    # Get all the words, stem them, convert to lowercase and remove spaces
    smd['keywords'] = smd['keywords'].apply(filter_keywords, args=(s,))
    smd['keywords'] = smd['keywords'].apply(lambda x: [stemmer.stem(i) for i in x])
    smd['keywords'] = smd['keywords'].apply(lambda x: [str.lower(i.replace(" ", "")) for i in x])

    smd['gen'] = smd['genres'].apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])
    smd['gen'] = smd['gen'].apply(lambda x: [stemmer.stem(i) for i in x])
    smd['gen'] = smd['gen'].apply(lambda x: [str.lower(i.replace(" ", "")) for i in x])

    print(smd['gen'])

    smd['soup'] = smd['keywords'] + smd['cast'] + smd['director'] + smd['gen']
    smd['soup'] = smd['soup'].apply(lambda x: ' '.join(x))

    count = CountVectorizer(analyzer='word', ngram_range=(1, 2), min_df=0, stop_words='english')
    count_matrix = count.fit_transform(smd['soup'])
    global cosine_sim_r
    cosine_sim_r = cosine_similarity(count_matrix, count_matrix)

    # build a recommender using movie descriptions and taglines
    smd['tagline'] = smd['tagline'].fillna('')
    smd['description'] = smd['overview'] + smd['tagline']
    smd['description'] = smd['description'].fillna('')

    # Cosine Similarity to calculate a numeric quantity that denotes the similarity between two movies.
    tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 2), min_df=0, stop_words='english')
    tfidf_matrix = tf.fit_transform(smd['description'])

    print(tfidf_matrix.shape)

    cosine_sim_cb = linear_kernel(tfidf_matrix, tfidf_matrix)

    smd = smd.reset_index()
    titles = smd['title']
    indices = pd.Series(smd.index, index=smd['title'])


def get_recommendations(title, indices, cosine_sim, titles, smd):
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:31]
    movie_indices = [i[0] for i in sim_scores]
    return smd.iloc[movie_indices].imdb_id


# Function to get all the words
def filter_keywords(x, s):
    words = []
    for i in x:
        if i in s:
            words.append(i)
    return words


# Function to get the directors
def get_director(x):
    for i in x:
        if i['job'] == 'Director':
            return i['name']
    return np.nan


def weighted_rating(x, m, C):
    v = x['vote_count']
    R = x['vote_average']
    return (v/(v+m) * R) + (m/(m+v) * C)


def improved_recommendations(title, indices, cosine_sim, smd):
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:26]
    movie_indices = [i[0] for i in sim_scores]

    movies = smd.iloc[movie_indices][['title', 'vote_count', 'vote_average', 'year', 'imdb_id']]
    vote_counts = movies[movies['vote_count'].notnull()]['vote_count'].astype('int')
    vote_averages = movies[movies['vote_average'].notnull()]['vote_average'].astype('int')
    C = vote_averages.mean()
    m = vote_counts.quantile(0.60)
    qualified = movies[(movies['vote_count'] >= m) & (movies['vote_count'].notnull()) & (movies['vote_average'].notnull())]
    qualified['vote_count'] = qualified['vote_count'].astype('int')
    qualified['vote_average'] = qualified['vote_average'].astype('int')
    qualified['wr'] = qualified.apply(weighted_rating, args=(m, C), axis=1)
    qualified = qualified.sort_values('wr', ascending=False).head(10)

    json_qualified = json.loads(qualified.to_json())

    order_f = [json_qualified["imdb_id"][x] for x in json_qualified["imdb_id"].keys()]
    print('---------------')
    print(order_f)
    print('---------------')

    return order_f



class HelloW(Resource):

    def get(self):
        page = request.args.get('page')
        return jsonify({"Hello": page})


class ContentBased(Resource):

    def get(self):
        global titles
        global indices
        global cosine_sim_cb
        global cosine_sim_r

        title = request.args.get('title')
        #return json.loads(get_recommendations(str(title), indices, cosine_sim_cb, titles).head(10).to_json())
        recomm = json.loads(get_recommendations(str(title), indices, cosine_sim_cb, titles, smd).head(10).to_json())
        return [recomm[x] for x in recomm.keys()]


class Metadata(Resource):

    def get(self):
        global titles
        global indices
        global cosine_sim_cb
        global cosine_sim_r

        title = request.args.get('title')
        recomm = json.loads(get_recommendations(str(title), indices, cosine_sim_r, titles, smd).head(10).to_json())
        return [recomm[x]for x in recomm.keys()]

class MetadataImproved(Resource):

    def get(self):
        global titles
        global indices
        global cosine_sim_cb
        global cosine_sim_r
        global smd

        title = request.args.get('title')
        return improved_recommendations(str(title), indices, cosine_sim_r, smd)


api.add_resource(HelloW, '/helloworld')
api.add_resource(ContentBased, '/content_based')
api.add_resource(Metadata, '/metadata')
api.add_resource(MetadataImproved, '/metadata_i')

if __name__ == "__main__":
    main()
    app.run(host='0.0.0.0', port="5005")

