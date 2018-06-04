FROM openjdk

MAINTAINER TFG David Morcuende

EXPOSE 9191

RUN wget https://nlp.stanford.edu/software/stanford-ner-2018-02-27.zip
RUN unzip stanford-ner-2018-02-27.zip && rm stanford-ner-2018-02-27.zip

WORKDIR stanford-ner-2018-02-27

ADD ./data ./

RUN java -cp stanford-ner.jar edu.stanford.nlp.ie.crf.CRFClassifier -prop custom.prop

CMD java -mx2g -cp smx1500m -cp stanford-ner.jar edu.stanford.nlp.ie.NERServer -loadClassifier ner-model.ser.gz  -port 9191 -outputFormat inlineXML

