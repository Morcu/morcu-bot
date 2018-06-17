FROM python
EXPOSE 5000
RUN pip install rasa_nlu
RUN pip install rasa_nlu[spacy]
RUN python -m spacy download en_core_web_md
RUN python -m spacy link en_core_web_md en
RUN pip install coloredlogs
RUN mkdir -p /rasa
WORKDIR /rasa
COPY config_spacy.yml ./
COPY train_data.json ./

RUN python -m rasa_nlu.train --config config_spacy.yml --data train_data.json --path projects
CMD python -m rasa_nlu.server --path projects