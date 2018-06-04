grammar BCBasicos;

intents
  : intent+
  ;

intent
  : feedback+
  | bye+
  | greeting+
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
  : 'gracias' | 'thanks' | 'thanks'
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
  : 'adios' | 'bye'
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

bye
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
  | GRACIAS VERE LA* (SERIE | PELICULA)
  | GRACIAS LA VERE
  | VERE (ESTA | ESA) (SERIE | PELICULA)
  | ESTA ES TODO (POR* HOY)* GRACIAS*
  | NO GRACIAS
  | BUENA NOCHES
  | SALUDOS
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

SALUDOS
  : 'saludos'
  ;

greeting
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