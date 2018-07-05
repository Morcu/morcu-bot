from copy import deepcopy
from pyelasticsearch import ElasticSearch
import pandas as pd
from time import time
import numpy as np


properties = {
                "properties": {
                    "tconst": {"type": "text"},
                    "titleType": {"type": "text"},
                    "primaryTitle": {"type": "text"},
                    "originalTitle": {"type": "text"},
                    "isAdult": {"type": "boolean"},
                    "startYear": {"type": "integer"},
                    "endYear": {"type": "integer"},
                    "runtimeMinutes": {"type": "integer"},
                    "genres": {"type": "text"},
                }
            }
tsv_filenames = ["titles/data.tsv", "titles/data.tsv", "titles/data.tsv", "names/data.tsv"]
indexes = ["films", "series", "others", "people"]
types = ["film", "serie", "other", "person"]
mapping = {
    "mappings": {

    }
}
t0 = time()
# init ElasticSearch
es = ElasticSearch('http://localhost:9200/')

# size of the bulk
chunksize = 5000
for tsv, index, type in zip(tsv_filenames, indexes, types):

    mapp = deepcopy(mapping)
    mapp["mappings"] = {
        type: properties
    }
    # open csv file
    f = open(tsv)# read csv

    # parse csv with pandas
    tsvfile = pd.read_csv(f, iterator=True,  sep='\t', chunksize=chunksize, encoding='utf-8')


    # init index
    try:
        es.delete_index(index)
    except :
        pass

    es.create_index(index, mapp)

    # start bulk indexing
    print("now indexing %s..."%(tsv))

    for i,df in enumerate(tsvfile):
        #print (i, df)
        df = df.replace('\\N', np.nan)
        df = df.fillna(-1)

        if(index == indexes[0]):
            f0 = df["titleType"] == "movie"
            f1 = df["titleType"] == "tvMovie"
            f2 = df["titleType"] == "video"
            f3 = df["titleType"] == "videoGame"
            records = df[f0 | f1 | f2 | f3].T.to_dict()
            list_records = [records[it] for it in records]

        elif (index == indexes[1]):
            f0 = df["titleType"] == "tvEpisode"
            f1 = df["titleType"] == "tvSeries"
            f2 = df["titleType"] == "tvMiniSeries"
            records = df[f0 | f1 | f2].T.to_dict()
            list_records = [records[it] for it in records]

        elif (index == indexes[3]):
            f0 = df["titleType"] == "short"
            f1 = df["titleType"] == "tvShort"
            f2 = df["titleType"] == "tvSpecial"
            records = df[f0 | f1 | f2].T.to_dict()
            list_records = [records[it] for it in records]
        else:
            records = df.where(pd.notnull(df), None).T.to_dict()
            list_records = [records[it] for it in records]
        try:
            es.bulk_index(index, type, list_records)
        except Exception as e:
            print("error!")
            print(e)
            pass

print("done in %.3fs"%(time()-t0))