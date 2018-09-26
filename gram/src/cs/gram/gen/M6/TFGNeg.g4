grammar TFGNeg;

intents
  : intent+
  ;

intent
  : negacion+
  ;

negacion
  : no* elementos+ no elementos*                                              # N1
  | no MEJOR* DE* elementos+                                                  # N2
  | no ES elementos+ ES elementos+                                            # N3
  | no QUIERO elementos+ QUIERO elementos+                                    # N4
  | QUIERO elementos+ no QUIERO* elementos+                                   # N5
  | LO* QUE QUIERO ES* elementos+ no QUIERO* elementos+                       # N6
;

elementos
  : tipoContenido tipoGenero          # E1
  | terms                             # E2
  | tipoGenero                        # E3
  | tipoContenido                     # E4
  | tipoDatos                         # E5
  | tipoGenero tipoGenero             # E6
  ;

no
  : NO
  ;

NO
  : 'no'
  ;
ES
  : 'es' | 'son'
  ;
QUIERO
  : 'quiero'
  ;
PARA
  : 'para'
  ;
DE
  : 'de' | 'del'
  ;
QUE
  : 'que'
  ;
EN
  : 'en'
  ;
MEJOR
  : 'mejor'
  ;
LO
  : 'lo'
  ;



tipoContenido
  : PELICULA | SERIE
  ;

tipoDatos
  : GENERO | TITULO | ACTOR | DIRECTOR | FICHA
  ;

tipoGenero
  : (PARA | DE | QUE)*  (COMEDIA | MIEDO | AVENTURA | DRAMA
  | ACCION | ROMANTICA | DEPORTES | DOCUMENTAL
  | ENTRETENIMIENTO | PENSAR | CLASICA | SUSPENSE | MONSTRUO | THRILLER | WESTER | SITCOM | CRIMEN | POLICIACO
  | FANTASTICO | POLITICA | COMIC | DISTOPIA  | ESPIAS | PARODIA
  | TELENOVELA | FANTASMAS | CORTOMETRAJE | ANIMACION | INFANTIL | PIXAR | MELODRAMA | MARVEL | DC)
  | basadoHechosReales | serieTV | comediaNegra | miniserieDeTV | cienciaFiccion | marvelComics | dcComics | basadoHechosReales | guerraFria | segundaGuerraMundial
  | thrillerPsicologico | dramaRomantico | comediaDramatica | superHeroes | tipoTiempo
  ;

basadoHechosReales
  : BASADO EN* (HECHOS | SITUACIONES) REALES*
  ;
serieTV
  : SERIE DE* TV
  ;
comediaNegra
  : COMEDIA NEGRA
  ;
miniserieDeTV
  : MINISERIE DE* TV
  ;
cienciaFiccion
  : CIENCIA FICCION
  ;
marvelComics
  : MARVEL COMICS
  ;
dcComics
  : DC COMICS
  ;
guerraFria
  : GUERRA FRIA
  ;
segundaGuerraMundial
  : SEGUNDA GUERRA MUNDIAL
  ;
thrillerPsicologico
  : THILLER PSICOLOGICO
  ;
dramaRomantico
  : DRAMA ROMANTICA
  ;
comediaDramatica
  : COMEDIA DRAMA
  ;
superHeroes
  : SUPER HEROE
  ;


MUNDIAL
  : 'mundial'
  ;

PSICOLOGICO
  : 'psicologico'
  ;
THILLER
  : 'thriller'
  ;
FRIA
  : 'fria'
  ;
GUERRA
  : 'guerra'
  ;
DC
  : 'dc'
  ;
COMICS
  : 'comics'
  ;
MARVEL
  : 'marvel'
  ;
CIENCIA
  : 'ciencia'
  ;
MINISERIE
  : 'miniserie'
  ;
MELODRAMA
  : 'melodrama' | 'melodramatico'
  ;
ANIMACION
  : 'animacion'
  ;
PIXAR
  : 'pixar'
  ;
INFANTIL
  : 'infantil'
  ;
CORTOMETRAJE
  : 'corto' | 'cortometraje'
  ;
FANTASMAS
  : 'fantasma' | 'fantasmas'
  ;
DISTOPIA
  : 'distopia'
  ;
ESPIAS
  : 'espia' | 'espias' | 'espionaje'
  ;
PARODIA
  : 'parodia'
  ;
SUPER
  : 'super'
  ;
HEROE
  : 'heroe' | 'heroes'
  ;
COMIC
  : 'comic'
  ;
POLITICA
  : 'politica'
  ;
FANTASTICO
  : 'fantastico' | 'fantasia'
  ;
TELENOVELA
  : 'telenovela'
  ;
POLICIACO
  : 'policiaco'
  ;
