import csv
import gzip
#with gzip.open('title.ratings.tsv.gz') as tsvfile:
    #with open(f_in) as tsvfile:
#    reader = csv.reader(tsvfile, delimiter='\t')
#    for i in reader:
#        print(i)

import requests

url = 'http://google.com/favicon.ico'
r = requests.get(url, allow_redirects=True)
open('google.ico', 'wb').write(r.content)