import pandas as pd
import numpy as np
#import matplotlib.pyplot as plt
#import seaborn as sns
#from scipy import stats
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity
from nltk.stem.snowball import SnowballStemmer
#from nltk.stem.wordnet import WordNetLemmatizer
#from nltk.corpus import wordnet
#from surprise import Reader, Dataset, SVD, evaluate

import warnings; warnings.simplefilter('ignore')

def main():
    md = pd.read_csv('movies_metadata.csv')

    md = md.drop([19730, 29503, 35587])

    links_small = pd.read_csv('links_small.csv')
    links_small = links_small[links_small['tmdbId'].notnull()]['tmdbId'].astype('int')

    #Read and merge credits and keywords
    credits = pd.read_csv('credits.csv')
    keywords = pd.read_csv('keywords.csv')

    keywords['id'] = keywords['id'].astype('int')
    credits['id'] = credits['id'].astype('int')
    md['id'] = md['id'].astype('int')

    print(md.shape)

    md = md.merge(credits, on='id')
    md = md.merge(keywords, on='id')

    smd = md[md['id'].isin(links_small)]
    print(smd.shape)

    #evaluate string that contains Python literals
    smd['cast'] = smd['cast'].apply(literal_eval)
    smd['crew'] = smd['crew'].apply(literal_eval)
    smd['keywords'] = smd['keywords'].apply(literal_eval)
    smd['genres'] = smd['genres'].apply(literal_eval)

    #Adding lengths
    smd['cast_size'] = smd['cast'].apply(lambda x: len(x))
    smd['crew_size'] = smd['crew'].apply(lambda x: len(x))

    #add directors
    smd['director'] = smd['crew'].apply(get_director)

    #Cleaning data
    
    #only list values
    smd['cast'] = smd['cast'].apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])
    #get the top 3
    smd['cast'] = smd['cast'].apply(lambda x: x[:3] if len(x) >=3 else x)
    #only list values
    smd['keywords'] = smd['keywords'].apply(lambda x: [i['name'] for i in x] if isinstance(x, list) else [])
    #lowercase and remove spaces
    smd['cast'] = smd['cast'].apply(lambda x: [str.lower(i.replace(" ", "")) for i in x])
    smd['director'] = smd['director'].astype('str').apply(lambda x: str.lower(x.replace(" ", "")))

    #Mention director 3 times to give it more weight relative to the entire cast
    smd['director'] = smd['director'].apply(lambda x: [x, x, x])

    # calculate the frequenct counts of every keyword that appears in the dataset.
    s = smd.apply(lambda x: pd.Series(x['keywords']),axis=1).stack().reset_index(level=1, drop=True)
    s.name = 'keyword'

    s = s.value_counts()
    print(s[:5])

    # Remove keywords that apear ony once
    s = s[s > 1]

    # Convert every word to its stem
    stemmer = SnowballStemmer('english')


    #Get all the words, stem them, convert to lowercase and remove spaces
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
    cosine_sim = cosine_similarity(count_matrix, count_matrix)

    smd = smd.reset_index()
    titles = smd['title']
    indices = pd.Series(smd.index, index=smd['title'])

    print(get_recommendations('The Dark Knight', indices, cosine_sim, titles).head(10))


def get_recommendations(title, indices, cosine_sim, titles):
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:31]
    movie_indices = [i[0] for i in sim_scores]
    return titles.iloc[movie_indices]


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


# Function to get the genres
def get_genres(x):
    genres = []
    for i in x:
        genres.append(i['name'])
    return genres


if __name__ == "__main__":
    main()