CRIMEN
  : 'crimen'
  ;
SITCOM
  : 'sitcom'
  ;
SEGUNDA
  : 'segunda' | 'II'
  ;
NEGRA
  : 'negra'
  ;
TV
  : 'tv'  | 'television'
  ;
BASADO
  : 'basado'
  ;
HECHOS
  : 'hechos' | 'hecho'
  ;
SITUACIONES
  : 'situacion' | 'situaciones' | 'acontecimientos'
  ;
REALES
  : 'reales' | 'real'
  ;
MONSTRUO
  : 'monstruo' | 'monstruoso'
  ;
THRILLER
  : 'trhiller'
  ;
WESTER
  : 'western' | 'oeste'
  ;


tipoEmocion
  : ALEGRIA | TRISTEZA | ODIO | IRA | ENVIDIA | ENFADADO | ENTUSIASMO
   | FUERTE  | NEUTRO | PELIGROSO | SENSIBLE | EGOISTA | VENGANZA | BIEN | SUPER | MAL
   | IRRITABLE | VIOLENCIA | DEPRESION |CULPA | AVARICIA
  ;

//-------tipoEmocion-------------------------------------

ALEGRIA
  : 'alegria'
  ;
TRISTEZA
  : 'tristeza'
  ;
ODIO
  : 'odio'
  ;
IRA
  : 'ira' | 'soberbia'
  ;
ENVIDIA
  : 'envidia'
  ;
ENFADADO
  : 'enfadado' | 'indignacion'
  ;
ENTUSIASMO
  : 'entusiasmo'
  ;
FUERTE
  : 'fuerte'
  ;
NEUTRO
  : 'neutro'
  ;
PELIGROSO
  : 'peligroso'
  ;
SENSIBLE
  : 'sensible' | 'debil' | 'molestia'
  ;
EGOISTA
  : 'egoista'
  ;
VENGANZA
  : 'venganza' | 'rencor' | 'resentimiento'
  ;
BIEN
  : 'bien' | 'superior' | 'genial' | 'estupendo'| 'rosa'
  ;
MAL
  : 'mal' | 'fatal' | 'mierda' | 'fastidio'
  ;
IRRITABLE
  : 'irritable' | 'molesto' | 'impaciencia'
  ;
VIOLENCIA
  : 'violencia' | 'hostilidad' | 'furia' | 'cólera' | 'rabia' | 'animadversión' | 'atropello'
  ;
DEPRESION
  : 'depresion' | 'ansiedad' | 'dolor' | 'angustia' | 'inestable'
  ;
CULPA
  : 'culpa' | 'culpabilidad' | 'remordimiento' | 'culpable'
  ;
AVARICIA
  : 'avaricia'
  ;


tipoTiempo
  : ESTRENO | ACTUAL
  | ultimoLanzamiento | ultimoEstreno | deLasDecadas | esteAnno
  ;
ultimoEstreno
  : ULTIMO ESTRENO
  ;
ultimoLanzamiento
  : ULTIMO LANZAMIENTO
  ;
deLasDecadas
  : DE* ARTIC (DECADA | ANNO)* DE* ARTIC* (CINCUENTA | SESENTA | SETENTA| OCHENTA | NOVENTA)
  ;

ARTIC
  : ('la' | 'el' | 'lo' | 'al' | 'las' | 'los' | 'un' | 'una' | 'unos' | 'unas' | 'del')
  ;

DECADA
  : 'decada' | 'decadas'
  ;
/* Revisar año, no termina de cogelo como tipoTiempo */
esteAnno
  : ESTE ANNO
  ;
ANNO
  : 'ano' | 'anos'
  ;
ESTE
  : 'este'
  ;
CINCUENTA
  : '50' | 'cincuenta'
  ;
SESENTA
  : '60' | 'sesenta'
  ;
SETENTA
  : '70' | 'setenta'
  ;
OCHENTA
  : '80' | 'ochenta'
  ;
NOVENTA
  : '90' | 'noventa'
  ;

ESTRENO
  : 'estreno' | 'estrenos'
  ;
LANZAMIENTO
  : 'lanzamiento' | 'lanzamientos'
  ;
ULTIMO
  : 'ultimo' | 'ultimos'
  ;
ACTUAL
  : 'actual' | 'actualidad'
  ;

/*  RECIENTES   NOVEDADES
Estrenos
novedades

Últimos lanzamientos
Actual/Actualidad
De los 90, 80,70...
De este año
Contemporánea
Moderna
*/
/* OJOOOO emociones que  podrian cuadrar tambien en generos  hacer TOKEN
Hay que revisar los generos para crear las emociones
 Flipar
 Vivir otra realidad

 Aprender inglés
 Indignarme
 Morirme de miedo
 Vivir una aventura
 Motivadora

 Vivir otra realidad

 Volver al pasado
 Para no aburrirme
*/
 /*   COMENTAR  el buscador de Alex pero en movistar no
Ligera
Densa
De menos de 2 horas
De más de 120 minutos
De duración mayor...
De duración menor...
*/


