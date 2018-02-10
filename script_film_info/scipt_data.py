import csv
import json
import constants as cons
def main():
    #Actores
    args = [[cons.ACTORS, True]]
    actores = extract(cons.FILE_ACTORS, args)
    
    #Personas
    args = [[cons.NAME, False],[cons.BIRTH, False],[cons.DEATH, False],[cons.PROFESSION, True],[cons.FILMS, True]]
    personas = extract(cons.FILE_NAMES, args)
    
    #Peliculas
    args = [[cons.TYPE, False],[cons.SHORT_TITLE, False],[cons.TITLE, False],[cons.IS_ADULT, False],
            [cons.START_YEAR, False],[cons.END_YEAR, False],[cons.DURATION, False],[cons.GENRES, True]]
    peliculas = extract(cons.FILE_FILMS, args)
    
    #Directores
    args = [[cons.DIRECTOR, True],[cons.WRITER, True]]
    dir_escri = extract(cons.FILE_DIRECTOR, args)

    #Episodios
    args = [[cons.PARENT_SERIE, False],[cons.TEMPORADA, False],[cons.EPISODE, False]]
    dir_escri = extract(cons.FILE_EPISODES, args)

    #Rating
    args = [[cons.RATING, False],[cons.VOTES, False]]
    dir_escri = extract(cons.FILE_RATING, args)

    #Rating
    args = [[cons.RATING, False],[cons.VOTES, False]]
    dir_escri = extract(cons.FILE_RATING, args)



def extract(file, args):
  with open(file) as tsvfile:
    reader = csv.reader(tsvfile, delimiter='\t')
    dict = {}
    for row in reader:
      dict[row[0]] = {}
      cont = 1
      for el in args:
        data = arr_conv(row[cont]) if el[1] else row[cont]
        upd = {
          el[0]: data
        }
        dict[row[0]].update(upd)
        cont += 1
  print(json.dumps(dict, sort_keys=True,indent=4))
  return dict


def arr_conv(txt):
    return  txt.split(",")

if __name__== "__main__":
  main()