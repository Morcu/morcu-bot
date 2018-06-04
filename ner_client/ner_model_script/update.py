import json
import re
from pymongo import MongoClient
import random


def main():
    conf = json.load(open("config.json"))
    train = json.load(open((conf["train_data"])))
    client = MongoClient('mongodb://localhost:27017')
    db = client["film_data"]
    for intents in train.values():
        for intent in intents:
            for sentence in intent[list(intent.keys())[0]]:
                try:
                    par = sentence["parametros"]
                except:
                    par = None

                frase = parse(sentence["frase"], sentence["parametros"],db).strip().split(" ")
                to_write = map(lambda x: tagg_to_model(x), frase)
                for row in to_write:
                    print(row)
                #with open(conf["model_file"], 'a') as f:
                #    for row in to_write:
                #        f.write('\t'.join(row) + '\n')
                #    f.write('\n')

def tagg_to_model(str_tagged):
    end = str_tagged.find(">")
    if end > -1:
        starts = [match.start() for match in re.finditer(re.escape("<"), str_tagged)]
        return [str_tagged[end+1:starts[1]], str_tagged[starts[0]+1: end]]
    else:
        return [str_tagged, "O"]

def parse(frase, parametros, db):
    aux = ["%r", "%f", "%s", "%a", "%d"]
    results = []
    for exp in aux:
        results.append([match.start() for match in re.finditer(re.escape(exp), frase)])
    # "%r"
    if results[0]:
        print(parametros)
        params = map(lambda x: tag(x["replace"], x["entity"]), parametros)
        for par in params:
            frase = frase.replace(aux[0], par, 1)

    for res in range(1, len(results)):
        if results[res]:
            for i in range(len(results[res])):
                string = random_mongo(db, aux[res])
                frase = frase.replace(aux[res], string, 1)

    return frase


def tag(string, tag):
    tagged = ""
    for st in string.split(" "):
        tagged += "<"+ str(tag)+ ">" + str(st) + "</"+ str(tag)+ "> "
    return tagged

def random_mongo(db, collection):
    if collection == "%f":
        db_coll = db['film']
        count = db_coll.count()
        #TODO: BUCLE DO WHILE PRA FORZAR QUE SOLO SEAN PELICULAS
        doc = db_coll.find()[random.randrange(count)]
        return tag(doc['primaryTitle'], 'TPEL')
    else:
        selector = {
            "%s": {
                1: "episodes",
                2: "film",
                3: "tconst",
                4: "TSER",
                5: "primaryTitle",
                6: "parentTconst"
            },
            "%a": {
                1: "actors",
                2: "names",
                3: "nconst",
                4: "NACT",
                5: "primaryName",
                6: "principalCast"
            },
            "%d": {
                1: "directors",
                2: "names",
                3: "nconst",#clave de mongo por la que buscar
                4: "NDIR", #etiqueta de la entidad
                5: "primaryName",#titluo
                6: "directors"
            }
        }
        db_coll = db[selector[collection][1]]
        count = db_coll.count()
        doc = db_coll.find()[random.randrange(count)]

        db_coll = db[selector[collection][2]]
        if collection == "%d" or collection == "%s":
            doc_r = db_coll.find({selector[collection][3]: doc[selector[collection][6]]})
        elif collection == "%a":
            doc_r = db_coll.find({selector[collection][3]: doc[selector[collection][6]].split(",")[0]})
        else:
            doc_r = db_coll.find({selector[collection][3]: doc[selector[collection][3]]})
        for find in doc_r:
            print(find)
            return tag(find[selector[collection][5]], selector[collection][4])

    '''
    tsv_model = csv.reader(open(conf["model_file"]), delimiter='\t')
    t = ['----test---', 'O']
    print('\t'.join(t) + '\n')
    with open(conf["model_file"], 'a') as f:
        f.write('\t'.join(t) + '\n')
        f.write('\n')
    for row in tsv_model:
        print(row)
    '''
    '''
     Cargar la confi
     
     leer el fichero a entrenar
     
     ir añadiendo el entrenamiento al tsv
    '''


if __name__ == '__main__':
    main()
