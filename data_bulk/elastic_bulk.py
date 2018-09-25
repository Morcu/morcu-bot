#from pyelasticsearch import ElasticSearch
import pandas as pd
import numpy as np
from time import time

tsv_filename = "title.tsv"

t0 = time()

# size of the bulk
chunksize=895776

# open csv file
f = open(tsv_filename) # read csv

# parse csv with pandas
tsvfile = pd.read_csv(f, sep='\t', encoding='utf-8')
tsvfile = tsvfile.replace('\\N', np.nan)
print(tsvfile.isnull().values.any())
tsvfile = tsvfile.fillna(-1)
print(tsvfile.isnull().values.any())
'''
# init ElasticSearch
es = ElasticSearch('http://localhost:9200/')

# init index
try:
    es.delete_index("weiboscope")
except:
    pass

es.create_index("weiboscope")
'''
# start bulk indexing
#print "now indexing %s..."%(csv_filename)


dt = tsvfile.head(5)

for df in enumerate(dt):
    print(df)
'''

for i, df in enumerate(tsvfile):

    print(df.fillna(0).iloc[[i]])
        records=df.where(pd.notnull(df), None).T.to_dict()
    list_records=[records[it] for it in records]
    try :
        es.bulk_index("weiboscope","tweet",list_records)
    except :
        print "error!, skiping some tweets sorry"
        pass
    '''

print ("done in %.3fs"%(time()-t0))