//-------tipoGenero------------------------------------

COMEDIA
  : 'comedia' | 'comedias' | 'risa' | 'reirme' | 'agradable'
  ;
MIEDO
  : 'miedo' | 'terror'
  ;
DRAMA
  : 'drama' | 'triste' | 'dramatica'
  ;
AVENTURA
  : 'aventura' | 'aventuras'
  ;
ACCION
  : 'accion' | 'intensa' | 'bizarra'
  ;
FICCION
  : 'ficcion' | 'ireal' | 'extraterrestres' | 'aliens' | 'marcianos' | 'espacio' | 'futuro' | 'friki'
  ;
ROMANTICA
  : 'romantica' | 'llorar' | 'lagrimas' | 'lacrimojena' | 'llorera' | 'melancolica' | 'melancolia'
  | 'amor' | 'amores' | 'amorios' | 'love' | 'romantico'
  ;
DEPORTES
  : 'deportes'
  ;
DOCUMENTAL
  : 'documental' | 'cultura' | 'aprender' | 'cultural' | 'culturizarme' | 'cultirizar'
  ;
ENTRETENIMIENTO
  : 'entretenimiento' | 'entretenida' | 'entretenerme' | 'entretenernos' | 'entretenerlas' | 'entretenerlos' |
  'desconectar' | 'relajarme' | 'descansar' | 'olvidarme' | 'olvidar' | 'relajarse' | 'buena'
  ;
 // Pasar un buen rato/pasar el rato
PENSAR
  : 'pensar' | 'rara' | 'complicada' | 'trama' | 'reflexionar'
  ;
CLASICA
  : 'clasicas' | 'antiguas'| 'clasico' | 'clasica'
  ;
SUSPENSE
  : 'suspense' | 'intriga'
  ;
ENGANCHARME
  : 'engancharme'
  ;

//-------tipoDatos-------------------------------------

GENERO
  : 'genero' | 'generos'
  ;
TITULO
  : 'titulo' | 'titulado' | 'titulada'
  ;
ACTOR
  : 'actor' | 'actriz' | 'interpretada'
  ;
DIRECTOR
  : 'director' | 'dirigida'
  ;
FICHA
  : 'ficha'
  ;

PELICULA
  : 'pelicula' | 'peliculas' | 'peli' | 'pelis' | 'peliculon'
  ;
SERIE
  : 'serie' | 'series'
  ;



AHORA
  : 'ahora'
  ;
HAYA
  : 'haya' | 'hayan' | 'halla' | 'hallan'
  ;
MOSTRAR
  : 'mostrarme' | 'muestrame' | 'ensenarme' | 'ensename' | 'mostrar'
  ;

SUGERIRME
  : 'sugerirme' | 'sugiereme' | 'sugiere' | 'sugieres'
  ;
HOY
  : 'hoy'
  ;


//--------------------------------------------
tipoPersona
  : PARA* VER EN* (FAMILIA | AMIGOS | NOVIO | MAYORES | JOVENES)
  ;
VER
  : 'ver'
  ;
FAMILIA
  : 'familia' | 'padres' | 'padre' | 'madre' | 'ninos' | 'ninas' | 'nina' | 'nino'
    | 'amiguitos' | 'amiguitas' | 'todos' | 'peques' | 'crios' | 'bebes'
  ;

AMIGOS
  : 'amigos' | 'amigo' | 'amiga' | 'amigas' | 'colegas' | 'colega'| 'companeros' | 'companeras' | 'companero' | 'companera'
  ;
NOVIO
  : 'novio' | 'novia' | 'parienta' | 'ligue' | 'cari' | 'churri' | 'mujer' | 'marido' | 'pareja'
  ;

MAYORES
  : 'mayores' | 'abuelos'
  ;

JOVENES
  : 'jovenes' | 'adolescentes'
  ;


YO
  : 'yo'
  ;
TU
  : 'tu'
  ;



//--------------------------------------------
terms
  : term+
  ;

NUMERO
    : [0-9]+
    ;
numero
  : DIGITO+
  ;
digito
  : DIGITO
  ;
DIGITO
    : [0-9]
    ;

term
  : STRING
  | NUMERO
  ;

EOL
  : '\n'
  ;

STRING
    : [a-zñA-ZÑ]+ // [a-zA-Z0-9();._-]
    ;

WS
    : [ \t\r\n] -> skip
    ;

PUNT
    : [!¿?.,;:_+*'"=)(&%$/\-] -> skip
    ;