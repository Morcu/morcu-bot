# -*- coding: utf-8 -*

#imports
import json

import constants as cons
from pymongo import MongoClient
import asyncio
import requests
import pandas as pd
import sys

def testMain():

    download = extract_sys_args("-d")
    mongo = extract_sys_args("-m")
    process = extract_sys_args("-p")

    print(["-d: " + str(download),"-m: " + str(mongo),"-p: " + str(process)])

    if mongo:
        # Cliente Mongo
        client = MongoClient(cons.MONGO_URL, cons.MONGO_PORT)
        db = client[cons.DB_MOVIE_DATA]
        db_title_info = db[cons.DB_MD_TILE_INFO]
        db_people_info = db[cons.DB_MD_PEOPLE_INFO]



    if process == 2:
        # Rating
        args = [[cons.CONTENT_ID, False], [cons.RATING, False], [cons.VOTES, False]]
        rating = extract(cons.FILE_RATING, args)

        update_field(rating, "tconst", db_title_info)



def extract_sys_args(arg):
    '''
    Funcion que se encarga de extraer los parametros a usar de los argumentos de la ejecucion
    :param arg: Flag -X donde X es el flag del argumento
        -d
        -m
        -p
    :return:
    '''
    ret = 0
    try:
        ret = int(sys.argv[sys.argv.index(arg) + 1])
    except:
        print(arg + " argument isn't an integer, 0 is used")

    return ret

def main():

    #argumentos extraidos para comprobar si hay que descargar, extraer de mongo o procesar

    download = extract_sys_args("-d")
    mongo = extract_sys_args("-m")
    process = extract_sys_args("-p")

    print(["-d: " + str(download), "-m: " + str(mongo), "-p: " + str(process)])

    #Si es necesario extraer de mongo
    if mongo:
        #Cliente Mongo
        client = MongoClient(cons.MONGO_URL, cons.MONGO_PORT)
        db = client[cons.DB_MOVIE_DATA]
        db_title_info = db[cons.DB_MD_TILE_INFO]
        db_people_info = db[cons.DB_MD_PEOPLE_INFO]

        db_rating_info = db["rating"]
        db_episodes_info = db["episodes"]
        db_act_info = db["actors"]
        db_dir_info = db["directors"]

    #Si es necesario descargar los archivos
    if download:
        print("Start download")
        #Urls donde estan los archivos
        urls = [
            cons.URL_FILE_FILMS,
            cons.URL_FILE_NAMES,
            cons.URL_FILE_ACTORS,
            cons.URL_FILE_DIRECTOR,
            cons.URL_FILE_EPISODES,
            cons.URL_FILE_FILM_INFO,
            cons.URL_FILE_RATING
        ]

        #Bucle de eventos para las llamadas asincronas
        loop = asyncio.get_event_loop()
        loop.run_until_complete(download_files(urls))

        print("End download")
    print("Start process")

    '''
    process 0 --> process all
    process 1 --> process peliculas
    process 2 --> process rating
    process 3 --> process actores
    process 4 --> process directores
    process 5 --> process episodios
    process 6 --> process personas
    
    '''
    #Si el acceso a base de datos en los argumentos esta activado, se inserta en mongo lo necesario

    if process == 1 or process == 0:
        #Peliculas
        args = [[cons.CONTENT_ID, False],[cons.TYPE, False],[cons.SHORT_TITLE, False],[cons.TITLE, False],
                [cons.IS_ADULT, False],[cons.START_YEAR, False],[cons.END_YEAR, False],[cons.DURATION, False],
                [cons.GENRES, True]]
        peliculas = extract(cons.FILE_FILMS, args)
        if mongo:
            print("DB inserting")
            title_ins = db_title_info.insert_many(peliculas.values())
            #del(peliculas)
            print(title_ins)

    if process == 2 or process == 0:
        #Rating
        args = [[cons.CONTENT_ID, False],[cons.RATING, False],[cons.VOTES, False]]
        rating = extract(cons.FILE_RATING, args)

        #update_field(peliculas, rating)
        if mongo:
            print("DB inserting")
            rating_ins = db_rating_info.insert_many(rating.values())
            #del(rating)
            print(rating_ins)

    #del(rating)

    if process == 3 or process == 0:
        #Actores
        args = [[cons.CONTENT_ID, False],[cons.ACTORS, True]]
        actores = extract(cons.FILE_ACTORS, args)

        #update_field(peliculas, actores)
        if mongo:
            print("DB inserting")
            actores_ins = db_act_info.insert_many(actores.values())
            #del(actores)
            print(actores_ins)

    if process == 4 or process == 0:
        #Directores
        args = [[cons.CONTENT_ID, False],[cons.DIRECTOR, True],[cons.WRITER, True]]
        dir_escri = extract(cons.FILE_DIRECTOR, args)

        #update_field(peliculas, dir_escri)
        if mongo:
            print("DB inserting")
            dir_esc_ins = db_dir_info.insert_many(dir_escri.values())
            #del(dir_escri)
            print(dir_esc_ins)

    if process == 5 or process == 0:
        #Episodios
        args = [[cons.CONTENT_ID, False],[cons.PARENT_SERIE, False],[cons.TEMPORADA, False],[cons.EPISODE, False]]
        episodes = extract(cons.FILE_EPISODES, args)

        #update_field(peliculas, episodes)
        if mongo:
            print("DB inserting")
            ep_ins = db_episodes_info.insert_many(episodes.values())
            #del(episodes)
            print(ep_ins)

    print("Personas process")

    if process == 6 or process == 0:
        #Personas
        args = [[cons.PEOPLE_ID, False],[cons.NAME, False],[cons.BIRTH, False],[cons.DEATH, False],[cons.PROFESSION, True],[cons.FILMS, True]]
        personas = extract(cons.FILE_NAMES, args)
        if mongo:
            print("DB inserting")
            personas_ins = db_people_info.insert_many(personas.values())
            #del(personas)
            print(personas_ins)


        '''
        update_field_to_clear(peliculas,cons.ACTORS,personas)
        update_field_to_clear(peliculas, cons.DIRECTOR, personas)
        update_field_to_clear(peliculas, cons.WRITER, personas)

        update_field_to_clear(personas, cons.FILMS, peliculas)
        '''
    #print(json.dumps(personas, indent=4, sort_keys=True))

    '''
    if mongo:
        print("DB inserting")
        title_ins = db_title_info.insert_many(peliculas.values())
        #del(peliculas)
        people_ins = db_people_info.insert_many(personas.values())
    '''

