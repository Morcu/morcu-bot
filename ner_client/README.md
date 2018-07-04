# NER

- Se puede descargar ner desde --> https://nlp.stanford.edu/software/stanford-ner-2018-02-27.zip

- Para entrenar NER --> java -cp stanford-ner.jar edu.stanford.nlp.ie.crf.CRFClassifier -prop custom.prop

- Levantarlo como servidor --> java -mx2g -cp smx1500m -cp stanford-ner.jar edu.stanford.nlp.ie.NERServer -loadClassifier ner-model.ser.gz  -port 9191 -outputFormat inlineXML

- Probarlo --> echo "algo como inception" |  java -cp stanford-ner/stanford-ner.jar edu.stanford.nlp.ie.crf.CRFClassifier  -loadClassifier ner-model.ser.gz  -readStdin

- Ejecutar test --> java -cp stanford-ner.jar edu.stanford.nlp.ie.crf.CRFClassifier -loadClassifier ner-model.ser.gz  -testFile datos.tsv
