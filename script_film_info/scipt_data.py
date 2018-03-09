# -*- coding: utf-8 -*

import json

import constants as cons
from pymongo import MongoClient
import asyncio
import requests
import pandas as pd

def main():

    #Cliente Mongo
    client = MongoClient(cons.MONGO_URL, cons.MONGO_PORT)
    db = client[cons.DB_MOVIE_DATA]
    db_title_info = db[cons.DB_MD_TILE_INFO]
    db_people_info = db[cons.DB_MD_PEOPLE_INFO]

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
    #loop = asyncio.get_event_loop()
    #loop.run_until_complete(download_files(urls))

    print("End download, start process")

    #Peliculas
    args = [[cons.CONTENT_ID, False],[cons.TYPE, False],[cons.SHORT_TITLE, False],[cons.TITLE, False],
            [cons.IS_ADULT, False],[cons.START_YEAR, False],[cons.END_YEAR, False],[cons.DURATION, False],
            [cons.GENRES, True]]
    peliculas = extract(cons.FILE_FILMS, args)


    #Rating
    args = [[cons.CONTENT_ID, False],[cons.RATING, False],[cons.VOTES, False]]
    rating = extract(cons.FILE_RATING, args)

    update_field(peliculas, rating)

    #del(rating)

    #Actores
    args = [[cons.CONTENT_ID, False],[cons.ACTORS, True]]
    actores = extract(cons.FILE_ACTORS, args)

    update_field(peliculas, actores)

    #del(actores)

    #Directores
    args = [[cons.CONTENT_ID, False],[cons.DIRECTOR, True],[cons.WRITER, True]]
    dir_escri = extract(cons.FILE_DIRECTOR, args)

    update_field(peliculas, dir_escri)

    #del(dir_escri)

    #Episodios
    args = [[cons.CONTENT_ID, False],[cons.PARENT_SERIE, False],[cons.TEMPORADA, False],[cons.EPISODE, False]]
    episodes = extract(cons.FILE_EPISODES, args)

    update_field(peliculas, episodes)

    #del(episodes)

    print("Personas processi")

    #Personas
    args = [[cons.PEOPLE_ID, False],[cons.NAME, False],[cons.BIRTH, False],[cons.DEATH, False],[cons.PROFESSION, True],[cons.FILMS, True]]
    personas = extract(cons.FILE_NAMES, args)

    update_field_to_clear(peliculas,cons.ACTORS,personas)
    update_field_to_clear(peliculas, cons.DIRECTOR, personas)
    update_field_to_clear(peliculas, cons.WRITER, personas)

    update_field_to_clear(personas, cons.FILMS, peliculas)

    #print(json.dumps(personas, indent=4, sort_keys=True))

    print("DB inserting")

    title_ins = db_title_info.insert_many(peliculas.values())
    #del(peliculas)
    #people_ins = db_people_info.insert_many(personas.values())


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


def update_field(obj, update):
    '''
    Funcion que actualiza los campos de un diccionario
    :param obj: Diccionario a modificar
    :param update: Claves a modificar
    :return: No necesita ya que los objetos pasan por referencia
    '''
    for upd in update:
        try:
            obj[upd].update(update[upd])
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

