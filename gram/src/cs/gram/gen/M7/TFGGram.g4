grammar TFGGram;

intents
  : intent+
  ;

intent
  : tfg_intent_find+
  | tfg_intent_recommendC2C+
  | tfg_intent_saludo+
  | tfg_intent_bye+
  //| feedback
  ;

tfg_intent_find
  : QUIERO VER LA* tipo_contenido? titulo
  | LA tipo_contenido titulo
  | ENSENAME LA* tipo_contenido? titulo
  | TIENES titulo
  ;
tipo_contenido
  : SERIE 
  | PELICULA
  ;

titulo
  : TITULO
  ;
TITULO
  : 'titulo'
  ;

genero
  : (PARA | DE | QUE)*  
    (COMEDIA | MIEDO | AVENTURA | DRAMA
    | ACCION | ROMANTICA | DEPORTES | DOCUMENTAL
    | ENTRETENIMIENTO | PENSAR | CLASICA | SUSPENSE )
  ;

COMEDIA
  : 'comedia' | 'comedias' | 'risa' | 'reirme' | 'agradable'
  ;
MIEDO
  : 'miedo'
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




QUIERO
  : 'quiero'
  ;

VER
  : 'ver'
  ;

ENSENAME
  : 'enseñame'
  ;

TIENES
  : 'tienes'
  ;

tfg_intent_recommendC2C
  : ALGO PELICULA* DE genero
  | QUIERO VER UNA PELICULA DE genero
  | ALGO PELICULA* COMO titulo
  | UNA PELICULA* PARECIDA A titulo
  | ALGO COMO LA* PELICULA* titulo
  | PELICULA DE genero
  ;

ALGO
  : 'algo' | 'alguna'
  ;

PARECIDA
  : 'parecida'
  ;

COMO
  : 'como'
  ;

feedback
  : positivo
  | negativo
  ;

positivo
  : GENIAL
  | BIEN GENIAL
  | GRACIAS
  | GRACIAS* ME GUSTA
  | BUENA SELECCION
  | AHORA SI
  | OLE
  | ESTA ERA
  | PERFECTO
  | ACABO DE* VERLA
  | PERFECTO ME LA* GUARDO LA* RECOMENDACION* PARA MAS TARDE
  | (ESTA | ESA) ESTA BIEN (GRACIAS | ADIOS)
  | VERE (ESTA | ESA) PERO NO ME CONVENCES NADA
  | ME PARECE MUY BUENA RECOMENDACION
  | NO ESTA MAL
  | MUY BIEN
  | (ESTA | ESA) ESTA MUY* BIEN
  | (ESTA | ESA) ME GUSTA
;


GRACIAS
  : 'gracias'
  ;
GENIAL  
  : 'genial'
  ;
PERFECTO
  : 'perfecto'
  ;
BIEN
  : 'bien'
  ;
MAL
  : 'mal'
  ;
BUENA
  : 'buena' | 'buenas'
  ;
ME
  : 'me'
  ;
GUSTA
  : 'gusta' | 'gustan'
  ;
SELECCION
  : 'seleccion'
  ;
AHORA
  : 'ahora'
  ;
SI
  : 'si'
  ;
OLE
  : 'ole'
  ;
ACABO
  : 'acabo'
  ;
DE
  : 'de'
  ;
VERLA
  : 'verla'
  ;
LA
  : 'la'
  ;
GUARDO
  : 'guardo'
  ;
PARA
  : 'para'
  ;
MAS
  : 'mas'
  ;
TARDE
  : 'tarde'
  ;
RECOMENDACION
  : 'recomendacion' | 'recomendaciones'
  ;
ESTA
  : 'esta' | 'estas' | 'esto' | 'estos'
  ;
ESA
  : 'esa' | 'esas' | 'eso' | 'esos'
  ;
ERA
  : 'era'
  ;
PARECE
  : 'parece' | 'parecen'
  ;
ADIOS
  : 'adios'
  ;
VERE
  : 'vere'
  ;
PERO
  : 'pero'
  ;
NO 
  : 'no'
  ;
CONVENCES
  : 'convences'
  ;
NADA
  : 'nada'
  ;
MUY
  : 'muy'
  ;


negativo
  : NEGATIVO
  ;

NEGATIVO
  : 'negativo'
  ;

tfg_intent_bye
  : ADIOS ADIOS*
  | ADIOS GRACIAS
  | GRACIAS ADIOS
  | HASTA LUEGO
  | ME VOY
  | HASTA (MANANA | PRONTO)
  | ME VOY A* TRABAJAR (UN RATO)*
  | NADA MAS
  | CHAO
  | ES TODO
  | HASTA MANANA
  | GRACIAS VERE LA* tipo_contenido
  | GRACIAS LA VERE
  | VERE (ESTA | ESA) tipo_contenido
  | ESTA ES TODO (POR* HOY)* GRACIAS*
  | NO GRACIAS
  | BUENA NOCHES
  ;

BYE
  : 'bye'
  ;
HASTA
  : 'hasta'
  ;
LUEGO
  : 'luego'
  ;
VOY
  : 'voy'
  ;
MANANA
  : 'mañana'
  ;
A
  : 'a'
  ;
TRABAJAR
  : 'trabajar'
  ;
UN
  : 'un'
  ;
RATO
  : 'rato'
  ;
PRONTO
  : 'pronto'
  ;
CHAO
  : 'chao'
  ;
ES  
  :'es'
  ;
TODO
  : 'todo'
  ;
SERIE
  : 'serie'
  ;
PELICULA
  : 'pelicula' | 'peli'
  ;
POR
  : 'por'
  ;
HOY
  : 'hoy'
  ;
NOCHES
  : 'noches'
  ;



tfg_intent_saludo
  : HOLA DE* NUEVO* OTRA* VEZ* BOT*
  | HOLA BOT* BUENA QUE* TAL*
  | HOLA* BUENA (TARDE | DIAS)* BOT*
  | YA HAS VUELTO
  | BIEN ME* GUSTA QUE* HAYAS VUELTO
  | EMPEZAR
  | HOLA ESTA ES UNA PRUEBA
  | HOLA AQUI ESTOY DE NUEVO
  ;

HOLA
  : 'ey' | 'hola' | 'hi' | 'helo' | 'hello' |'hey' | 'hoola' | 'holaaaa'
  ;
TARDES
  : 'tardes'
  ;
BOT
  : 'bot' | 'botcorn'
  ;
YA
  : 'ya'
  ;
HAS
  : 'has'
  ;
OTRA
  : 'otra'
  ;
VUELTO
  : 'vuelto'
  ;
QUE
  : 'que'
  ;
HAYAS
  : 'hayas'
  ;
ESTOY
  : 'estoy'
  ;
NUEVO
  : 'nuevo'
  ;
VEZ
  : 'vez'
  ;
EMPEZAR
  : 'empezar'
  ;
DIAS
  : 'dia' | 'dias'
  ;
PRUEBA
  : 'prueba'
  ;
UNA
  : 'una'
  ;
TAL
  : 'tal' | 'tla'
  ;
AQUI
  : 'aqui'
  ;


WS
    : [ \t\r\n] -> skip
    ;

PUNT
    : [!¿?.,;:_+*"'=)(&%$/\-] -> skip
    ;