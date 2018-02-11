import csv
import json
import constants as cons
from pymongo import MongoClient

def main():

  client = MongoClient('localhost', 27017)
  db = client[cons.DB_MOVIE_DATA]
  db_title_info = db[cons.DB_MD_TILE_INFO]
  db_people_info = db[cons.DB_MD_PEOPLE_INFO]
  
  #Peliculas
  args = [[cons.CONTENT_ID, False],[cons.TYPE, False],[cons.SHORT_TITLE, False],[cons.TITLE, False],[cons.IS_ADULT, False],
          [cons.START_YEAR, False],[cons.END_YEAR, False],[cons.DURATION, False],[cons.GENRES, True]]
  peliculas = extract(cons.FILE_FILMS, args)
  
  #Rating
  args = [[cons.CONTENT_ID, False],[cons.RATING, False],[cons.VOTES, False]]
  rating = extract(cons.FILE_RATING, args)

  update_field(peliculas, rating)

  
  #Actores
  args = [[cons.CONTENT_ID, False],[cons.ACTORS, True]]
  actores = extract(cons.FILE_ACTORS, args)
  
  update_field(peliculas, actores)
  
  #Directores
  args = [[cons.CONTENT_ID, False],[cons.DIRECTOR, True],[cons.WRITER, True]]
  dir_escri = extract(cons.FILE_DIRECTOR, args)
  
  update_field(peliculas, dir_escri)

  #Episodios
  args = [[cons.CONTENT_ID, False],[cons.PARENT_SERIE, False],[cons.TEMPORADA, False],[cons.EPISODE, False]]
  episodes = extract(cons.FILE_EPISODES, args)

  update_field(peliculas, episodes)
  
  title_ins = db_title_info.insert_many(peliculas.values())

  #Personas
  args = [[cons.PEOPLE_ID, False],[cons.NAME, False],[cons.BIRTH, False],[cons.DEATH, False],[cons.PROFESSION, True],[cons.FILMS, True]]
  personas = extract(cons.FILE_NAMES, args)
  
  people_ins = db_people_info.insert_many(personas.values())



#Los objetos pasan por referencia, por lo que no es necesario return
def update_field(obj, update):
  for upd in update:
    try:
      obj[upd].update(update[upd])
    except:
      print(upd + ' not found')

def extract(file, args):
  with open(file) as tsvfile:
    reader = csv.reader(tsvfile, delimiter='\t')
    dict = {}
    for row in reader:
      dict[row[0]] = {}
      cont = 0
      for el in args:
        data = arr_conv(row[cont]) if el[1] else row[cont]
        upd = {
          el[0]: data
        }
        dict[row[0]].update(upd)
        cont += 1
  return dict

def pretty_print(data):
   print(json.dumps(data, sort_keys=True,indent=4))

def arr_conv(txt):
    return  txt.split(",")

if __name__== "__main__":
  main()