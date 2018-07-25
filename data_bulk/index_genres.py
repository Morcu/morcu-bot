from copy import deepcopy
from pyelasticsearch import ElasticSearch
import pandas as pd
from time import time
import numpy as np
import json

tsv_filenames = ["data/film_genres.json", "data/serie_genres.json", "data/content_type.json", "data/jobs.json"]
indexes = ["film_genres","serie_genres", "content_types", "jobs"]
types = ["genre", "genre", "content_type", "job"]

t0 = time()
# init ElasticSearch
es = ElasticSearch('http://localhost:9200/')

# size of the bulk
chunksize = 5000
for tsv, index, type in zip(tsv_filenames, indexes, types):

   
    # open file
    with open(tsv) as data_j:
        json_data = json.load(data_j)
   
        # init index
        try:
            es.delete_index(index)
        except :
            pass

        es.create_index(index)

        # start bulk indexing
        print("now indexing %s..."%(tsv))
        print(json_data)
        
        try:
            es.bulk_index(index, type, json_data)
        except Exception as e:
            print("error!")
            print(e)
            pass
        
print("done in %.3fs"%(time()-t0))