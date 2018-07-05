from copy import deepcopy
from pyelasticsearch import ElasticSearch
import pandas as pd
from time import time
import numpy as np


properties = {
            "properties" : {
                "nconst" : { "type" : "text" },
                "primaryName" : { "type" : "text" },
                "birthYear" : { "type" : "integer" },
                "deathYear" : { "type" : "integer" },
                "primaryProfession" : { "type" : "text" },
                "knownForTitles" : { "type" : "text" },
            }
        }
tsv_filenames = ["names/data.tsv"]
indexes = ["people"]
types = ["person"]
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


        records = df.where(pd.notnull(df), None).T.to_dict()
        list_records = [records[it] for it in records]
        try:
            es.bulk_index(index, type, list_records)
        except Exception as e:
            print("error!")
            print(e)
            pass

print("done in %.3fs"%(time()-t0))