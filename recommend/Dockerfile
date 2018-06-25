FROM python:3.6

RUN mkdir -p /recommend
WORKDIR /recommend

ADD credits.csv ./
ADD keywords.csv ./
ADD links.csv ./
ADD links_small.csv ./
ADD movies_metadata.csv ./
ADD ratings.csv ./
ADD ratings_small.csv ./
ADD requirements.txt ./

RUN pip install -r requirements.txt
ADD recommender_server.py ./

CMD python3.6 recommender_server.py