def update_field_to_clear(obj, key, pers_info):

        for elem in obj.values():
            if key in elem:
                elem[key] = list(map(lambda name:
                    compose_name(name,pers_info),
                    elem[key]))



def compose_name(name, pers_info):

    ret = None
    if name != "\\N":
        try:
            ret = {
                "id": name,
                "name": pers_info[name]["name"]
            }
        except:
            ret = {
            "id": name,
            "name": "Nombre desconocido"
        }
    return ret


#def update_field(obj, update):
'''
    
    #Funcion que actualiza los campos de un diccionario
    #:param obj: Diccionario a modificar
    #:param update: Claves a modificar
    #:return: No necesita ya que los objetos pasan por referencia
    
    
    for upd in update:
        try:
            obj[upd].update(update[upd])
        except:
            print(upd + ' not found')
'''


def update_field(update, db_collection):
    '''
    Funcion que actualiza los campos de un diccionario
    :param obj: Diccionario a modificar
    :param update: Claves a modificar
    :return: No necesita ya que los objetos pasan por referencia
    '''
    for upd in update:
        try:

            data = db_collection.find({"content_id": upd})
            for d in data:
                data_ins = {**d, **update[upd]}
                db_collection.update({"content_id": upd},data_ins)
        except:
            print(upd + ' not found')


def extract(file, args):
    '''
    Funcion que dado un fichero comprimido en gz lo abre y genera un diccionario
    :param file: Nombre del archivo
    :param args: Array Bidimensional con las claves para el diccionario de salida y
              un booleano para indicar si es necesario modificar los datos de string separado por comas a array
              (Valores:
                False --> No necesario
                True --> Necesario
    :return: Diccionario con las clave:valor correspondientes
    '''
    data = pd.read_csv(file, compression='gzip',
                        error_bad_lines=False, sep='\t', low_memory= False)

    reader = data.values
    dict = {}
    for row in reader:
        dict[row[0]] = {}
        cont= 0
        for el in args:
            data = arr_conv(row[cont]) if el[1] else row[cont]
            upd = {
                el[0]: data
            }
            dict[row[0]].update(upd)
            cont += 1
    return dict


async def download_files(urls):

    loop = asyncio.get_event_loop()

    tasks = []

    names = []

    for url in urls:
        print("start + " + url)
        tasks.append(loop.run_in_executor(None, requests.get, url))
        names.append(url.split("/")[-1])
    responses = await asyncio.gather(*tasks, loop=loop)
    print("Done")
    for iterator in range(len(names)):
        with open(names[iterator], "wb") as f:
            f.write(responses[iterator].content)
            f.close()
    #del (responses)


def pretty_print(data):
    print(json.dumps(data, sort_keys=True,indent=4))

def arr_conv(txt):
    return  str(txt).split(",")

if __name__== "__main__":
    main()

