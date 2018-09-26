grammar AURATV;

intents
  : intent+
  ;

intent
  : coletilla* channel_switch+
  | search+
  | search_content_by_time+
  | channel_get_info+
  | search_similar+
  | search_sport+
  | play+
  | record+
  | from_beginning+
  | common_greetings+
  | common_goodbyes+
  | common_help+
  | common_swearwords+
  | common_thankyous+
  ;

// ---------POSITIVO--------
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


// ----NEGATIVO-----------

NEGATIVO
  : 'negativo'
  ;

//-----BYE-----------------------

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


//-----GREETINGS-----------------------

HOLA
  : 'ey' | 'hola' | 'hi' | 'helo' | 'hello' |'hey' | 'hoola' | 'holaaaa'
  ;
TARDES
  : 'tardes'
  ;
BOT
  : 'bot' | 'aura'
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

//-----AYUDA-----------------------

AYUDA
  : 'ayuda'
  ;

//
//----------------------------
//
coletilla
  : QUIERO QUE*
  | ME GUSTARIA
  | POR FAVOR
  | (SE | ME) PUEDES
  ;
QUIERO
  : 'quiero'
  ;
GUSTARIA
  : 'gustaria'
  ;
FAVOR
  : 'favor'
  ;
SE
  : 'se'
  ;
PUEDES
  : 'puedes' | 'puede'
  ;

//
//-------- Intents Grammar Rules -----------------
//

//
//-------- Intent --- channel_switch -----------------
//
channel_switch
  : (SAL | ABANDONA) time_instant* EL* CANAL Y (CAMBIA | PON | PASA) A (EL|LA)* audiovisual_channel
  | (CAMBIA | VE) time_instant* A* audiovisual_channel compo_device*
  | time_instant* (CAMBIA | VE) A* LA* CANAL* audiovisual_channel time_instant* compo_device*
  | time_instant* (CAMBIA | VE) (A* LA* | AL*) audiovisual_channel 
  | (CAMBIA | VE) audiovisual_channel compo_device* time_instant*
  | compo_device* (CAMBIA | VE) (A| AL)* CANAL* audiovisual_channel time_instant* compo_device*
  | time_instant* (CAMBIA | VE) audiovisual_channel compo_device*
  | (CAMBIA | VE) DE* CANAL* 
      ( A VER QUE DAN EN* (EL | LA) CANAL* audiovisual_channel 
      | (A | AL | DE)* CANAL* audiovisual_channel compo_device* time_instant*
      | A* LA* audiovisual_channel
      | compo_device* A* audiovisual_channel compo_device* time_instant* compo_device*
      | time_instant* QUIERO VER  audiovisual_channel compo_device*
      | A audiovisual_channel time_instant* NO QUIERO VER ESTO
      | QUIERO VER audiovisual_channel time_instant*
      | time_instant* QUIERO VER audiovisual_channel
      ) POR* EJEMPLO*
  | (CAMBIA | VE) 
      ( (DEL | EL | DE)* CANAL ACTUAL A* audiovisual_channel time_instant*
      | (ESTE | EL)* CANAL A* audiovisual_channel time_instant*
      | (ESTE | EL)* CANAL time_instant* A* audiovisual_channel
      | A* OTRA* CANAL A* audiovisual_channel
      ) POR* EJEMPLO*
  | time_instant* (CAMBIA | VE) Y (PON | PASA | VE A*) time_instant* audiovisual_channel time_instant*

  | (PON | PASA) (EL | LA)* CANAL* DE* audiovisual_channel compo_device* time_instant*
  | (PON | PASA) (EL | LA)* CANAL* DE* audiovisual_channel time_instant* compo_device*
  | (PON | PASA) compo_device* audiovisual_channel time_instant*
  | time_instant* (PON | PASA) (EL | LA)* CANAL* DE* compo_device* audiovisual_channel 
  | time_instant* (PON | PASA) (EL | LA)* CANAL* DE* audiovisual_channel compo_device* 
  
  | DEJAME* VER (UN | EL | OTRO)* CANAL* audiovisual_channel compo_device* time_instant*
  | DEJAME* VER (UN | EL | OTRO)* CANAL* audiovisual_channel time_instant* compo_device*
  | DEJAME* VER time_instant* (UN | EL | OTRO)* CANAL* audiovisual_channel  compo_device*
  | time_instant* QUIERO* VER (UN | EL | OTRO)* CANAL* audiovisual_channel  compo_device*

  | DEJAME* VER UNO DE* LOS CANAL audiovisual_channel time_instant* compo_device*
  | DEJAME* VER UNO DE* LOS CANAL audiovisual_channel compo_device* time_instant*

  | ME CAMBIA (DE | AL)* CANAL A* audiovisual_channel compo_device* time_instant*
  | ME CAMBIA (DE | AL)* CANAL A* audiovisual_channel time_instant* compo_device*

  | MUEVETE AL* CANAL audiovisual_channel

  | PASA (A | AL | EL)* OTRO* CANAL* A* audiovisual_channel time_instant* compo_device*
  | PASA (A | AL | EL)* OTRO* CANAL* A* audiovisual_channel compo_device* time_instant*
  | PASA time_instant* (A | AL)* OTRO* CANAL* A* audiovisual_channel compo_device* 

  | (BUSCA | LANZA) 
      ( (AL | EL)* CANAL* audiovisual_channel time_instant* compo_device*
      | (AL | EL)* CANAL* audiovisual_channel compo_device* time_instant*
      | compo_device* (AL | EL)* CANAL* audiovisual_channel time_instant*
      | time_instant* (AL | EL)* CANAL* audiovisual_channel compo_device*
      | time_instant* compo_device* (AL | EL)* CANAL* audiovisual_channel 
      | LA* audiovisual_channel time_instant* compo_device*
      )
  | time_instant* (BUSCA | LANZA) compo_device* (AL | EL)* CANAL* audiovisual_channel 

  | time_instant* PON EL* CANAL
  | PON EL* CANAL time_instant*
  | PASA A OTRO CANAL

  | EL* CANAL audiovisual_channel time_instant* compo_device*
  | EL* CANAL audiovisual_channel compo_device* time_instant*
  | time_instant* CANAL audiovisual_channel compo_device*

  | EN* audiovisual_channel time_instant* compo_device*
  | EN* audiovisual_channel compo_device* time_instant*

  | time_instant* audiovisual_channel compo_device*

  | time_instant* UNA* DE* LA* audiovisual_channel compo_device*
  ;


//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

//
//
//-------- Intent --- search -----------------
//
search
  : audiovisual_genre DE audiovisual_releases
  | audiovisual_genre DE audiovisual_releases DE audiovisual_actor
  | audiovisual_best audiovisual_genre DE audiovisual_releases DE audiovisual_director
  | QUE audiovisual_genre audiovisual_releases DE audiovisual_director time_interval
  | QUE audiovisual_genre audiovisual_releases DE audiovisual_actor time_interval
  | QUE audiovisual_genre audiovisual_releases time_interval DE audiovisual_actor
  | QUE audiovisual_genre audiovisual_releases DE audiovisual_actor time_interval
  | QUE audiovisual_releases DE audiovisual_director time_interval
  | time_interval QUE audiovisual_genre audiovisual_releases DE audiovisual_actor
  | time_interval QUE audiovisual_genre DE audiovisual_actor audiovisual_releases
  | time_interval QUE audiovisual_genre audiovisual_releases audiovisual_actor
  | time_interval QUE audiovisual_genre audiovisual_releases DE audiovisual_actor
  | time_interval QUE audiovisual_genre DE audiovisual_actor audiovisual_releases
  | QUE audiovisual_releases time_interval audiovisual_actor
  | DE audiovisual_director QUE audiovisual_releases
  | QUE audiovisual_releases DE audiovisual_director
  | QUE audiovisual_releases DE audiovisual_director time_interval
  | QUE audiovisual_releases DE audiovisual_actor
  | CUALES SON LAS QUE audiovisual_releases DE audiovisual_actor
  | CUALES SON LAS audiovisual_releases DE audiovisual_actor
  | CUALES SON LAS audiovisual_releases DE audiovisual_actor
  | CUAL ES LA audiovisual_releases DE audiovisual_actor
  | CUAL ES LA audiovisual_releases DE audiovisual_actor
  | CUAL ES EL audiovisual_releases DE audiovisual_actor
  | BUSCA UNA audiovisual_genre audiovisual_releases DE audiovisual_actor
  | CUAL ES EL audiovisual_genre DE audiovisual_releases DE audiovisual_actor
  | CUAL ES LA audiovisual_genre DE audiovisual_releases DE audiovisual_actor
  | time_interval QUE audiovisual_releases DE audiovisual_director
  | time_interval QUE audiovisual_releases DE audiovisual_director
  | CUAL ES LA audiovisual_genre audiovisual_releases DE audiovisual_director
  | CUAL ES LA audiovisual_genre audiovisual_releases DE audiovisual_director
  | CUAL ES EL audiovisual_genre audiovisual_releases DE audiovisual_director
  | CUAL ES EL audiovisual_genre audiovisual_releases DE audiovisual_actor
  | CUAL ES EL audiovisual_genre QUE audiovisual_releases DE audiovisual_actor
  | CUAL ES LA audiovisual_genre QUE audiovisual_releases DE audiovisual_actor
  | CUAL ES LA audiovisual_genre QUE audiovisual_releases DE audiovisual_actor
  | CUAL ES LA audiovisual_genre audiovisual_releases QUE audiovisual_releases DE audiovisual_actor
  | audiovisual_best audiovisual_genre DE audiovisual_releases
  | QUE audiovisual_genre audiovisual_releases time_interval
  | QUE audiovisual_genre audiovisual_releases time_interval
  | QUE audiovisual_genre audiovisual_releases time_interval
  | QUE audiovisual_genre audiovisual_releases time_interval
  | QUE audiovisual_releases time_interval
  | time_interval QUE audiovisual_genre audiovisual_releases
  | time_interval QUE audiovisual_genre audiovisual_releases
  | time_interval QUE audiovisual_genre audiovisual_releases
  | time_interval QUE audiovisual_genre audiovisual_releases
  | QUE audiovisual_releases time_interval
  | QUE audiovisual_releases HAY time_interval
  | QUE audiovisual_releases
  | CUALES SON LAS QUE audiovisual_releases
  | ALGO PARA VER EN MI device
  | BUSCA EN LA device UN audiovisual_genre DE audiovisual_subgenre
  | BUSCA EN MI device ALGO DE audiovisual_subgenre
  | BUSCAME EN LA device UNA audiovisual_genre DE audiovisual_subgenre
  | BUSCAME POR FAVOR ALGO DE audiovisual_subgenre EN LA device
  | DAME ALGO PARA VER EN LA device
  | ENSEÑAME ALGO DE audiovisual_subgenre EN LA device
  | ENSEÑAME EN LA device ALGO DE audiovisual_subgenre
  | ME APETECE ALGO audiovisual_subgenre EN LA device
  | ME APETECE MAS ALGO DE audiovisual_subgenre EN LA device
  | ME GUSTARIA VER ALGO MAS SOBRE audiovisual_subgenre EN MI device
  | MEJOR ALGO DE audiovisual_subgenre EN LA device
  | MAS audiovisual_subgenre EN LA device
  | MAS audiovisual_subgenre EN MI device
  | MAS audiovisual_genre EN LA device
  | OTROS audiovisual_genre PERO EN LA device
  | QUIERO UNA audiovisual_genre PERO EN LA device
  | QUIERO VER ALGO EN LA device
  | RECOMIENDAME ALGO PARA VER EN LA device
  | UNA audiovisual_subgenre PERO EN LA device
  | SI EN MI device UNA audiovisual_genre SOBRE audiovisual_subgenre
  | VER ALGO EN LA device
  | HAY ALGUNA audiovisual_genre DE audiovisual_subgenre EN LA device
  | HAY ALGUNA audiovisual_subgenre DISPONIBLE EN LA device
  | HAY EN LA device ALGUNA audiovisual_genre DISPONIBLE
  | ME RECOMIENDAS ALGO PARA VER EN LA device
  | PUEDES BUSCARME ALGO PARA VER EN LA device
  | PUEDES BUSCARME ALGO PARA VER EN EL device
  | PUEDES DECIRME ALGO PARA VER EN MI device
  | QUE audiovisual_genre HAY EN EL CATALOGO DE LA device
  | QUE audiovisual_genre PUEDO EMPEZAR A VER EN LA device
  | QUE PUEDO VER EN MI device
  | TIENES ALGO PARA VER EN LA device
  | Y ALGO DE audiovisual_subgenre EN LA device
  | Y QUE TAL ALGO DE audiovisual_subgenre EN LA device
  | QUE PUEDO VER EN MI device time_instant
  | time_instant QUE PUEDO VER EN MI device
  | time_instant EN LA device QUE PUEDO VER
  | EN LA device time_instant QUE PUEDO VER
  | QUE audiovisual_genre HAY EN LA device
  | DIME SI HAY time_instant ALGUN audiovisual_genre audiovisual_subgenre EN MI device
  | ME PUEDES DECIR ALGUN audiovisual_genre DE audiovisual_subgenre QUE ECHEN time_interval EN LA device
  | DEJAME VER audiovisual_tvseries_title EN LA device
  | ESTOY INTERESADO EN VER audiovisual_tvseries_title EN MI device
  | LANZAR audiovisual_tvseries_title A LA device
  | NOS GUSTARIA PONER LA audiovisual_genre DE audiovisual_film_title EN MI device
  | ME MOLARIA VER EN MI device audiovisual_film_title
  | ME MOLARIA VER audiovisual_film_title EN MI device
  | PON A REPRODUCIR LA audiovisual_genre DE audiovisual_film_title EN MI device
  | PON audiovisual_tvseries_title EN LA device
  | PONER audiovisual_film_title EN LA device
  | VER LA audiovisual_genre DE audiovisual_film_title EN LA device
  | QUIERO QUE ME PONGAS audiovisual_tvseries_title EN LA device
  | QUIERO QUE PONGAS audiovisual_tvseries_title EN MI device
  | QUIERO QUE PONGAS A REPRODUCIR EN LA device audiovisual_tvseries_title
  | QUIERO QUE PONGAS A REPRODUCIR LA audiovisual_genre DE audiovisual_tvseries_title EN LA device
  | QUIERO QUE REPRODUZCAS audiovisual_tvseries_title EN LA device
  | QUIERO REPRODUCIR LA audiovisual_genre DE audiovisual_film_title EN LA device
  | QUIERO VER EN LA device EL audiovisual_genre audiovisual_tvseries_title AHORA
  | QUIERO VER EL audiovisual_genre audiovisual_tvseries_title EN LA device
  | QUIERO VER EN LA device LA audiovisual_genre audiovisual_film_title
  | QUIERO VER LA audiovisual_genre DE audiovisual_film_title EN LA device
  | QUIERO VER EN LA device LA audiovisual_genre DE audiovisual_tvseries_title
  | QUIERO VER EN LA device audiovisual_film_title
  | QUIERO VER audiovisual_tvseries_title EN MI device
  | QUIERO VER audiovisual_film_title EN LA device
  | QUIERO VER audiovisual_tvseries_title EN MI device
  | REPRODUCE audiovisual_film_title EN MI device
  | REPRODUCE EN LA device LA audiovisual_genre DE audiovisual_film_title
  | REPRODUCIR audiovisual_film_title EN LA device
  | VER EN LA device audiovisual_film_title
  | VER audiovisual_film_title EN LA device
  | COMO HAGO PARA VER audiovisual_tvseries_title EN LA device
  | COMO PONGO audiovisual_film_title EN MI device
  | TIENES EN LA device LA audiovisual_genre DE audiovisual_tvseries_title
  | PUEDO VER audiovisual_tvseries_title EN LA device
  | PUEDO VER EL QUINTO CAPITULO DE audiovisual_tvseries_title EN LA device
  | QUE HAGO SI QUIERO PONER LA audiovisual_genre DE audiovisual_film_title EN LA device
  | QUE TENGO QUE HACER PARA VER audiovisual_film_title EN LA device
  | QUE audiovisual_genre DE audiovisual_film_title TIENES EN LA device
  | QUE TIENES DE audiovisual_film_title EN LA device
  | PUEDES REPRODUCIR LA audiovisual_genre DE audiovisual_tvseries_title EN MI device GRACIAS
  | PUEDES PONER A REPRODUCIR LA audiovisual_genre DE audiovisual_tvseries_title EN LA device
  | PUEDES PONERME audiovisual_tvseries_title EN LA device
  | PON EN LA device audiovisual_film_title
  | PON audiovisual_tvseries_title EN MI device
  | ME PUEDES PONER audiovisual_tvseries_title EN LA device GRACIAS
  | BUSCA ALGUN audiovisual_genre EN LA device DE audiovisual_actor
  | BUSCA ALGUN audiovisual_genre EN LA device DE audiovisual_director
  | PON audiovisual_film_title EN LA device
  | PON audiovisual_tvseries_title EN LA device
  | PON audiovisual_film_title EN LA device
  | PASAME audiovisual_film_title A LA device
  | PASAME A LA device audiovisual_tvseries_title
  | PASA A LA device audiovisual_tvseries_title
  | PASA audiovisual_film_title A LA device
  | PON audiovisual_tvseries_title EN LA device
  | audiovisual_film_title EN LA device
  | PON audiovisual_tvseries_title EN MI device
  | MEJOR BUSCA ALGO DE audiovisual_subgenre DE LO audiovisual_best EN LA device
  | POR FAVOR BUSCAME ALGO DE audiovisual_subgenre Y audiovisual_subgenre audiovisual_releases EN LA device
  | BUSCA ALGO DE audiovisual_subgenre audiovisual_releases EN LA device
  | DAME LOS audiovisual_releases DE audiovisual_subgenre EN MI device
  | DAME LOS audiovisual_releases DE audiovisual_subgenre EN LA device
  | CUALES SON LOS audiovisual_releases QUE HAY time_interval EN LA device
  | CUALES SON LAS audiovisual_releases EN MI device
  | CUALES SON LAS audiovisual_releases DE LA device
  | CUAL ES LA audiovisual_releases EN LA device
  | CUAL ES LA audiovisual_releases EN LA device
  | CUAL ES EL audiovisual_releases DE LA device
  | CUAL ES EL audiovisual_genre DE audiovisual_releases EN LA device
  | EN LA device CUAL ES LA audiovisual_genre DE audiovisual_releases
  | EN LA device CUAL ES LO audiovisual_releases
  | audiovisual_tvseries_title EN LA device
  | audiovisual_film_title EN LA device
  | audiovisual_film_title EN MI device
  | audiovisual_tvseries_title EN LA device
  | audiovisual_tvseries_title EN MI device
  | EN LA device audiovisual_film_title
  | CUALES SON LOS audiovisual_releases QUE HAY time_interval
  | CUALES SON LAS audiovisual_releases
  | CUALES SON LAS audiovisual_releases
  | CUAL ES LA audiovisual_releases
  | CUAL ES LA audiovisual_releases
  | CUAL ES EL audiovisual_releases
  | CUAL ES EL audiovisual_genre DE audiovisual_releases
  | CUAL ES LA audiovisual_genre DE audiovisual_releases
  | time_interval QUE audiovisual_releases
  | time_interval QUE audiovisual_releases
  | CUAL ES LA audiovisual_genre audiovisual_releases
  | CUAL ES LA audiovisual_genre audiovisual_releases
  | CUAL ES EL audiovisual_genre audiovisual_releases
  | CUAL ES EL audiovisual_genre audiovisual_releases
  | CUAL ES EL audiovisual_genre QUE audiovisual_releases
  | CUAL ES LA audiovisual_genre QUE audiovisual_releases
  | CUAL ES LA audiovisual_genre QUE audiovisual_releases
  | CUAL ES LA audiovisual_genre audiovisual_releases QUE audiovisual_releases
  | CUAL ES LA audiovisual_genre audiovisual_releases QUE audiovisual_releases
  | CUAL ES LA audiovisual_genre audiovisual_releases time_interval
  | CUAL ES LA audiovisual_genre audiovisual_releases DE time_interval
  | CUAL ES LA audiovisual_genre audiovisual_releases time_interval
  | CUAL ES EL audiovisual_genre audiovisual_releases time_interval
  | CUAL ES EL audiovisual_genre audiovisual_releases time_interval
  | CUAL ES EL audiovisual_genre QUE audiovisual_releases time_interval
  | CUAL ES LA audiovisual_genre QUE audiovisual_releases time_interval
  | CUAL ES LA audiovisual_genre QUE audiovisual_releases time_interval
  | CUAL ES LA audiovisual_genre audiovisual_releases QUE audiovisual_releases time_interval
  | CUAL ES LA audiovisual_genre audiovisual_releases QUE audiovisual_releases time_instant
  | time_interval CUAL ES LA audiovisual_genre audiovisual_releases
  | time_interval CUAL ES LA audiovisual_genre audiovisual_releases
  | time_interval CUAL ES EL audiovisual_genre audiovisual_releases
  | time_interval CUAL ES EL audiovisual_genre audiovisual_releases
  | time_interval CUAL ES EL audiovisual_genre QUE audiovisual_releases
  | time_interval CUAL ES LA audiovisual_genre QUE audiovisual_releases
  | time_interval CUAL ES LA audiovisual_genre QUE audiovisual_releases
  | time_interval CUAL ES LA audiovisual_genre audiovisual_releases QUE audiovisual_releases
  | time_instant CUAL ES LA audiovisual_genre audiovisual_releases QUE audiovisual_releases
  | audiovisual_best audiovisual_genre
  | audiovisual_genre audiovisual_best
  | audiovisual_genre audiovisual_most_watched
  | audiovisual_most_watched DE audiovisual_subgenre
  | audiovisual_genre audiovisual_most_watched DE audiovisual_subgenre
  | audiovisual_genre audiovisual_most_watched audiovisual_subgenre
  | audiovisual_best audiovisual_genre
  | audiovisual_genre audiovisual_most_watched
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre SOBRE audiovisual_subgenre Y PODER
  | audiovisual_genre SOBRE audiovisual_subgenre
  | audiovisual_subgenre DE audiovisual_subgenre O DE audiovisual_subgenre
  | audiovisual_subgenre Y audiovisual_subgenre
  | audiovisual_genre audiovisual_subgenre
  | audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre audiovisual_subgenre DE NAVIDAD
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre DE audiovisual_subgenre audiovisual_subgenre
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre INCLUIDA EN EL PAQUETE DE MOVISTAR PLUS
  | audiovisual_genre QUE HAYAN GANADO UN OSCAR
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre audiovisual_subgenre
  | audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre audiovisual_subgenre DE NAVIDAD
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre DE audiovisual_subgenre audiovisual_subgenre
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre audiovisual_subgenre
  | audiovisual_genre audiovisual_subgenre
  | audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre audiovisual_subgenre DE NAVIDAD
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_subgenre
  | audiovisual_subgenre
  | audiovisual_genre
  | audiovisual_genre
  | QUIERO VER LOS CONTENIDOS audiovisual_most_watched DE audiovisual_subgenre
  | QUIERO VER LOS CONTENIDOS audiovisual_most_watched DE audiovisual_genre
  | BUSCA ALGO QUE VER DE audiovisual_releases
  | BUSCA ALGO QUE VER audiovisual_releases
  | BUSCA ALGO PARA VER audiovisual_releases
  | CUALES SON LOS audiovisual_genre audiovisual_most_watched
  | CUALES SON LAS audiovisual_genre audiovisual_most_watched
  | CUAL ES LA audiovisual_genre audiovisual_most_watched
  | CUAL ES EL audiovisual_genre audiovisual_most_watched
  | LOS audiovisual_genre audiovisual_most_watched
  | audiovisual_genre audiovisual_most_watched
  | DAME LOS audiovisual_releases DE audiovisual_genre audiovisual_most_watched
  | DAME LOS audiovisual_releases DE audiovisual_genre
  | DAME audiovisual_genre DE audiovisual_releases
  | DIME audiovisual_genre DE audiovisual_releases
  | BUSCA audiovisual_genre DE audiovisual_releases
  | QUIERO audiovisual_genre DE audiovisual_releases
  | CUALES SON LAS audiovisual_best audiovisual_genre
  | CUALES SON LOS audiovisual_best audiovisual_genre
  | CUAL ES LA audiovisual_best audiovisual_genre
  | CUAL ES EL audiovisual_best audiovisual_genre
  | BUSCAME LAS audiovisual_genre audiovisual_most_watched
  | BUSCAME EL audiovisual_genre audiovisual_most_watched
  | BUSCAME LOS audiovisual_genre audiovisual_most_watched
  | BUSCAME LA audiovisual_genre audiovisual_most_watched
  | QUIERO ALGO DE audiovisual_genre
  | QUIERO VER ALGO DE audiovisual_genre
  | VER ALGO DE audiovisual_genre
  | VER audiovisual_genre
  | QUIERO VER ALGUNA audiovisual_genre
  | QUIERO VER audiovisual_genre
  | QUIERO VER LOS audiovisual_best audiovisual_genre
  | QUIERO VER LOS audiovisual_genre audiovisual_best
  | QUIERO VER LAS audiovisual_best audiovisual_genre
  | QUIERO VER LAS audiovisual_genre audiovisual_best
  | QUIERO LAS audiovisual_genre audiovisual_most_watched
  | QUIERO LOS audiovisual_genre audiovisual_most_watched
  | QUIERO LAS audiovisual_best audiovisual_genre
  | QUIERO LOS audiovisual_best audiovisual_genre
  | ALGUNA audiovisual_genre DE audiovisual_subgenre
  | QUIERO ALGO DE audiovisual_subgenre DE LO audiovisual_most_watched
  | QUIERO ALGO DE audiovisual_subgenre DE LOS audiovisual_most_watched
  | QUIERO ALGUNA DE audiovisual_subgenre DE LAS audiovisual_most_watched
  | QUIERO VER LA audiovisual_genre audiovisual_film_title
  | QUIERO VER LA audiovisual_genre audiovisual_film_title
  | VER audiovisual_film_title
  | QUIERO VER audiovisual_genre DE audiovisual_genre
  | QUIERO VER audiovisual_genre DE audiovisual_actor
  | ALGUNA DE audiovisual_actor
  | audiovisual_genre DE audiovisual_director
  | audiovisual_genre DE audiovisual_actor
  | ALGUNA DE audiovisual_director
  | ACONSEJAME ALGO DE audiovisual_subgenre
  | ACONSEJAME ALGO DE audiovisual_subgenre
  | ACONSEJAME ALGO DE audiovisual_subgenre
  | ACONSEJAME ALGUNA audiovisual_genre audiovisual_subgenre
  | ACONSEJAME ALGUNA DE audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | ACONSEJAME ALGUN audiovisual_genre DE audiovisual_subgenre
  | ACONSEJAME ALGUN audiovisual_genre DE audiovisual_subgenre
  | ACONSEJAME MAS audiovisual_subgenre
  | ACONSEJAME MAS DE audiovisual_subgenre Y audiovisual_subgenre
  | ACONSEJAME MAS DE audiovisual_subgenre Y audiovisual_subgenre
  | ACONSEJAME UNA audiovisual_subgenre
  | ADORO LO audiovisual_subgenre TIENES ALGO
  | ADORO LOS audiovisual_genre SOBRE audiovisual_subgenre TIENES ALGUNO
  | AHORA ESTOY SOLO MEJOR UNA audiovisual_genre DE audiovisual_subgenre O audiovisual_subgenre
  | AHORA ESTOY SOLO MEJOR audiovisual_genre DE audiovisual_subgenre O audiovisual_subgenre
  | ALGO audiovisual_subgenre
  | ALGO DE audiovisual_subgenre
  | ALGO DE audiovisual_subgenre
  | ALGO DE audiovisual_subgenre O audiovisual_subgenre
  | ALGO DE audiovisual_genre audiovisual_genre audiovisual_subgenre
  | ALGO DE audiovisual_subgenre
  | ALGO DE audiovisual_subgenre
  | ALGO DE audiovisual_subgenre
  | ALGO PARA VER time_instant
  | ALGO SOBRE audiovisual_subgenre
  | ALGUNA audiovisual_genre DE audiovisual_subgenre audiovisual_subgenre
  | ALGUNA audiovisual_genre audiovisual_subgenre
  | ALGUNA audiovisual_genre DE audiovisual_subgenre
  | ALGUNA audiovisual_genre DE audiovisual_subgenre QUE PUEDA VER
  | ALGUNA audiovisual_genre DEL audiovisual_subgenre
  | BUSCA audiovisual_genre DE audiovisual_subgenre
  | BUSCA audiovisual_subgenre DE audiovisual_subgenre
  | BUSCA audiovisual_genre
  | BUSCA audiovisual_subgenre
  | BUSCA ALGO DE audiovisual_subgenre
  | BUSCA ALGO DE audiovisual_genre
  | BUSCA ALGUN audiovisual_genre
  | BUSCA ALGUN audiovisual_genre PARA time_instant
  | BUSCA ALGUN audiovisual_genre SOBRE audiovisual_subgenre
  | BUSCA UNA audiovisual_subgenre
  | BUSCA ALGO DE audiovisual_subgenre
  | BUSCA ALGO QUE VER
  | BUSCAME ALGO QUE VER
  | BUSCA UNA audiovisual_genre
  | BUSCA ALGUNA audiovisual_genre
  | BUSCA ALGUNA DE audiovisual_subgenre
  | BUSCAME UNA audiovisual_genre
  | BUSCAME ALGUNA audiovisual_genre
  | BUSCAME ALGUNA DE audiovisual_subgenre
  | BUSCAME UNA audiovisual_genre O UNA audiovisual_genre
  | BUSCAME UNA audiovisual_genre Y UNA audiovisual_genre
  | BUSCAME audiovisual_genre Y audiovisual_genre
  | BUSCAME ALGO DE audiovisual_subgenre
  | BUSCAME ALGO DE audiovisual_subgenre Y audiovisual_subgenre
  | BUSCA ALGO DE audiovisual_subgenre Y audiovisual_subgenre
  | BUSCAR ALGO DE audiovisual_subgenre Y audiovisual_subgenre
  | RECOMIENDAME ALGO DE audiovisual_subgenre Y audiovisual_subgenre
  | DAME ALGO DE audiovisual_subgenre Y audiovisual_subgenre
  | DIME ALGO DE audiovisual_subgenre Y audiovisual_subgenre
  | BUSCA UNA DE audiovisual_subgenre
  | BUSCAME UNA audiovisual_subgenre
  | BUSCA UNA audiovisual_subgenre
  | BUSCA UNA audiovisual_genre DE audiovisual_subgenre
  | BUSCA time_instant UN audiovisual_genre DE audiovisual_subgenre
  | BUSCA time_instant ALGO DE audiovisual_subgenre
  | BUSCA UNA audiovisual_subgenre
  | BUSCA UNA audiovisual_subgenre
  | BUSCA UNA DE audiovisual_subgenre
  | BUSCAR audiovisual_genre DE audiovisual_subgenre
  | BUSCAR audiovisual_genre SOBRE audiovisual_subgenre
  | BUSCAR MAS audiovisual_genre DE audiovisual_subgenre
  | BUSCAME audiovisual_genre DEL GENERO audiovisual_subgenre
  | BUSCAME audiovisual_subgenre
  | BUSCAME ALGO DE audiovisual_genre audiovisual_genre
  | BUSCAME ALGUNA audiovisual_genre SOBRE audiovisual_subgenre
  | BUSCAME ALGUN audiovisual_genre DE audiovisual_subgenre
  | BUSCAME MAS DE audiovisual_genre DE audiovisual_subgenre Y audiovisual_subgenre
  | BUSCAME MAS DE audiovisual_genre SOBRE audiovisual_subgenre Y audiovisual_subgenre
  | BUSCAME POR FAVOR ALGO DE audiovisual_subgenre
  | BUSCAME POR FAVOR ALGO DE audiovisual_subgenre PARA time_instant
  | BUSCAME UN audiovisual_subgenre
  | BUSCAME UN audiovisual_subgenre
  | BUSCAME time_instant UNA audiovisual_genre DE audiovisual_subgenre
  | BUSCAME UNA audiovisual_genre DE audiovisual_subgenre
  | BUSCAME UNA audiovisual_genre DEL GENERO audiovisual_subgenre
  | BUSCAME UNA DE audiovisual_genre
  | DAME audiovisual_genre DE audiovisual_subgenre
  | DAME audiovisual_genre DE audiovisual_subgenre audiovisual_subgenre
  | DAME audiovisual_genre DE audiovisual_subgenre
  | DAME audiovisual_genre DE audiovisual_subgenre
  | DAME audiovisual_genre audiovisual_subgenre
  | DAME audiovisual_genre DE audiovisual_subgenre
  | DAME audiovisual_genre
  | DAME audiovisual_genre
  | DAME  UNA DE audiovisual_subgenre
  | DAME  UNA DE audiovisual_subgenre
  | DAME ALGO DE audiovisual_subgenre
  | DAME ALGO DIVERTIDO
  | DAME ALGO PARA VER time_instant
  | DAME ALGO QUE VER
  | DAME ALGO SOBRE audiovisual_subgenre
  | DAME ALGUNA audiovisual_genre
  | DAME MAS RECOMENDACIONES DE audiovisual_genre
  | DAME MAS RECOMENDACIONES DE audiovisual_genre O audiovisual_genre DE CONTENIDO audiovisual_subgenre
  | DAME UNA audiovisual_genre audiovisual_subgenre
  | DAME UNA audiovisual_genre DE audiovisual_subgenre
  | DAME UNA audiovisual_genre
  | DAME UNA audiovisual_genre BUENA
  | DAME UNA audiovisual_genre DE audiovisual_subgenre
  | DAME UNA audiovisual_genre
  | DAME UNA RECOMENDACION DE audiovisual_subgenre Y audiovisual_subgenre
  | DAME UNA RECOMENDACION DE audiovisual_subgenre Y audiovisual_genre SOBRE audiovisual_subgenre
  | DAME UNA RECOMENDACION DE ALGUNA audiovisual_genre DE audiovisual_subgenre Y audiovisual_subgenre
  | DAME UN audiovisual_genre audiovisual_subgenre
  | DE audiovisual_subgenre Y audiovisual_subgenre
  | DE CONTENIDO audiovisual_subgenre Y audiovisual_subgenre
  | DEL GENERO DE audiovisual_subgenre
  | DEL GENERO DE audiovisual_subgenre
  | DEL GENERO DE audiovisual_subgenre
  | DIME audiovisual_genre SOBRE audiovisual_subgenre
  | DIME audiovisual_genre audiovisual_subgenre DE audiovisual_subgenre QUE ME PUEDA GUSTAR
  | DIME ALGO DE audiovisual_subgenre Y audiovisual_subgenre
  | DIME ALGO DE audiovisual_subgenre
  | DIME ALGO DE audiovisual_subgenre
  | DIME ALGO DE audiovisual_subgenre
  | DIME ALGO DE audiovisual_subgenre
  | DIME ALGO PARA MI
  | DIME ALGO PARA VER time_instant
  | DIME ALGO PARA VER POR FAVOR
  | DIME ALGO QUE PUEDA VER time_instant
  | DIME ALGO QUE VER
  | DIME ALGUNA audiovisual_subgenre POR FAVOR
  | DIME ALGUNA audiovisual_subgenre POR FAVOR
  | DIME ALGUNA audiovisual_genre DE audiovisual_subgenre
  | DIME ALGUNA audiovisual_genre DE audiovisual_subgenre QUE ME PUEDA GUSTAR
  | DIME ALGUNA audiovisual_genre POR FAVOR
  | DIME ALGUNA audiovisual_genre DE audiovisual_subgenre
  | DIME ALGUNA audiovisual_genre DE audiovisual_subgenre POR FAVOR
  | DIME ALGUNAS audiovisual_genre
  | DIME LAS audiovisual_genre DE audiovisual_subgenre QUE TENGAS
  | DIME LOS audiovisual_genre QUE TENGAS
  | DIME MAS audiovisual_genre DE audiovisual_subgenre
  | DIME MAS audiovisual_genre SOBRE audiovisual_subgenre
  | DIME QUE audiovisual_genre VEO
  | DIME QUE audiovisual_genre PUEDO VER
  | DIME UNA audiovisual_genre audiovisual_subgenre
  | EN CASA NOS GUSTA LO audiovisual_subgenre NOS PUEDES PONER ALGUNA audiovisual_genre
  | EN CASA NOS GUSTAN LAS audiovisual_subgenre NOS PUEDES PONER ALGUNA audiovisual_genre
  | ENSEÑAME audiovisual_genre audiovisual_genre audiovisual_subgenre
  | ENSEÑAME audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | ENSEÑAME ALGO DE audiovisual_subgenre
  | ENSEÑAME ALGO DE audiovisual_subgenre PARA time_instant
  | ENSEÑAME time_instant ALGO DE audiovisual_subgenre
  | ENSEÑAME ALGO DE audiovisual_subgenre
  | ENSEÑAME ALGUNA audiovisual_genre audiovisual_subgenre
  | ENSEÑAME ALGUNA audiovisual_genre DE audiovisual_subgenre
  | ENSEÑAME ALGUNA audiovisual_genre SOBRE audiovisual_subgenre
  | ENSEÑAME UNA audiovisual_genre SOBRE audiovisual_subgenre
  | ENSEÑAME UNA audiovisual_genre PARA NIÑOS
  | ESTABA PENSANDO EN VER audiovisual_genre DE audiovisual_subgenre CUALES TIENES
  | ESTABA PENSANDO EN VER ALGO DE audiovisual_genre O DE audiovisual_subgenre
  | ESTABA PENSANDO EN VER UNA audiovisual_genre audiovisual_genre CUALES TIENES
  | ESTABA PENSANDO EN VER UNA audiovisual_genre SOBRE audiovisual_subgenre
  | ESTARIA BIEN QUE ME RECOMENDASES ALGO DE audiovisual_subgenre
  | ESTARIA BIEN QUE ME RECOMENDASES ALGO DE audiovisual_subgenre
  | LO QUE QUIERO ES UNA audiovisual_genre DE audiovisual_subgenre
  | ME APETECE ALGO audiovisual_subgenre time_instant
  | ME APETECE ALGO audiovisual_subgenre
  | ME APETECE ALGO DE audiovisual_subgenre
  | ME APETECE MAS ALGO DE audiovisual_genre audiovisual_subgenre
  | ME APETECE MAS ALGO DE audiovisual_subgenre
  | ME APETECE MAS ALGO DE audiovisual_subgenre time_instant
  | ME APETECE MAS ALGO SOBRE audiovisual_subgenre
  | ME APETECE UNA DE audiovisual_subgenre
  | ME APETECE VER audiovisual_genre DE audiovisual_subgenre
  | ME APETECE VER UN audiovisual_genre DE audiovisual_subgenre
  | ME APETECE VER UNA audiovisual_genre DE audiovisual_subgenre
  | ME APETECE VER UNA audiovisual_genre
  | ME GUSTARIA ME QUE RECOMENDARAS UNA audiovisual_genre
  | ME GUSTARIA UNA audiovisual_genre DE audiovisual_subgenre audiovisual_releases
  | ME GUSTARIA ALGO DE audiovisual_subgenre
  | ME GUSTARIA ALGO SOBRE audiovisual_subgenre
  | ME GUSTARIA MAS ALGO audiovisual_subgenre
  | ME GUSTARIA MAS ALGO DE audiovisual_subgenre
  | ME GUSTARIA MAS ALGO SOBRE audiovisual_subgenre
  | ME GUSTARIA VER ALGO MAS SOBRE audiovisual_subgenre time_instant
  | ME GUSTARIA QUE ME RECOMENDARAS UNA audiovisual_genre
  | ME GUSTARIA SABER QUE audiovisual_genre ESTAN PONIENDO
  | ME GUSTARIA UN audiovisual_subgenre
  | ME GUSTARIA UN audiovisual_genre
  | ME GUSTARIA UNA audiovisual_genre DE audiovisual_subgenre
  | ME GUSTARIA VER audiovisual_genre DE audiovisual_subgenre
  | ME GUSTARIA VER ALGO DE audiovisual_subgenre
  | ME GUSTARIA VER ALGO DE audiovisual_subgenre
  | ME GUSTARIA VER ALGO SOBRE audiovisual_subgenre QUE ME RECOMIENDAS
  | ME GUSTARIA VER UNOS audiovisual_genre QUE ME RECOMIENDES
  | ME GUSTARIA VER UNA audiovisual_subgenre
  | ME GUSTARIA VER UNA audiovisual_genre audiovisual_subgenre QUE ME RECOMIENDAS
  | ME MOLARIA VER audiovisual_genre SOBRE audiovisual_subgenre
  | ME MOLARIA VER UNA audiovisual_genre DE audiovisual_subgenre
  | MEJOR audiovisual_subgenre
  | MEJOR DAME audiovisual_subgenre
  | MEJOR ALGO DE audiovisual_subgenre time_instant
  | MEJOR ALGO DE audiovisual_subgenre
  | MEJOR ALGO DE audiovisual_subgenre
  | MEJOR ALGUNA audiovisual_subgenre
  | MEJOR PON audiovisual_subgenre
  | MEJOR UN audiovisual_genre
  | MUESTRAME audiovisual_genre DE audiovisual_subgenre
  | MUESTRAME UN audiovisual_genre SOBRE audiovisual_subgenre
  | MAS audiovisual_subgenre time_instant
  | MAS audiovisual_subgenre time_instant
  | MAS audiovisual_subgenre
  | MAS audiovisual_subgenre
  | MAS audiovisual_subgenre
  | MAS audiovisual_genre
  | MAS audiovisual_genre time_instant
  | MAS DE audiovisual_subgenre
  | MAS PARA MI
  | MAS SOBRE audiovisual_subgenre
  | NOS APETECE UN audiovisual_genre DE audiovisual_subgenre
  | NOS APETECE UNA audiovisual_genre audiovisual_genre audiovisual_subgenre
  | OTRA audiovisual_genre
  | OTRA audiovisual_subgenre
  | OTRA DE audiovisual_subgenre
  | OTROS audiovisual_genre PERO time_instant
  | PODRIAS RECOMENDARME ALGUNA audiovisual_genre DE audiovisual_subgenre
  | POR FAVOR UNA audiovisual_genre DE audiovisual_subgenre
  | PREFIERO ALGO audiovisual_subgenre
  | PREFIERO ALGUNA audiovisual_genre audiovisual_subgenre
  | PASAME audiovisual_genre audiovisual_subgenre
  | PASAME ALGUNA audiovisual_subgenre Y audiovisual_subgenre
  | QUIERO audiovisual_subgenre
  | QUIERO UNA audiovisual_genre PERO time_instant
  | QUIERO audiovisual_genre
  | QUIERO ALGO audiovisual_subgenre
  | QUIERO ALGO DE audiovisual_subgenre
  | QUIERO ALGO DE audiovisual_subgenre
  | QUIERO ALGO SOBRE audiovisual_subgenre
  | QUIERO UNA audiovisual_subgenre
  | QUIERO UNA audiovisual_subgenre DE audiovisual_subgenre
  | QUIERO UNA audiovisual_genre DE audiovisual_subgenre
  | QUIERO UNA audiovisual_genre DE audiovisual_subgenre
  | QUIERO UNA audiovisual_genre BUENA PARA VER
  | QUIERO UNA audiovisual_genre BUENA
  | QUIERO UNA audiovisual_genre DE audiovisual_subgenre
  | QUIERO UNA audiovisual_subgenre
  | QUIERO UNA audiovisual_genre CHULA
  | QUIERO UNA audiovisual_genre
  | QUIERO VER audiovisual_subgenre
  | QUIERO VER audiovisual_subgenre
  | QUIERO VER audiovisual_genre DE audiovisual_subgenre O DE audiovisual_subgenre
  | QUIERO VER audiovisual_genre audiovisual_subgenre
  | QUIERO VER audiovisual_genre DE audiovisual_subgenre
  | QUIERO VER ALGO audiovisual_genre
  | QUIERO VER ALGO DE audiovisual_genre audiovisual_subgenre
  | QUIERO VER ALGO DE audiovisual_subgenre
  | QUIERO VER ALGO DE audiovisual_subgenre
  | QUIERO VER ALGO time_instant
  | QUIERO VER ALGUNA audiovisual_genre DE audiovisual_subgenre
  | QUIERO VER QUE audiovisual_genre TENEIS
  | QUIERO VER QUE audiovisual_genre DE audiovisual_subgenre TENEIS
  | QUIERO VER UN audiovisual_genre
  | QUIERO VER UN audiovisual_subgenre
  | QUIERO VER UN audiovisual_genre DE audiovisual_subgenre
  | QUIERO VER UNA audiovisual_subgenre
  | QUIERO VER UNA audiovisual_subgenre
  | QUIERO VER UNA audiovisual_genre audiovisual_genre SOBRE audiovisual_subgenre
  | QUIERO VER UNA audiovisual_genre QUE HAYA GANADO UN OSCAR
  | QUIERO VER UNA audiovisual_genre
  | QUIERO VER UNA audiovisual_genre NUEVA
  | QUIERO VER UNA audiovisual_genre PARA APRENDER INGLES
  | RECOMIENDAME audiovisual_genre DE audiovisual_subgenre Y audiovisual_subgenre
  | RECOMIENDAME audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME audiovisual_genre
  | RECOMIENDAME audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME audiovisual_genre
  | RECOMIENDAME audiovisual_genre SOBRE audiovisual_subgenre
  | RECOMIENDAME ALGO DE audiovisual_subgenre Y audiovisual_subgenre
  | RECOMIENDAME ALGO DE audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME ALGO DE audiovisual_subgenre
  | RECOMIENDAME ALGO DE audiovisual_subgenre
  | RECOMIENDAME ALGO DE audiovisual_subgenre
  | RECOMIENDAME ALGO DE audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME ALGO DE audiovisual_subgenre
  | RECOMIENDAME ALGO MAS PARA MI
  | RECOMIENDAME ALGO PARA VER time_instant
  | RECOMIENDAME ALGO SOBRE audiovisual_subgenre
  | RECOMIENDAME ALGO
  | RECOMIENDAME ALGO ANDA
  | RECOMIENDAME ALGUNA audiovisual_genre ANDA
  | RECOMIENDAME ALGUNA audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME ALGUNA audiovisual_genre NUEVA DE ESTRENO GRACIAS
  | RECOMIENDAME ALGUNA audiovisual_genre PARA VER EN NAVIDAD
  | RECOMIENDAME ALGUNA audiovisual_genre PARA VER
  | RECOMIENDAME ALGUNA audiovisual_genre
  | RECOMIENDAME ALGUNA audiovisual_genre
  | RECOMIENDAME ALGUNA audiovisual_subgenre
  | RECOMIENDAME ALGUNAS audiovisual_genre PARA VER
  | RECOMIENDAME ALGUNAS audiovisual_genre MAS PLEASE
  | RECOMIENDAME MAS audiovisual_genre DE audiovisual_subgenre Y audiovisual_subgenre
  | RECOMIENDAME MAS audiovisual_genre audiovisual_subgenre
  | RECOMIENDAME MAS COSAS PARA MI
  | RECOMIENDAME MAS DE audiovisual_subgenre Y audiovisual_subgenre
  | RECOMIENDAME UN audiovisual_genre audiovisual_subgenre
  | RECOMIENDAME UN CONTENIDO
  | RECOMIENDAME UNA audiovisual_genre audiovisual_subgenre DE audiovisual_subgenre
  | RECOMIENDAME UNA audiovisual_genre audiovisual_subgenre Y audiovisual_subgenre
  | RECOMIENDAME UNA audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME UNA audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME UNA audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME UNA audiovisual_genre PARA VER
  | RECOMIENDAME UNA audiovisual_genre PARA time_interval
  | RECOMIENDAME UNA audiovisual_genre SOBRE DESAPARICIONES
  | RECOMIENDAME UNA audiovisual_genre
  | RECOMIENDAME UNA audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME UNA audiovisual_genre DE audiovisual_subgenre
  | RECOMIENDAME UNA audiovisual_genre
  | RECOMIENDAME UNA SOBRE audiovisual_subgenre
  | RECOMIENDAME UNAS audiovisual_genre
  | REPRODUCE ALGO audiovisual_subgenre
  | REPRODUCE ALGO DE audiovisual_subgenre
  | SUGIEREME  audiovisual_genre SOBRE audiovisual_subgenre
  | SUGIEREME ALGO DE audiovisual_genre audiovisual_subgenre
  | SUGIEREME ALGUNA audiovisual_genre audiovisual_genre
  | SUGIEREME UNA audiovisual_genre CUALQUIERA
  | SUGIEREME UNA audiovisual_genre DE audiovisual_subgenre
  | TE PIDO UNA audiovisual_genre
  | TEMATICA audiovisual_subgenre
  | UN audiovisual_genre DE audiovisual_subgenre
  | UN audiovisual_genre
  | UN audiovisual_genre DE audiovisual_subgenre
  | UNA audiovisual_subgenre
  | UNA audiovisual_subgenre time_instant
  | UNA audiovisual_subgenre SOBRE audiovisual_subgenre
  | UNA audiovisual_genre DE audiovisual_subgenre
  | UNA audiovisual_genre DE audiovisual_subgenre POR FAVOR
  | UNA audiovisual_genre DE audiovisual_subgenre
  | UNA audiovisual_genre MUY audiovisual_subgenre
  | UNA audiovisual_genre QUE NO SEA MUY LARGA
  | UNA audiovisual_genre QUE SEA DE audiovisual_subgenre
  | UNA audiovisual_genre DE audiovisual_subgenre
  | SI time_instant UNA audiovisual_genre SOBRE audiovisual_subgenre
  | UNA audiovisual_genre DE audiovisual_subgenre
  | UNA DE audiovisual_subgenre
  | UNA DE audiovisual_subgenre
  | UNA DEL audiovisual_subgenre
  | UNA DEL audiovisual_genre audiovisual_subgenre
  | VER audiovisual_subgenre
  | VER audiovisual_genre DE audiovisual_subgenre
  | VER audiovisual_subgenre
  | VER audiovisual_genre SOBRE audiovisual_subgenre
  | VER ALGO DE audiovisual_subgenre
  | VER ALGO DE audiovisual_subgenre
  | VER ALGO SOBRE audiovisual_subgenre
  | VER ALGO time_instant
  | Y ALGO DE audiovisual_subgenre
  | Y QUE TAL ALGO DE audiovisual_subgenre
  | Y SI TE DIGO PON UN audiovisual_genre SOBRE audiovisual_genre QUE TE VIENE A LA MENTE
  | Y SI TE DIGO PON UNA audiovisual_genre DE audiovisual_subgenre QUE TE VIENE A LA MENTE
  | Y SI TE PIDO ALGO DE audiovisual_genre audiovisual_genre QUE ME DAS
  | Y SI TE PIDO ALGUN audiovisual_genre SOBRE audiovisual_subgenre QUE ME DAS
  | Y UNA audiovisual_genre DE audiovisual_subgenre audiovisual_releases QUE NO HAYA VISTO
  | Y UNA audiovisual_genre SOBRE DESAPARICIONES
  | YO ME REFIERO A audiovisual_subgenre
  | ALGO DE audiovisual_genre audiovisual_subgenre
  | ALGO DE audiovisual_genre DE audiovisual_subgenre
  | ALGO DE audiovisual_genre O DE audiovisual_subgenre
  | ALGO DE audiovisual_genre DE audiovisual_subgenre audiovisual_subgenre
  | ALGUNA audiovisual_genre audiovisual_genre DE audiovisual_genre O DE audiovisual_subgenre QUE PUEDA VER
  | ALGUNA audiovisual_genre DE audiovisual_subgenre
  | ALGUNA audiovisual_genre audiovisual_genre DE audiovisual_genre O DE audiovisual_subgenre QUE PUEDA VER
  | ALGUNA audiovisual_genre DE audiovisual_subgenre O DE audiovisual_subgenre audiovisual_subgenre
  | ALGUNA audiovisual_genre DE audiovisual_subgenre O DE audiovisual_subgenre
  | ALGUNA audiovisual_genre DE audiovisual_subgenre QUE PUEDA VER
  | CONOCES ALGUNA audiovisual_subgenre DE audiovisual_subgenre
  | CONOCES ALGUNA audiovisual_genre DE audiovisual_subgenre
  | CONOCES ALGUNAS audiovisual_genre audiovisual_subgenre
  | CONOCES ALGUN audiovisual_genre DE audiovisual_subgenre
  | HAY audiovisual_genre DE audiovisual_subgenre QUE PUEDA ESTAR BIEN
  | HAY ALGO QUE VER
  | HAY ALGUNA audiovisual_subgenre audiovisual_genre
  | HAY ALGUNA audiovisual_genre DE audiovisual_subgenre QUE PUEDA ESTAR BIEN
  | HAY ALGUNA audiovisual_genre audiovisual_subgenre
  | HAY ALGUNA audiovisual_genre DE audiovisual_subgenre
  | HAY ALGUNA audiovisual_genre DE audiovisual_subgenre QUE PUEDA ESTAR BIEN
  | HAY ALGUNA audiovisual_genre DE audiovisual_subgenre
  | HAY ALGUNA audiovisual_genre DE audiovisual_subgenre time_instant
  | HAY time_instant ALGUNA audiovisual_genre DISPONIBLE
  | HAY ALGUNA audiovisual_genre DISPONIBLE
  | HAY ALGUNA audiovisual_subgenre DISPONIBLE time_instant
  | HAY ALGUN audiovisual_genre DE audiovisual_subgenre
  | ME ACONSEJAS ALGO DE audiovisual_subgenre
  | ME AYUDAS A ENCONTRAR ALGO QUE VER
  | ME AYUDAS A ENCONTRAR UNA audiovisual_genre
  | ME DAS ALGUNA audiovisual_genre
  | ME DICES ALGUNA audiovisual_genre
  | ME DICES UNA audiovisual_genre PARA VER
  | ME DICES UNA audiovisual_genre
  | ME DICES UNA audiovisual_genre
  | ME PUEDES RECOMENDAR ALGUNA audiovisual_subgenre DE audiovisual_subgenre
  | ME PUEDES RECOMENDAR ALGUNA audiovisual_genre audiovisual_subgenre
  | ME PUEDES RECOMENDAR ALGUNA audiovisual_genre
  | ME PUEDES RECOMENDAR OTRA audiovisual_genre
  | ME PUEDES RECOMENDAR OTRAS audiovisual_genre
  | ME RECOMIENDAS ALGO DE audiovisual_subgenre Y audiovisual_subgenre
  | ME RECOMIENDAS ALGO DE audiovisual_subgenre audiovisual_subgenre
  | ME RECOMIENDAS ALGO DE audiovisual_subgenre
  | ME RECOMIENDAS ALGO DE audiovisual_genre DE audiovisual_subgenre
  | ME RECOMIENDAS ALGO DE audiovisual_subgenre
  | ME RECOMIENDAS ALGO PARA VER time_instant
  | ME RECOMIENDAS ALGO QUE VER
  | ME RECOMIENDAS ALGO
  | ME RECOMIENDAS ALGUNA audiovisual_subgenre
  | ME RECOMIENDAS ALGUNA audiovisual_genre
  | ME RECOMIENDAS ALGUNA DE audiovisual_subgenre
  | ME RECOMIENDAS ALGUN audiovisual_genre
  | ME RECOMIENDAS UN audiovisual_genre DE audiovisual_subgenre
  | ME RECOMIENDAS UNA audiovisual_genre DE audiovisual_subgenre
  | ME RECOMIENDAS UNA audiovisual_genre DE audiovisual_subgenre
  | ME RECOMIENDAS UNA audiovisual_genre
  | ME RECOMIENDAS UNA audiovisual_genre DE audiovisual_subgenre
  | ME RECOMIENDAS UNA audiovisual_genre PARA APRENDER INGLES
  | ME RECOMIENDAS UNA audiovisual_genre
  | ME SUGIERES ALGO audiovisual_subgenre
  | ME SUGIERES ALGO DE audiovisual_genre audiovisual_subgenre Y DE audiovisual_subgenre
  | ME SUGIERES ALGO DE audiovisual_subgenre Y audiovisual_subgenre
  | ME SUGIERES ALGUN audiovisual_genre
  | PODRIAS PONERME ALGUNA audiovisual_genre audiovisual_subgenre
  | PODRIAS PONERME ALGUN audiovisual_genre DE audiovisual_subgenre
  | PODRIAS RECOMENDARME ALGO DE audiovisual_genre
  | PODRIAS RECOMENDARME ALGUNA audiovisual_genre DE audiovisual_subgenre
  | PUEDES ACONSEJARME ALGO DE audiovisual_subgenre
  | PUEDES ACONSEJARME ALGO DE audiovisual_subgenre
  | PUEDES BUSCARME ALGO PARA VER time_instant
  | PUEDES BUSCARME ALGO PARA VER
  | PUEDES DECIRME ALGO PARA VER time_instant
  | PUEDES MOSTRARME ALGO DE audiovisual_subgenre
  | PUEDES MOSTRARME ALGO DE audiovisual_subgenre
  | PUEDES PONERME ALGO DE audiovisual_subgenre
  | PUEDES PONERME ALGO DE audiovisual_subgenre
  | PUEDES RECOMENDARME ALGO DE audiovisual_subgenre
  | PUEDES RECOMENDARME ALGUN audiovisual_subgenre
  | PUEDES RECOMENDARME ALGUN CONTENIDO DE audiovisual_subgenre
  | PUEDES SUGERIRME ALGO audiovisual_subgenre
  | PUEDES SUGERIRME ALGO SOBRE audiovisual_subgenre
  | PUEDES SUGERIRME ALGUNA audiovisual_genre audiovisual_subgenre
  | PUEDES SUGERIRME ALGUNA audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | QUE audiovisual_genre NUEVA HAY audiovisual_subgenre
  | QUE audiovisual_genre HAY EN EL CATALOGO
  | QUE audiovisual_genre HAY EN EL CATALOGO time_instant
  | QUE audiovisual_genre DE audiovisual_subgenre HAY EN EL CATALOGO
  | QUE audiovisual_genre audiovisual_subgenre DE audiovisual_subgenre ME RECOMIENDAS
  | QUE audiovisual_genre SOBRE audiovisual_subgenre ME RECOMIENDAS
  | QUE audiovisual_genre DE audiovisual_subgenre ME RECOMIENDAS
  | QUE audiovisual_genre ME RECOMIENDAS
  | QUE audiovisual_genre SON LAS MAS VISTAS
  | QUE audiovisual_genre ME RECOMIENDAS
  | QUE audiovisual_genre PUEDO EMPEZAR A VER
  | QUE audiovisual_genre PUEDO EMPEZAR A VER time_instant
  | QUE audiovisual_genre ME RECOMIENDAS
  | QUE ME RECOMIENDAS PARA VER  time_interval ALGO DE audiovisual_subgenre O DE audiovisual_subgenre
  | QUE ME RECOMIENDAS PARA VER  time_interval ALGO SOBRE audiovisual_subgenre O SOBRE audiovisual_subgenre
  | QUE ME RECOMIENDAS
  | QUE MAS ME OFRECES
  | QUE MAS TIENES
  | QUE PUEDO VER DE audiovisual_subgenre
  | QUE PUEDO VER
  | QUE PUEDO VER time_instant
  | QUE SABES DE audiovisual_subgenre
  | QUE TAL UNA DE audiovisual_subgenre
  | QUE TIENES DE audiovisual_genre audiovisual_subgenre
  | QUE VEO
  | TENEIS ALGUN audiovisual_genre
  | TENEIS ALGUN audiovisual_genre SOBRE audiovisual_subgenre
  | TIENES audiovisual_genre
  | TIENES audiovisual_genre DE audiovisual_subgenre
  | TIENES  UNA audiovisual_genre audiovisual_subgenre
  | TIENES audiovisual_genre
  | TIENES audiovisual_genre PARA MI
  | TIENES audiovisual_genre
  | TIENES ALGO DE audiovisual_subgenre
  | TIENES ALGO DE audiovisual_genre audiovisual_subgenre
  | TIENES ALGO DE audiovisual_subgenre
  | TIENES ALGO DE audiovisual_subgenre POR FAVOR
  | TIENES ALGO PARA MI
  | TIENES ALGO PARA VER time_instant
  | TIENES ALGO PARA VER
  | TIENES ALGO
  | TIENES ALGUNA audiovisual_genre SOBRE audiovisual_subgenre
  | TIENES ALGUNA audiovisual_genre DE audiovisual_subgenre
  | TIENES ALGUNA audiovisual_genre PARA MI
  | TIENES ALGUNA audiovisual_genre PARA VER
  | TIENES ALGUNA audiovisual_genre
  | TIENES ALGUNA audiovisual_genre DE audiovisual_subgenre PARA VER
  | TIENES ALGUNA audiovisual_genre
  | TIENES ALGUNA DE audiovisual_subgenre
  | TIENES ALGUNA DE audiovisual_subgenre
  | TIENES ALGUNAS audiovisual_subgenre
  | TIENES ALGUNAS audiovisual_genre
  | TIENES ALGUN audiovisual_genre
  | TIENES ALGUN audiovisual_subgenre
  | TIENES LA audiovisual_genre DE audiovisual_subgenre
  | TIENES MEJOR ALGO DE audiovisual_subgenre
  | TIENES MEJOR ALGO DE audiovisual_subgenre
  | TIENES MEJOR ALGO DE audiovisual_subgenre
  | TIENES UNA audiovisual_genre audiovisual_genre
  | TIENES UNA audiovisual_genre DE RISA
  | TIENES UNA DE audiovisual_genre audiovisual_genre
  | TIENES UNA DE audiovisual_subgenre
  | Y ALGO DE audiovisual_subgenre time_instant
  | Y ALGO DE audiovisual_subgenre
  | Y QUE TAL ALGO audiovisual_genre
  | BUSCA audiovisual_genre
  | Y QUE TAL ALGO DE audiovisual_subgenre time_instant
  | Y UN audiovisual_genre audiovisual_subgenre audiovisual_releases QUE NO HAYA VISTO
  | Y UNA audiovisual_genre DE audiovisual_subgenre audiovisual_genre audiovisual_subgenre audiovisual_releases QUE NO HAYA VISTO
  | ACONSEJAME UNA audiovisual_genre PARA time_interval
  | BUSCAME audiovisual_genre PARA time_interval
  | BUSCAME audiovisual_genre PARA time_interval
  | DIME ALGUNA audiovisual_genre DE audiovisual_subgenre PARA time_interval
  | PARA time_interval DIME QUE audiovisual_genre audiovisual_genre PUEDO VER
  | ENSEÑAME ALGUNA audiovisual_genre PARA time_interval
  | INDICAME ALGUNA audiovisual_genre audiovisual_genre PARA time_interval
  | ME GUSTARIA VER ALGUNA audiovisual_subgenre DE audiovisual_subgenre PARA time_interval
  | ME GUSTARIA VER audiovisual_genre time_interval
  | ME INTERESA SABER QUE audiovisual_genre audiovisual_genre ESTAN DANDO time_interval
  | MUESTRAME ALGUNA audiovisual_genre PARA time_interval
  | QUIERO ALGUN audiovisual_genre PARA time_interval
  | QUIERO QUE ME RECOMIENDES ALGO DE audiovisual_genre audiovisual_subgenre PARA time_interval
  | QUIERO audiovisual_genre audiovisual_genre time_interval
  | RECOMIENDAME ALGUN audiovisual_genre PARA time_interval
  | SUGIEREME audiovisual_genre PARA time_interval
  | time_interval QUE audiovisual_genre PUEDO VER
  | UNAS audiovisual_genre PARA time_interval
  | UNA DE audiovisual_genre time_interval
  | audiovisual_genre PARA time_interval
  | audiovisual_genre PARA time_interval
  | time_interval ME GUSTARIA VER ALGUNA audiovisual_genre audiovisual_genre
  | DAN audiovisual_genre time_interval
  | HAY audiovisual_genre time_interval
  | HAY audiovisual_genre time_interval
  | HAY audiovisual_genre DE audiovisual_subgenre time_interval
  | HAY ALGUNA audiovisual_genre time_interval
  | ME PODRIAS DECIR QUE audiovisual_genre PUEDO VER time_interval
  | ME PUEDES ACONSEJAR audiovisual_genre PARA time_interval
  | ME PUEDES DECIR audiovisual_genre PARA time_interval
  | ME PUEDES DECIR QUE audiovisual_genre PUEDO VER time_interval
  | ME PUEDES INDICAR UNA audiovisual_genre PARA time_interval
  | ME PUEDES RECOMENDAR UNA audiovisual_genre audiovisual_genre DE audiovisual_subgenre audiovisual_subgenre
  | ME PUEDES SUGERIR audiovisual_subgenre PARA time_interval
  | QUE audiovisual_genre DE audiovisual_subgenre PUEDO VER time_interval
  | QUE audiovisual_genre DE GENERO audiovisual_subgenre HAY time_interval
  | QUE audiovisual_genre HAY time_interval
  | QUE audiovisual_genre HAY time_interval
  | QUE audiovisual_subgenre HAY PARA time_interval
  | QUE PUEDO VER time_interval
  | QUE TIENES time_interval
  | TIENES ALGUN audiovisual_genre time_interval
  | TIENES ALGUNA RECOMENDACION DE audiovisual_subgenre time_interval
  | PUEDES RECOMENDARME audiovisual_genre DE audiovisual_subgenre PARA time_interval
  | time_instant QUE PUEDO VER
  | POR FAVOR time_instant QUE PUEDO VER
  | QUE audiovisual_genre HAY time_instant
  | audiovisual_genre PARA time_interval
  | DAN time_interval ALGUN audiovisual_genre DE audiovisual_subgenre
  | DAN time_interval ALGO audiovisual_genre time_interval
  | DAN time_interval UNA audiovisual_genre time_interval
  | DAN ALGO time_interval
  | DAN ALGUN audiovisual_genre time_interval
  | DAN ALGO DE audiovisual_genre audiovisual_genre DE audiovisual_subgenre time_interval
  | DAN ALGUN audiovisual_genre time_interval
  | DAN ALGUNA audiovisual_subgenre time_interval
  | DAN ALGUNA audiovisual_subgenre time_interval
  | DAN audiovisual_genre time_interval
  | DAN ALGUNA audiovisual_genre time_interval
  | DAN ALGUNA audiovisual_genre time_interval
  | DAN audiovisual_genre DE audiovisual_subgenre time_interval
  | DAN UNA audiovisual_genre time_interval time_interval
  | HAY time_interval ALGUNA audiovisual_genre DE audiovisual_subgenre
  | HAY ALGO DE audiovisual_subgenre time_interval
  | HAY ALGO DE audiovisual_genre PROGRAMADO time_interval
  | HAY audiovisual_genre time_interval time_interval
  | HAY ALGUNA audiovisual_genre audiovisual_genre time_interval
  | HAY ALGUN audiovisual_genre PARA time_interval
  | HAY ALGUNA audiovisual_genre PROGRAMADA time_interval
  | HAY PROGRAMADO ALGUN audiovisual_genre audiovisual_genre audiovisual_subgenre PARA time_interval
  | ME OFRECES ALGO PARA VER POR FAVOR PARA time_interval
  | ME RECOMIENDAS audiovisual_genre PARA time_interval
  | PODRIA VER ALGO DE audiovisual_subgenre Y audiovisual_subgenre PARA time_interval
  | PUEDO VER ALGUNA audiovisual_genre HOY time_interval
  | PUEDO VER ALGUNA audiovisual_genre HOY time_interval
  | QUE audiovisual_genre audiovisual_genre PUEDO VER time_interval
  | QUE audiovisual_genre audiovisual_genre DE audiovisual_subgenre ME RECOMIENDAS PARA time_interval
  | QUE audiovisual_genre ME RECOMIENDAS time_interval
  | QUE audiovisual_genre PUEDO VER time_interval
  | QUE audiovisual_genre audiovisual_genre TIENES time_interval
  | QUE audiovisual_genre PUEDO VER time_interval
  | QUE audiovisual_genre PUEDO VER time_interval
  | QUE audiovisual_genre PUEDO VER time_interval
  | QUE ME RECOMIENDAS time_interval
  | QUE ME RECOMIENDAS time_interval
  | QUE ME RECOMIENDAS PARA VER time_interval DE audiovisual_subgenre
  | QUE ME RECOMIENDAS PARA VER time_interval
  | QUE PODRIA VER time_interval
  | QUE PUEDO VER time_interval time_interval
  | QUE PUEDO VER time_interval
  | QUE VER time_interval time_interval
  | VAN A DAR ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval
  | BUSCA MAS audiovisual_genre DE audiovisual_subgenre PARA time_interval
  | BUSCA UNA audiovisual_subgenre time_interval
  | BUSCAME audiovisual_subgenre time_interval
  | BUSCAME audiovisual_genre audiovisual_genre time_interval
  | BUSCAME audiovisual_genre PARA time_interval
  | BUSCAME ALGO DE audiovisual_subgenre time_interval
  | BUSCAME MAS DE audiovisual_subgenre Y audiovisual_subgenre time_interval
  | BUSCAME UNA audiovisual_genre PARA time_interval
  | BUSCO ALGO DE  audiovisual_genre PARA time_interval
  | DAME ALGO DE audiovisual_subgenre PARA time_interval
  | DAME ALGO PARA VER PARA time_interval
  | DAME ALGUNA audiovisual_genre PARA VER time_interval time_interval
  | DAME ALGUNA audiovisual_genre audiovisual_genre PARA VER time_interval time_interval
  | DAME ALGO DE audiovisual_genre audiovisual_genre QUE DEN time_interval
  | DAME UN audiovisual_genre QUE ECHEN time_interval
  | DAME UN audiovisual_genre QUE ESTE time_interval
  | DAME UN audiovisual_genre QUE ESTE time_interval
  | DAME audiovisual_genre ANDA PARA time_interval
  | DAN ALGO time_interval
  | DAN ALGUNA audiovisual_genre time_interval
  | DE audiovisual_subgenre ALGUNA audiovisual_genre PARA time_interval
  | DIME QUE audiovisual_genre VEO PARA time_interval
  | DIME QUE audiovisual_genre PUEDO VER time_interval time_interval
  | DIME QUE audiovisual_genre PUEDO VER PARA time_interval
  | DIME QUE PUEDO VER PARA time_interval
  | DIME audiovisual_genre PARA time_interval
  | DIME UNA audiovisual_genre audiovisual_genre DE audiovisual_subgenre time_interval
  | DIME UN audiovisual_genre PARA time_interval
  | ENSEÑAME ALGO DE audiovisual_subgenre PARA time_interval
  | audiovisual_genre DE audiovisual_subgenre SOBRE LA NAVIDAD PARA time_interval
  | ME RECOMIENDAS ALGO time_interval
  | PUEDES ENSEÑARME ALGO DE audiovisual_subgenre time_interval
  | PUEDES SUGERIRME ALGO DE audiovisual_genre DE audiovisual_subgenre time_interval
  | time_interval QUIERO VER ALGO DE audiovisual_subgenre
  | ENSEÑAME ALGO DE audiovisual_subgenre time_interval
  | ENSEÑAME ALGUN audiovisual_subgenre PARA time_interval
  | ESTOY SOLO time_interval QUE ME RECOMIENDAS
  | ESTOY SOLA time_interval QUE audiovisual_genre ME RECOMIENDAS
  | ME APETECE ALGO DE audiovisual_subgenre time_interval
  | ME GUSTAN LAS audiovisual_subgenre PUEDO VER ALGUNA audiovisual_genre time_interval
  | ME GUSTARIA ALGO DE audiovisual_subgenre PARA time_interval
  | MEJOR ALGO DE audiovisual_genre time_interval
  | POR FAVOR ALGO DE audiovisual_genre DE audiovisual_subgenre PARA time_interval
  | QUIERO LA MEJOR audiovisual_genre PARA VER time_interval
  | QUIERO LOS MEJORES audiovisual_genre PARA VER time_interval
  | QUIERO UNA DE audiovisual_subgenre PARA time_interval
  | QUIERO UNA DE audiovisual_subgenre time_interval
  | RECOMENDACION DE audiovisual_genre PARA time_interval
  | RECOMIENDAME audiovisual_genre PARA time_interval
  | RECOMIENDAME ALGO DE audiovisual_subgenre PARA time_interval
  | RECOMIENDAME ALGO PARA time_interval
  | RECOMIENDAME ALGUNA audiovisual_genre PARA time_interval
  | RECOMIENDAME ALGO DE audiovisual_genre PARA time_interval
  | RECOMIENDAME UNA audiovisual_genre PARA VER EN FAMILIA time_interval
  | RECOMIENDAME UNA audiovisual_genre PARA VER time_instant
  | RECOMIENDAME UNA audiovisual_genre DE audiovisual_subgenre O audiovisual_subgenre PARA time_interval
  | RECOMIENDAME audiovisual_genre PARA time_interval
  | RECOMIENDAME audiovisual_genre PARA time_instant
  | TENGO LIBRE time_interval QUE audiovisual_genre PUEDO VER
  | TENGO LIBRE time_interval QUE PUEDO VER
  | TIENES ALGO DE audiovisual_subgenre time_interval
  | UNA audiovisual_subgenre PARA VER time_interval
  | UNA audiovisual_genre PARA time_interval
  | UNA DE audiovisual_subgenre time_interval
  | VAN A DAR ALGUNA audiovisual_genre time_interval
  | ACONSEJAME ALGUNA audiovisual_genre DE audiovisual_subgenre PARA VER LUEGO time_instant
  | ACONSEJAME ALGUN audiovisual_genre DE audiovisual_subgenre PARA VER LUEGO time_instant
  | ALGUNA audiovisual_genre DE audiovisual_subgenre time_instant
  | BUSCAME ALGUNA audiovisual_genre PARA VER time_interval time_instant
  | DAME time_instant UNA audiovisual_subgenre
  | DIME ALGO DE audiovisual_subgenre time_instant
  | DIME ALGUNA COSA QUE PUEDA VER time_instant
  | DIME LAS audiovisual_genre QUE TIENES DE audiovisual_subgenre time_instant
  | DIME LAS audiovisual_genre DE audiovisual_subgenre QUE TENGAS time_instant
  | DIME QUE PODRIA VER time_instant
  | DIME SI DAN time_instant ALGUN audiovisual_genre audiovisual_subgenre
  | DIME SI ECHAN time_instant ALGUN audiovisual_genre audiovisual_subgenre
  | DIME SI ESTAN DANDO UNA audiovisual_genre DE audiovisual_subgenre time_instant
  | DIME SI ESTAN ECHANDO time_instant ALGUNA audiovisual_genre DE audiovisual_subgenre
  | DIME SI ESTAN ECHANDO UNA audiovisual_genre audiovisual_genre DE audiovisual_subgenre time_instant
  | DIME SI HAY time_instant ALGUN audiovisual_genre audiovisual_genre
  | DIME SI PUEDO VER time_instant ALGUNA audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | DIME SI PUEDO VER time_instant ALGUNA audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | DIME SI VAN A ECHAR ALGUNA audiovisual_genre time_instant
  | DIME UNA audiovisual_genre DE audiovisual_subgenre PARA VER time_interval time_instant
  | ENSEÑAME ALGO DE audiovisual_genre time_instant
  | ME GUSTARIA UNA audiovisual_genre audiovisual_genre time_instant
  | QUIERO VER audiovisual_genre audiovisual_genre DE audiovisual_subgenre time_instant
  | QUIERO VER audiovisual_genre time_instant
  | RECOMIENDAME ALGO PARA VER CON LA FAMILIA time_instant
  | Y SI TE PIDO ALGO DE audiovisual_subgenre QUE ME DAS time_instant
  | time_instant ESTOY SOLO MEJOR audiovisual_genre DE audiovisual_subgenre
  | DAN time_interval ALGO DE audiovisual_genre time_instant
  | DAN ALGUN audiovisual_genre time_interval time_instant
  | DAN ALGUN audiovisual_genre time_instant
  | HAY ALGUNA audiovisual_genre DE audiovisual_subgenre PROGRAMADA PARA time_interval time_instant
  | HAY ALGUN audiovisual_genre time_instant
  | HAY ALGUN audiovisual_genre audiovisual_subgenre PROGRAMADO PARA time_interval time_instant
  | HOY time_instant ECHAN ALGUNA audiovisual_genre
  | ME PUEDES DECIR SI PUEDO VER ALGUNA audiovisual_subgenre time_instant
  | ME PUEDES RECOMENDAR audiovisual_genre PARA VER time_interval time_instant
  | ME PUEDES RECOMENECHAR ALGUN audiovisual_genre PARA VER time_interval time_instant
  | PUEDO VER time_instant ALGUN audiovisual_genre DE audiovisual_subgenre
  | QUE audiovisual_genre PUEDO VER time_interval time_instant
  | QUE audiovisual_genre DE audiovisual_subgenre PUEDO VER time_interval time_instant
  | QUE PODRIA VER time_instant
  | TIENES UNA DE audiovisual_subgenre time_instant
  | QUE PUEDO VER time_interval time_instant
  | VAN A DAR ALGUNA audiovisual_genre time_instant
  | VAN A ECHAR ALGUN audiovisual_genre DE audiovisual_subgenre time_interval time_instant
  | ALGO DE audiovisual_subgenre DISTOPICA time_interval
  | DAME audiovisual_subgenre PARA time_interval
  | DAME ALGUNAS audiovisual_genre QUE VER time_interval
  | DAME MAS RECOMENDACIONES DE audiovisual_subgenre Y audiovisual_subgenre PARA time_interval
  | DIME ALGO PARA VER time_interval
  | DIME UNA audiovisual_genre PARA VER time_interval
  | QUIERO UNA audiovisual_genre DE audiovisual_subgenre PARA time_interval
  | QUIERO UNA audiovisual_genre PARA VER time_interval
  | QUIERO VER UNA audiovisual_genre time_interval
  | QUIERO VER UNA audiovisual_genre audiovisual_subgenre time_interval
  | RECOMIENDAME ALGO ANDA PARA time_interval
  | RECOMIENDAME ALGO PARA VER time_interval
  | RECOMIENDAME MAS DE audiovisual_subgenre Y audiovisual_subgenre time_interval
  | RECOMIENDAME UNA audiovisual_subgenre PARA time_interval
  | RECOMIENDAME UNA audiovisual_genre DE audiovisual_subgenre PARA time_interval
  | CUALES SON LAS audiovisual_genre PROGRAMADAS PARA time_interval time_interval
  | CUALES SON LOS audiovisual_genre PROGRAMADOS PARA time_interval time_interval
  | DAN audiovisual_genre DE audiovisual_subgenre time_interval
  | DAN ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval
  | HAY audiovisual_genre DE audiovisual_subgenre time_interval
  | HAY ALGUNA audiovisual_genre PROGRAMADA time_interval time_interval
  | HAY ALGUN audiovisual_genre PROGRAMADO time_interval time_interval
  | HAY PROGRAMADA ALGUNA audiovisual_genre time_interval time_interval
  | HAY PROGRAMADO ALGUN audiovisual_subgenre time_interval time_interval
  | ME DICES ALGO PARA VER time_interval
  | PUEDES DECIRME ALGUNA audiovisual_genre PARA VER time_interval
  | QUE PUEDO VER time_interval
  | QUE audiovisual_genre audiovisual_subgenre HAY time_interval time_interval
  | QUE audiovisual_genre HAY time_interval
  | QUE ME audiovisual_genre RECOMIENDAS time_interval time_interval
  | QUE ME audiovisual_genre RECOMIENDAS PARA time_interval time_interval
  | QUE audiovisual_genre audiovisual_genre RECOMIENDAS PARA time_interval time_interval
  | QUE audiovisual_genre audiovisual_genre ME RECOMIENDAS PARA time_interval time_interval
  | QUE audiovisual_genre DE audiovisual_subgenre RECOMIENDAS time_interval time_interval
  | QUE audiovisual_genre audiovisual_subgenre RECOMIENDAS PARA time_interval time_interval
  | QUE audiovisual_genre audiovisual_subgenre ME RECOMIENDAS PARA time_interval time_interval
  | QUE ME RECOMIENDAS PARA time_interval
  | QUE ME RECOMIENDAS PARA time_interval time_interval
  | HE CAMBIADO DE IDEA MEJOR ALGO audiovisual_subgenre
  | HE CAMBIADO DE IDEA MEJOR ALGO DE audiovisual_subgenre
  | HE CAMBIADO DE IDEA MEJOR audiovisual_genre
  | BUSCA LA audiovisual_genre DE audiovisual_film_title
  | BUSCA LA audiovisual_genre DE audiovisual_tvseries_title
  | BUSCAR audiovisual_tvseries_title
  | BUSCAME audiovisual_film_title
  | BUSCAME audiovisual_film_title
  | BUSCA audiovisual_film_title
  | BUSCAME LA audiovisual_genre DE audiovisual_film_title
  | BUSCAME LA audiovisual_genre ESA DE audiovisual_tvseries_title
  | DAME LA FICHA DE audiovisual_film_title
  | DESEO VER audiovisual_tvseries_title
  | DEJAME VER audiovisual_tvseries_title
  | EMPIEZA A PONER audiovisual_film_title
  | ENSEÑAME LA FICHA DE audiovisual_tvshow_title
  | ESTOY INTERESADA EN LA audiovisual_genre DE audiovisual_tvseries_title ME LO PUEDES PONER
  | ESTOY INTERESADO EN VER audiovisual_tvseries_title
  | LANZAR audiovisual_tvseries_title
  | ME APETECE VER audiovisual_tvshow_title
  | ME APETECE VER audiovisual_film_title
  | ME ENCANTARIA VER audiovisual_tvseries_title
  | ME ENCANTARIA VER audiovisual_film_title
  | ME GUSTARIA VER audiovisual_film_title
  | ME GUSTARIA VER audiovisual_film_title
  | NECESITO QUE PONGAS A REPRODUCIR audiovisual_tvseries_title
  | NOS GUSTARIA PONER LA audiovisual_genre DE audiovisual_film_title
  | ME MOLARIA VER audiovisual_film_title
  | ME MOLARIA VER audiovisual_film_title
  | PON A REPRODUCIR LA audiovisual_genre DE audiovisual_film_title
  | PON audiovisual_tvseries_title
  | PON audiovisual_tvshow_title
  | PON audiovisual_film_title
  | PON YA LA audiovisual_genre DE audiovisual_film_title
  | PONER audiovisual_film_title
  | PONER LA audiovisual_genre audiovisual_tvseries_title
  | PON LA audiovisual_genre audiovisual_film_title
  | PON LA audiovisual_genre DE audiovisual_film_title
  | VER EL audiovisual_genre audiovisual_documental_title
  | VER LA audiovisual_genre DE audiovisual_film_title
  | VER LA audiovisual_genre audiovisual_tvseries_title
  | VER UNA DE audiovisual_film_title
  | QUERRIA VER audiovisual_film_title
  | QUERRIA VER audiovisual_film_title
  | QUERRIA VER UN CAPITULO DE audiovisual_tvseries_title
  | QUIERO QUE INICIES LA REPRODUCCION DE audiovisual_tvseries_title
  | QUIERO QUE ME PONGAS audiovisual_tvseries_title time_instant
  | QUIERO QUE PONGAS audiovisual_tvseries_title time_instant
  | QUIERO QUE PONGAS A REPRODUCIR audiovisual_tvseries_title
  | QUIERO QUE PONGAS A REPRODUCIR LA audiovisual_genre DE audiovisual_documental_title
  | QUIERO QUE REPRODUZCAS audiovisual_documental_title
  | QUIERO REPRODUCIR LA audiovisual_genre DE audiovisual_film_title
  | QUIERO VER EL audiovisual_genre audiovisual_tvseries_title AHORA
  | QUIERO VER EL audiovisual_genre audiovisual_documental_title time_instant
  | QUIERO VER LA audiovisual_genre audiovisual_film_title
  | QUIERO VER LA audiovisual_genre DE audiovisual_film_title time_instant
  | QUIERO VER LA audiovisual_genre DE audiovisual_tvseries_title
  | QUIERO VER audiovisual_film_title
  | QUIERO VER audiovisual_tvseries_title time_instant
  | REPRODUCE audiovisual_film_title
  | REPRODUCE LA audiovisual_genre DE audiovisual_film_title
  | REPRODUCIR audiovisual_film_title
  | VER audiovisual_film_title
  | VER audiovisual_tvshow_title
  | COMO HAGO PARA VER audiovisual_documental_title time_instant
  | COMO PONGO audiovisual_film_title time_instant
  | TIENES LA audiovisual_genre DE audiovisual_tvseries_title
  | PUEDO VER audiovisual_tvseries_title
  | PUEDO VER EL QUINTO CAPITULO DE audiovisual_tvseries_title
  | QUE HAGO SI QUIERO PONER LA audiovisual_genre DE audiovisual_film_title time_instant
  | QUE TENGO QUE HACER PARA VER audiovisual_film_title
  | QUE audiovisual_genre DE audiovisual_film_title TIENES
  | QUE SABES DE audiovisual_film_title
  | PUEDES REPRODUCIR LA audiovisual_genre DE audiovisual_tvshow_title time_instant
  | PUEDES PONER A REPRODUCIR LA audiovisual_genre DE audiovisual_tvseries_title time_instant
  | PUEDES PONERME audiovisual_tvseries_title time_instant
  | BUSCAME LA audiovisual_genre audiovisual_film_title
  | BUSCA LA audiovisual_genre audiovisual_film_title
  | BUSCA audiovisual_film_title
  | BUSCA audiovisual_film_title
  | BUSCA ALGO DE audiovisual_film_title
  | BUSCA UNA audiovisual_genre DE audiovisual_film_title
  | BUSCAME LA audiovisual_genre audiovisual_tvseries_title
  | BUSCAME audiovisual_tvseries_title
  | BUSCAME audiovisual_tvseries_title LA audiovisual_genre
  | BUSCAME audiovisual_film_title LA audiovisual_genre
  | DAME audiovisual_film_title
  | DAME ALGO DE audiovisual_film_title
  | DAME audiovisual_film_title
  | ESTABA PENSANDO EN VER LA audiovisual_genre audiovisual_film_title
  | ESTABA PENSANDO EN audiovisual_tvseries_title
  | MEJOR DAME audiovisual_film_title
  | DAME audiovisual_film_title
  | ME APETECE VER audiovisual_tvshow_title
  | ME APETECE VER LA audiovisual_genre audiovisual_subgenre audiovisual_tvseries_title
  | DAME LA audiovisual_genre audiovisual_subgenre audiovisual_tvseries_title
  | DAME LA audiovisual_genre audiovisual_tvseries_title
  | DAME audiovisual_tvseries_title
  | ME APETECE VER LA audiovisual_genre audiovisual_tvseries_title
  | MEJOR DAME audiovisual_tvseries_title
  | MEJOR DAME LA audiovisual_subgenre audiovisual_film_title
  | DAME LA audiovisual_subgenre audiovisual_film_title
  | DAME audiovisual_film_title
  | POR FAVOR DAME audiovisual_film_title
  | PON audiovisual_film_title
  | PON audiovisual_tvseries_title
  | PON YA LA audiovisual_genre audiovisual_film_title
  | PON LA audiovisual_genre audiovisual_film_title
  | PON POR FAVOR LA audiovisual_genre audiovisual_tvshow_title
  | PON audiovisual_tvseries_title
  | PON audiovisual_tvseries_title
  | PON audiovisual_film_title
  | PON audiovisual_film_title
  | PREFIERO audiovisual_tvshow_title
  | PREFIERO audiovisual_film_title
  | POR FAVOR PREFIERO audiovisual_film_title
  | PREFIERO audiovisual_film_title POR FAVOR
  | PREFIERO LA audiovisual_subgenre audiovisual_film_title
  | QUIERO LA audiovisual_genre audiovisual_subgenre DE audiovisual_tvseries_title
  | QUIERO LA audiovisual_genre audiovisual_film_title
  | POR FAVOR QUIERO LA audiovisual_genre audiovisual_film_title
  | A VER SI TIENES LA audiovisual_genre audiovisual_film_title
  | A VER SI TIENES audiovisual_film_title
  | QUIERO VER LA audiovisual_subgenre audiovisual_tvseries_title
  | QUIERO VER LA audiovisual_genre audiovisual_film_title
  | QUIERO QUE ME PONGAS LA audiovisual_subgenre audiovisual_tvseries_title
  | QUIERO VER audiovisual_film_title
  | QUIERO VER audiovisual_film_title
  | QUIERO VER audiovisual_tvseries_title DE audiovisual_subgenre
  | QUIERO VER audiovisual_film_title DE audiovisual_subgenre
  | QUIERO VER LA audiovisual_genre audiovisual_film_title
  | QUIERO VER LA audiovisual_genre audiovisual_film_title
  | QUIERO VER LA audiovisual_genre DE audiovisual_tvseries_title
  | QUIERO VER audiovisual_film_title
  | QUIERO VER audiovisual_film_title
  | QUIERO VER audiovisual_tvseries_title
  | QUIERO VER UNA audiovisual_genre DE audiovisual_actor
  | QUIERO VER LAS audiovisual_genre DE audiovisual_actor
  | QUIERO VER A audiovisual_actor EN UNA DE audiovisual_director
  | QUIERO VER LAS audiovisual_genre DE audiovisual_actor
  | VER A audiovisual_actor ESTARIA BIEN
  | VER UNA DE audiovisual_actor ES LO QUE ME APETECE
  | LO QUE ME APETECE ES VER UNA DE audiovisual_actor
  | ALGO DE audiovisual_actor
  | ALGO DE audiovisual_actor
  | ALGO PARA VER DE audiovisual_actor
  | ALGO SOBRE audiovisual_actor
  | ALGUNA audiovisual_genre DE audiovisual_director audiovisual_subgenre
  | ALGUNA audiovisual_genre audiovisual_actor
  | BUSCA audiovisual_genre DE audiovisual_actor
  | BUSCAR audiovisual_genre DE audiovisual_actor
  | BUSCA ALGO DE audiovisual_actor
  | BUSCA ALGUN audiovisual_genre DE audiovisual_actor
  | BUSCA ALGUN audiovisual_genre DE audiovisual_actor PARA time_instant
  | BUSCA ALGUNA audiovisual_genre CON audiovisual_actor
  | BUSCAME UNA DE audiovisual_actor
  | BUSCAME audiovisual_genre DE audiovisual_actor
  | BUSCAME ALGO DE audiovisual_actor
  | BUSCAME ALGO DE audiovisual_subgenre DE audiovisual_actor
  | BUSCA ALGO DE audiovisual_subgenre DE audiovisual_actor
  | BUSCAR ALGO DE audiovisual_subgenre DE audiovisual_actor
  | RECOMIENDAME ALGO DE audiovisual_subgenre audiovisual_actor
  | RECOMIENDAME ALGO DE audiovisual_actor
  | DAME ALGO DE audiovisual_subgenre DE audiovisual_actor
  | DAME ALGO DE audiovisual_actor
  | BUSCA UNA DE audiovisual_actor
  | PON UNA DE audiovisual_actor
  | PON audiovisual_genre DE  audiovisual_actor
  | ALGO DE audiovisual_director
  | ALGO DEL DIRECTOR audiovisual_director
  | ALGUNA DIRIGIDA POR audiovisual_director
  | ALGUNA audiovisual_genre PROTAGONIZADA POR audiovisual_actor
  | BUSCA ALGO DE audiovisual_director
  | BUSCA ALGUNA audiovisual_genre DE audiovisual_director
  | BUSCA UNA audiovisual_genre DE audiovisual_actor
  | BUSCA UN audiovisual_genre DE audiovisual_actor
  | BUSCAR MAS audiovisual_genre DE audiovisual_actor
  | BUSCAR audiovisual_genre DE audiovisual_director
  | BUSCAME ALGO DE audiovisual_actor
  | BUSCAME ALGO DE audiovisual_actor
  | BUSCAME audiovisual_genre DE audiovisual_actor
  | BUSCAME audiovisual_genre EN LAS QUE ACTUE audiovisual_actor
  | BUSCAME audiovisual_genre DE audiovisual_director
  | BUSCAME UNA audiovisual_genre DE audiovisual_director
  | DAME ALGO DE audiovisual_director
  | DE audiovisual_director
  | DIME ALGO DE audiovisual_actor
  | DIME ALGUNA audiovisual_genre DE audiovisual_actor
  | DIME LAS audiovisual_genre QUE TIENES DE audiovisual_actor
  | DIME UNA audiovisual_genre DE audiovisual_director
  | DIME UNA audiovisual_genre EN LA QUE ACTUE audiovisual_actor COMO ACTRIZ PRINCIPAL
  | ENSEÑAME ALGO DE audiovisual_director COMO DIRECTOR
  | ENSEÑAME QUE audiovisual_genre TIENES DE audiovisual_director
  | ENSEÑAME audiovisual_genre EN LA QUE SALGA audiovisual_actor
  | HOY ME GUSTARIA VER ALGO DE audiovisual_director
  | HOY QUIERO VER ALGO DE audiovisual_actor
  | ME DIVIERTEN LAS audiovisual_genre DE audiovisual_director TIENES ALGUNA
  | ME ENCANTAN LAS audiovisual_genre DE audiovisual_director
  | ME GUSTA audiovisual_actor ME PUEDES RECOMENDAR ALGUNA audiovisual_genre SUYA
  | ME GUSTA audiovisual_director DAME ALGUNA DE EL
  | ME GUSTA MUCHO audiovisual_actor TIENES ALGUNA audiovisual_genre EN LA QUE SALGA
  | QUIERO ALGO DE audiovisual_actor
  | QUIERO UNA audiovisual_genre DE audiovisual_director
  | QUIERO UNA audiovisual_genre DONDE SALGA audiovisual_actor
  | QUIERO VER MAS audiovisual_genre DE audiovisual_director
  | QUIERO VER QUE audiovisual_genre DE audiovisual_actor TENEIS
  | QUIERO VER audiovisual_genre DE audiovisual_director
  | QUIERO VER UNA CON audiovisual_actor
  | QUIERO VER UNA DE audiovisual_director
  | QUIERO VER UNA audiovisual_genre DIRIGIDA POR audiovisual_director
  | QUIERO VER UNA audiovisual_genre CON audiovisual_actor
  | QUIERO VER UNA audiovisual_genre DIRIGIDA POR audiovisual_director
  | QUIERO VER UNA audiovisual_genre PROTAGONIZADA POR audiovisual_actor
  | QUIERO VER UNA audiovisual_genre QUE DIRIJA audiovisual_director
  | QUIERO VER UNA audiovisual_genre QUE PROTAGONICE audiovisual_actor
  | POR FAVOR UNA audiovisual_genre audiovisual_best DE audiovisual_actor
  | QUIERO ALGO DE audiovisual_subgenre DE audiovisual_releases DONDE SALGA audiovisual_actor
  | QUIERO ALGO SOBRE audiovisual_subgenre audiovisual_best
  | QUIERO ALGO SOBRE audiovisual_subgenre audiovisual_releases
  | QUIERO VER audiovisual_subgenre DE LOS audiovisual_best
  | BUSCAME UNA audiovisual_best DE audiovisual_actor
  | QUIERO VER audiovisual_subgenre DE LOS audiovisual_releases
  | BUSCAME UNA audiovisual_releases DE audiovisual_actor
  | PREFIERO ALGUNA audiovisual_genre audiovisual_subgenre DE audiovisual_actor
  | PASAME audiovisual_genre audiovisual_subgenre audiovisual_best
  | QUIERO ALGO DE audiovisual_subgenre DE LO audiovisual_best
  | PASAME audiovisual_genre audiovisual_subgenre audiovisual_releases
  | QUIERO ALGO DE audiovisual_subgenre audiovisual_releases
  | QUIERO audiovisual_subgenre CON audiovisual_director
  | QUIERO ALGO DE audiovisual_subgenre DE LAS audiovisual_most_watched
  | QUIERO ALGO DE audiovisual_subgenre DE LAS audiovisual_best
  | QUIERO ALGO DE audiovisual_subgenre DE audiovisual_releases
  | QUIERO ALGO DE audiovisual_subgenre audiovisual_releases
  | QUIERO UNA audiovisual_subgenre audiovisual_most_watched
  | QUIERO UNA audiovisual_genre CON audiovisual_most_watched
  | QUIERO VER audiovisual_subgenre DE LOS audiovisual_most_watched
  | QUIERO VER LAS audiovisual_genre DE audiovisual_director DE LAS audiovisual_most_watched
  | POR FAVOR ALGO DE audiovisual_director CON audiovisual_most_watched
  | QUIERO UNA audiovisual_subgenre audiovisual_releases
  | QUIERO UNA audiovisual_genre DE audiovisual_releases
  | QUIERO VER audiovisual_subgenre DE LOS audiovisual_releases
  | QUIERO VER LAS audiovisual_genre DE audiovisual_director DE LAS DE audiovisual_releases
  | POR FAVOR ALGO DE audiovisual_director audiovisual_releases
  | POR FAVOR ALGO DE audiovisual_director DE LOS audiovisual_releases
  | QUIERO LA audiovisual_genre audiovisual_best DE audiovisual_subgenre
  | QUIERO VER LAS audiovisual_genre audiovisual_most_watched DE audiovisual_director
  | QUIERO VER LAS audiovisual_genre audiovisual_most_watched DE audiovisual_actor
  | BUSCAME UNA DE audiovisual_director DE LAS audiovisual_most_watched
  | QUIERO UNA audiovisual_subgenre DE audiovisual_subgenre DE LAS audiovisual_most_watched
  | QUIERO LA audiovisual_genre DE audiovisual_subgenre
  | QUIERO LA audiovisual_genre DE audiovisual_subgenre audiovisual_most_watched
  | QUIERO LAS audiovisual_genre audiovisual_most_watched
  | QUIERO LOS audiovisual_genre audiovisual_most_watched
  | QUIERO LOS audiovisual_genre audiovisual_best
  | QUIERO VER UNA DE audiovisual_actor PERO DE LAS audiovisual_best
  | QUIERO UNA audiovisual_genre DE LAS audiovisual_most_watched
  | QUIERO LA audiovisual_genre DE audiovisual_releases
  | QUIERO LA audiovisual_genre DE audiovisual_subgenre DE audiovisual_releases
  | QUIERO LAS audiovisual_genre audiovisual_releases
  | QUIERO LOS audiovisual_genre DE audiovisual_releases
  | QUIERO LOS audiovisual_genre audiovisual_releases
  | QUIERO LOS audiovisual_genre DE audiovisual_releases
  | QUIERO VER UNA DE audiovisual_actor PERO DE LAS audiovisual_releases
  | QUIERO UNA audiovisual_genre DE LAS DE audiovisual_releases
  | QUIERO UNA audiovisual_genre DE LAS audiovisual_most_watched DE audiovisual_subgenre 
  | QUIERO VER UNA DE audiovisual_director PERO CON audiovisual_most_watched
  | QUIERO UNA DE audiovisual_subgenre BUENA
  | QUIERO UNA DE audiovisual_subgenre BUENA DE audiovisual_director
  | QUIERO audiovisual_subgenre CON audiovisual_director
  | QUIERO UNA audiovisual_genre BUENA DE LAS audiovisual_best
  | QUIERO UNA audiovisual_genre CHULA ENTRE LAS DE audiovisual_releases
  | QUIERO UNA audiovisual_genre CHULA DE LAS audiovisual_releases
  | QUIERO UNA audiovisual_genre PERO DE LAS audiovisual_releases
  | QUIERO UNA audiovisual_genre PERO POR FAVOR QUE SEA audiovisual_releases
  | QUIERO UNA audiovisual_genre DE LAS MAS audiovisual_releases
  | QUIERO UNA audiovisual_genre CHULA ENTRE LAS audiovisual_best
  | QUIERO UNA audiovisual_genre CHULA DE LAS audiovisual_best
  | QUIERO UNA audiovisual_genre audiovisual_best DE LAS CHULAS
  | QUIERO LA audiovisual_best audiovisual_genre
  | QUIERO LA audiovisual_best audiovisual_genre
  | QUIERO EL audiovisual_best audiovisual_genre
  | QUIERO LAS audiovisual_best audiovisual_genre
  | QUIERO UNA audiovisual_genre CON audiovisual_most_watched
  | QUIERO UNA audiovisual_genre CON audiovisual_most_watched
  | QUIERO UNA audiovisual_genre DE audiovisual_releases
  | QUIERO UNA audiovisual_genre audiovisual_releases
  | QUIERO UNA audiovisual_genre DE audiovisual_releases
  | QUIERO UNA audiovisual_genre audiovisual_releases
  | QUIERO UNAS audiovisual_genre audiovisual_releases
  | QUIERO UNAS audiovisual_genre audiovisual_releases
  | QUIERO VER UNA audiovisual_genre DE audiovisual_director
  | QUIERO VER LAS audiovisual_genre DE audiovisual_director
  | QUIERO VER UNA DE audiovisual_director
  | QUIERO VER LAS audiovisual_genre DE audiovisual_director
  | VER UNA DE audiovisual_director ESTARIA BIEN
  | VER UNA DE audiovisual_director ES LO QUE ME APETECE
  | LO QUE ME APETECE ES VER UNA DE audiovisual_director DE LAS audiovisual_most_watched
  | ALGO DE audiovisual_director
  | ALGO DE audiovisual_director LO audiovisual_best
  | RECOMIENDAME ALGO DE audiovisual_director DE LO audiovisual_best
  | ALGO DE audiovisual_director DE audiovisual_releases
  | RECOMIENDAME ALGO DE audiovisual_director DE LO audiovisual_releases
  | RECOMIENDAME ALGO DE audiovisual_director
  | ALGO PARA VER DE audiovisual_director
  | POR FAVOR ALGO DE audiovisual_director
  | ALGUNA audiovisual_genre DE audiovisual_director audiovisual_subgenre
  | ALGUNA audiovisual_genre audiovisual_director
  | BUSCA audiovisual_genre DE audiovisual_director
  | BUSCAR audiovisual_genre DE audiovisual_director DE LAS audiovisual_most_watched
  | BUSCA ALGO DE audiovisual_director
  | BUSCAR audiovisual_genre DE audiovisual_director DE LAS audiovisual_releases
  | BUSCAR audiovisual_genre DE LAS audiovisual_releases
  | BUSCAR DE audiovisual_director LAS audiovisual_genre audiovisual_releases
  | BUSCA DE audiovisual_director LAS audiovisual_releases
  | BUSCA ALGUN audiovisual_genre DE audiovisual_director
  | BUSCA ALGUN audiovisual_genre PARA time_instant DE audiovisual_director
  | BUSCA ALGUNA audiovisual_genre CON audiovisual_director
  | BUSCAME UNA DE audiovisual_director
  | BUSCAME audiovisual_genre DE audiovisual_director
  | BUSCAME ALGO DE audiovisual_director
  | BUSCAME ALGO DE audiovisual_director DE LO audiovisual_best
  | BUSCAME ALGO DE audiovisual_director DE audiovisual_releases
  | HAZME ALGUNA RECOMENDACION CON audiovisual_actor
  | SUGIEREME UNA audiovisual_genre DE audiovisual_actor
  | TIENES ALGUNA audiovisual_genre EN LA QUE SALGA audiovisual_actor
  | UNA EN QUE APAREZCA audiovisual_director
  | UNA audiovisual_genre DE audiovisual_actor
  | UNA audiovisual_genre EN LA QUE SALGA audiovisual_director
  | VER ALGO DE audiovisual_director
  | VER UNA DE audiovisual_actor
  | VER ALGUNA audiovisual_genre DE audiovisual_actor
  | VER UNA QUE SALGA audiovisual_director
  | ALGUNA audiovisual_genre DE audiovisual_director
  | HAY ALGO DE audiovisual_actor
  | HAY audiovisual_genre DE audiovisual_actor
  | QUIERO QUE REPRODUZCAS UNA audiovisual_genre DE audiovisual_actor
  | ME PUEDES RECOMENDAR ALGUNA audiovisual_genre DE audiovisual_director
  | TIENES audiovisual_genre DIRIGIDA POR audiovisual_director
  | TIENES ALGUNA audiovisual_genre DEL DIRECTOR audiovisual_director
  | TIENES audiovisual_genre DE audiovisual_director
  | TIENES audiovisual_genre EN LAS QUE ACTUE audiovisual_actor
  | TIENES ALGO DE audiovisual_director
  | QUE audiovisual_genre TIENES EN LAS QUE ACTUE audiovisual_actor
  | ME GUSTAN LAS audiovisual_genre PROTAGINIZADAS POR audiovisual_actor
  | audiovisual_actor
  | audiovisual_actor
  | audiovisual_director DE audiovisual_releases
  | audiovisual_director
  | audiovisual_genre PROTAGINIZADAS POR audiovisual_actor
  | PROTAGINIZADAS POR audiovisual_actor
  | BUSCAME ALGO DE audiovisual_subgenre DE audiovisual_director
  | BUSCA ALGO DE audiovisual_subgenre DE audiovisual_director
  | BUSCAR ALGO DE audiovisual_subgenre DE audiovisual_director
  | RECOMIENDAME ALGO DE audiovisual_subgenre DE audiovisual_director audiovisual_most_watched
  | RECOMIENDAME ALGO DE audiovisual_director
  | RECOMIENDAME ALGO DE audiovisual_subgenre DE audiovisual_director DE audiovisual_releases
  | RECOMIENDAME ALGO DE audiovisual_director DE audiovisual_releases
  | RECOMIENDAME ALGO DE audiovisual_director PERO DE audiovisual_releases
  | RECOMIENDAME ALGO DE audiovisual_subgenre DE LOS audiovisual_releases
  | DAME ALGO DE audiovisual_subgenre DE audiovisual_director
  | DAME ALGO DE audiovisual_director DE LAS audiovisual_most_watched
  | DAME ALGO DE audiovisual_director DE LAS DE audiovisual_releases
  | BUSCA UNA DE audiovisual_director
  | PON audiovisual_film_title
  | PON audiovisual_tvseries_title
  | PON audiovisual_film_title time_instant
  | BUSCA audiovisual_genre DE audiovisual_subgenre audiovisual_releases
  | PREFIERO audiovisual_subgenre audiovisual_releases
  | BUSCA audiovisual_genre DE audiovisual_releases
  | BUSCA audiovisual_subgenre audiovisual_releases
  | BUSCA ALGO DE audiovisual_subgenre PERO audiovisual_releases
  | PREFIERO ALGUNA audiovisual_genre audiovisual_releases
  | BUSCA ALGUN audiovisual_genre DE LOS audiovisual_best
  | BUSCA UNA audiovisual_subgenre audiovisual_best
  | BUSCA ALGO audiovisual_subgenre ENTRE LOS audiovisual_best
  | BUSCAME ALGO QUE VER audiovisual_releases
  | BUSCA UNA audiovisual_genre audiovisual_releases
  | BUSCA ALGUNA DE audiovisual_subgenre DE LAS audiovisual_best
  | BUSCAME UNA audiovisual_genre DE audiovisual_releases
  | DAME ALGUNA audiovisual_genre audiovisual_releases
  | RECOMIENDAME ALGUNA DE audiovisual_subgenre audiovisual_releases
  | DIME UNA audiovisual_genre O UNA audiovisual_genre audiovisual_releases
  | DAME UNA audiovisual_genre Y UNA audiovisual_genre DE LAS audiovisual_most_watched
  | BUSCAME audiovisual_genre Y audiovisual_genre DE LAS audiovisual_best
  | MEJOR BUSCA ALGO DE audiovisual_subgenre DE LO audiovisual_best
  | POR FAVOR BUSCAME ALGO DE audiovisual_subgenre Y audiovisual_subgenre audiovisual_releases
  | BUSCA ALGO DE audiovisual_subgenre Y audiovisual_subgenre audiovisual_releases
  | DAME LOS audiovisual_releases DE audiovisual_subgenre
  | DAME LOS audiovisual_releases DE audiovisual_subgenre audiovisual_best
  | audiovisual_film_title
  | audiovisual_tvseries_title
  | VER audiovisual_film_title
  | HE CAMBIADO DE IDEA MEJOR DAME audiovisual_tvseries_title
  | audiovisual_film_title
  | audiovisual_film_title
  | audiovisual_tvseries_title
  | audiovisual_tvseries_title
  | audiovisual_film_title
  | audiovisual_film_title
  | QUIERO VER EL audiovisual_genre audiovisual_documental_title
  | QUIERO VER EL audiovisual_genre audiovisual_documental_title
  | VER audiovisual_documental_title
  | BUSCA EL audiovisual_genre DE audiovisual_documental_title
  | BUSCAR audiovisual_tvshow_title
  | BUSCAME audiovisual_documental_title
  | BUSCAME EL audiovisual_genre DE audiovisual_documental_title
  | BUSCAME EL audiovisual_genre ESA DE audiovisual_tvshow_title
  | DAME LA FICHA DE audiovisual_documental_title
  | DESEO VER audiovisual_tvshow_title
  | DEJAME VER audiovisual_tvshow_title 
  | EMPIEZA A PONER audiovisual_documental_title
  | ENSEÑAME LA FICHA DE audiovisual_tvshow_title
  | ESTOY INTERESADA EN EL audiovisual_genre DE audiovisual_tvshow_title ME LO PUEDES PONER
  | ESTOY INTERESADO EN VER audiovisual_tvshow_title
  | ME APETECE VER audiovisual_documental_title
  | ME APETECE VER audiovisual_documental_title
  | ME ENCANTARIA VER audiovisual_tvshow_title
  | ME ENCANTARIA VER audiovisual_documental_title
  | ME GUSTARIA VER audiovisual_documental_title
  | ME GUSTARIA VER audiovisual_documental_title
  | NECESITO QUE PONGAS A REPRODUCIR audiovisual_tvshow_title
  | NOS GUSTARIA PONER EL audiovisual_genre DE audiovisual_documental_title
  | ME MOLARIA VER audiovisual_documental_title
  | ME MOLARIA VER audiovisual_documental_title
  | PON A REPRODUCIR EL audiovisual_genre DE audiovisual_documental_title
  | PON audiovisual_tvshow_title
  | PON audiovisual_documental_title
  | PON YA EL audiovisual_genre DE audiovisual_documental_title
  | PONER audiovisual_documental_title
  | PONER EL audiovisual_genre audiovisual_tvshow_title
  | PON audiovisual_documental_title
  | PON EL audiovisual_genre audiovisual_documental_title
  | PON EL audiovisual_genre DE audiovisual_documental_title
  | VER EL audiovisual_genre audiovisual_tvshow_title
  | VER EL audiovisual_genre DE audiovisual_documental_title
  | VER EL audiovisual_genre audiovisual_tvshow_title
  | VER UNA DE audiovisual_documental_title
  | QUERRIA VER audiovisual_documental_title
  | QUERRIA VER audiovisual_documental_title
  | QUERRIA VER UN CAPITULO DE audiovisual_tvshow_title
  | QUIERO QUE INICIES LA REPRODUCCION DE audiovisual_tvshow_title
  | QUIERO QUE ME PONGAS audiovisual_tvshow_title
  | QUIERO QUE PONGAS audiovisual_tvshow_title
  | QUIERO QUE PONGAS A REPRODUCIR audiovisual_tvshow_title
  | QUIERO QUE PONGAS A REPRODUCIR EL audiovisual_genre DE audiovisual_tvshow_title
  | QUIERO QUE REPRODUZCAS audiovisual_tvshow_title
  | QUIERO REPRODUCIR EL audiovisual_genre DE audiovisual_documental_title
  | QUIERO VER EL audiovisual_genre audiovisual_tvshow_title AHORA
  | QUIERO VER EL audiovisual_genre audiovisual_tvshow_title
  | QUIERO VER EL audiovisual_genre audiovisual_documental_title
  | QUIERO VER EL audiovisual_genre DE audiovisual_documental_title
  | QUIERO VER EL audiovisual_genre DE audiovisual_tvshow_title
  | QUIERO VER audiovisual_documental_title
  | QUIERO VER audiovisual_tvshow_title
  | REPRODUCE audiovisual_documental_title
  | REPRODUCE EL audiovisual_genre DE audiovisual_documental_title
  | REPRODUCIR audiovisual_documental_title
  | VER audiovisual_documental_title
  | VER audiovisual_tvshow_title
  | COMO HAGO PARA VER audiovisual_tvshow_title
  | COMO PONGO audiovisual_documental_title
  | TIENES EL audiovisual_genre DE audiovisual_tvshow_title
  | PUEDO VER audiovisual_tvshow_title
  | PUEDO VER EL QUINTO CAPITULO DE audiovisual_tvshow_title
  | QUE HAGO SI QUIERO PONER EL audiovisual_genre DE audiovisual_documental_title
  | QUE TENGO QUE HACER PARA VER audiovisual_documental_title
  | QUE audiovisual_genre DE audiovisual_documental_title TIENES
  | QUE SABES DE audiovisual_documental_title
  | PUEDES REPRODUCIR EL audiovisual_genre DE audiovisual_tvshow_title GRACIAS
  | PUEDES PONER A REPRODUCIR EL audiovisual_genre DE audiovisual_tvshow_title
  | PUEDES PONERME audiovisual_tvshow_title
  | BUSCAME EL audiovisual_genre audiovisual_documental_title
  | BUSCA EL audiovisual_genre audiovisual_documental_title
  | BUSCA audiovisual_documental_title
  | BUSCA audiovisual_documental_title
  | BUSCA ALGO DE audiovisual_documental_title
  | BUSCA EL audiovisual_genre DE audiovisual_documental_title
  | BUSCAME EL audiovisual_genre audiovisual_tvshow_title
  | BUSCAME audiovisual_tvshow_title
  | BUSCAME audiovisual_tvshow_title EL audiovisual_genre
  | BUSCAME audiovisual_documental_title EL audiovisual_genre
  | DAME audiovisual_documental_title
  | DAME ALGO DE audiovisual_documental_title
  | DAME audiovisual_documental_title
  | ESTABA PENSANDO EN VER EL audiovisual_genre audiovisual_documental_title
  | ESTABA PENSANDO EN audiovisual_documental_title
  | MEJOR DAME audiovisual_documental_title
  | DAME audiovisual_documental_title
  | ME APETECE VER audiovisual_tvshow_title
  | ME APETECE VER EL audiovisual_genre audiovisual_subgenre audiovisual_tvshow_title
  | DAME EL audiovisual_genre audiovisual_subgenre audiovisual_tvshow_title
  | DAME EL audiovisual_genre audiovisual_tvshow_title
  | DAME audiovisual_tvshow_title
  | ME APETECE VER EL audiovisual_genre audiovisual_tvshow_title
  | MEJOR DAME audiovisual_tvshow_title
  | MEJOR DAME EL audiovisual_genre audiovisual_documental_title
  | DAME EL audiovisual_genre audiovisual_documental_title
  | DAME audiovisual_documental_title
  | POR FAVOR DAME audiovisual_documental_title
  | PON audiovisual_tvshow_title
  | PON YA EL audiovisual_genre audiovisual_tvshow_title
  | PON EL audiovisual_genre audiovisual_tvshow_title
  | PON POR FAVOR EL audiovisual_genre audiovisual_tvshow_title
  | PON audiovisual_tvshow_title
  | PREFIERO audiovisual_tvshow_title
  | POR FAVOR PREFIERO audiovisual_tvshow_title
  | PREFIERO audiovisual_tvshow_title POR FAVOR
  | PREFIERO LA audiovisual_genre audiovisual_tvshow_title
  | QUIERO EL audiovisual_genre audiovisual_subgenre DE audiovisual_tvshow_title
  | QUIERO EL audiovisual_genre audiovisual_tvshow_title
  | POR FAVOR QUIERO EL audiovisual_genre audiovisual_tvshow_title
  | A VER SI TIENES EL audiovisual_genre audiovisual_tvshow_title
  | A VER SI TIENES audiovisual_tvshow_title
  | QUIERO VER EL audiovisual_genre audiovisual_tvshow_title
  | QUIERO VER EL audiovisual_genre audiovisual_tvshow_title
  | QUIERO QUE ME PONGAS EL audiovisual_genre DE audiovisual_subgenre audiovisual_tvshow_title
  | QUIERO VER audiovisual_tvshow_title
  | QUIERO VER audiovisual_tvshow_title
  | QUIERO VER audiovisual_tvshow_title DE audiovisual_subgenre
  | QUIERO VER audiovisual_documental_title DE audiovisual_subgenre
  | QUIERO VER EL audiovisual_genre audiovisual_tvshow_title
  | QUIERO VER EL audiovisual_genre audiovisual_tvshow_title
  | QUIERO VER EL audiovisual_genre DE audiovisual_tvshow_title
  | QUIERO VER audiovisual_tvshow_title
  | QUIERO VER audiovisual_tvshow_title
  | QUIERO VER EL audiovisual_tvshow_title
  | PON audiovisual_tvshow_title
  | BUSCA audiovisual_tvshow_title
  | BUSCA audiovisual_tvshow_title
  | BUSCAME audiovisual_tvshow_title
  | PON EL audiovisual_genre audiovisual_tvshow_title
  | audiovisual_tvshow_title
  | PON EL audiovisual_genre audiovisual_tvshow_title
  | audiovisual_tvshow_title
  | audiovisual_tvshow_title
  | VER audiovisual_tvshow_title
  | audiovisual_documental_title
  | PON EL audiovisual_genre audiovisual_documental_title
  | audiovisual_documental_title
  | VER audiovisual_documental_title
  | HE CAMBIADO DE IDEA MEJOR DAME audiovisual_tvshow_title
  | audiovisual_tvshow_title
  | audiovisual_genre audiovisual_most_watched
  | audiovisual_most_watched DE audiovisual_subgenre
  | audiovisual_most_watched DE audiovisual_subgenre
  | audiovisual_genre audiovisual_most_watched DE audiovisual_subgenre
  | audiovisual_genre audiovisual_most_watched audiovisual_subgenre
  | audiovisual_best audiovisual_genre
  | audiovisual_genre audiovisual_most_watched
  | QUIERO VER LOS CONTENIDOS audiovisual_most_watched DE audiovisual_subgenre
  | QUIERO VER LOS CONTENIDOS audiovisual_most_watched DE audiovisual_genre
  | BUSCA ALGO QUE VER DE audiovisual_releases
  | BUSCA ALGO QUE VER DE audiovisual_releases
  | BUSCA ALGO QUE VER audiovisual_releases
  | BUSCA ALGO QUE VER DE LAS audiovisual_releases
  | BUSCA ALGO PARA VER audiovisual_releases
  | CUALES SON LOS audiovisual_genre audiovisual_most_watched
  | CUALES SON LAS audiovisual_genre audiovisual_most_watched
  | CUAL ES LA audiovisual_genre audiovisual_most_watched
  | CUAL ES LA audiovisual_genre audiovisual_most_watched
  | audiovisual_genre audiovisual_most_watched
  | DAME LOS audiovisual_releases DE audiovisual_genre audiovisual_most_watched
  | DIME audiovisual_genre DE audiovisual_releases
  | BUSCA audiovisual_genre DE audiovisual_releases
  | BUSCA audiovisual_genre DE LAS audiovisual_releases
  | BUSCA audiovisual_genre DE audiovisual_releases
  | QUIERO audiovisual_genre DE audiovisual_releases
  | QUIERO audiovisual_genre DE audiovisual_releases
  | QUIERO audiovisual_genre DE LAS audiovisual_releases
  | QUIERO audiovisual_genre audiovisual_releases
  | QUIERO audiovisual_genre DE audiovisual_releases
  | CUALES SON LAS audiovisual_best audiovisual_genre
  | CUALES SON LAS audiovisual_best audiovisual_genre
  | CUAL ES LA audiovisual_best audiovisual_genre
  | BUSCAME LAS audiovisual_genre audiovisual_most_watched
  | BUSCAME LAS audiovisual_genre audiovisual_most_watched
  | BUSCAME LAS audiovisual_genre audiovisual_most_watched
  | BUSCAME LAS audiovisual_genre CON audiovisual_most_watched
  | BUSCAME EL audiovisual_genre audiovisual_most_watched
  | BUSCAME EL audiovisual_genre audiovisual_most_watched
  | BUSCAME LOS audiovisual_genre audiovisual_most_watched
  | BUSCAME LOS audiovisual_genre audiovisual_most_watched
  | BUSCAME LOS audiovisual_genre audiovisual_most_watched
  | BUSCAME LOS audiovisual_genre audiovisual_most_watched
  | BUSCAME LA audiovisual_genre audiovisual_most_watched
  | QUIERO VER LOS audiovisual_best audiovisual_genre
  | QUIERO VER LOS audiovisual_genre audiovisual_best
  | QUIERO VER LAS audiovisual_genre audiovisual_best
  | QUIERO ALGO DE audiovisual_subgenre DE LO audiovisual_most_watched
  | QUIERO ALGO DE audiovisual_subgenre DE LO audiovisual_most_watched
  | QUIERO ALGO DE audiovisual_subgenre DE LO audiovisual_most_watched
  | Y UNA audiovisual_genre DE audiovisual_subgenre audiovisual_releases QUE NO HAYA VISTO
  | Y UNA audiovisual_genre DE audiovisual_subgenre audiovisual_releases QUE NO HAYA VISTO
  | POR FAVOR ALGO DE audiovisual_director CON audiovisual_most_watched
  | QUIERO UNA audiovisual_subgenre audiovisual_releases
  | QUIERO UNA audiovisual_subgenre audiovisual_releases
  | QUIERO UNA audiovisual_subgenre DE audiovisual_releases
  | QUIERO UNA audiovisual_subgenre audiovisual_releases
  | QUIERO LOS audiovisual_genre DE audiovisual_releases
  | QUIERO VER UNA DE audiovisual_director PERO CON audiovisual_most_watched
  | LO QUE ME APETECE ES VER UNA DE audiovisual_director DE LAS audiovisual_most_watched
  | LO QUE ME APETECE ES VER UNA DE audiovisual_director DE LAS audiovisual_most_watched
  | LO QUE ME APETECE ES VER UNA DE audiovisual_director DE LAS audiovisual_most_watched
  | LO QUE ME APETECE ES VER UNA DE audiovisual_director DE LAS audiovisual_most_watched
  | RECOMIENDAME ALGO DE audiovisual_director DE LO audiovisual_best
  | RECOMIENDAME ALGO DE audiovisual_director DE LO audiovisual_best
  | BUSCA DE audiovisual_director LAS audiovisual_releases
  | BUSCA DE audiovisual_director LAS audiovisual_releases
  | BUSCA DE audiovisual_director LAS audiovisual_releases
  | PREFIERO audiovisual_subgenre audiovisual_releases
  | PREFIERO audiovisual_subgenre DE audiovisual_releases
  | PREFIERO audiovisual_subgenre audiovisual_releases
  | PREFIERO audiovisual_subgenre audiovisual_releases
  | PON ALGUN audiovisual_genre SOBRE audiovisual_subgenre DE LOS audiovisual_most_watched
  | BUSCA UNA audiovisual_subgenre audiovisual_best
  | PON ALGO QUE VER DE LAS audiovisual_releases
  | PON ALGO QUE VER DE LAS audiovisual_releases
  | PON ALGO QUE VER DE LAS audiovisual_releases
  | PON LAS audiovisual_genre audiovisual_most_watched DE audiovisual_subgenre
  | PON LAS audiovisual_genre audiovisual_most_watched DE audiovisual_subgenre
  | PON LAS audiovisual_genre audiovisual_most_watched DE audiovisual_subgenre
  | PON LOS audiovisual_genre CON audiovisual_most_watched DE audiovisual_subgenre
  | PON LOS audiovisual_genre audiovisual_most_watched DE audiovisual_subgenre
  | PON LAS audiovisual_genre audiovisual_most_watched audiovisual_subgenre
  | PON LAS audiovisual_genre audiovisual_subgenre audiovisual_most_watched
  | PON LAS audiovisual_genre audiovisual_subgenre CON audiovisual_most_watched
  | PON audiovisual_genre QUE SEAN DE audiovisual_subgenre
  | PON audiovisual_genre QUE SEAN SOBRE audiovisual_subgenre
  | PON audiovisual_genre
  | PON audiovisual_genre QUE ME GUSTEN DE audiovisual_subgenre
  | PON audiovisual_genre QUE ME GUSTEN DE audiovisual_subgenre
  | PON audiovisual_genre QUE SEAN DE audiovisual_subgenre
  | PON audiovisual_subgenre QUE SEAN DE audiovisual_subgenre
  | PON audiovisual_genre QUE SEAN DE audiovisual_subgenre
  | PON audiovisual_genre audiovisual_genre QUE SEAN DE audiovisual_subgenre
  | PON audiovisual_genre DE audiovisual_subgenre
  | PON audiovisual_genre DE audiovisual_subgenre
  | PON audiovisual_genre QUE SEAN DE audiovisual_subgenre
  | PON audiovisual_genre QUE SEAN DE audiovisual_subgenre
  | PON audiovisual_genre time_instant
  | PON time_instant MAS audiovisual_genre
  | PON audiovisual_genre QUE SEAN DE audiovisual_subgenre audiovisual_subgenre
  | PON audiovisual_genre
  | PON audiovisual_genre DE audiovisual_subgenre
  | PON audiovisual_genre QUE SEAN DE audiovisual_subgenre
  | PON audiovisual_genre QUE SEAN SOBRE audiovisual_subgenre
  | PON audiovisual_genre DE audiovisual_subgenre
  | PON ALGO DE audiovisual_genre audiovisual_subgenre
  | PON ALGO DE audiovisual_genre PARA MI
  | PON ALGO DE audiovisual_subgenre
  | PON ALGO DE audiovisual_subgenre
  | PON ALGO DE audiovisual_subgenre PARA MI
  | PON ALGO QUE ME GUSTE DE audiovisual_subgenre
  | PON ALGO QUE ME GUSTE DE audiovisual_subgenre
  | PON ALGO QUE ME GUSTE DE audiovisual_subgenre
  | PON ALGO QUE ME GUSTE SOBRE audiovisual_subgenre
  | PON ALGO QUE ME GUSTE Y QUE SEA audiovisual_subgenre
  | PON ALGO QUE ME GUSTE time_instant
  | PON ALGO time_instant
  | PON ALGUNA audiovisual_genre audiovisual_genre QUE ME GUSTE
  | PON ALGUN audiovisual_genre QUE SEA DE audiovisual_subgenre
  | PON UNA audiovisual_genre DE audiovisual_subgenre
  | PON UNA audiovisual_genre
  | PON UNA DE audiovisual_subgenre
  | PONER ALGO DE audiovisual_subgenre
  | PONER ALGO DE audiovisual_genre
  | PON audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | PON audiovisual_genre SOBRE audiovisual_subgenre
  | PON audiovisual_genre QUE SEAN DE audiovisual_subgenre
  | PON audiovisual_genre DE audiovisual_subgenre
  | PON audiovisual_genre QUE ME GUSTEN DE audiovisual_subgenre
  | PON audiovisual_genre
  | PON ALGO audiovisual_subgenre QUE ME GUSTEN DE audiovisual_subgenre
  | PON ALGO DE audiovisual_subgenre PARA MI
  | PON ALGO DE audiovisual_subgenre
  | PON ALGO QUE ME GUSTE DE audiovisual_subgenre
  | PON ALGO QUE ME GUSTE time_instant
  | PON ALGO QUE ME PUEDA GUSTAR
  | PON ALGO SOBRE audiovisual_subgenre
  | PON ALGO SOBRE audiovisual_subgenre PARA MI
  | PON ALGUN audiovisual_genre
  | PON COSAS DE audiovisual_subgenre
  | PON COSAS SOBRE audiovisual_subgenre
  | PON UNA audiovisual_subgenre
  | PON UNA audiovisual_genre SOBRE audiovisual_subgenre
  | PON UNA audiovisual_genre
  | PON UNA audiovisual_subgenre
  | PON LAS audiovisual_genre audiovisual_most_watched DE audiovisual_subgenre
  | PON LAS audiovisual_genre audiovisual_subgenre audiovisual_most_watched
  | PON LAS audiovisual_genre audiovisual_most_watched DE audiovisual_subgenre
  | PON LAS audiovisual_genre audiovisual_most_watched audiovisual_subgenre
  | PON ALGO QUE ME GUSTE DE audiovisual_subgenre EN MI device
  | PON ALGO QUE ME GUSTE EN MI device
  | PON ALGO QUE ME PUEDA GUSTAR EN MI device
  | PON ALGO EN MI device SOBRE audiovisual_subgenre
  | QUE PUEDO PONER time_interval EN LA device
  | PON EN MI device MAS audiovisual_genre
  | PON audiovisual_genre EN LA device
  | PON ALGO QUE ME GUSTE EN LA device
  | PON ALGO EN MI device
  | POR FAVOR NOS PONES ALGO DE audiovisual_genre audiovisual_subgenre
  | POR FAVOR NOS PONES ALGUNA DE audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | PROPONME ALGO DE audiovisual_genre PARA time_interval
  | QUIERO QUE ME PONGAS ALGUN audiovisual_genre DE audiovisual_subgenre PARA time_interval
  | QUIERO QUE ME PONGAS ALGUNA audiovisual_genre audiovisual_genre PARA time_interval
  | QUIERO QUE ME PONGAS UNA audiovisual_genre audiovisual_subgenre PARA time_interval
  | ME PODRIAS PONER UN audiovisual_genre time_interval
  | ME PUEDES PONER ALGUN audiovisual_genre time_interval
  | ME PUEDES PROPONER audiovisual_genre PARA time_interval
  | PONEN time_interval ALGUN audiovisual_genre audiovisual_genre DE audiovisual_subgenre
  | PONEN time_interval audiovisual_genre time_interval
  | PONEN ALGO time_interval
  | PONEN ALGO DE audiovisual_genre time_interval
  | PONEN ALGUNA audiovisual_genre audiovisual_subgenre time_interval
  | QUE audiovisual_genre PONEN time_interval
  | QUE PUEDO PONER time_interval time_instant
  | VAN A PONER ALGUN audiovisual_genre time_interval
  | VAN A PONER ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval
  | PON UNA audiovisual_subgenre PARA time_interval
  | QUIERO SABER QUE audiovisual_genre PONEN time_interval time_interval
  | RECOMIENDAME ALGUN audiovisual_genre QUE PONGAN time_interval
  | DIME LAS audiovisual_subgenre DE audiovisual_subgenre QUE PONEN time_interval time_instant
  | DIME LAS audiovisual_genre QUE PONEN time_instant
  | DIME LOS audiovisual_genre QUE PONEN time_interval time_instant
  | DIME SI ESTAN PONIENDO time_instant ALGUNA audiovisual_genre DE audiovisual_subgenre
  | DIME SI VAN A PONER ALGUNA audiovisual_genre time_instant
  | DIME UNA audiovisual_genre DE audiovisual_subgenre QUE PONGAN time_interval time_instant
  | DIME UNA audiovisual_subgenre DE audiovisual_subgenre QUE PONGAN time_interval time_instant
  | PON ALGO QUE PUEDA VER time_instant
  | PON ALGO PARA VER time_instant
  | PON ALGO QUE PUEDA VER time_instant
  | RECOMIENDAME ALGUNA audiovisual_genre QUE ESTEN PONIENDO time_instant
  | ESTAN PONIENDO ALGUN audiovisual_genre DE audiovisual_subgenre time_instant
  | PONEN time_interval ALGUNA audiovisual_genre DE audiovisual_subgenre time_instant
  | QUE audiovisual_genre PONEN time_interval time_instant
  | QUE audiovisual_genre PONEN time_interval
  | QUE audiovisual_genre DE audiovisual_subgenre PONEN time_interval time_instant
  | ACONSEJAME ALGO DE audiovisual_genre QUE PONGAN time_interval
  | ACONSEJAME UNA audiovisual_genre QUE PONGAN time_interval
  | DIME ALGUNA audiovisual_genre audiovisual_genre QUE PONGAN time_interval time_interval
  | DIME ALGUN audiovisual_genre QUE PONGAN time_interval time_interval
  | DIME ALGUN audiovisual_genre QUE PONGAN time_interval
  | DIME QUE audiovisual_genre PONEN time_interval
  | RECOMIENDAME audiovisual_genre QUE PONGAN time_interval
  | HAY ALGUNA audiovisual_subgenre QUE PONGAN time_interval time_interval
  | PONEN audiovisual_genre DE audiovisual_subgenre time_interval
  | PONEN ALGUNA audiovisual_genre audiovisual_genre DE audiovisual_subgenre time_interval
  | PONEN ALGUN audiovisual_genre DE audiovisual_subgenre time_interval time_interval
  | QUE audiovisual_genre PONEN time_interval time_interval
  | QUE audiovisual_genre PONEN time_interval
  | TENEIS ALGUNA audiovisual_genre QUE PONGAN time_interval time_interval
  | PON audiovisual_genre QUE SEAN DE audiovisual_subgenre
  | PON audiovisual_subgenre Y QUE SEA audiovisual_subgenre
  | PON audiovisual_genre SOBRE audiovisual_subgenre
  | PON audiovisual_genre
  | PON UNA audiovisual_genre QUE TENGA audiovisual_subgenre
  | PON UNA audiovisual_genre SOBRE audiovisual_subgenre DE LAS audiovisual_best
  | QUIERO QUE ME PONGAS ALGUNA audiovisual_genre DE audiovisual_actor
  | QUIERO QUE ME PONGAS UNA audiovisual_genre DIRIGIDA POR audiovisual_director
  | ME PONES ALGUNA audiovisual_genre DE audiovisual_actor
  | ME PUEDES PONER ALGUNA audiovisual_genre DE audiovisual_actor
  | ME PUEDES PONER ALGO DE audiovisual_actor
  | PON UN audiovisual_subgenre DE audiovisual_director
  | PON ALGO QUE ME GUSTE DE audiovisual_subgenre DE audiovisual_director
  | PON ALGO QUE ME PUEDA GUSTAR DE audiovisual_actor
  | PON ALGUNA audiovisual_genre DE LAS audiovisual_best
  | PON ALGUN audiovisual_genre SOBRE audiovisual_subgenre DE LOS audiovisual_most_watched
  | DAME LOS audiovisual_releases DE audiovisual_subgenre audiovisual_best
  //--------------------------------------
  | PON audiovisual_film_title
  | ME APETECE VER audiovisual_film_title
  | QUIERO VER audiovisual_film_title
  | TIENES audiovisual_film_title
  | QUIERO VER audiovisual_film_title
  | PON audiovisual_film_title
  | BUSCAME audiovisual_film_title
  | BUSCA audiovisual_film_title
  | DAME LA audiovisual_genre audiovisual_film_title
  | PODRIAS BUSCARME audiovisual_tvshow_title
  | PUEDES BUSCARME LA audiovisual_genre DE audiovisual_documental_title
  | BUSCAME audiovisual_film_title
  | PON LA DE audiovisual_film_title
  | PUEDES PONERME LA DE audiovisual_film_title
  | PUEDES PONER audiovisual_film_title
  | QUIERO VER LA audiovisual_genre DE EL audiovisual_tvshow_title
  | QUIERO VER LOS audiovisual_releases
  | QUIERO VER audiovisual_genre audiovisual_releases
  | QUIERO VER audiovisual_genre audiovisual_releases
  | DAME LAS audiovisual_genre ULTIMAS
  | BUSCAME audiovisual_genre audiovisual_releases
  | DIME audiovisual_genre DE time_interval
  | ENCUENTRAME audiovisual_genre DE audiovisual_subgenre
  | BUSCAME LOS audiovisual_releases
  | QUE audiovisual_genre PONEN time_interval DE audiovisual_subgenre
  | BUSCAME audiovisual_genre PARA time_interval
  | BUSCAME DE RISA audiovisual_genre
  | BUSCA audiovisual_genre DE RISA
  | BUSCAME audiovisual_genre DE audiovisual_genre
  | DIME audiovisual_genre DE audiovisual_director
  | BUSCAME ALGO PARA time_interval time_interval DE audiovisual_subgenre
  | QUIERO VER audiovisual_genre DE audiovisual_subgenre
  | QUE PUEDO VER time_interval DE audiovisual_film_title
  | audiovisual_genre DE audiovisual_subgenre
  | PEPE AL HABLA DIME audiovisual_releases DE audiovisual_subgenre
  | QUE audiovisual_genre PUEDO VER DE audiovisual_subgenre 
  | PUEDES BUSCARME audiovisual_genre SOBRE audiovisual_subgenre 
  | time_interval ECHAN ALGO DE RISA
  | BUSCAME audiovisual_genre DE audiovisual_director
  | BUSCA audiovisual_genre DE audiovisual_director time_instant
  | DIME audiovisual_genre DE audiovisual_director
  | PUEDO VER ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval time_interval
  | DIME audiovisual_genre FUTURISTAS
  | DIME audiovisual_genre DE audiovisual_subgenre
  | DAME LA MEJOR audiovisual_genre DE audiovisual_director PARA time_interval
  | NECESITO VER LA ULTIMA DE audiovisual_film_title
  | QUE PUEDO VER time_instant DE audiovisual_subgenre
  | QUE ES LO MAS VISTO DE audiovisual_subgenre
  | RECOMIENDAME ALGUN audiovisual_genre CHULO
  | CUALES SON LOS audiovisual_best audiovisual_genre
  | QUIERO VER time_instant audiovisual_tvshow_title
  | ME PUEDES RECOMENDAR ALGO PARA time_interval
  | QUE PUEDO VER time_interval DE audiovisual_actor
  | ECHAN ALGO DE audiovisual_channel time_interval
  | RECOMIENDANOS UNA audiovisual_genre PARA audiovisual_subgenre
  | QUE NOS RECOMIENDAS PARA audiovisual_subgenre time_interval
  | audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre DE audiovisual_subgenre
  | DIME audiovisual_genre DE audiovisual_director
  | BUSCAME audiovisual_genre DE audiovisual_director
  | BUSCANOS audiovisual_genre DE audiovisual_subgenre
  | audiovisual_genre DE audiovisual_subgenre PARA NIÑOS time_interval
  | audiovisual_genre DE audiovisual_subgenre
  | PON EL audiovisual_genre DE audiovisual_film_title
  | QUIERO VER UN audiovisual_genre DE audiovisual_subgenre
  | MUESTRAME audiovisual_genre DE audiovisual_subgenre
  | ENSEÑAME audiovisual_genre DE audiovisual_director
  | BUSCAME time_instant audiovisual_channel
  | COMPLACEME Y PON audiovisual_tvseries_title PLEASE
  | BUSCAME audiovisual_tvseries_title SI PUEDES PORFA
  | ESTOY NOSTALGICO PUEDO VER time_instant audiovisual_film_title
  | QUIERO APRENDER BUSCAME audiovisual_documental_title GRACIAS
  | PON EL audiovisual_genre DE audiovisual_director
  | PON EL audiovisual_genre DE audiovisual_actor
  | PON LA audiovisual_genre DE audiovisual_tvseries_title SI PUEDES
  | MUESTRAME audiovisual_tvshow_title
  | PON audiovisual_releases DE audiovisual_tvseries_title time_instant
  | TRAEME LO MEJOR DE audiovisual_tvshow_title
  ;

ULTIMAS:'ultimas';
ENCUENTRAME:'encuentrame';
PEPE:'pepe';
HABLA:'habla';
FUTURISTAS:'futuristas';
ULTIMA:'ultima';
CHULO:'chulo';
RECOMIENDANOS:'recomiendanos';
BUSCANOS:'buscanos';
COMPLACEME:'complaceme';
PORFA:'porfa';
NOSTALGICO:'nostalgico';
TRAEME:'traeme';


//
//-------- Intent --- search_content.by_time -----------------
//
search_content_by_time
  : CUANDO PUEDO VER audiovisual_sports_season DE audiovisual_sports
  | CUANDO ECHAN audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO ECHAN audiovisual_sports_unit DE LOS audiovisual_sports_team
  | CUANDO ES EL audiovisual_sports_unit DEL audiovisual_sports_team EN audiovisual_channel
  | CUANDO SE JUEGA EL audiovisual_sports_unit
  | CUANDO SE JUEGA EL audiovisual_sports_unit DEL audiovisual_sports_team time_interval
  | CUANDO SE JUEGA EL audiovisual_sports_unit DE LOS audiovisual_sports_team time_interval
  | audiovisual_sports_unit DEL audiovisual_sports_team
  | DONDE ECHAN EL audiovisual_sports_season
  | CUANDO EMITEN EL audiovisual_sports_season
  | CUANDO DAN EL audiovisual_sports_season
  | CUANDO ES EL audiovisual_sports_season DE audiovisual_sports
  | CUANDO ES EL audiovisual_sports_season
  | CUANDO ES EL audiovisual_sports_unit DEL audiovisual_sports_season
  | CUANDO ES EL audiovisual_sports_unit DE LA audiovisual_sports_season
  | CUANDO ES LA audiovisual_sports_unit DE audiovisual_sports_season
  | CUANDO PONEN LA audiovisual_sports_unit DE audiovisual_sports_season
  | CUANDO ECHAN LA audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_season
  | CUANDO ES LA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO PONEN EL audiovisual_sports_season
  | audiovisual_sports_unit audiovisual_sports_team
  | EL audiovisual_sports_unit DEL audiovisual_sports_team
  | QUIERO VER audiovisual_sports_unit DEL audiovisual_sports_team
  | A QUE HORA ES LA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO JUEGA EL audiovisual_sports_team
  | CUANDO JUEGAN LOS audiovisual_sports_team
  | CUANDO JUEGAN LA audiovisual_sports_season
  | CUANDO SON LOS audiovisual_sports_unit DE audiovisual_sports_season
  | CUANDO SON LOS audiovisual_sports_unit DE LA audiovisual_sports_season
  | CUANDO SON LOS audiovisual_sports_unit DE LA audiovisual_sports_season
  | CUANDO JUEGA EL audiovisual_sports_team EN audiovisual_channel
  | CUANDO JUEGAN LOS audiovisual_sports_team EN audiovisual_channel
  | CUANDO JUEGAN LA audiovisual_sports_season EN audiovisual_channel
  | CUANDO SON LOS audiovisual_sports_unit DE audiovisual_sports_season EN audiovisual_channel
  | CUANDO SON LOS audiovisual_sports_unit DE LA audiovisual_sports_season EN audiovisual_channel
  | CUANDO SON LOS audiovisual_sports_unit DE LA audiovisual_sports_season EN audiovisual_channel
  | CUANDO JUEGAN LOS audiovisual_sports_team
  | CUANDO JUEGAN EL audiovisual_sports_team Y EL audiovisual_sports_team
  | CUANDO VA A JUGAR EL audiovisual_sports_team
  | CUANDO VUELVE A JUGAR EL audiovisual_sports_team
  | CUANDO VUELVE A JUGAR EL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | CUANDO VUELVE A JUGAR EL audiovisual_sports_team Y EL audiovisual_sports_team
  | CUANDO VUELVEN A JUGAR EL audiovisual_sports_team Y EL audiovisual_sports_team
  | DIME CUANDO ES EL audiovisual_sports_unit DE audiovisual_sports
  | DIME CUANDO ES EL audiovisual_sports_unit DEL audiovisual_sports_team
  | DIME CUANDO ES EL audiovisual_sports_unit DE LOS audiovisual_sports_team
  | DIME CUANDO VA A SER EL audiovisual_sports_unit DE audiovisual_sports
  | ENSEÑAME EL PROXIMO audiovisual_sports_unit DE audiovisual_sports
  | ENSEÑAME LA PROXIMA audiovisual_sports_unit DE audiovisual_sports
  | FECHAS Y HORAS DE LOS audiovisual_sports_unit DE PRETEMPORADA DEL audiovisual_sports_team
  | FECHA Y HORA DEL audiovisual_sports_unit DEL audiovisual_sports_team
  | FECHA Y HORARIO DE LA audiovisual_sports_unit DE audiovisual_sports
  | HORARIO DEL audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_team
  | PROXIMO audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team
  | PROXIMO audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_team
  | PROXIMO audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | A QUE HORA DAN EL audiovisual_sports_unit DEL audiovisual_sports_team
  | A QUE HORA DAN EL audiovisual_sports_unit DE LOS audiovisual_sports_team
  | A QUE HORA DAN LA audiovisual_sports_unit DE audiovisual_sports
  | A QUE HORA EMITEN EL audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team
  | A QUE HORA ES EL audiovisual_sports_unit DE audiovisual_sports
  | A QUE HORA ES EL audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | A QUE HORA ES LA audiovisual_sports_unit DE audiovisual_sports
  | A QUE HORA EMITEN EL audiovisual_sports_unit DEL audiovisual_sports_team Y EL audiovisual_sports_team
  | A QUE HORA TELEVISAN LA audiovisual_sports_unit DE audiovisual_sports
  | A QUE HORA TRANSMITEN EL audiovisual_sports_unit DE audiovisual_sports
  | A QUE HORA SE EMITEN audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team
  | A QUE HORA SE RETRANSMITE EL audiovisual_sports_unit DE audiovisual_sports
  | A QUE HORA SE TELEVISA LA audiovisual_sports_unit DE audiovisual_sports
  | A QUE HORA SE TRASNMITE EL audiovisual_sports_unit DE audiovisual_sports
  | A QUE HORA JUEGA EL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | A QUE HORA JUEGAN LOS audiovisual_sports_team CONTRA LOS audiovisual_sports_team
  | A QUE HORA JUEGA EL audiovisual_sports_team Y EL audiovisual_sports_team
  | A QUE HORA JUEGAN EL audiovisual_sports_team Y EL audiovisual_sports_team
  | A QUE HORA ES EL audiovisual_sports_unit DEL audiovisual_sports_team Y EL audiovisual_sports_team
  | A QUE HORA ES EL audiovisual_sports_unit EL audiovisual_sports_team
  | A QUE HORA ES EL audiovisual_sports_unit DE audiovisual_sports_season EN audiovisual_channel
  | A QUE HORA JUEGA EL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | CUANDO SE TRANSMITEN LAS audiovisual_sports_unit DE audiovisual_sports
  | CUANDO TRANSMITEN EL audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | CUANDO DAN EL audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO DAN EL audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO DAN EL audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | CUANDO ECHAN audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO EMITEN EL audiovisual_sports_unit DE audiovisual_sports
  | CUANDO EMITEN EL PROXIMO audiovisual_sports_unit DE audiovisual_sports
  | CUANDO ES EL audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | CUANDO ES EL PROXIMO audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team
  | CUANDO ES LA PROXIMA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO ES LA PROXIMA audiovisual_sports_unit DE LOS audiovisual_sports_team
  | CUANDO ES LA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO RETRANSMITEN LAS audiovisual_sports_unit DE audiovisual_sports
  | CUANDO SE EMITE EL audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO SE EMITE LA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO SE JUEGA EL audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team
  | CUANDO SE RETRANSMITE EL audiovisual_sports_unit DE audiovisual_sports
  | CUANDO SE TELEVISA EL audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_team
  | CUANDO SON LOS audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO SON LOS audiovisual_sports_unit DE LOS audiovisual_sports_team
  | CUANDO TELEVISAN EL audiovisual_sports_unit DE audiovisual_sports
  | CUANDO TIENE EL audiovisual_sports_team EL audiovisual_sports_unit DE audiovisual_sports_season CONTRA EL audiovisual_sports_team
  | CUANDO TRANSMITEN LA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO VA A SER EL PROXIMO audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team
  | CUANDO VUELVE A JUGAR EL audiovisual_sports_team UN audiovisual_sports_unit DE audiovisual_sports_season 
  | ME PUEDES DECIR CUANDO SE VA A CELEBRAR EL audiovisual_sports_unit DE audiovisual_sports
  | QUE DIA DAN EL audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team
  | QUE DIA PONEN EL audiovisual_sports_unit DEL audiovisual_sports_team
  | QUE DIA EMITEN LA audiovisual_sports_unit DE audiovisual_sports
  | QUE DIA TELEVISAN EL PROXIMO audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team
  | QUE DIA RETRANSMITEN LA PROXIMA audiovisual_sports_unit DE audiovisual_sports
  | QUE DIA TRANSMITEN LA PROXIMA audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_team
  | QUE DIA JUEGAN EL audiovisual_sports_team Y EL audiovisual_sports_team
  | QUE DIA JUEGA EL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | EN QUE FECHA CAEN LOS audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team
  | EN QUE FECHA DAN EL audiovisual_sports_unit DE audiovisual_sports
  | EN QUE FECHA EMITEN LA PROXIMA audiovisual_sports_unit DE audiovisual_sports
  | EN QUE FECHA TELEVISAN EL PROXIMO audiovisual_sports_unit DEL audiovisual_sports_team
  | EN QUE FECHA TRANSMITEN LA audiovisual_sports_unit DE audiovisual_sports
  | EN QUE FECHA RETRANSMITEN LOS audiovisual_sports_unit audiovisual_sports_season DEL audiovisual_sports_team
  | EN QUE FECHA JUEGA EL audiovisual_sports_team
  | EN QUE FECHA JUEGAN LO audiovisual_sports_team
  | EN QUE FECHA JUEGAN EL audiovisual_sports_team Y EL audiovisual_sports_team
  | HORARIO DE LA audiovisual_sports_unit DE audiovisual_sports
  | DIME EL HORARIO DEL audiovisual_sports_unit DEL audiovisual_sports_team
  | DIME CUANDO VA A VOLVER A JUGAR EL audiovisual_sports_team
  | DIME QUE DIA SE TELEVISA EL audiovisual_sports_unit DEL audiovisual_sports_team
  | QUIERO SABER EL HORARIO DEL audiovisual_sports_unit audiovisual_sports ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team
  | QUIERO SABER CUANDO DAN EL audiovisual_sports_unit DE audiovisual_sports
  | QUIERO CONSULTAR LA FECHA EN LA QUE RETRANSMITEN EL audiovisual_sports_unit DE audiovisual_sports
  | QUIERO CONSULTAR EL HORARIO DE LA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO CAE LA PROXIMA audiovisual_sports_unit DE audiovisual_sports
  | QUIERO CONOCER LA HORA EL audiovisual_sports_unit DEL audiovisual_sports_team Y EL audiovisual_sports_team
  | QUIERO SABER EL HORARIO DEL audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team
  | DONDE TELEVISAN EL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | QUISIERA VER LA PROXIMA audiovisual_sports_unit DE audiovisual_sports PERO NO SE CUANDO LO PONEN
  | QUIERO VER EL PROXIMO audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team PERO NO SE CUANDO LO DAN
  | HORARIOS DE LOS audiovisual_sports_unit DE CLASIFICACION DEL audiovisual_sports_team
  | HORARIO DE LA PROXIMA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO ES EL PROXIMO audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO ES EL PROXIMO audiovisual_sports_unit EN LA AGENDA DEL audiovisual_sports_team
  | QUIERO QUE ME DIGAS EL HORARIO DEL audiovisual_sports_unit DEL audiovisual_sports_team
  | QUIERO QUE ME DIGAS CUANDO ES LA PROXIMA audiovisual_sports_unit DEL audiovisual_sports_team
  | HORARIO DEL audiovisual_sports_unit DEL audiovisual_sports_team
  | HORARIO DEL audiovisual_sports_unit DE LOS audiovisual_sports_team
  | HORARIO DEL audiovisual_sports_unit DEL audiovisual_sports_team
  | A QUE HORA SE JUGARA EL audiovisual_sports_unit DE audiovisual_sports
  | HORA DEL audiovisual_sports_unit DEL audiovisual_sports_team
  | A QUE HORA JUEGAN audiovisual_sports_team Y EL audiovisual_sports_team
  | A QUE HORA DAN EL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | CUANDO DAN EL audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | CUANDO PONEN EL PROXIMO audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO DAN EL PROXIMO audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO ECHAN EL PROXIMO audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO VAN A ECHAR ALGUN audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO VA A DAR ALGUNA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO ECHAN audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO ECHAN EL audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO DAN audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO PONEN EL audiovisual_sports_unit DE LOS audiovisual_sports_team CONTRA LOS audiovisual_sports_team
  | A QUE HORA DAN LA audiovisual_sports_unit DE audiovisual_sports
  | A QUE HORA ECHAN LA audiovisual_sports_unit DE audiovisual_sports
  | A QUE HORA PONEN LA audiovisual_sports_unit DE audiovisual_sports
  | DONDE PONEN audiovisual_sports time_interval
  | DONDE PONEN EL audiovisual_sports_unit DE audiovisual_sports
  | DONDE PONEN LA audiovisual_sports_unit DE audiovisual_sports
  | DONDE PONEN audiovisual_sports time_interval
  | DONDE PONEN audiovisual_sports
  | EL audiovisual_sports DONDE LO PONEN
  | LAS audiovisual_sports_unit DONDE LAS ECHAN
  | EL audiovisual_sports DONDE LO EMITEN time_interval
  | LAS audiovisual_sports_unit DONDE LAS DAN time_instant
  | EL audiovisual_sports DONDE LO PONEN time_interval
  | LAS audiovisual_sports_unit DONDE LAS ECHAN time_interval
  | DONDE PONEN audiovisual_sports time_instant
  | DONDE PONEN audiovisual_sports time_instant
  | DONDE ECHAN audiovisual_sports time_instant
  | DONDE ESTAN ECHANDO audiovisual_sports time_instant
  | DONDE VAN A ECHAR audiovisual_sports time_instant
  | DONDE DAN audiovisual_sports time_instant
  | DONDE VAN A PONER audiovisual_sports time_instant
  | EN QUE CANAL DAN audiovisual_sports time_instant
  | EN QUE CANAL VAN A PONER audiovisual_sports time_instant
  | DONDE RETRAMISTEN audiovisual_sports time_interval
  | DONDE EMITEN audiovisual_sports time_interval
  | DONDE ESTAN ECHANDO audiovisual_sports time_interval
  | DONDE JUEGAN audiovisual_sports time_interval
  | DONDE PONEN EL audiovisual_sports_unit DE audiovisual_sports time_interval
  | DONDE PONEN EL audiovisual_sports_unit DE audiovisual_sports time_interval
  | DONDE ECHAN audiovisual_sports_unit DE audiovisual_sports time_interval
  | DONDE DAN LOS audiovisual_sports_unit DE audiovisual_sports time_interval
  | DONDE VAN A ECHAR EL audiovisual_sports_unit DE audiovisual_sports time_interval
  | DONDE ECHAN EL audiovisual_sports_unit DE audiovisual_sports time_interval
  | DONDE PONEN EL audiovisual_sports_unit DE audiovisual_sports
  | DONDE PONEN audiovisual_sports time_instant
  | CUANDO PUEDO VER audiovisual_sports_season DE audiovisual_sports time_interval EN audiovisual_channel
  | time_interval EN audiovisual_channel CUANDO ECHAN audiovisual_sports_unit DE audiovisual_sports
  | CUANDO ES EL audiovisual_sports_unit DEL audiovisual_sports_team EN audiovisual_channel
  | CUANDO JUEGA EL audiovisual_sports_team EN audiovisual_channel
  | CUANDO JUEGAN EL audiovisual_sports_team Y EL audiovisual_sports_team EN audiovisual_channel
  | DIME CUANDO ES EL audiovisual_sports_unit DE audiovisual_sports EN audiovisual_channel
  | DIME CUANDO ES EL audiovisual_sports_unit DEL audiovisual_sports_team EN audiovisual_channel
  | DIME CUANDO VA A SER EL audiovisual_sports_unit DE audiovisual_sports EN audiovisual_channel
  | ENSEÑAME EL PROXIMO audiovisual_sports_unit DE audiovisual_sports DE audiovisual_channel
  | ENSEÑAME LA PROXIMA audiovisual_sports_unit DE audiovisual_sports EN audiovisual_channel
  | A QUE HORA DAN EL audiovisual_sports_unit DEL audiovisual_sports_team time_interval EN audiovisual_channel
  | A QUE HORA DAN LA audiovisual_sports_unit DE audiovisual_sports time_interval EN audiovisual_channel
  | A QUE HORA EMITEN EL audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team time_interval
  | A QUE HORA ES EL audiovisual_sports_unit DE audiovisual_sports time_interval EN audiovisual_channel
  | A QUE HORA ES EL audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team time_interval
  | A QUE HORA ES LA audiovisual_sports_unit DE audiovisual_sports time_interval
  | A QUE HORA EMITEN EL audiovisual_sports_unit DEL audiovisual_sports_team Y EL audiovisual_sports_team time_interval
  | A QUE HORA JUEGA EL audiovisual_sports_team CONTRA EL audiovisual_sports_team time_interval EN audiovisual_channel
  | A QUE HORA JUEGA EL audiovisual_sports_team Y EL audiovisual_sports_team EN audiovisual_channel
  | A QUE HORA JUEGAN EL audiovisual_sports_team Y EL audiovisual_sports_team time_interval
  | A QUE HORA ES EL audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team time_interval EN audiovisual_channel
  | A QUE HORA ES EL audiovisual_sports_unit EL audiovisual_sports_team time_interval
  | A QUE HORA ES EL audiovisual_sports_unit DE LA audiovisual_sports_season EN audiovisual_channel time_interval
  | A QUE HORA ES EL audiovisual_sports_unit DE LA audiovisual_sports_season EN audiovisual_channel
  | A QUE HORA JUEGA EL audiovisual_sports_team CONTRA EL audiovisual_sports_team EN audiovisual_channel
  | CUANDO SE TRANSMITEN EL audiovisual_sports_unit DE audiovisual_sports EN audiovisual_channel
  | CUANDO TRANSMITEN EL audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team time_interval
  | CUANDO DAN EL audiovisual_sports_unit DEL audiovisual_sports_team time_interval
  | CUANDO DAN EL audiovisual_sports_unit DEL audiovisual_sports_team EN audiovisual_channel
  | CUANDO DAN EL audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team time_interval
  | CUANDO ECHAN audiovisual_sports_unit DEL audiovisual_sports_team time_interval EN audiovisual_channel
  | CUANDO ES EL PROXIMO audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team time_interval EN audiovisual_channel
  | CUANDO ES LA PROXIMA audiovisual_sports_unit DE audiovisual_sports EN audiovisual_channel
  | CUANDO ES LA PROXIMA audiovisual_sports_unit DE LOS audiovisual_sports_team EN audiovisual_channel
  | CUANDO ES LA audiovisual_sports_unit DE audiovisual_sports EN audiovisual_channel time_interval
  | CUANDO RETRANSMITEN LAS audiovisual_sports_unit DE audiovisual_sports time_interval
  | CUANDO SE EMITE EL audiovisual_sports_unit DEL audiovisual_sports_team time_interval
  | CUANDO SE EMITE time_interval LA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO SE JUEGA EL audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team time_interval
  | QUE DIA DAN EL audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team audiovisual_channel
  | QUE DIA PONEN EN audiovisual_channel EL audiovisual_sports_unit DEL audiovisual_sports_team
  | QUE DIA EMITEN EN audiovisual_channel LA audiovisual_sports_unit DE audiovisual_sports
  | QUE DIA TELEVISAN audiovisual_channel EL PROXIMO audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team
  | QUE DIA RETRANSMITEN EL PROXIMO audiovisual_sports_unit DE audiovisual_sports time_interval
  | QUE DIA TRANSMITEN LA PROXIMA audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_team time_interval
  | QUE DIA JUEGA EL audiovisual_sports_team CONTRA EL audiovisual_sports_team time_interval
  | EN QUE FECHA CAEN LOS audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team EN audiovisual_channel
  | EN QUE FECHA DAN EL audiovisual_sports_unit DE audiovisual_sports audiovisual_channel
  | EL audiovisual_sports DONDE LO PONEN time_interval
  | LAS audiovisual_sports_unit LAS ECHAN time_interval EN audiovisual_channel
  | LAS audiovisual_sports_unit LAS DAN time_instant audiovisual_channel
  | audiovisual_sports time_interval
  | EN QUE CANAL PONEN EL audiovisual_sports_unit DEL audiovisual_sports_team
  | EN QUE CANAL PONEN EL audiovisual_sports_unit DE LOS audiovisual_sports_team
  | audiovisual_sports
  | audiovisual_sports_unit audiovisual_sports_season
  | audiovisual_sports
  | audiovisual_sports_unit
  | audiovisual_sports_season
  | audiovisual_sports_team
  //-----------------------------
  | PROXIMOS audiovisual_sports_unit DE LA audiovisual_tvshow_title
  //| CUALES SON LOS PROXIMOS audiovisual_sports_unit DE COPA DEL REY DE audiovisual_sports
  | CUANDO ES EL PROXIMO audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO JUEGA EL audiovisual_sports_team
  | DONDE PUEDO VER EL audiovisual_sports_team
  | DONDE ECHAN LA audiovisual_sports_season time_interval
  | HAY ALGUN audiovisual_sports_unit DE audiovisual_director time_interval
  | DONDE VAN A ECHAR EL audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO ECHAN EL audiovisual_film_title
  //| HAY CHAMPIONS time_interval
  | CUANDO EMITEN EL audiovisual_sports_team
  | CUANDO EMITEN EL audiovisual_sports_team
  | DONDE RETRANSMITEN EL audiovisual_sports
  | DONDE ECHAN EL audiovisual_sports
  | DONDE ECHAN EL audiovisual_sports
  | A QUE HORA ECHAN LA audiovisual_sports_season
  | EN QUE CANAL PUEDO VER EL audiovisual_sports_season
  | CUANDO ES EL PROXIMO audiovisual_sports_unit DEL audiovisual_sports_team
  | CUANDO VUELVE A JUGAR EL audiovisual_sports_team
  | DIME DONDE PUEDO VER EL audiovisual_sports_season
  | DIME CUANDO ES EL audiovisual_sports_season
  | CUANDO ES EL PROXIMO audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team
  | DONDE PONEN audiovisual_sports_season DEL audiovisual_sports_team
  | CUANDO ES EL audiovisual_sports_unit DE audiovisual_sports_season
  | CUANDO ES EL audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team
  | ENSEÑAME LA PROXIMA audiovisual_sports_unit DE audiovisual_sports
  | CUANDO SE JUEGA EL audiovisual_sports_team DE LA audiovisual_sports_season
  | CUANDO DAN EL audiovisual_sports_unit DEL audiovisual_sports_team
  | ME PUEDES DECIR CUANDO JUEGA LA audiovisual_sports_team
  | HORARIO DEL audiovisual_sports_unit audiovisual_sports_season DEL audiovisual_sports_team
  | EN QUE FECHA DAN audiovisual_tvseries_title
  | CUANDO JUEGAN LOS audiovisual_sports_team
  | CUANDO JUEGAN LOS audiovisual_sports_team
  | CUAL ES EL PROXIMO audiovisual_sports_unit DE LOS audiovisual_sports_team
  ;
PROXIMOS:'proximos';

//
//-------- Intent --- channel_get_info -----------------
//
channel_get_info
  : ESTAN DANDO ALGO audiovisual_releases DE audiovisual_genre
  | QUE ECHAN audiovisual_releases EN LA GUIA DE LA device
  | QUE ECHAN audiovisual_releases EN LA GUIA DE device
  | QUE ECHAN EN LA GUIA DE device
  | QUE PONEN audiovisual_releases EN LA GUIA DE LA device
  | QUE PONEN audiovisual_releases EN LA GUIA DE device
  | QUE PONEN EN LA GUIA DE device
  | QUE ECHAN EN LOS CANALES DE device
  | QUE ECHAN EN LA PARRILLA DE device
  | QUE ECHAN time_interval audiovisual_releases
  | QUE ECHAN time_interval audiovisual_releases EN LA device
  | QUE ECHAN time_interval audiovisual_releases
  | QUE ECHAN time_interval audiovisual_releases EN LA device
  | QUE audiovisual_genre audiovisual_releases ECHAN EN LA audiovisual_channel
  | QUE audiovisual_genre audiovisual_releases time_interval EN audiovisual_channel
  | DIME QUE DAN audiovisual_releases EN audiovisual_channel
  | QUE audiovisual_releases DAN EN audiovisual_channel
  | ME INTERESA SABER LAS audiovisual_releases DE audiovisual_genre QUE ECHAN EN audiovisual_channel
  | QUE audiovisual_releases ECHAN
  | QUE audiovisual_releases ECHAN EN LA device
  | QUE audiovisual_releases ECHAN
  | QUE audiovisual_releases ECHAN
  | QUE audiovisual_releases ECHAN
  | QUE audiovisual_releases ECHAN EN LA device
  | QUE audiovisual_releases ECHAN
  | QUE audiovisual_releases ECHAN
  | QUE audiovisual_releases ECHAN
  | QUE audiovisual_releases ECHAN
  | QUE audiovisual_releases ECHAN
  | QUE audiovisual_releases HAY
  | TIENES audiovisual_releases DE audiovisual_genre 
  | QUE TIENES audiovisual_releases DE audiovisual_genre
  | QUE TIENES audiovisual_releases DE audiovisual_genre EN LA device
  | QUE TIENES DE audiovisual_releases EN audiovisual_genre
  | ECHAN audiovisual_genre DE audiovisual_subgenre time_interval
  | ECHAN audiovisual_genre time_interval time_interval
  | ECHAN audiovisual_genre DE audiovisual_subgenre time_interval
  | ECHAN audiovisual_genre DE audiovisual_subgenre EN LA device time_interval
  | ECHAN audiovisual_genre time_interval time_interval
  | ECHAN audiovisual_genre DE audiovisual_subgenre time_interval
  | ECHAN ALGO DE audiovisual_genre DE audiovisual_subgenre time_interval
  | ECHAN ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval
  | ECHAN ALGUN audiovisual_genre DE audiovisual_subgenre time_interval time_interval
  | ECHAN time_interval ALGUN audiovisual_genre DE audiovisual_subgenre
  | ECHAN time_interval EN LA device ALGUN audiovisual_genre DE audiovisual_subgenre
  | ECHAN time_interval ALGUNA audiovisual_genre time_interval
  | ECHAN ALGUN audiovisual_genre time_interval
  | ECHAN ALGUN audiovisual_genre time_interval
  | ECHAN ALGUN audiovisual_genre time_interval
  | ECHAN ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval
  | ECHAN audiovisual_genre time_interval
  | ECHAN ALGUNA audiovisual_subgenre time_interval
  | ECHAN ALGO DE audiovisual_genre time_interval
  | ECHAN ALGO DE audiovisual_genre time_interval EN LA device
  | ECHAN ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval
  | ECHAN ALGUNA audiovisual_genre audiovisual_genre time_interval
  | ECHAN ALGUNAS audiovisual_genre time_interval
  | ECHAN ALGUNAS audiovisual_genre EN LA device time_interval
  | ECHAN ALGUNA audiovisual_genre audiovisual_subgenre time_interval
  | ECHAN audiovisual_genre audiovisual_genre time_interval
  | ECHARAN ALGO DE audiovisual_genre DE audiovisual_subgenre time_interval
  | ECHAN ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval time_instant
  | ECHAN ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval time_instant EN LA device
  | ECHAN ALGUN audiovisual_genre time_interval time_instant
  | ECHAN ALGUN audiovisual_genre time_instant
  | ECHAN ALGUN audiovisual_genre time_instant EN LA device
  | ESTAN DANDO ALGUN audiovisual_genre
  | ESTAN DANDO ALGUN audiovisual_genre EN LA device
  | ECHAN ALGO time_interval
  | ECHAN ALGO EN LA device time_interval
  | QUE ME RECOMIENDAS time_interval time_interval
  | QUE ECHAN time_interval
  | QUE ECHAN time_interval EN LA device
  | QUE ECHAN
  | QUE ECHAN EN LA device
  | QUE audiovisual_genre ECHAN
  | QUE audiovisual_genre ECHAN EN LA device
  | QUE audiovisual_genre ECHAN time_interval
  | QUE audiovisual_genre HAY time_interval
  | AURA QUE audiovisual_genre HAY time_interval
  | QUE audiovisual_genre ECHAN time_instant
  | QUE audiovisual_genre HAY time_instant
  | AURA QUE audiovisual_genre HAY time_instant
  | QUE audiovisual_genre ECHA LA audiovisual_channel time_interval
  | QUE audiovisual_genre ECHA LA audiovisual_channel time_interval EN LA device
  | QUE audiovisual_genre ECHA LA audiovisual_channel
  | ECHAN ALGUNA audiovisual_genre DE audiovisual_releases DE audiovisual_subgenre time_interval time_instant
  | ECHAN ALGUNA audiovisual_genre DE audiovisual_releases DE audiovisual_subgenre EN LA device time_interval time_instant
  | ECHAN ALGUN audiovisual_genre audiovisual_releases time_interval time_instant
  | ECHAN ALGUNA audiovisual_releases audiovisual_genre time_instant
  | ESTAN DANDO ALGUNAS audiovisual_releases DE audiovisual_genre
  | ESTAN DANDO ALGUNAS audiovisual_releases DE audiovisual_genre EN LA device
  | ECHAN ALGO DE audiovisual_releases time_interval
  | QUE ME RECOMIENDAS time_interval time_interval ENTRE LAS audiovisual_releases
  | QUE ECHAN time_interval audiovisual_releases
  | QUE ECHAN DE audiovisual_releases
  | QUE audiovisual_genre ECHAN audiovisual_releases
  | QUE audiovisual_releases audiovisual_genre ECHAN time_interval
  | QUE audiovisual_genre audiovisual_releases EN LA audiovisual_channel time_interval
  | QUE audiovisual_genre audiovisual_releases ECHAN LA audiovisual_channel
  | QUE audiovisual_genre audiovisual_subgenre ECHAN time_interval
  | QUE audiovisual_genre audiovisual_subgenre ECHAN
  | QUE audiovisual_genre DE audiovisual_subgenre ECHAN
  | QUE audiovisual_genre DE audiovisual_subgenre ECHAN
  | QUE audiovisual_genre DE audiovisual_subgenre ECHAN EN LA device
  | QUE audiovisual_genre ECHAN EN audiovisual_channel time_interval
  | QUE audiovisual_genre ECHAN EN EN audiovisual_channel
  | QUE audiovisual_genre ECHAN EN EN LA device EN audiovisual_channel
  | QUE audiovisual_genre ECHAN EN LA audiovisual_channel
  | QUE audiovisual_genre audiovisual_subgenre ECHAN time_interval
  | QUE audiovisual_genre audiovisual_subgenre ECHAN EN LA audiovisual_channel time_interval
  | QUE audiovisual_genre DE audiovisual_subgenre ECHA EN LA audiovisual_channel
  | QUE ECHAN DE audiovisual_subgenre EN audiovisual_channel
  | QUE ECHAN DE audiovisual_subgenre EN audiovisual_channel EN LA device
  | QUE ECHAN DE audiovisual_subgenre
  | QUE audiovisual_genre DE audiovisual_subgenre ECHAN audiovisual_channel
  | QUE audiovisual_genre PONEN EN EL CANAL audiovisual_channel
  | QUE audiovisual_genre PONEN EN audiovisual_channel
  | QUE audiovisual_genre PONEN EN audiovisual_channel EN LA device
  | QUE audiovisual_genre PONEN EN CANAL audiovisual_channel
  | QUE audiovisual_genre ECHAN time_interval EN audiovisual_channel
  | QUE audiovisual_genre ECHAN time_interval EN audiovisual_channel
  | QUE audiovisual_genre ECHAN time_interval EN audiovisual_channel EN LA device
  | QUE ECHAN DE audiovisual_subgenre time_interval time_interval
  | QUE audiovisual_genre DE audiovisual_subgenre DAN
  | QUE ECHAN time_interval time_interval
  | QUE ECHAN time_interval EN LA device time_interval
  | ESTAN ECHANDO audiovisual_genre DE audiovisual_subgenre time_instant
  | ESTAN ECHANDO time_instant ALGUN audiovisual_genre
  | ESTAN ECHANDO time_instant ALGUNA audiovisual_genre audiovisual_subgenre
  | ESTAN ECHANDO time_instant ALGUNA audiovisual_genre audiovisual_subgenre EN LA device
  | ESTAN ECHANDO ALGO DE audiovisual_genre
  | ESTAN ECHANDO ALGUNA audiovisual_genre DE audiovisual_subgenre time_instant
  | ESTAN ECHANDO ALGUNA audiovisual_genre DE audiovisual_subgenre time_instant
  | ESTAN ECHANDO ALGUNA audiovisual_genre DE audiovisual_subgenre EN LA device time_instant
  | DIME QUE DAN EN audiovisual_channel
  | DIME QUE PONEN EN audiovisual_channel
  | DIME QUE PONEN EN audiovisual_channel EN LA device
  | DIME QUE ESTAN PONIENDO EN audiovisual_channel
  | DIME QUE ECHAN EN audiovisual_channel
  | DAME UNA audiovisual_genre DE audiovisual_channel
  | DAME UNA audiovisual_genre DE audiovisual_channel EN LA device
  | DIME LAS audiovisual_genre DE audiovisual_channel
  | DIME LAS audiovisual_genre DE audiovisual_channel EN LA device
  | ESTAN ECHANDO ALGO audiovisual_releases DE audiovisual_genre
  | ESTAN ECHANDO ALGO audiovisual_releases DE audiovisual_genre EN LA device
  | ESTAN ECHANDO ALGUNA audiovisual_genre audiovisual_releases DE audiovisual_subgenre time_instant
  | ESTAN ECHANDO ALGUNA audiovisual_genre DE audiovisual_subgenre audiovisual_releases time_instant
  | DIME QUE DAN DE audiovisual_releases EN audiovisual_channel
  | DIME QUE DAN EN LA device DE audiovisual_releases EN audiovisual_channel
  | DIME QUE PONEN DE audiovisual_releases EN audiovisual_channel
  | DIME QUE ESTAN PONIENDO EN audiovisual_channel DE audiovisual_releases
  | DIME QUE ESTAN PONIENDO EN audiovisual_channel DE audiovisual_releases EN LA device
  | DIME QUE audiovisual_releases ECHAN EN audiovisual_channel
  | DAME UNA audiovisual_genre DE audiovisual_channel ENTRE LAS audiovisual_releases
  | DIME LAS audiovisual_releases audiovisual_genre DE audiovisual_channel
  | DIME QUE audiovisual_genre PONEN EN audiovisual_channel
  | DIME QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel
  | DIME QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel EN LA device
  | DIME QUE audiovisual_genre DAN EN audiovisual_channel
  | DIME QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel
  | DIME QUE audiovisual_genre ECHAN EN audiovisual_channel
  | DIME QUE audiovisual_genre ECHAN EN audiovisual_channel EN LA device
  | QUE audiovisual_genre PONEN EN audiovisual_channel
  | QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel
  | QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel EN LA device
  | QUE audiovisual_genre DAN EN audiovisual_channel
  | QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel
  | QUE ECHAN EN audiovisual_channel
  | QUE ESTAN PONIENDO EN audiovisual_channel
  | QUE ESTAN PONIENDO EN audiovisual_channel EN LA device
  | QUE DAN EN EN audiovisual_channel
  | QUE DAN EN EN LA device EN audiovisual_channel
  | QUE ESTAN PONIENDO EN audiovisual_channel
  | QUE audiovisual_genre ECHAN EN audiovisual_channel
  | QUE audiovisual_genre ECHAN EN audiovisual_channel EN LA device
  | ME INTERESA SABER QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel
  | ME INTERESA SABER QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel EN LA device
  | QUE audiovisual_genre audiovisual_releases DAN EN audiovisual_channel
  | QUE audiovisual_genre ESTAN PONIENDO DE audiovisual_releases EN audiovisual_channel
  | QUE ECHAN EN audiovisual_channel DE audiovisual_releases
  | QUE ECHAN EN audiovisual_channel DE audiovisual_releases EN LA device
  | QUE audiovisual_releases ESTAN PONIENDO EN audiovisual_channel
  | QUE audiovisual_releases DAN EN audiovisual_channel
  | QUE audiovisual_releases DAN EN audiovisual_channel EN LA device
  | QUE ESTAN PONIENDO EN audiovisual_channel audiovisual_releases
  | QUE ESTAN PONIENDO EN audiovisual_channel audiovisual_releases EN LA device
  | QUE audiovisual_genre ECHAN audiovisual_releases EN audiovisual_channel
  | QUE audiovisual_genre ECHAN audiovisual_releases EN audiovisual_channel EN LA device
  | ME INTERESA SABER LAS audiovisual_releases DE audiovisual_genre QUE ESTAN PONIENDO EN audiovisual_channel
  | ME INTERESA SABER LAS audiovisual_releases DE audiovisual_genre
  | QUE audiovisual_releases HAY EN audiovisual_genre
  | QUE audiovisual_releases HAY EN LA device EN audiovisual_genre
  | QUE audiovisual_releases ECHAN
  | QUE audiovisual_releases ECHAN EN LA device
  | QUE audiovisual_releases HAY
  | QUE audiovisual_releases HAY EN LA device
  | QUE audiovisual_releases PONEN
  | QUE audiovisual_releases PONEN EN LA device
  | QUE audiovisual_releases TIENES
  | QUE audiovisual_releases TIENES EN LA device
  | TIENES audiovisual_releases
  | QUE TIENES audiovisual_releases
  | QUE audiovisual_releases TIENES
  | QUE PONEN DE audiovisual_releases
  | QUE PONEN DE audiovisual_releases EN LA device
  | TIENES audiovisual_releases EN audiovisual_genre
  | TIENES audiovisual_releases EN audiovisual_genre EN LA device
  | TIENES audiovisual_releases EN audiovisual_genre 
  | TIENES audiovisual_releases EN audiovisual_genre 
  | QUE TIENES DE audiovisual_releases
  | QUE TIENES DE audiovisual_releases EN LA device
  | QUE TIENES DE audiovisual_releases EN audiovisual_genre
  | ME INTERESA SABER QUE audiovisual_genre ESTAN ECHANDO EN audiovisual_channel
  | ME INTERESA SABER QUE audiovisual_genre ESTAN ECHANDO EN audiovisual_channel EN LA device
  | ME GUSTARIA SABER QUE audiovisual_genre ESTAN DANDO EN audiovisual_channel
  | ME INTERESA SABER QUE audiovisual_genre ESTAN DANDO EN audiovisual_channel
  | QUIERO SABER QUE DAN EN audiovisual_channel
  | QUIERO SABER QUE ECHAN EN audiovisual_channel
  | QUIERO SABER QUE ECHAN EN LA device EN audiovisual_channel
  | QUIERO SABER QUE ESTAN ECHANDO EN audiovisual_channel
  | QUIERO SABER QUE audiovisual_genre DAN EN audiovisual_channel
  | QUIERO SABER QUE audiovisual_genre ESTAN DANDO EN audiovisual_channel
  | QUIERO SABER QUE audiovisual_genre ESTAN DANDO EN audiovisual_channel EN LA device
  | QUIERO SABER QUE audiovisual_genre ESTAN ECHANDO EN audiovisual_channel
  | QUIERO SABER LA PROGRAMACION DE audiovisual_channel
  | QUIERO SABER LA PROGRAMACION DE audiovisual_genre EN audiovisual_channel
  | QUIERO LOS audiovisual_genre DE audiovisual_channel
  | QUIERO LOS audiovisual_genre DE audiovisual_channel EN LA device
  | QUIERO LOS audiovisual_genre QUE ESTAN DANDO EN audiovisual_channel
  | QUIERO LAS audiovisual_genre QUE ECHAN EN audiovisual_channel
  | QUIERO LAS audiovisual_genre QUE ECHAN EN audiovisual_channel EN LA device
  | QUIERO SABER QUE audiovisual_releases HAY EN audiovisual_genre EN audiovisual_channel
  | QUIERO SABER LA PROGRAMACION audiovisual_releases DE audiovisual_channel
  | QUIERO SABER LA PROGRAMACION DE audiovisual_releases DE audiovisual_genre EN audiovisual_channel
  | QUIERO LOS audiovisual_releases audiovisual_genre DE audiovisual_channel
  | QUIERO LOS audiovisual_genre audiovisual_releases QUE ESTAN DANDO EN audiovisual_channel
  | QUIERO LAS audiovisual_genre audiovisual_releases QUE ECHAN EN audiovisual_channel
  | QUIERO LAS audiovisual_genre DESABER QUE ESTAN ECHANDO EN audiovisual_channel
  | QUIERO LA audiovisual_genre QUE DAN EN audiovisual_channel
  | QUIERO LA audiovisual_genre QUE DAN EN audiovisual_channel EN LA device
  | QUIERO LOS audiovisual_genre QUE ESTAN DANDO EN audiovisual_channel
  | QUIERO EL audiovisual_genre QUE VAN A ECHAR EN audiovisual_channel
  | QUIERO EL audiovisual_genre QUE VAN A ECHAR EN audiovisual_channel EN LA device
  | QUIERO LOS audiovisual_genre ESTAN ECHANDO EN audiovisual_channel
  | QUIERO LOS audiovisual_genre DE audiovisual_channel
  | QUIERO LA PROGRAMACION DE LOS audiovisual_genre DE audiovisual_channel
  | QUIERO LA PROGRAMACION DE LOS audiovisual_genre DE audiovisual_channel EN LA device
  | QUE audiovisual_genre TIENES audiovisual_channel
  | QUE audiovisual_genre PONEN EN LA audiovisual_channel
  | QUE PONEN EN LA audiovisual_channel
  | QUE audiovisual_genre DAN EN LA audiovisual_channel
  | DIME LA PROGRAMACION DE audiovisual_subgenre time_instant
  | DIME LA PROGRAMACION DE audiovisual_subgenre EN LA device time_instant
  | DIME LA PROGRAMACION DE audiovisual_genre EN audiovisual_channel time_instant
  | ME GUSTARIA SABER QUE audiovisual_genre ESTAN ECHANDO EN audiovisual_channel time_interval
  | ME GUSTARIA SABER QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel
  | QUE PONEN EN LA audiovisual_channel DE audiovisual_releases
  | QUE audiovisual_releases PONEN EN LA audiovisual_channel
  | QUE PONEN DE audiovisual_releases EN LA audiovisual_channel
  | QUE audiovisual_genre DAN EN EL audiovisual_channel DE audiovisual_releases
  | DIME LA PROGRAMACION audiovisual_releases DE audiovisual_subgenre time_instant
  | DIME LA PROGRAMACION audiovisual_releases DE audiovisual_subgenre EN LA device time_instant
  | DIME LA PROGRAMACION DE audiovisual_genre audiovisual_releases EN audiovisual_channel time_instant
  | ME GUSTARIA SABER QUE audiovisual_releases DE audiovisual_genre ESTAN ECHANDO EN audiovisual_channel time_interval
  | ME GUSTARIA SABER QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel DE audiovisual_releases
  | ME GUSTARIA SABER QUE audiovisual_genre ESTAN DANDO EN audiovisual_channel
  | ME GUSTARIA SABER QUE ESTAN PONIENDO EN audiovisual_channel time_interval
  | ME GUSTARIA SABER QUE ESTAN PONIENDO EN audiovisual_channel time_interval EN LA device
  | ME INTERESA SABER QUE audiovisual_genre ESTAN ECHANDO time_interval EN audiovisual_channel
  | ME INTERESA SABER QUE audiovisual_genre ESTAN PONIENDO time_interval EN audiovisual_channel
  | ME INTERESA SABER QUE audiovisual_genre ESTAN PONIENDO time_interval EN audiovisual_channel
  | ME INTERESA SABER QUE PONEN time_interval EN audiovisual_channel
  | PROGRAMACION EN audiovisual_channel time_interval
  | PROGRAMACION EN audiovisual_channel EN LA device time_interval
  | PROGRAMACION DE audiovisual_genre EN audiovisual_channel time_instant
  | QUIERO EL audiovisual_genre QUE VAN A ECHAR time_interval EN audiovisual_channel
  | QUIERO EL audiovisual_genre QUE VAN A ECHAR time_interval EN audiovisual_channel EN LA device
  | QUIERO LOS audiovisual_genre QUE ESTAN ECHANDO time_interval EN audiovisual_channel
  | QUIERO LA audiovisual_genre QUE DAN time_interval EN audiovisual_channel
  | QUIERO LA audiovisual_genre QUE DAN time_interval EN audiovisual_channel
  | QUIERO LAS audiovisual_genre QUE ECHAN time_interval EN audiovisual_channel
  | QUIERO LAS audiovisual_genre QUE ECHAN time_interval EN audiovisual_channel EN LA device
  | QUIERO LOS audiovisual_subgenre QUE ESTAN DANDO time_interval EN audiovisual_channel
  | QUIERO LAS audiovisual_genre QUE ESTAN DANDO time_interval EN audiovisual_channel
  | QUIERO LAS audiovisual_genre QUE ESTAN DANDO time_interval EN audiovisual_channel
  | QUIERO LOS audiovisual_genre QUE ESTAN ECHANDO time_interval EN audiovisual_channel
  | QUIERO SABER LA PROGRAMACION DE audiovisual_genre time_interval EN audiovisual_channel
  | QUIERO SABER LA PROGRAMACION DE audiovisual_genre time_interval EN audiovisual_channel
  | QUIERO SABER LA PROGRAMACION DE audiovisual_genre DE audiovisual_subgenre EN audiovisual_channel time_interval
  | QUIERO SABER QUE audiovisual_genre ECHAN time_interval EN audiovisual_channel
  | QUIERO SABER QUE audiovisual_genre ESTAN ECHANDO time_interval EN audiovisual_channel
  | QUIERO SABER QUE audiovisual_genre DAN time_interval EN audiovisual_channel
  | QUIERO SABER QUE audiovisual_genre ESTAN DANDO time_interval EN audiovisual_channel
  | QUIERO SABER QUE DAN time_interval EN audiovisual_channel time_interval
  | QUIERO SABER QUE ECHAN time_interval EN audiovisual_channel
  | QUIERO SABER QUE ESTAN DANDO time_interval EN audiovisual_channel
  | QUIERO SABER QUE ESTAN ECHANDO time_interval EN audiovisual_channel time_interval
  | QUIERO SABER QUE ESTAN ECHANDO time_interval EN audiovisual_channel time_interval EN LA device
  | ESTAN DANDO ALGUN audiovisual_genre time_interval EN audiovisual_channel
  | ESTAN DANDO ALGUNA audiovisual_genre time_interval EN audiovisual_channel
  | ESTAN ECHANDO ALGUNA audiovisual_genre time_interval EN audiovisual_channel
  | ESTAN ECHANDO ALGUNA audiovisual_subgenre time_interval EN audiovisual_channel
  | ESTAN ECHANDO audiovisual_genre time_interval EN audiovisual_channel
  | ESTAN PONIENDO ALGUNA audiovisual_genre time_interval EN audiovisual_channel
  | ESTAN PONIENDO ALGUN audiovisual_genre time_interval EN audiovisual_channel
  | VAN A PONER ALGUNA audiovisual_genre time_interval EN audiovisual_channel
  | DAN ALGUNA audiovisual_genre time_interval EN audiovisual_channel
  | PONEN audiovisual_genre HAY time_interval EN audiovisual_channel
  | PONEN audiovisual_genre HAY time_interval EN audiovisual_channel EN LA device
  | PONEN ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval EN audiovisual_channel
  | PONEN ALGUNA audiovisual_genre time_interval EN audiovisual_channel
  | DARAN ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval
  | ECHAN ALGO time_interval EN audiovisual_channel
  | HAY time_interval ALGUNA audiovisual_subgenre time_interval EN audiovisual_channel
  | DIME audiovisual_genre audiovisual_genre QUE HAYA EN audiovisual_channel time_interval
  | DIME audiovisual_genre audiovisual_genre QUE HAYA EN audiovisual_channel time_interval
  | DIME LAS audiovisual_genre audiovisual_genre DE audiovisual_channel time_interval
  | ME GUSTARIA SABER QUE ESTAN PONIENDO EN audiovisual_channel time_interval
  | ME INTERESA SABER QUE ESTAN PONIENDO EN audiovisual_channel time_interval
  | QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel time_interval
  | QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel time_interval EN LA device
  | QUE audiovisual_subgenre ESTAN PONIENDO EN audiovisual_channel time_interval
  | QUE audiovisual_genre PONEN EN audiovisual_channel time_interval
  | QUE audiovisual_genre PONEN EN audiovisual_channel time_interval
  | QUE audiovisual_genre DAN EN audiovisual_channel time_interval
  | QUE audiovisual_genre ECHAN EN audiovisual_channel time_interval
  | QUE ECHAN EN audiovisual_channel time_interval
  | QUE ECHAN EN audiovisual_channel time_interval
  | QUE ESTAN DANDO time_interval EN audiovisual_channel time_interval
  | QUE ESTAN PONIENDO EN audiovisual_channel time_interval
  | QUE ESTAN PONIENDO EN audiovisual_channel time_interval
  | QUE ESTAN TELEVISANDO time_interval EN audiovisual_channel time_interval
  | QUE DAN time_interval EN audiovisual_channel
  | QUE DAN time_interval EN audiovisual_channel EN LA device
  | QUE DAN time_interval EN audiovisual_channel
  | QUE DAN EN audiovisual_channel time_interval
  | QUE DAN EN audiovisual_channel time_interval
  | QUE DAN EN audiovisual_channel time_interval EN LA device
  | QUE ECHAN time_interval time_interval EN audiovisual_channel
  | QUE ECHAN time_interval EN audiovisual_channel
  | QUE ECHAN time_interval EN audiovisual_channel
  | QUE ECHAN time_interval EN audiovisual_channel
  | QUE ECHAN EN LA device time_interval EN audiovisual_channel
  | QUIERO LA PROGRAMACION DE LOS audiovisual_genre DE audiovisual_channel time_interval
  | QUIERO SABER LA PROGRAMACION DE audiovisual_channel time_interval
  | QUIERO SABER LA PROGRAMACION DE audiovisual_channel EN LA device time_interval
  | QUIERO SABER QUE audiovisual_genre ECHAN EN audiovisual_channel time_interval
  | QUIERO SABER QUE ESTAN DANDO EN audiovisual_channel time_interval
  | DIME QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel time_interval
  | DIME QUE audiovisual_genre ECHAN EN audiovisual_channel time_interval
  | DAME UNA audiovisual_subgenre DE audiovisual_channel time_interval
  | DIME QUE PUEDO VER time_interval time_interval EN audiovisual_channel
  | DIME QUE PUEDO VER time_interval time_interval EN audiovisual_channel EN LA device
  | QUE PONEN time_interval time_interval EN audiovisual_channel
  | QUE PONEN time_interval EN audiovisual_channel time_interval
  | DAME LA PROGRAMACION DE audiovisual_genre EN audiovisual_channel time_interval
  | QUE PUEDO VER time_interval EN audiovisual_channel time_interval
  | QUE PONEN EN audiovisual_channel time_interval
  | QUE PONEN EN audiovisual_channel time_interval
  | QUE PONEN EN audiovisual_channel time_interval EN LA device
  | QUE audiovisual_releases audiovisual_genre ECHAN EN audiovisual_channel time_interval
  | QUE ECHAN audiovisual_releases EN audiovisual_channel time_interval
  | QUE ECHAN EN audiovisual_channel audiovisual_releases time_interval
  | QUE ESTAN DANDO time_interval audiovisual_releases EN audiovisual_channel
  | QUE ESTAN PONIENDO EN audiovisual_channel time_interval DE audiovisual_releases
  | DAME LAS audiovisual_releases DE LA PROGRAMACION DEL audiovisual_channel time_instant
  | DAME LA PROGRAMACION audiovisual_releases DE audiovisual_channel time_instant
  | DAME LA PROGRAMACION DE audiovisual_channel audiovisual_releases time_instant
  | DAME LA PROGRAMACION DE audiovisual_genre audiovisual_releases EN audiovisual_channel time_instant
  | DAME LA PROGRAMACION audiovisual_channel time_instant
  | DAME LA PROGRAMACION DE audiovisual_channel time_instant
  | DAME LA PROGRAMACION DE audiovisual_channel time_instant
  | DAME LA PROGRAMACION DE audiovisual_channel time_instant EN LA device
  | DAME LA PROGRAMACION DE audiovisual_genre EN audiovisual_channel time_instant
  | DAME LA PROGRAMACION DE audiovisual_genre EN audiovisual_channel time_instant
  | DIME LA PROGRAMACION audiovisual_channel time_instant
  | DIME LA PROGRAMACION audiovisual_channel time_instant
  | DIME LA PROGRAMACION DE audiovisual_channel time_instant
  | DIME LA PROGRAMACION DE audiovisual_channel time_instant EN LA device
  | DIME LA PROGRAMACION DE audiovisual_channel time_instant
  | DIME LA PROGRAMACION DE audiovisual_genre EN audiovisual_channel time_instant
  | DIME LA PROGRAMACION DE audiovisual_genre EN audiovisual_channel time_instant
  | DIME LAS audiovisual_genre QUE ECHAN time_instant EN audiovisual_channel
  | DIME LOS audiovisual_genre QUE TIENES EN audiovisual_channel time_instant
  | DIME QUE audiovisual_genre ESTAN PONIENDO EN audiovisual_channel time_instant
  | DIME QUE audiovisual_genre DAN EN audiovisual_channel time_instant
  | DIME QUE audiovisual_genre PONEN EN audiovisual_channel time_instant
  | DIME QUE DAN EN audiovisual_channel time_instant
  | DIME QUE ECHAN EN audiovisual_channel time_instant
  | DIME QUE ECHAN EN audiovisual_channel time_instant EN LA device
  | DIME QUE ESTAN PONIENDO EN audiovisual_channel time_instant
  | DIME QUE ESTAN PONIENDO EN audiovisual_channel time_instant
  | DIME QUE PONEN EN audiovisual_channel time_instant
  | DIME QUE PONEN EN audiovisual_channel time_instant EN LA device
  | PROGRAMACION DEL CANAL audiovisual_channel time_instant
  | PROGRAMACION audiovisual_channel time_instant
  | PROGRAMACION audiovisual_channel time_instant EN LA device
  | PROGRAMACION DE audiovisual_channel time_instant
  | PROGRAMACION DE audiovisual_channel EN LA device time_instant
  | PROGRAMACION DEL CANAL audiovisual_channel time_instant
  | PROGRAMACION DE audiovisual_genre EN audiovisual_channel time_instant
  | PROGRAMACION EN audiovisual_channel time_instant
  | QUIERO SABER LA PROGRAMACION DE audiovisual_genre EN audiovisual_channel time_instant
  | QUE audiovisual_genre ESTAN PONIENDO time_instant EN audiovisual_channel
  | QUE audiovisual_genre ESTAN TELEVISANDO time_instant EN audiovisual_channel
  | QUE audiovisual_genre ESTAN RETRANSMITIENDO time_instant EN audiovisual_channel
  | ESTOY INTERESADO EN SABER QUE ESTAN EMITIENDO time_instant EN audiovisual_channel
  | ME GUSTARIA SABER QUE audiovisual_genre audiovisual_subgenre ESTAN ECHANDO EN audiovisual_channel time_instant
  | ESTAN DANDO time_instant ALGUN audiovisual_genre EN audiovisual_channel
  | ESTAN DANDO time_instant ALGUNA audiovisual_genre audiovisual_subgenre EN audiovisual_channel
  | ESTAN DANDO ALGUNA audiovisual_genre DE audiovisual_subgenre time_instant EN audiovisual_channel
  | ESTAN DANDO ALGUN audiovisual_genre DE audiovisual_subgenre time_instant EN audiovisual_channel
  | QUE ESTAN DANDO time_instant EN audiovisual_channel
  | QUE PONEN EN audiovisual_channel time_instant
  | QUE PONEN EN audiovisual_channel time_instant EN LA device
  | TIENES audiovisual_genre time_instant EN audiovisual_channel
  | QUE audiovisual_genre DE audiovisual_subgenre PUEDO VER time_interval time_instant EN audiovisual_channel
  | VAN A ECHAR ALGUNA audiovisual_genre time_instant EN audiovisual_channel
  | time_interval time_instant PONEN ALGUNA audiovisual_genre EN audiovisual_channel
  | PUEDES MOSTRARME ALGUNA audiovisual_genre time_instant EN audiovisual_channel
  | time_interval time_instant DAN ALGO DE audiovisual_genre EN audiovisual_channel
  | time_interval time_instant ECHAN ALGUNA audiovisual_genre EN audiovisual_channel
  | ESTAN PONIENDO time_instant ALGUN audiovisual_genre audiovisual_subgenre EN audiovisual_channel
  | HAY ALGUNA audiovisual_genre time_instant EN audiovisual_channel
  | DAN ALGUNA audiovisual_genre DE audiovisual_subgenre time_interval time_instant EN audiovisual_channel
  | ECHAN time_interval ALGUNA audiovisual_genre time_instant EN audiovisual_channel
  | ESTAN DANDO UNA audiovisual_genre DE audiovisual_subgenre time_instant EN audiovisual_channel
  | ESTAN ECHANDO time_instant ALGUN audiovisual_genre audiovisual_subgenre EN audiovisual_channel
  | time_interval time_instant DAN ALGO audiovisual_releases DE audiovisual_genre EN audiovisual_channel
  | time_interval time_instant ECHAN ALGUNA audiovisual_releases audiovisual_genre EN audiovisual_channel
  | time_interval ECHAN ALGUNA audiovisual_releases audiovisual_genre EN audiovisual_channel
  | time_interval ECHAN ALGUNA audiovisual_releases EN audiovisual_channel
  | ECHAN ALGUNA audiovisual_releases EN audiovisual_channel
  | EN audiovisual_channel ECHAN ALGUNA audiovisual_releases
  | EN audiovisual_channel ECHAN ALGUNA audiovisual_releases EN LA device
  | audiovisual_channel ECHA ALGUNA audiovisual_releases
  | audiovisual_channel ECHA ALGUNA audiovisual_releases
  | ESTAN PONIENDO time_instant ALGUN audiovisual_releases audiovisual_genre audiovisual_subgenre EN audiovisual_channel
  | HAY ALGUNA audiovisual_genre time_instant EN audiovisual_channel audiovisual_releases
  | DAN ALGUNA audiovisual_releases EN audiovisual_genre DE audiovisual_subgenre time_interval EN audiovisual_channel
  | ECHAN time_interval ALGUNA audiovisual_genre DE audiovisual_releases time_instant EN audiovisual_channel
  | ESTAN DANDO UNA audiovisual_genre DE audiovisual_subgenre audiovisual_releases time_instant EN audiovisual_channel
  | ESTAN ECHANDO time_instant ALGUN audiovisual_genre audiovisual_subgenre EN audiovisual_channel
  | ESTAN ECHANDO ALGO DE audiovisual_genre audiovisual_subgenre time_instant EN audiovisual_channel
  | DAME LA PROGRAMACION audiovisual_channel DE time_interval
  | ESTAN DANDO ALGUNA audiovisual_genre time_interval EN audiovisual_channel
  | ESTAN EMITIENDO ALGUNA audiovisual_genre time_interval EN audiovisual_channel
  | ESTAN RETRANSMITIENDO audiovisual_genre time_interval EN audiovisual_channel
  | ESTAN TELEVISANDO audiovisual_genre time_interval EN audiovisual_channel
  | ME PUEDES DECIR QUE audiovisual_genre ESTA EN EMISION time_interval EN audiovisual_channel
  | ME PUEDES DECIR QUE audiovisual_genre ESTAN PONIENDO time_interval EN audiovisual_channel
  | ME PUEDES DECIR QUE ESTA EN EMISION time_interval EN audiovisual_channel
  | ME PUEDES DECIR QUE ESTAN PONIENDO time_interval EN audiovisual_channel
  | ME PUEDES DECIR QUE ESTA EN EMISION time_interval EN audiovisual_channel
  | ME PUEDES DECIR QUE ESTAN PONIENDO time_interval EN audiovisual_channel
  | QUE audiovisual_genre ECHAN time_interval time_interval EN audiovisual_channel
  | QUE ESTAN EMITIENDO time_interval EN audiovisual_channel
  | QUE ESTAN PONIENDO time_interval EN audiovisual_channel
  | QUE ESTAN RETRANSMITIENDO time_interval EN audiovisual_channel
  | QUE ESTAN RETRANSMITIENDO time_interval EN audiovisual_channel EN LA device
  | QUE audiovisual_genre ESTAN DANDO time_interval EN audiovisual_channel
  | QUE audiovisual_genre ECHAN time_interval time_interval EN audiovisual_channel
  | QUE audiovisual_genre ESTAN EMITIENDO time_interval EN audiovisual_channel
  | QUE audiovisual_genre HAY time_interval time_interval EN audiovisual_channel
  | QUE audiovisual_genre audiovisual_genre PONEN time_interval time_interval EN audiovisual_channel
  | QUE audiovisual_genre ESTAN DANDO time_interval EN audiovisual_channel
  | VAN A PONER ALGUN audiovisual_genre DE audiovisual_subgenre time_interval time_instant EN audiovisual_channel
  | QUE audiovisual_genre ECHAN time_interval time_interval EN audiovisual_channel
  | QUE audiovisual_genre ECHAN time_interval EN audiovisual_channel
  | QUE audiovisual_subgenre DAN time_interval time_interval EN audiovisual_channel
  | VER QUE DAN EN LA CADENA audiovisual_channel
  | VER QUE ECHAN EN audiovisual_channel
  | VER QUE ECHAN EN EL CANAL audiovisual_channel
  | VER QUE ESTAN DANDO EN audiovisual_channel
  | VER QUE ESTAN DANDO EN EL CANAL audiovisual_channel
  | VER QUE ESTAN ECHANDO EN EL CANAL audiovisual_channel
  | VER QUE ESTAN ECHANDO EN EL CANAL audiovisual_channel EN LA device
  | QUE ESTAN ECHANDO EN EL CANAL audiovisual_channel
  | QUE ESTAN ECHANDO EN LA audiovisual_channel
  | QUE ESTAN ECHANDO EN audiovisual_channel
  | QUE ESTAN ECHANDO EN audiovisual_channel EN LA device
  | VER QUE ESTAN PONIENDO EN audiovisual_channel
  | QUE ESTAN PONIENDO EN audiovisual_channel
  | QUE ESTAN PONIENDO time_instant
  | QUE ESTAN ECHANDO time_instant
  | QUE ESTAN EMITIENDO time_instant
  | VER QUE PONEN EN audiovisual_channel
  | VER QUE PONEN EN LA EMISORA audiovisual_channel
  | VER LA CADENA audiovisual_channel
  | VER EN audiovisual_channel
  | VER EN audiovisual_channel EN LA device
  | VER EL CANAL audiovisual_channel
  | VER EN LA audiovisual_channel
  | VER EL CANAL audiovisual_channel
  | VER EN EL CANAL audiovisual_channel
  | VER audiovisual_channel
  | VER EN LA device audiovisual_channel
  | VER LA audiovisual_channel
  | VER EL audiovisual_channel
  | VER EL audiovisual_channel EN LA device
  | VER LA EMISORA audiovisual_channel
  | QUE PUEDO VER EN EL CANAL audiovisual_channel
  | QUE PUEDO VER EN LA audiovisual_channel
  | VER LAS audiovisual_releases DE audiovisual_channel
  | VER LA audiovisual_releases DE audiovisual_channel
  | VER LO audiovisual_releases DEL audiovisual_channel
  | VER LAS audiovisual_releases DEL CANAL audiovisual_channel
  | QUE PUEDO VER audiovisual_releases EN EL CANAL audiovisual_channel
  | QUE PUEDO VER EN LA audiovisual_channel audiovisual_releases
  | QUE PUEDO VER EN EL audiovisual_channel
  | QUE PUEDO VER EN EL audiovisual_channel EN LA device
  | QUE PODEMOS VER EN EL CANAL audiovisual_channel
  | QUE PODEMOS VER EN LA audiovisual_channel
  | QUE PODEMOS VER EN EL audiovisual_channel
  | QUE PODEMOS VER EN EL audiovisual_channel EN LA device
  | QUE PUEDO VER EN audiovisual_channel
  | QUE PUEDO VER EN audiovisual_channel
  | QUE PUEDO VER EN LA device EN audiovisual_channel
  | QUE HAY PARA VER EN audiovisual_channel
  | QUE TIENEN PARA VER EN audiovisual_channel
  | QUE HAY PARA VER EN EL CANAL audiovisual_channel
  | QUE TIENEN PARA VER EN EL CANAL audiovisual_channel
  | QUE TIENEN PARA VER EN LA device EN EL CANAL audiovisual_channel
  | QUIERO VER QUE DAN EN audiovisual_channel
  | QUIERO VER QUE ESTAN DANDO EN audiovisual_channel
  | QUIERO VER QUE ESTAN ECHANDO EN audiovisual_channel
  | QUIERO VER QUE ESTAN PONIENDO EN audiovisual_channel
  | QUIERO VER QUE PONEN EN audiovisual_channel CAMBIA DE CANAL
  | PUEDO VER LO QUE ESTAN DANDO EN audiovisual_channel
  | PUEDO VER LO QUE ESTAN DANDO EN audiovisual_channel EN LA device
  | PUEDO VER LO QUE ESTAN ECHANDO EN audiovisual_channel
  | PUEDO VER LO QUE ESTAN PONIENDO EN audiovisual_channel
  | PUEDO VER LO QUE ESTAN PONIENDO EN LA device EN audiovisual_channel
  | PUEDO VER LO QUE ESTAN EMITIENDO EN audiovisual_channel
  | DESEO VER QUE DAN EN audiovisual_channel
  | DESEO VER QUE ECHAN EN audiovisual_channel
  | DESEO VER QUE PONEN EN audiovisual_channel
  | DEJAME VER QUE ESTAN DANDO EN audiovisual_channel
  | DEJAME VER QUE ESTAN ECHANDO EN audiovisual_channel
  | DEJAME VER QUE ESTAN ECHANDO EN audiovisual_channel EN LA device
  | DEJAME VER QUE ESTAN PONIENDO EN LA device EN EL audiovisual_channel
  | DEJAME VER QUE ESTAN PONIENDO EN EL audiovisual_channel
  | MIRAR QUE PONEN EN audiovisual_channel
  | MIRAR QUE ECHAN EN audiovisual_channel
  | MIRAR QUE ECHAN EN audiovisual_channel EN LA device
  | MIRAR QUE DAN EN audiovisual_channel
  | VER QUE DAN EN audiovisual_channel
  | VER QUE DAN EN audiovisual_channel EN LA device
  | QUE audiovisual_genre audiovisual_releases time_interval EN audiovisual_channel
  | QUE audiovisual_genre audiovisual_releases time_interval EN audiovisual_channel
  | QUE audiovisual_genre audiovisual_releases time_interval EN audiovisual_channel
  | QUE audiovisual_genre audiovisual_releases time_interval EN CANAL audiovisual_channel
  | QUE audiovisual_genre audiovisual_releases EN LA device time_interval EN CANAL audiovisual_channel
  | QUE audiovisual_releases time_interval EN EL CANAL audiovisual_channel
  | EN audiovisual_channel time_interval QUE audiovisual_genre audiovisual_releases
  | EN EL CANAL audiovisual_channel time_interval QUE audiovisual_genre audiovisual_releases
  | EN EL CANAL audiovisual_channel time_interval QUE audiovisual_genre audiovisual_releases EN LA device
  | EN audiovisual_channel time_interval QUE audiovisual_genre audiovisual_releases
  | EN CANAL audiovisual_channel time_interval QUE audiovisual_genre audiovisual_releases
  | QUE audiovisual_releases time_interval EN audiovisual_channel
  | time_interval QUE audiovisual_releases EN audiovisual_channel
  | time_interval QUE audiovisual_releases EN LA device EN audiovisual_channel
  | time_interval QUE audiovisual_releases EN CANAL audiovisual_channel
  | CUAL ES LA audiovisual_genre audiovisual_releases EN EL CANAL audiovisual_channel
  | CUAL ES LA audiovisual_genre audiovisual_releases EN audiovisual_channel
  | CUAL ES EL audiovisual_genre audiovisual_releases EN audiovisual_channel
  | CUAL ES EL audiovisual_genre audiovisual_releases EN audiovisual_channel
  | CUAL ES EL audiovisual_genre audiovisual_releases EN LA device EN audiovisual_channel
  | CUAL ES EL audiovisual_genre QUE audiovisual_releases EN audiovisual_channel
  | CUAL ES LA audiovisual_genre QUE audiovisual_releases EN audiovisual_channel
  | CUAL ES LA audiovisual_genre QUE audiovisual_releases EN LA device EN audiovisual_channel
  | CUAL ES LA audiovisual_genre QUE audiovisual_releases EN audiovisual_channel
  | CUAL ES EL audiovisual_genre audiovisual_releases QUE audiovisual_releases EN audiovisual_channel
  | BUSCAME QUE ECHAN DE audiovisual_genre audiovisual_genre time_interval EN audiovisual_channel
  | BUSCAME QUE audiovisual_genre DAN time_interval EN audiovisual_channel
  | BUSCAME QUE audiovisual_genre DAN time_interval EN LA device EN audiovisual_channel
  | BUSCAME UNA audiovisual_genre audiovisual_genre QUE ECHEN time_interval EN audiovisual_channel
  | BUSCAME QUE DAN time_interval EN audiovisual_channel
  | BUSCAME UNA audiovisual_genre QUE ECHEN time_interval EN audiovisual_channel
  | BUSCA LO audiovisual_releases DE audiovisual_channel
  | BUSCA LAS audiovisual_releases DE audiovisual_channel EN MI device
  | BUSCA LOS audiovisual_releases DE audiovisual_channel
  | QUE audiovisual_genre ECHAN time_interval time_interval
  | QUE audiovisual_genre ECHAN time_interval
  | QUE audiovisual_genre ECHAN time_interval
  | QUE audiovisual_genre DAN time_interval time_interval
  | QUE audiovisual_genre DAN time_interval
  | QUE audiovisual_genre ECHAN time_interval time_interval
  | QUE audiovisual_genre ECHAN time_interval time_interval
  | QUE audiovisual_genre DAN time_interval time_interval
  | QUE audiovisual_genre ECHAN time_interval
  | QUE DAN time_interval time_interval
  | QUE DAN time_interval time_interval
  | DIME QUE audiovisual_genre ECHAN time_interval time_interval
  | DIME QUE audiovisual_genre ECHAN time_interval time_interval
  | DIME QUE audiovisual_genre DAN time_interval time_interval
  | QUIERA SABER QUE audiovisual_genre DAN time_interval
  | QUIERA SABER QUE audiovisual_genre ECHAN time_interval
  | QUIERO SABER QUE audiovisual_genre ECHAN time_interval time_interval
  | RECOMIENDAME ALGUN audiovisual_genre QUE ECHEN time_interval
  | RECOMIENDAME audiovisual_genre QUE DEN time_interval
  | RECOMIENDAME ALGUNA audiovisual_genre QUE ECHEN time_interval
  | RECOMIENDAME UN audiovisual_genre QUE DEN time_interval
  | RECOMIENDAME UNA audiovisual_genre QUE ECHEN time_interval
  | RECOMIENDAME UNA audiovisual_genre QUE ECHEN time_instant
  | ACONSEJAME ALGUNA audiovisual_genre QUE ESTEN ECHANDO time_instant
  | ACONSEJAME ALGUN audiovisual_genre QUE ESTEN DANDO time_instant
  | BUSCAME ALGO DE audiovisual_genre DE audiovisual_subgenre QUE ESTEN ECHANDO time_instant
  | BUSCAME LOS audiovisual_genre QUE ECHEN time_interval time_instant
  | BUSCAME LOS audiovisual_genre QUE DEN time_interval time_instant
  | BUSCAME UNA audiovisual_genre DE audiovisual_subgenre QUE ESTEN DANDO time_instant
  | DIME LAS audiovisual_genre QUE ECHAN time_interval time_instant
  | DIME LOS audiovisual_genre QUE DAN time_interval time_instant
  | DIME LOS audiovisual_genre QUE ECHAN time_interval time_instant
  | DIME LOS audiovisual_genre QUE DAN time_interval time_instant
  | DIME LOS audiovisual_genre DE audiovisual_subgenre QUE ECHAN time_interval time_instant
  | DIME LOS audiovisual_genre QUE ECHAN time_interval time_instant
  | DIME UN audiovisual_genre audiovisual_subgenre QUE ECHEN time_interval time_instant
  | DIME UN audiovisual_genre audiovisual_subgenre QUE DEN time_interval time_instant
  | RECOMIENDAME ALGUNA audiovisual_genre QUE ESTEN ECHANDO time_instant
  | HAY ALGUNA audiovisual_genre DE audiovisual_subgenre QUE ESTEN ECHANDO time_instant
  | HAY ALGUNA audiovisual_genre DE audiovisual_subgenre QUE ESTEN DANDO time_instant
  | ME PUEDES ACONSEJAR ALGUNA audiovisual_genre QUE DEN time_interval time_instant
  | ME PUEDES ACONSEJAR ALGUN audiovisual_genre QUE ECHEN time_interval time_instant
  | ME PUEDES DECIR ALGUNA audiovisual_genre DE audiovisual_subgenre QUE DEN time_interval time_instant
  | ME PUEDES DECIR ALGUN audiovisual_genre DE audiovisual_subgenre QUE ECHEN time_interval time_instant
  | ME PUEDES DECIR ALGUN audiovisual_genre DE audiovisual_subgenre QUE ECHEN time_interval
  | PUEDO VER ALGUNA audiovisual_genre DE audiovisual_subgenre QUE ESTEN DANDO time_instant
  | PUEDO VER ALGUN audiovisual_genre DE audiovisual_subgenre QUE ESTEN ECHANDO time_instant
  | QUE audiovisual_genre DE audiovisual_subgenre ECHAN time_interval time_instant
  | QUE audiovisual_genre ECHAN time_instant
  | QUE audiovisual_genre DE audiovisual_subgenre ECHAN time_interval time_instant
  | QUE audiovisual_genre DE audiovisual_subgenre DAN time_interval time_instant
  | QUE audiovisual_genre DE audiovisual_subgenre ECHAN time_interval time_instant
  | QUE audiovisual_genre ECHAN time_interval time_instant
  | QUE audiovisual_genre DE audiovisual_subgenre DAN time_interval time_instant
  | QUE audiovisual_genre DAN time_instant
  | ACONSEJAME ALGUNA audiovisual_genre QUE ECHEN time_interval
  | ACONSEJAME UN audiovisual_genre QUE ECHEN time_interval
  | BUSCAME ALGO DE audiovisual_genre DE audiovisual_subgenre QUE ECHEN time_interval
  | BUSCAME ALGUNA audiovisual_genre DE audiovisual_subgenre QUE DEN time_interval
  | DIME audiovisual_genre QUE DEN time_interval time_interval
  | DIME audiovisual_genre audiovisual_genre QUE ECHEN time_interval
  | DIME ALGO audiovisual_subgenre QUE ECHEN time_interval time_interval
  | DIME ALGUNA audiovisual_genre QUE DEN time_interval time_interval
  | DIME ALGUNA audiovisual_genre QUE ECHEN time_interval time_interval
  | DIME ALGUN audiovisual_genre QUE ECHAN time_interval
  | DIME ALGUN audiovisual_genre QUE ECHEN time_interval time_interval
  | DIME QUE audiovisual_genre QUE ECHEN time_interval time_interval
  | DIME QUE audiovisual_genre DAN time_interval
  | DIME QUE audiovisual_genre audiovisual_subgenre ECHAN time_interval
  | DIME QUE audiovisual_genre ECHAN time_interval
  | DIME UNA audiovisual_genre QUE DEN time_interval
  | RECOMIENDAME audiovisual_genre QUE ECHEN time_interval
  | RECOMIENDAME audiovisual_genre QUE DEN time_interval
  | RECOMIENDAME audiovisual_genre QUE ECHEN time_interval
  | RECOMIENDAME ALGO DE audiovisual_genre QUE DEN time_interval time_interval
  | RECOMIENDAME ALGO DE audiovisual_genre QUE ECHEN time_interval time_interval
  | RECOMIENDAME ALGUNA audiovisual_genre QUE DEN time_interval
  | RECOMIENDAME ALGUNA audiovisual_genre QUE ECHEN time_interval
  | HAY ALGUNA audiovisual_genre QUE ECHEN time_interval time_interval
  | HAY ALGUN audiovisual_genre QUE ECHEN time_interval time_interval
  | HAY ALGUN audiovisual_genre QUE DEN time_interval time_interval
  | QUE audiovisual_genre audiovisual_subgenre DAN time_interval
  | QUE audiovisual_genre audiovisual_subgenre ECHAN time_interval
  | QUE audiovisual_genre DAN time_interval time_interval
  | QUE audiovisual_genre ECHAN time_interval
  | QUE audiovisual_genre ECHAN time_interval time_interval
  | QUE audiovisual_genre ECHAN time_interval
  | QUE audiovisual_genre ECHAN time_interval time_interval
  | QUE audiovisual_genre ECHAN time_interval time_interval
  | TENEIS ALGUNA audiovisual_genre QUE ECHEN time_interval time_interval
  | TIENES ALGO DE audiovisual_genre QUE DEN time_interval time_interval
  | TIENES ALGUNA audiovisual_genre audiovisual_genre QUE ECHEN time_interval time_interval
  | PON ALGO DE audiovisual_genre QUE DEN time_interval
  | PON audiovisual_genre QUE ECHEN time_interval
  | QUE audiovisual_genre PONEN time_interval
  | QUE PONEN EN LA device
  | QUE ECHAN EN LOS CANALES DE LA device
  | QUE PONEN EN LOS CANALES DE LA device
  | QUE audiovisual_genre ECHAN EN LA device
  | QUE audiovisual_genre PONEN EN LA device
  | QUE ECHAN time_interval EN LOS CANALES DE device
  | MUÉSTRAME LA GUÍA DE device
  | ENSÉÑAME LA GUÍA DE device
  | BUSCA QUE ECHAN EN LA device
  | BUSCAME QUE ECHAN EN LA device
  | BUSCA LA PROGRAMACIÓN DE audiovisual_channel
  | BUSCA audiovisual_releases DE audiovisual_channel
  //---------------------------------------
  |   ( QUE 
        ( audiovisual_genre (DE* audiovisual_subgenre)* | audiovisual_subgenre | audiovisual_releases )* 
        ( ECHAN | HAY | PONEN | TENGO PARA VER | PUEDO VER | EMITEN )
      | CUAL ES LA PROGRAMACION PARA*
      | QUE PROGRAMACION HAY
      | ( MUESTRAME | QUIERO VER ) ( LA | LAS | LOS )* 
        ( GUIA DE device | audiovisual_genre | audiovisual_subgenre )* 
        ( QUE* 
          ( ECHAN | HAY | PONEN | TENGO PARA VER | PUEDO VER | EMITEN ) EN* 
          ( time_interval | time_instant)* 
          ( EN | A | LA | DE )* 
          audiovisual_channel EN* 
          ( LA | MI )* device* time_instant*
        )*
      )
      (time_interval | time_instant)* EN* (LA | MI)* device* time_instant*
          
  | (MUESTRAME | PON) (time_interval | time_instant)* LA* GUIA DE* LA* device (time_interval | time_instant)* EN* (LA | MI)* device* time_instant*
  | QUE time_interval time_interval EN MI device

  | (ECHAN | PUEDO VER | QUIERO VER | PONEN) ALGO INTERESANTE 
      ( (time_interval | time_instant)* EN* (LA | MI)* device* time_instant*
      | (time_interval | time_instant)* EN* audiovisual_channel
      )
  ;
INTERESANTE:'interesante';

//
//-------- Intent --- search_similar -----------------
//
search_similar
  : ALGO PARECIDO A audiovisual_film_title
  | BUSCA ALGO COMO audiovisual_film_title PARA VER time_instant
  | BUSCA ALGO COMO audiovisual_film_title time_instant
  | ALGO QUE SE ASEMEJE A audiovisual_tvseries_title
  | ALGO QUE SE PAREZCA A audiovisual_film_title
  | ALGO SEMEJANTE A audiovisual_tvseries_title
  | ALGO SIMILAR A audiovisual_tvshow_title
  | ALGO COMO audiovisual_tvshow_title
  | ALGUNA PARECIDA A audiovisual_film_title
  | ALGUNA audiovisual_genre COMO audiovisual_film_title
  | BUSCO UNA audiovisual_genre PARECIDA A audiovisual_tvseries_title
  | BUSCAME DEL ROLLO DE audiovisual_film_title
  | BUSCAME audiovisual_genre COMO audiovisual_tvseries_title
  | BUSCAME audiovisual_genre PARECIDAS A audiovisual_film_title
  | BUSCAME UNA audiovisual_genre COMO audiovisual_film_title
  | BUSCAME UNA audiovisual_genre SIMILAR A audiovisual_tvseries_title
  | BUSCAME UNA audiovisual_genre COMO audiovisual_tvseries_title PARA PONER
  | BUSCA SIMILAR A audiovisual_tvseries_title PARA PONER
  | BUSCA COMO audiovisual_documental_title PARA PONER
  | BUSCA PARECIDA A audiovisual_documental_title PARA PONER
  | BUSCAR SIMILAR A audiovisual_tvseries_title PARA PONER
  | BUSCAR COMO audiovisual_documental_title PARA PONER
  | BUSCAR PARECIDA A audiovisual_documental_title PARA PONER
  | BUSCAME SIMILAR A audiovisual_tvseries_title PARA PONER
  | BUSCAME COMO audiovisual_documental_title PARA PONER
  | BUSCAME PARECIDA A audiovisual_documental_title PARA PONER
  | BUSCAME UNA audiovisual_genre COMO audiovisual_tvseries_title PARA PONER time_instant
  | BUSCA SIMILAR A audiovisual_tvseries_title PARA PONER time_instant
  | BUSCA COMO audiovisual_documental_title PARA PONER time_instant
  | BUSCA PARECIDA A audiovisual_documental_title PARA PONER time_instant
  | BUSCAR SIMILAR A audiovisual_tvseries_title PARA PONER time_instant
  | BUSCAR COMO audiovisual_documental_title PARA PONER time_instant
  | BUSCAR PARECIDA A audiovisual_documental_title PARA PONER time_instant
  | BUSCAME SIMILAR A audiovisual_tvseries_title PARA PONER time_instant
  | BUSCAME COMO audiovisual_documental_title PARA PONER time_instant
  | BUSCAME PARECIDA A audiovisual_documental_title PARA PONER time_instant
  | BUSCAME UNA audiovisual_genre COMO audiovisual_tvseries_title PARA VER time_instant
  | BUSCA SIMILAR A audiovisual_tvseries_title PARA VER time_instant
  | BUSCA COMO audiovisual_documental_title PARA VER time_instant
  | BUSCA PARECIDA A audiovisual_documental_title PARA VER time_instant
  | BUSCAR SIMILAR A audiovisual_tvseries_title PARA VER time_instant
  | BUSCAR COMO audiovisual_documental_title PARA VER time_instant
  | BUSCAR PARECIDA A audiovisual_documental_title PARA VER time_instant
  | BUSCAME SIMILAR A audiovisual_tvseries_title PARA VER time_instant
  | BUSCAME COMO audiovisual_documental_title PARA VER time_instant
  | BUSCAME PARECIDA A audiovisual_documental_title PARA VER time_instant
  | BUSCA DEL ROLLO DE audiovisual_film_title
  | BUSCA ALGO ASI COMO audiovisual_tvseries_title
  | BUSCA PARECIDAS A audiovisual_film_title
  | DAME ALGO SIMILAR A audiovisual_film_title
  | BUSCAME DEL ROLLO DE audiovisual_tvshow_title
  | BUSCAME audiovisual_genre COMO audiovisual_documental_title
  | BUSCAME audiovisual_genre PARECIDOS A audiovisual_tvshow_title
  | BUSCAME UN audiovisual_genre COMO audiovisual_tvshow_title
  | BUSCAME UN audiovisual_genre SIMILAR A audiovisual_documental_title
  | BUSCAME UN audiovisual_genre COMO audiovisual_documental_title
  | BUSCA UNA audiovisual_genre COMO LA DE audiovisual_film_title
  | BUSCA UNA COMO LA DE audiovisual_film_title
  | BUSCA UNA DE audiovisual_subgenre COMO LA DE audiovisual_film_title
  | BUSCA DEL ROLLO audiovisual_film_title
  | BUSCA DEL TIPO DE audiovisual_film_title TIENES ALGO
  | BUSCAME ALGO DEL TIPO DE audiovisual_documental_title TIENES
  | BUSCA ALGO DEL TIPO DE audiovisual_documental_title
  | BUSCA DEL TIPO DE audiovisual_film_title TIENES
  | BUSCAME DEL TIPO audiovisual_film_title TIENES
  | BUSCAME DEL TIPO audiovisual_film_title
  | BUSCA ALGO COMO audiovisual_tvshow_title
  | BUSCA ALGO COMO LA audiovisual_genre audiovisual_subgenre DE audiovisual_film_title
  | BUSCA ALGO audiovisual_subgenre PARECIDO A audiovisual_film_title
  | BUSCA COMO audiovisual_tvseries_title
  | BUSCA PARECIDO A audiovisual_tvseries_title TIENES ALGO
  | BUSCA DEL TEMA audiovisual_tvseries_title TIENES
  | BUSCA DEL TEMA PARECIDO A audiovisual_tvseries_title TIENES
  | BUSCA UNA DEL TEMA PARECIDO A audiovisual_tvseries_title TIENES
  | BUSCA UNA DE LO QUE VA audiovisual_tvseries_title TIENES
  | BUSCAME UNA DEL TEMA DE audiovisual_tvseries_title TIENES
  | BUSCAME PARECIDO DEL TIPO DE audiovisual_tvseries_title
  | BUSCA UN audiovisual_genre COMO LA DE audiovisual_documental_title
  | BUSCA UNO PARECIDA AL DE audiovisual_documental_title
  | BUSCA UNO DE audiovisual_subgenre COMO EL DE audiovisual_documental_title
  | BUSCA ALGO COMO EL audiovisual_genre audiovisual_subgenre DE audiovisual_documental_title
  | BUSCA ALGO audiovisual_subgenre PARECIDO A audiovisual_documental_title
  | BUSCA DEL ROLLO audiovisual_tvshow_title
  | BUSCA DEL TIPO DE audiovisual_tvshow_title ALGO
  | BUSCA ALGO DEL TIPO DE audiovisual_tvshow_title
  | BUSCAME DEL TIPO audiovisual_tvshow_title ALGUNA COSA
  | BUSCAME DEL ESTILO audiovisual_tvshow_title
  | BUSCA UNA audiovisual_genre PARECIDA A COMO ES LA DE audiovisual_film_title
  | BUSCA UNA SIMILAR A LA DE audiovisual_film_title
  | BUSCA UNA DE audiovisual_subgenre PARECIDA A audiovisual_film_title
  | BUSCA ALGO SIMILAR COMO LA audiovisual_genre audiovisual_subgenre DE audiovisual_film_title
  | BUSCA ALGO audiovisual_subgenre SIMILAR A audiovisual_film_title
  | BUSCA ALGO audiovisual_subgenre DEL TEMA DE audiovisual_film_title
  | BUSCA COMO audiovisual_film_title
  | BUSCA PARECIDO A audiovisual_film_title TIENES ALGO
  | BUSCAME ALGO SIMILAR A audiovisual_documental_title TIENES
  | BUSCA COMO DEL TEMA DE audiovisual_documental_title
  | BUSCA DEL TEMA audiovisual_film_title TIENES
  | BUSCA DEL TEMA PARECIDO A audiovisual_film_title TIENES
  | BUSCA UNA DEL TEMA PARECIDO A audiovisual_film_title TIENES
  | BUSCA UNA DE LO QUE VA audiovisual_film_title TIENES
  | BUSCAME UNA DEL TEMA DE audiovisual_film_title TIENES
  | BUSCAME PARECIDO DEL TIPO DE audiovisual_film_title
  | BUSCO UN audiovisual_genre PARECIDO A audiovisual_documental_title
  | BUSCA ALGUNAS audiovisual_genre PARECIDA A COMO ES LA DE audiovisual_tvseries_title
  | BUSCA UNA SIMILAR A LA DE audiovisual_tvseries_title
  | BUSCA UNA DE audiovisual_subgenre PARECIDA A audiovisual_tvseries_title
  | BUSCA ALGO SIMILAR COMO LA audiovisual_genre audiovisual_subgenre DE audiovisual_tvseries_title
  | BUSCA ALGO audiovisual_subgenre SIMILAR A audiovisual_tvseries_title
  | BUSCA ALGO audiovisual_subgenre DEL TEMA DE audiovisual_tvseries_title
  | DAME audiovisual_genre COMO audiovisual_film_title
  | DAME audiovisual_genre DEL ESTILO DE audiovisual_film_title
  | DAME audiovisual_genre PARECIDAS A audiovisual_tvseries_title
  | DAME audiovisual_genre SEMEJANTES A audiovisual_film_title
  | DAME audiovisual_genre SIMILARES A audiovisual_tvseries_title
  | DIME ALGO PARECIDO A audiovisual_film_title
  | DIME ALGO SIMILAR A audiovisual_tvseries_title
  | ME HA GUSTADO audiovisual_documental_title Y ME GUSTARIA VER ALGO PARECIDO
  | ESTARIA INTERESADO EN VER ALGO PARECIDO A audiovisual_film_title
  | ME GUSTARIA ALGO QUE SE PAREZCA A audiovisual_film_title
  | ME GUSTARIA UNA audiovisual_genre COMO audiovisual_film_title
  | ME GUSTARIA VER UNA audiovisual_genre PARECIDA A audiovisual_film_title
  | ME GUSTARIA VER UNA audiovisual_genre SIMILAR A audiovisual_tvseries_title
  | ME GUSTA audiovisual_tvseries_title DIME UNA audiovisual_genre PARECIDA
  | MAS audiovisual_genre PARECIDAS A audiovisual_film_title
  | PARECIDA A audiovisual_film_title
  | PON A REPRODUCIR ALGO SIMILAR A audiovisual_tvseries_title
  | PON ALGO COMO audiovisual_film_title
  | audiovisual_genre SIMILARES A audiovisual_film_title
  | audiovisual_genre PARECIDAS A audiovisual_tvseries_title
  | PON audiovisual_genre COMO audiovisual_film_title
  | PON ALGO COMO audiovisual_film_title
  | PON ALGO COMO audiovisual_film_title PARA VER
  | PON ALGO COMO audiovisual_documental_title
  | PON ALGO PARECIDO A audiovisual_film_title
  | PON ALGO SEMEJANTE A audiovisual_tvseries_title
  | PON ALGO SIMILAR A audiovisual_film_title
  | PON audiovisual_genre COMO audiovisual_tvseries_title
  | PON audiovisual_genre PARECIDAS A audiovisual_film_title
  | PON UNA audiovisual_genre PARECIDA A audiovisual_film_title
  | PON audiovisual_genre SIMILARES A audiovisual_film_title
  | PON audiovisual_genre AL ESTILO DE audiovisual_film_title
  | PON UNA audiovisual_genre COMO audiovisual_film_title
  | PON ALGUNA PARECIDA A audiovisual_tvseries_title
  | PON audiovisual_genre COMO audiovisual_film_title
  | QUERRIA VER UNA audiovisual_genre PARECIDA A audiovisual_tvseries_title
  | PON audiovisual_genre AL ESTILO DE audiovisual_tvshow_title
  | PON audiovisual_genre COMO audiovisual_tvshow_title
  | QUIERO audiovisual_genre PARECIDAS A audiovisual_film_title
  | QUIERO audiovisual_genre SEMEJANTES A audiovisual_tvseries_title
  | QUIERO audiovisual_genre SIMILARES A audiovisual_film_title
  | QUIERO QUE BUSQUES audiovisual_genre COMO audiovisual_tvseries_title
  | QUIERO QUE ME ACONSEJES VER ALGO SIMILAR A audiovisual_film_title
  | QUIERO QUE ME RECOMIENDES ALGO PARECIDO A audiovisual_tvseries_title
  | QUIERO QUE ME SUGIERAS VER ALGO PARECIDO A audiovisual_tvseries_title
  | QUIERO VER ALGO PARECIDO A audiovisual_tvseries_title
  | QUIERO VER UNA PARECIDA A audiovisual_film_title
  | RECOMIENDAME UNA audiovisual_genre COMO audiovisual_film_title
  | audiovisual_genre PARECIDA A audiovisual_tvseries_title
  | SIMILAR A audiovisual_tvseries_title
  | SOY FAN DE audiovisual_tvseries_title HAY ALGUNA audiovisual_genre SIMILAR
  | SOY FRIKI DE audiovisual_tvseries_title TIENES ALGO SIMILAR
  | HAY ALGO COMO audiovisual_tvseries_title O audiovisual_film_title
  | HAY ALGO COMO audiovisual_tvseries_title
  | TIENES ALGO PARECIDO A audiovisual_film_title
  | TIENES ALGO QUE SE PAREZCA A audiovisual_tvseries_title
  | TIENES ALGO SIMILAR A audiovisual_film_title QUE PUEDA PONER
  | TIENES ALGUNA audiovisual_genre PARECIDA A audiovisual_film_title
  | TIENES audiovisual_genre SIMILARES A audiovisual_film_title
  | HAY ALGO SIMILAR A audiovisual_tvseries_title
  | HAY ALGUNA audiovisual_genre DEL ESTILO audiovisual_film_title
  | ME PUEDES RECOMENDAR ALGUNA audiovisual_genre PARECIDA A audiovisual_film_title
  | VER UNA DEL ESTILO A audiovisual_film_title
  | VER UNA PARECIDA A audiovisual_film_title
  | VER UNA audiovisual_genre PARECIDA A audiovisual_tvseries_title
  | TIENES audiovisual_genre SIMILARES A audiovisual_film_title
  | TIENES audiovisual_genre SIMILARES A audiovisual_film_title
  | UNA audiovisual_genre COMO audiovisual_film_title
  | ALGO PARECIDO A audiovisual_tvshow_title
  | ALGO QUE SE PAREZCA A audiovisual_tvshow_title
  | ALGO SEMEJANTE A audiovisual_documental_title
  | ALGO SIMILAR A audiovisual_documental_title
  | ALGO COMO audiovisual_tvshow_title
  | ALGUNO PARECIDO A audiovisual_tvshow_title
  | ALGUN audiovisual_genre COMO audiovisual_tvshow_title
  | DAME ALGO SIMILAR A audiovisual_tvshow_title
  | DAME audiovisual_genre COMO audiovisual_tvshow_title
  | DAME audiovisual_genre DEL ESTILO DE audiovisual_tvshow_title
  | DAME audiovisual_genre PARECIDOS A audiovisual_documental_title
  | DAME audiovisual_genre SEMEJANTES A audiovisual_tvshow_title
  | DAME audiovisual_genre SIMILARES A audiovisual_documental_title
  | DIME ALGO PARECIDO A audiovisual_tvshow_title
  | DIME ALGO SIMILAR A audiovisual_documental_title
  | ME HA GUSTADO audiovisual_documental_title Y ME GUSTARIA VER ALGO PARECIDO
  | ESTABA ENGANCHADO A audiovisual_documental_title Y AHORA QUIERO VER ALGO PARECIDO QUE TENGAS
  | ESTARIA INTERESADO EN VER ALGO PARECIDO A audiovisual_tvshow_title
  | ME GUSTARIA ALGO QUE SE PAREZCA A audiovisual_tvshow_title
  | ME GUSTARIA UN audiovisual_genre COMO audiovisual_tvshow_title
  | ME GUSTARIA VER UN audiovisual_genre PARECIDO A audiovisual_tvshow_title
  | ME GUSTARIA VER UN audiovisual_genre SIMILAR A audiovisual_documental_title
  | ME GUSTA audiovisual_documental_title DIME UN audiovisual_genre PARECIDO
  | MAS audiovisual_genre PARECIDOS A audiovisual_tvshow_title
  | PARECIDO A audiovisual_tvshow_title
  | PON A REPRODUCIR ALGO SIMILAR A audiovisual_documental_title
  | PON ALGO COMO audiovisual_tvshow_title
  | audiovisual_genre SIMILARES A audiovisual_tvshow_title
  | audiovisual_genre PARECIDOS A audiovisual_documental_title
  | PON audiovisual_genre COMO audiovisual_tvshow_title
  | PON ALGO COMO audiovisual_tvshow_title
  | PON ALGO COMO audiovisual_tvshow_title
  | PON ALGO SIMILAR A audiovisual_documental_title
  | PON ALGO PARECIDO A audiovisual_tvshow_title
  | PON ALGO SEMEJANTE A audiovisual_documental_title
  | PON ALGO SIMILAR A audiovisual_tvshow_title
  | PON audiovisual_genre COMO audiovisual_documental_title
  | PON audiovisual_genre PARECIDOS A audiovisual_tvshow_title
  | PON audiovisual_genre PARECIDOS A audiovisual_tvshow_title
  | PON audiovisual_genre SIMILARES A audiovisual_tvshow_title
  | PON audiovisual_genre AL ESTILO DE audiovisual_tvshow_title
  | PON UN audiovisual_genre COMO audiovisual_tvshow_title
  | PON ALGUNO PARECIDO A audiovisual_documental_title
  | PON audiovisual_genre COMO audiovisual_tvshow_title
  | QUERRIA VER UN audiovisual_genre PARECIDO A audiovisual_documental_title
  | PON audiovisual_genre AL ESTILO DE audiovisual_documental_title
  | PON audiovisual_genre COMO audiovisual_documental_title
  | QUIERO audiovisual_genre PARECIDOS A audiovisual_tvshow_title
  | QUIERO audiovisual_genre SEMEJANTES A audiovisual_documental_title
  | QUIERO audiovisual_genre SIMILARES A audiovisual_tvshow_title
  | QUIERO QUE BUSQUES audiovisual_genre COMO audiovisual_documental_title
  | QUIERO QUE ME ACONSEJES VER ALGO SIMILAR A audiovisual_tvshow_title
  | QUIERO QUE ME RECOMIENDES ALGO PARECIDO A audiovisual_documental_title
  | QUIERO QUE ME SUGIERAS VER ALGO PARECIDO A audiovisual_documental_title
  | QUIERO VER ALGO PARECIDO A audiovisual_documental_title
  | QUIERO VER UNO PARECIDO A audiovisual_tvshow_title
  | RECOMIENDAME UN audiovisual_genre COMO audiovisual_tvshow_title
  | audiovisual_genre PARECIDO A audiovisual_documental_title
  | SIMILAR A audiovisual_documental_title
  | SOY FAN DE audiovisual_documental_title HAY ALGUN audiovisual_genre SIMILAR
  | SOY FRIKI DE audiovisual_documental_title TIENES ALGO SIMILAR
  | HAY ALGO COMO audiovisual_documental_title O audiovisual_tvshow_title
  | HAY ALGO COMO audiovisual_documental_title
  | TIENES ALGO PARECIDO A audiovisual_tvshow_title
  | TIENES ALGO QUE SE PAREZCA A audiovisual_documental_title
  | TIENES ALGO SIMILAR A audiovisual_tvshow_title QUE PUEDA PONER
  | TIENES ALGUN audiovisual_genre PARECIDO A audiovisual_tvshow_title
  | TIENES audiovisual_genre SIMILARES A audiovisual_tvshow_title
  | HAY ALGO SIMILAR A audiovisual_documental_title
  | HAY ALGUN audiovisual_genre DEL ESTILO audiovisual_tvshow_title
  | ME PUEDES RECOMENDAR ALGUN audiovisual_genre PARECIDO A audiovisual_tvshow_title
  | VER UNA DEL ESTILO A audiovisual_tvshow_title
  | VER UNO PARECIDO A audiovisual_tvshow_title
  | VER UNA audiovisual_genre PARECIDO A audiovisual_documental_title
  | TIENES audiovisual_genre SIMILARES A audiovisual_tvshow_title
  | TIENES audiovisual_genre SIMILARES A audiovisual_tvshow_title
  | UN audiovisual_genre COMO audiovisual_tvshow_title
  | time_interval QUIERO VER ALGO DEL ROLLO audiovisual_film_title
  | time_interval QUIERO VER DEL ROLLO DE audiovisual_documental_title
  | time_interval QUIERO VER DEL ROLLO audiovisual_documental_title
  | QUIERO VER DEL ROLLO audiovisual_documental_title
  | QUIERO VER DEL ROLLO DE audiovisual_tvshow_title
  | QUIERO VER ALGO DEL ROLLO audiovisual_documental_title
  | QUIERO VER ALGO DEL ROLLO DE audiovisual_tvshow_title
  | QUIERO VER ALGO DEL ROLLO DE audiovisual_film_title
  | DEL ROLLO DE audiovisual_film_title TIENES ALGO
  | ALGO DEL ROLLO DE audiovisual_documental_title TIENES
  | ALGO DEL ROLLO DE audiovisual_documental_title
  | DEL ROLLO DE audiovisual_film_title TIENES
  | DEL ROLLO audiovisual_film_title TIENES
  | DEL ROLLO audiovisual_film_title
  | DEL TIPO DE audiovisual_film_title TIENES ALGO
  | ALGO DEL TIPO DE audiovisual_documental_title TIENES
  | ALGO DEL TIPO DE audiovisual_documental_title
  | DEL TIPO DE audiovisual_film_title TIENES
  | DEL TIPO audiovisual_film_title TIENES
  | DEL TIPO audiovisual_film_title
  | PON DEL TIPO audiovisual_film_title
  | PON DEL ROLLO DE audiovisual_film_title
  | TIENES DEL TIPO audiovisual_film_title
  | TIENES DEL ROLLO DE audiovisual_film_title
  | ME GUSTARIA VER UNA audiovisual_genre DEL PALO DE audiovisual_film_title
  | PUEDO VER UN audiovisual_subgenre COMO audiovisual_film_title
  | QUIERO VER UNA audiovisual_genre COMO LA DE audiovisual_film_title
  | SERIA POSIBLE VER ALGO DE audiovisual_subgenre COMO audiovisual_film_title
  | SABES DE ALGUNA audiovisual_genre COMO audiovisual_film_title
  | TIENES ALGUNA audiovisual_genre ASI QUE ENGANCHE COMO audiovisual_film_title O audiovisual_film_title
  | UNA COMO LA audiovisual_subgenre audiovisual_film_title
  | ME GUSTARIA COMO DEL PALO DE audiovisual_film_title
  | ME GUSTARIA COMO DEL PALO audiovisual_film_title
  | ME GUSTARIA DEL PALO DE audiovisual_film_title
  | ME GUSTARIA DEL PALO audiovisual_film_title
  | UNA DE audiovisual_subgenre COMO audiovisual_film_title TIENES
  | PON ALGO PARA VER COMO LA audiovisual_genre DE audiovisual_film_title
  | PON ALGO QUE PUEDA VER COMO LA audiovisual_genre DE audiovisual_film_title
  | QUIERO VER UNO PARECIDO A audiovisual_documental_title
  | QUIERO VER ALGO DE LA PINTA DE audiovisual_tvshow_title
  | QUIERO VER ALGO PARECIDO A DE LO QUE VA audiovisual_film_title
  | QUIERO VER ALGO SIMILAR A audiovisual_documental_title
  | QUIERO VER COSAS PARECIDAS A audiovisual_tvshow_title
  | QUIERO VER ALGUNA COSA PARECIDA A audiovisual_film_title
  | DE LA PINTA DE audiovisual_film_title TIENES ALGO
  | PARECIDO A audiovisual_film_title TIENES ALGO
  | SIMILAR A audiovisual_film_title TIENES ALGO
  | ALGO PARECIDO COMO audiovisual_documental_title TIENES
  | ALGO SIMILAR A audiovisual_documental_title
  | SIMILAR A audiovisual_film_title TIENES
  | PARECIDO A audiovisual_film_title TIENES
  | COMO audiovisual_film_title
  | SIMILAR COMO audiovisual_film_title
  | COMO SIMILAR A audiovisual_film_title
  | COMO PARECIDO A audiovisual_film_title
  | PARECIDO A audiovisual_film_title TIENES ALGO PARA VER
  | COMO audiovisual_film_title TIENES ALGO
  | ALGO PARECIDO DEL TIPO DE audiovisual_documental_title TIENES
  | ALGO DEL TIPO COMO audiovisual_documental_title
  | SEMEJANTE A audiovisual_film_title TIENES
  | PARECIDO A audiovisual_film_title TIENES ALGUNA COSA
  | DEL TEMA DE audiovisual_film_title
  | PON DEL TEMA audiovisual_film_title
  | PON DEL TEMA DE audiovisual_film_title
  | TIENES DEL TIPO O DEL TEMA DE audiovisual_film_title
  | TIENES PARECIDO audiovisual_film_title
  | ME GUSTARIA VER UNA audiovisual_genre PARECIDA A audiovisual_film_title
  | PUEDO VER UN audiovisual_subgenre SIMILAR audiovisual_film_title
  | QUIERO VER UNA audiovisual_genre SIMILAR A LA DE audiovisual_film_title
  | SERIA POSIBLE VER ALGO DE audiovisual_subgenre SIMILAR A audiovisual_film_title
  | SABES DE ALGUNA audiovisual_genre SIMILAR A audiovisual_film_title
  | TIENES ALGUNA audiovisual_genre ASI QUE ENGANCHE PARECIDO A audiovisual_film_title O audiovisual_film_title
  | UNA PARECIDA A LA audiovisual_subgenre audiovisual_film_title
  | ME GUSTARIA PARECIDA DEL PALO DE audiovisual_film_title
  | ME GUSTARIA SIMILAR DEL PALO audiovisual_film_title
  | ME GUSTARIA COMO ES audiovisual_film_title
  | ME GUSTARIA SIMILAR A audiovisual_film_title
  | UN audiovisual_subgenre SIMILAR A audiovisual_film_title TIENES
  | PON ALGO PARA VER PARECIDO A LA audiovisual_genre DE audiovisual_film_title
  | PON ALGO QUE PUEDA VER PARECIDO A LA audiovisual_genre DE audiovisual_film_title
  | time_interval QUIERO VER ALGO DEL ROLLO audiovisual_tvshow_title
  | QUIERO VER ALGO DEL TIPO DE audiovisual_tvshow_title
  | QUIERO VER ALGO DEL ROLLO DE audiovisual_tvshow_title
  | DEL ROLLO DE audiovisual_tvshow_title TIENES ALGO
  | DEL ROLLO DE audiovisual_tvshow_title QUE TIENES
  | DEL ROLLO audiovisual_tvshow_title QUE TIENES
  | DEL ROLLO audiovisual_tvshow_title
  | DEL TIPO DE audiovisual_tvshow_title TIENES ALGO
  | DEL TIPO DE audiovisual_tvshow_title BUSCAME ALGUNA COSA
  | DEL TIPO audiovisual_tvshow_title QUE TIENES
  | DEL ESTILO audiovisual_tvshow_title
  | PON DEL TIPO audiovisual_tvshow_title
  | PON DEL ROLLO DE audiovisual_tvshow_title ALGO
  | TIENES DEL TIPO audiovisual_tvshow_title
  | TIENES DEL ROLLO DE audiovisual_tvshow_title
  | ME GUSTARIA VER UN audiovisual_genre DEL PALO DE audiovisual_tvshow_title
  | PUEDO VER UN audiovisual_genre COMO audiovisual_tvshow_title
  | QUIERO VER UN audiovisual_genre COMO EL DE audiovisual_tvshow_title
  | SERIA POSIBLE VER ALGO DE audiovisual_subgenre COMO audiovisual_tvshow_title
  | SABES DE ALGUN audiovisual_genre COMO audiovisual_tvshow_title
  | TIENES ALGUNA audiovisual_genre ASI QUE ENGANCHE COMO audiovisual_documental_title O audiovisual_documental_title
  | UNA COMO EL audiovisual_subgenre audiovisual_documental_title
  | ME GUSTARIA COMO DEL PALO DE audiovisual_documental_title
  | ME GUSTARIA COMO DEL PALO audiovisual_documental_title
  | ME GUSTARIA DEL PALO DE audiovisual_documental_title
  | ME GUSTARIA DEL PALO audiovisual_documental_title
  | PON ALGO PARA VER COMO EL audiovisual_genre DE audiovisual_documental_title
  | PON ALGO QUE PUEDA VER COMO EL audiovisual_genre DE audiovisual_documental_title
  | UNO DE audiovisual_subgenre SIMILAR audiovisual_documental_title TIENES
  | QUIERO VER ALGO PARECIDO A DE LO QUE VA audiovisual_documental_title
  | QUIERO VER ALGUNA COSA PARECIDA A audiovisual_documental_title
  | DE LA PINTA DE audiovisual_documental_title TIENES ALGO
  | PARECIDO A audiovisual_documental_title TIENES ALGO
  | SIMILAR A audiovisual_documental_title TIENES ALGO
  | SIMILAR A audiovisual_documental_title TIENES ALGUNO
  | PARECIDO A audiovisual_documental_title TIENES ALGUNO
  | COMO audiovisual_documental_title
  | SIMILAR COMO audiovisual_documental_title
  | COMO SIMILAR A audiovisual_documental_title
  | COMO PARECIDO A audiovisual_documental_title
  | SIMILAR COMO audiovisual_documental_title
  | SIMILAR A audiovisual_documental_title TIENES ALGUNA COSA
  | PARECIDO A audiovisual_documental_title TIENES ALGO PARA VER
  | COMO audiovisual_documental_title TIENES ALGO
  | SEMEJANTE A audiovisual_documental_title HAY ALGO
  | COMO audiovisual_documental_title HAY ALGO
  | PARECIDO A audiovisual_tvseries_title TIENES ALGUNA audiovisual_genre
  | DEL TEMA DE audiovisual_tvseries_title
  | PON DEL TEMA audiovisual_tvseries_title
  | PON DEL TEMA DE audiovisual_tvseries_title
  | TIENES DEL TIPO O DEL TEMA DE audiovisual_tvseries_title
  | TIENES PARECIDO audiovisual_tvseries_title
  | ME GUSTARIA VER UNA audiovisual_genre PARECIDA A audiovisual_tvseries_title
  | PUEDO VER UN audiovisual_subgenre SIMILAR audiovisual_tvseries_title
  | QUIERO VER UNA audiovisual_genre SIMILAR A LA DE audiovisual_tvseries_title
  | SERIA POSIBLE VER ALGO DE audiovisual_subgenre SIMILAR A audiovisual_tvseries_title
  | SABES DE ALGUNA audiovisual_genre SIMILAR A audiovisual_tvseries_title
  | TIENES ALGUNA audiovisual_genre ASI QUE ENGANCHE PARECIDO A audiovisual_tvseries_title O audiovisual_tvseries_title
  | UNA PARECIDA A LA audiovisual_subgenre audiovisual_tvseries_title
  | ME GUSTARIA PARECIDA DEL PALO DE audiovisual_tvseries_title
  | ME GUSTARIA SIMILAR DEL PALO audiovisual_tvseries_title
  | ME GUSTARIA COMO ES audiovisual_tvseries_title
  | ME GUSTARIA SIMILAR A audiovisual_tvseries_title
  | UN audiovisual_subgenre SIMILAR A audiovisual_tvseries_title TIENES
  | PON ALGO PARA VER PARECIDO A LA audiovisual_genre DE audiovisual_tvseries_title
  | PON ALGO PARA VER PARECIDO A LA audiovisual_genre DE audiovisual_film_title PARA VER time_instant
  | PON ALGO QUE PUEDA VER PARECIDO A LA audiovisual_genre DE audiovisual_film_title PARA VER time_instant
  | time_interval QUIERO VER ALGO DEL ROLLO audiovisual_tvshow_title PARA VER time_instant
  | QUIERO VER ALGO DEL TIPO DE audiovisual_tvshow_title PARA VER time_instant
  | QUIERO VER ALGO DEL ROLLO DE audiovisual_tvshow_title PARA VER time_instant
  | DEL ROLLO DE audiovisual_tvshow_title PARA VER time_instant TIENES ALGO
  | DEL ROLLO DE audiovisual_tvshow_title PARA VER time_instant QUE TIENES
  | DEL ROLLO audiovisual_tvshow_title PARA VER time_instant QUE TIENES
  | DEL ROLLO audiovisual_tvshow_title PARA VER time_instant
  | DEL TIPO DE audiovisual_tvshow_title PARA VER time_instant TIENES ALGO
  | DEL TIPO DE audiovisual_tvshow_title PARA VER time_instant BUSCAME ALGUNA COSA
  | DEL TIPO audiovisual_tvshow_title PARA VER time_instant QUE TIENES
  | DEL ESTILO audiovisual_tvshow_title PARA VER time_instant
  | PON DEL TIPO audiovisual_tvshow_title PARA VER time_instant
  | PON DEL ROLLO DE audiovisual_tvshow_title PARA VER time_instant ALGO
  | TIENES DEL TIPO audiovisual_tvshow_title PARA VER time_instant
  | TIENES DEL ROLLO DE audiovisual_tvshow_title PARA VER time_instant
  | ME GUSTARIA VER UN audiovisual_genre DEL PALO DE audiovisual_tvshow_title PARA VER time_instant
  | PUEDO VER UN audiovisual_genre COMO audiovisual_tvshow_title PARA VER time_instant
  | QUIERO VER UN audiovisual_genre COMO EL DE audiovisual_tvshow_title PARA VER time_instant
  | SERIA POSIBLE VER ALGO DE audiovisual_subgenre COMO audiovisual_tvshow_title PARA VER time_instant
  | SABES DE ALGUN audiovisual_genre COMO audiovisual_tvshow_title PARA VER time_instant
  | TIENES ALGUNA audiovisual_genre ASI QUE ENGANCHE COMO audiovisual_documental_title PARA VER time_instant O audiovisual_documental_title PARA VER time_instant
  | UNA COMO EL audiovisual_subgenre audiovisual_documental_title PARA VER time_instant
  | ME GUSTARIA COMO DEL PALO DE audiovisual_documental_title PARA VER time_instant
  | ME GUSTARIA COMO DEL PALO audiovisual_documental_title PARA VER time_instant
  | ME GUSTARIA DEL PALO DE audiovisual_documental_title PARA VER time_instant
  | ME GUSTARIA DEL PALO audiovisual_documental_title PARA VER time_instant
  | PON ALGO PARA VER COMO EL audiovisual_genre DE audiovisual_documental_title PARA VER time_instant
  | PON ALGO QUE PUEDA VER COMO EL audiovisual_genre DE audiovisual_documental_title PARA VER time_instant
  | UNO DE audiovisual_subgenre SIMILAR audiovisual_documental_title PARA VER time_instant TIENES
  | QUIERO VER ALGO PARECIDO A DE LO QUE VA audiovisual_documental_title PARA VER time_instant
  | QUIERO VER ALGUNA COSA PARECIDA A audiovisual_documental_title PARA VER time_instant
  | DE LA PINTA DE audiovisual_documental_title PARA VER time_instant TIENES ALGO
  | PARECIDO A audiovisual_documental_title PARA VER time_instant TIENES ALGO
  | SIMILAR A audiovisual_documental_title PARA VER time_instant TIENES ALGO
  | SIMILAR A audiovisual_documental_title PARA VER time_instant TIENES ALGUNO
  | BUSCA DEL TIPO DE audiovisual_film_title TIENES ALGO time_instant
  | BUSCAME ALGO DEL TIPO DE audiovisual_documental_title time_instant
  | BUSCA ALGO DEL TIPO DE audiovisual_documental_title time_instant
  | BUSCA DEL TIPO DE audiovisual_film_title PARA time_interval
  | BUSCAME DEL TIPO audiovisual_film_title PARA time_interval
  | BUSCA ALGO COMO audiovisual_tvshow_title PARA time_interval
  | BUSCA ALGO COMO LA audiovisual_genre audiovisual_subgenre DE audiovisual_film_title PARA time_instant
  | BUSCA ALGO audiovisual_subgenre PARECIDO A audiovisual_film_title PARA VER time_instant
  | BUSCA COMO ESTA DE audiovisual_tvseries_title PARA VER time_instant
  | time_interval DAME audiovisual_genre SIMILARES A audiovisual_tvseries_title
  | DIME ALGO PARECIDO A audiovisual_film_title PARA VER time_instant
  | DIME ALGO SIMILAR A audiovisual_tvseries_title PARA VER time_instant
  | ME HA GUSTADO audiovisual_documental_title Y ME GUSTARIA VER ALGO PARECIDO time_instant
  | ESTABA ENGANCHADO A audiovisual_tvseries_title Y time_instant QUIERO VER ALGO PARECIDO QUE TIENES
  | ESTARIA INTERESADO EN VER ALGO PARECIDO A audiovisual_film_title PARA VER time_instant
  | ME GUSTARIA ALGO QUE SE PAREZCA A audiovisual_film_title PARA VER time_instant
  | ME GUSTARIA UNA audiovisual_genre COMO audiovisual_film_title PARA time_instant
  | ME GUSTARIA VER UNA audiovisual_genre PARECIDA A audiovisual_film_title PARA time_instant
  | ME GUSTARIA VER UNA audiovisual_genre SIMILAR A audiovisual_tvseries_title PARA time_instant
  | ME GUSTA audiovisual_tvseries_title PARA time_instant DIME UNA audiovisual_genre PARECIDA
  | MAS audiovisual_genre PARECIDAS A audiovisual_film_title PARA time_interval
  | PARECIDA A audiovisual_film_title PARA time_interval
  | PON A REPRODUCIR ALGO SIMILAR A audiovisual_tvseries_title PARA time_instant
  | PON ALGO COMO audiovisual_film_title PARA time_instant
  | audiovisual_genre SIMILARES A audiovisual_film_title PARA time_instant
  | audiovisual_genre PARECIDAS A audiovisual_tvseries_title PARA time_instant
  | PON audiovisual_genre COMO audiovisual_film_title PARA time_instant
  | PON ALGO COMO audiovisual_film_title PARA time_instant
  | PON ALGO COMO audiovisual_film_title PARA time_instant PARA VER
  | PON ALGO COMO audiovisual_documental_title PARA time_instant
  | PON ALGO PARECIDO A audiovisual_film_title PARA time_instant
  | PON ALGO SEMEJANTE A audiovisual_tvseries_title PARA time_instant
  | PON ALGO SIMILAR A audiovisual_film_title PARA time_instant
  | PON audiovisual_genre COMO audiovisual_tvseries_title PARA time_instant
  | PON audiovisual_genre PARECIDAS A audiovisual_film_title PARA VER time_interval
  | PON UNA audiovisual_genre PARECIDA A audiovisual_film_title PARA VER time_interval
  | ME GUSTARIA PARECIDA DEL PALO DE audiovisual_film_title PARA VER time_interval
  | ME GUSTARIA SIMILAR DEL PALO audiovisual_film_title PARA VER time_interval
  | ME GUSTARIA COMO ESTA DE audiovisual_film_title PARA PONER time_interval
  | ME GUSTARIA SIMILAR A audiovisual_film_title PARA PONER time_interval
  | UN audiovisual_subgenre SIMILAR A audiovisual_film_title PARA PONER time_interval TIENES
  | PON ALGO PARA VER PARECIDO A LA audiovisual_genre DE audiovisual_film_title PARA PONER time_interval
  | PON ALGO QUE PUEDA VER PARECIDO A LA audiovisual_genre DE audiovisual_film_title PARA PONER time_interval
  | time_interval QUIERO VER ALGO DEL ROLLO audiovisual_tvshow_title PARA PONER time_interval
  | QUIERO VER ALGO DEL TIPO DE audiovisual_tvshow_title PARA PONER time_instant
  | QUIERO VER ALGO DEL ROLLO DE audiovisual_tvshow_title PARA PONER time_instant
  | PON ALGO QUE PUEDA VER PARECIDO A LA audiovisual_genre DE audiovisual_tvseries_title
  //------------------------------------
  | BUSCAR PARECIDO A audiovisual_tvseries_title
  | PODRIAS PONERME ALGO COMO audiovisual_tvshow_title
  | PON ALGO PARECIDO A audiovisual_film_title
  | BUSCATE ALGO COMO audiovisual_film_title
  | ME PODRIAS PONER ALGO COMO audiovisual_film_title
  | POR FAVOR PON ALGO COMO audiovisual_film_title
  | HAY ALGO COMO audiovisual_film_title
  | ME PONES ALGO COMO audiovisual_documental_title
  | DAME ALGO COMO audiovisual_film_title
  | ME APETECE VER ALGO COMO audiovisual_film_title
  | ME RENTA VER ALGO COMO NO audiovisual_film_title
  | ME RENTARIA VER ALGO COMO audiovisual_film_title
  | ME RENTA ALGO SIMILAR A audiovisual_tvshow_title
  | ME GUSTA audiovisual_film_title PON ALGO PARECIDO
  | PON ALGO QUE TENGA QUE VER CON audiovisual_tvshow_title
  | EXISTE ALGO QUE TENGA QUE VER CON audiovisual_film_title
  | ME PODRIAS PONER ALGO QUE TENGA QUE VER CON audiovisual_tvshow_title
  | PARECIDO A audiovisual_tvshow_title
  | SIMILAR A audiovisual_tvshow_title
  | BUSCATE ALGO GUAY COMO audiovisual_documental_title
  | SEMEJANTE A audiovisual_film_title
  | PON ALGO ANALOGO A audiovisual_tvseries_title
  | PON ALGO IDENTICO A audiovisual_film_title
  | ALGUNA audiovisual_genre ANALOGA A audiovisual_film_title
  | audiovisual_genre SEMEJANTE A audiovisual_film_title
  | BUSCA audiovisual_genre SEMEJANTE A audiovisual_film_title
  | TIENES MAS COMO audiovisual_film_title
  | VISUALIZAR ALGO COMO audiovisual_film_title
  | TIENES ALGO COMO audiovisual_tvseries_title
  | TIENES ALGO SEMEJANTE A audiovisual_documental_title
  | TIENES ALGO ROLLO audiovisual_documental_title
  | TIENES COSAS PARECIDAS A audiovisual_tvseries_title
  | ALGUNA COSA PARECIDA A audiovisual_film_title
  | COMO audiovisual_film_title O PARECIDO
  | PUEDE HABER ALGO COMO audiovisual_film_title
  | PUEDE QUE TENGAS ALGO COMO audiovisual_film_title
  | BUSCAME ALGO CUAL audiovisual_tvseries_title
  | QUIERO VER ALGO QUE SE ASEMEJE A audiovisual_film_title
  | QUIERO VER ALGO SIMILAR A audiovisual_tvshow_title
  | DAME UN CONTENIDO COMO audiovisual_tvshow_title
  | BUSCAME UN CONTENIDO COMO audiovisual_documental_title
  | BUSCAME ALGO COMPARABLE A audiovisual_film_title
  | PON ALGO AFIN A audiovisual_tvshow_title
  | ME PONES ALGO QUE SE APROXIME A audiovisual_film_title
  | PON ALGO PROXIMO A audiovisual_tvshow_title
  | BUSCA UN CONTENIDO AFIN A audiovisual_tvshow_title
  | EXISTE ALGO COMO audiovisual_film_title
  | audiovisual_genre COMO audiovisual_film_title
  | ME BUSCAS UN audiovisual_genre QUE SEA PARECIDO A audiovisual_tvshow_title
  | audiovisual_genre PARECIDO A audiovisual_tvshow_title
  | UN audiovisual_genre DEL ROLLO DE audiovisual_tvshow_title
  | audiovisual_genre SIMILAR A audiovisual_documental_title 
  | ALGUN audiovisual_genre PARECIDO A audiovisual_film_title 
  | ALGUN audiovisual_genre PARECIDO A audiovisual_documental_title
  | PONTE UN audiovisual_genre PARECIDO A A audiovisual_film_title
  | EXISTE ALGO PARECIDO A audiovisual_documental_title
  | PONTE UN audiovisual_genre COMO audiovisual_documental_title
  | DAME UNA audiovisual_genre COMO audiovisual_film_title 
  | BUSCAME audiovisual_genre COMO audiovisual_director
  | PESQUISA MAS audiovisual_genre SIMILARES A audiovisual_tvseries_title
  | SIMILARES A audiovisual_documental_title
  | ALGUNA audiovisual_genre DEL ESTILO DE audiovisual_tvseries_title
  | SIMILAR A audiovisual_tvseries_title
  | SIMILAR audiovisual_tvseries_title
  | UN audiovisual_genre COMO audiovisual_documental_title 
  | audiovisual_genre audiovisual_documental_title
  | audiovisual_genre IGUAL A audiovisual_documental_title
  | UN audiovisual_genre QUE SEA TAL CUAL audiovisual_film_title
  | ALGUNA IGUAL A audiovisual_tvseries_title
  | QUIERO QUE PONGAS UN audiovisual_genre SIMILAR audiovisual_documental_title
  | QUE PONGAS UN audiovisual_genre PARECIDO A audiovisual_documental_title time_instant
  | ALGO ESTILO audiovisual_documental_title
  | QUISIERA UNA audiovisual_genre COMO audiovisual_tvshow_title
  | audiovisual_genre TIPO audiovisual_documental_title
  | audiovisual_genre CON CIERTO PARECIDO A audiovisual_documental_title
  | audiovisual_genre PARA VER PARECIDAS A audiovisual_tvseries_title
  //| audiovisual_genre PARA VER QUE SEAN COMO MOTHERCHEF
  | audiovisual_genre INTERESANTES PARA VER COMO audiovisual_documental_title
  | audiovisual_genre time_interval
  | REPRODUCE ALGUN audiovisual_genre COMO audiovisual_tvshow_title
  | PONTE UN audiovisual_genre QUE SE PAREZCA MUCHO A LO audiovisual_releases
  | REPRODUCIR ALGO SIMILAR A audiovisual_tvshow_title
  | BUSQUEDA COSAS COMO audiovisual_documental_title
  | QUITA ESTO Y PON ALGO PARECIDO A audiovisual_documental_title
  | PON ALGO PARECIDO A audiovisual_tvseries_title
  | BUSCAME ALGO DECENTE COMO audiovisual_documental_title
  | audiovisual_genre COMO audiovisual_documental_title
  | TIENES ALGUNA PARECIDA A audiovisual_tvseries_title
  | TIENES ALGUN audiovisual_genre COMO audiovisual_documental_title
  | BUSCAR MUY PARECIDAS A audiovisual_tvseries_title
  | MOSTRAR MUY PARECIDAS A audiovisual_film_title
  | ALGO DEL ESTILO DE audiovisual_director
  | ALGO EN LA LINEA DE audiovisual_tvseries_title
  | audiovisual_genre CON UN TOQUE A audiovisual_tvshow_title
  | audiovisual_genre QUE SEAN IGUALES A audiovisual_tvshow_title
  | audiovisual_genre IGUALES A audiovisual_tvshow_title
  | BUSCAR MAS audiovisual_genre COMO audiovisual_documental_title
  | audiovisual_genre CON CIERTO PARECIDO A audiovisual_tvshow_title
  | BUSCAME ALGO PARECIDO A LA audiovisual_genre audiovisual_tvseries_title
  | PON COSAS QUE SEAN IGUALES audiovisual_channel
  | DESEO VER COSAS SIMILARES A audiovisual_channel
  | DESEO VER COSAS SIMILARES A LA audiovisual_genre DE audiovisual_subgenre
  | QUISIERA QUE BUSCARAS ALGO MUY PARECIDO A audiovisual_film_title
  | QUE BUSQUES ALGUN audiovisual_genre MUY PARECIDO A audiovisual_tvshow_title
  | ME HACES EL FAVOR DE BUSCAR ALGUN audiovisual_genre COMO LAS audiovisual_documental_title
  | REPRODUCIR SEMEJANTE A audiovisual_tvshow_title
  | REPRODUCIR audiovisual_genre SEMEJANTE A audiovisual_documental_title LOS OSCAR
  | PONES ALGO QUE SEA IGUAL A audiovisual_tvseries_title
  | BUSCAME MAS audiovisual_genre MUY PARECIDOS A audiovisual_documental_title
  | HAN SACADO ALGUNA audiovisual_genre NUEVA QUE SE PAREZCA A audiovisual_channel
  | HAN SACADO ALGUNA SIMILAR A LA audiovisual_genre DE audiovisual_tvseries_title
  //| OTRAS audiovisual_genre COMO YOUNGER
  | OTROS audiovisual_genre COMO audiovisual_film_title
  | OTROS audiovisual_genre QUE SEAN IGUALES A audiovisual_documental_title 
  ;
BUSCATE:'buscate';
BUSCAS:'buscas';
BUSQUEDA:'busqueda';
BUSCARAS:'buscaras';
PESQUISA:'pesquisa';
RENTA:'renta';
RENTARIA:'rentaria';
EXISTE:'existe';
GUAY:'guay';
ANALOGO:'analogo';
ANALOGA:'analoga';
IDENTICO:'identico';
IGUAL:'igual';
IGUALES:'iguales';
COMPARABLE:'comparable';
AFIN:'afin';
VISUALIZAR:'visualizar';
PUEDE:'puede';
HABER:'haber';
HAN:'han';
APROXIME:'aproxime';
CIERTO:'cierto';
INTERESANTES:'interesantes';
QUITA:'quita';
DECENTE:'decente';
MOSTRAR:'mostrar';
LINEA:'linea';
TOQUE:'toque';
SACADO:'sacado';


//
//-------- Intent --- search_sport -----------------
//
search_sport
  : BUSCA ALGUN audiovisual_sports_unit DE audiovisual_sports
  | BUSCA UN audiovisual_sports_unit DE audiovisual_sports
  | BUSCAME ALGUNA audiovisual_sports_unit DE audiovisual_sports
  | BUSCAME UNA audiovisual_sports_unit DE audiovisual_sports
  | DAME ALGUNA audiovisual_sports_unit
  | DAME EL audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team DE time_interval
  | DAME UN audiovisual_sports_unit DE audiovisual_sports QUE PUEDA VER EN MI device time_instant
  | DIME ALGUN DE audiovisual_sports QUE ECHEN time_instant
  | DIME LOS audiovisual_sports_unit DE audiovisual_sports QUE PUEDO PONER
  | DIME QUE audiovisual_sports_unit PUEDO PONER DE audiovisual_sports
  | DIME QUE audiovisual_sports_unit DE LOS audiovisual_sports_team PUEDO VER
  | DIME QUE audiovisual_sports_unit DE audiovisual_sports PUEDO VER
  | ENSEÑAME ALGUN audiovisual_sports_unit DEL audiovisual_sports_team
  | ENSEÑAME ALGUN audiovisual_sports_unit DE LOS audiovisual_sports_team
  | ME APETECE PONER UNA audiovisual_sports_unit DE audiovisual_sports
  | ME APETECE VER ALGO DE audiovisual_sports QUE TIENES
  | ME APETECE VER ALGO DE audiovisual_sports
  | ME APETECE VER UN audiovisual_sports_unit DE audiovisual_sports CUAL ME PUEDES PONER
  | ME GUSTARIA PONER ALGUN audiovisual_sports_unit DE audiovisual_sports CUAL PUEDO PONER
  | ME GUSTARIA PONER ALGUN audiovisual_sports_unit DE audiovisual_sports EN LA device
  | ME GUSTARIA VER ALGUN audiovisual_sports_unit DE audiovisual_sports ES POSIBLE
  | ME GUSTARIA VER ALGUN audiovisual_sports_unit DE audiovisual_sports CUAL PUEDO VER
  | PON ALGUNA audiovisual_sports_unit DE audiovisual_sports
  | PON ALGUN audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_team
  | PON EL audiovisual_sports_unit DEL audiovisual_sports_team
  | PON EL audiovisual_sports_unit DE LOS audiovisual_sports_team
  | QUIERO PONER LA audiovisual_sports_unit DE audiovisual_sports QUE DAN time_interval time_instant
  | QUIERO QUE PONGAS LA audiovisual_sports_unit DE audiovisual_sports
  | QUIERO SABER SI PUEDO VER audiovisual_sports_unit DEL audiovisual_sports_team
  | QUIERO VER UN audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_team
  | Y SI TE PIDO UN audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_team QUE ME PUEDES DAR
  | ME PODRIAS DECIR SI PUEDO PONER LOS audiovisual_sports_unit DE audiovisual_sports
  | ME PODRIAS DECIR SI PUEDO VER UNA audiovisual_sports_unit DE audiovisual_sports
  | ME PODRIAS PONER ALGO DE audiovisual_sports
  | ME PODRIAS PONER UNA audiovisual_sports_unit DE audiovisual_sports
  | ME PONES UN audiovisual_sports_unit DE audiovisual_sports
  | ME PUEDES PONER ALGUN audiovisual_sports_unit DE audiovisual_sports
  | ME PUEDES PONER ALGUN audiovisual_sports_unit DEL audiovisual_sports_team
  | ME PUEDES PONER EL audiovisual_sports_unit DEL audiovisual_sports_team DE time_interval
  | ME PUEDES PONER EL audiovisual_sports_unit DE LOS audiovisual_sports_team DE time_interval
  | PODRIA PONER ALGUNA audiovisual_sports_unit DE audiovisual_sports
  | PODRIA VER audiovisual_sports_unit DE audiovisual_sports EN LA device
  | PUEDO PONER ALGUN audiovisual_sports_unit DE audiovisual_sports
  | PUEDO VER ALGUNA audiovisual_sports_unit DE audiovisual_sports
  | PUEDO VER ALGUN audiovisual_sports_unit DE audiovisual_sports
  | PUEDO VER EL audiovisual_sports_unit DEL audiovisual_sports_team DE time_interval
  | QUE audiovisual_sports_unit DE audiovisual_sports PUEDO PONER
  | QUE audiovisual_sports_unit DE audiovisual_sports PUEDO VER
  | QUE audiovisual_sports_unit DE LIGA PONEN time_interval
  | QUE audiovisual_sports_unit DEL audiovisual_sports_team PUEDO VER
  | QUE audiovisual_sports_unit DEL audiovisual_sports_team ME PUEDES PONER
  | QUE audiovisual_sports_unit DE LOS audiovisual_sports_team ME PUEDES PONER
  | QUE audiovisual_sports_unit PUEDO PONER EN LA device
  | QUE audiovisual_sports_unit PUEDO VER EN MI device
  | ENSEÑAME ALGUNA audiovisual_sports_unit DE audiovisual_sports QUE ECHEN
  | PUEDO VER EL audiovisual_sports
  | PUEDO VER audiovisual_sports
  | PUEDO VER EL audiovisual_sports
  | PUEDO VER LA audiovisual_sports
  | PUEDO VER EL audiovisual_sports_unit DE audiovisual_sports time_interval
  | PUEDO VER EL audiovisual_sports_unit DE audiovisual_sports
  | time_interval PUEDO VER EL audiovisual_sports_unit DE audiovisual_sports
  | time_interval PUEDO VER EL audiovisual_sports_unit DE audiovisual_sports_season DE audiovisual_sports
  | PUEDO VER LAS audiovisual_sports_unit DE audiovisual_sports
  | PUEDO VER EL audiovisual_sports_unit DE audiovisual_sports time_interval
  | PUEDO VER EL audiovisual_sports DE time_interval
  | QUIEN JUEGA time_interval
  | QUIEN JUEGA AL audiovisual_sports time_interval
  | QUIEN JUEGA AL audiovisual_sports time_instant
  | time_instant QUIEN JUEGA AL audiovisual_sports
  | QUIEN JUEGA time_instant
  | QUIEN JUEGA time_instant
  | QUIEN JUEGA time_instant
  | time_instant QUIEN JUEGA
  | time_instant QUIEN JUEGA
  | time_instant QUIEN JUEGA
  | time_interval QUIEN JUEGA
  | time_interval QUE EQUIPOS JUEGAN
  | QUE EQUIPOS JUEGAN time_interval
  | time_interval QUE EQUIPOS JUEGAN
  | QUE audiovisual_sports_unit SE JUEGAN time_instant
  | QUE audiovisual_sports_unit SE JUEGAN DE audiovisual_sports_season time_instant
  | QUIEN JUEGA time_interval time_instant
  | time_interval QUIEN JUEGA time_instant
  | QUE audiovisual_sports_unit DEL audiovisual_sports_team JUEGAN time_interval
  | QUE audiovisual_sports_unit DEL audiovisual_sports_team SE JUEGAN time_interval
  | QUE audiovisual_sports_unit DEL audiovisual_sports_team SE JUEGAN time_interval
  | QUE audiovisual_sports_unit DEL audiovisual_sports_team JUEGAN time_interval
  | QUE audiovisual_sports_unit DEL audiovisual_sports_team JUEGAN time_interval
  | QUE audiovisual_sports_unit DE LOS audiovisual_sports_team JUEGAN time_interval
  | time_interval QUIERO VER audiovisual_sports_season
  | QUIERO VER audiovisual_sports_season DE LA audiovisual_sports_unit
  | QUIERO VER audiovisual_sports_season
  | QUIERO VER LA audiovisual_sports_unit
  | QUIERO VER LA audiovisual_sports_season DEL audiovisual_sports_season DE audiovisual_sports
  | QUIERO VER LA audiovisual_sports_season DE audiovisual_sports
  | QUIERO VER LA audiovisual_sports_season DE audiovisual_sports time_instant
  | DAME audiovisual_sports DE LA audiovisual_sports_season
  | BUSCA LAS audiovisual_sports_unit DE audiovisual_sports audiovisual_sports_season
  | BUSCA LA audiovisual_sports_season
  | BUSCAME LA audiovisual_sports_season
  | BUSCAME LA audiovisual_sports_season DE audiovisual_sports DE LA audiovisual_sports_season
  | BUSCAME LA audiovisual_sports_season DE audiovisual_sports DE LA audiovisual_sports_season
  | PON LA audiovisual_sports_season DE LA audiovisual_sports_season time_instant
  | PON LA audiovisual_sports_season
  | VER LA audiovisual_sports_season time_instant
  | PUEDO VER LA audiovisual_sports_season
  | QUIERO PONER LA audiovisual_sports_season time_interval
  | ME PUEDES PONER LA audiovisual_sports_season DE time_interval
  | QUIERO VER LA audiovisual_sports_season DE LAS audiovisual_sports
  | QUIERO VER EL audiovisual_sports
  | PON LAS audiovisual_sports
  | PON audiovisual_sports
  | PON LA audiovisual_sports_season DE audiovisual_sports_season
  | QUIERO VER EL audiovisual_sports_unit DE audiovisual_sports DE LA audiovisual_sports_season
  | QUIERO VER EL audiovisual_sports_unit DE LA audiovisual_sports_season
  | QUIERO VER LA audiovisual_sports_season
  | PON LA audiovisual_sports_season DE LA audiovisual_sports
  | PON LA audiovisual_sports_season
  | BUSCA EL audiovisual_sports_season
  | BUSCA DE audiovisual_sports EL audiovisual_sports_season
  | PON audiovisual_sports_season
  | BUSCA audiovisual_sports_unit
  | BUSCA audiovisual_sports_season
  | BUSCAME audiovisual_sports_season DE audiovisual_sports
  | PUEDO VER EL audiovisual_sports_season DE audiovisual_sports
  | PUEDO VER EL audiovisual_sports_season
  | PUEDO VER EL audiovisual_sports_unit DE LA audiovisual_sports_season
  | QUE HAY DEL audiovisual_sports_season
  | QUE audiovisual_sports_unit HAY DE audiovisual_sports
  | QUE audiovisual_sports_unit DE audiovisual_sports_season HAY DE audiovisual_sports
  | QUE audiovisual_sports_unit HAY DE audiovisual_sports_season DE audiovisual_sports
  | QUE audiovisual_sports_unit HAY DE audiovisual_sports_season
  | QUIERO VER EL audiovisual_sports_season
  | POR FAVOR EL audiovisual_sports_season
  | EL audiovisual_sports_season
  | audiovisual_sports_season
  | audiovisual_sports_season
  | audiovisual_sports_season
  | PON EL audiovisual_sports_season
  | BUSCA LA audiovisual_sports_season
  | audiovisual_sports_season
  | PON EL audiovisual_sports_season DE time_interval
  | BUSCA EL audiovisual_sports_season DE time_interval
  ;
//
//-------- Intent --- play -----------------
//
play
  : LANZAR A LA device
  | LANZA A LA device
  | LANZA ESTO A LA device
  | LANZA ESTE CONTENIDO A LA device
  | LANZA ESTO AL device
  | LANZAME ESTO A LA device
  | LANZAMELO A LA device
  | LANZALO A LA device
  | LANZALO AL device
  | LANZAR A LA device time_instant
  | LANZA time_instant A LA device
  | LANZA ESTO A LA device time_instant
  | LANZA ESTE CONTENIDO time_instant A LA device
  | LANZA ESTO AL device time_instant
  | LANZAME ESTO A LA device time_instant
  | LANZAMELO time_instant A LA device
  | LANZALO A LA device time_instant
  | LANZALO AL device time_instant
  | LANZAR ESTO A LA device
  | LANZAR audiovisual_film_title A LA device
  | LANZA audiovisual_documental_title A LA device
  | LANZA audiovisual_tvseries_title A LA device
  | LANZA audiovisual_tvseries_title AL device
  | LANZAME audiovisual_tvseries_title A LA device
  | LANZAME audiovisual_film_title A LA device
  | LANZA audiovisual_film_title A LA device
  | LANZAR audiovisual_film_title A LA device time_instant
  | LANZA audiovisual_documental_title A LA device time_instant
  | LANZA time_instant audiovisual_tvseries_title A LA device
  | LANZA audiovisual_tvseries_title time_instant AL device
  | LANZAME audiovisual_tvseries_title A LA device time_instant
  | LANZAME audiovisual_film_title time_instant A LA device
  | LANZA audiovisual_film_title time_instant A LA device
  | LANZA audiovisual_film_title AL device
  | LANZAR audiovisual_film_title A LA device
  | ME PUEDES LANZAR A LA device audiovisual_film_title
  | ME PUEDES LANZAR ESTA audiovisual_genre AL device
  | ESTA audiovisual_genre LANZALA  A LA device
  | ESTA audiovisual_genre PONLA EN LA device
  | ME PUEDES LANZAR ESTA audiovisual_genre A LA device
  | LANZAR A LA device audiovisual_sports_season
  | LANZA A LA device EL audiovisual_sports_season
  | ME PUEDES LANZAR time_instant A LA device audiovisual_film_title
  | ME PUEDES LANZAR ESTA audiovisual_genre time_instant AL device
  | ESTA audiovisual_genre LANZALA  A LA device time_instant
  | ESTA audiovisual_genre PONLA EN LA device time_instant
  | ME PUEDES LANZAR time_instant ESTA audiovisual_genre A LA device
  | LANZAR A LA device audiovisual_sports_season time_instant
  | time_instant LANZA A LA device EL audiovisual_sports_season
  | LANZA LA audiovisual_sports_season A LA device
  | LANZA EL audiovisual_sports AL device
  | LANZA EL audiovisual_sports A LA device
  | LANZAME EL audiovisual_sports A LA device
  | LANZAME EL audiovisual_sports_season A LA device
  | LANZA EL audiovisual_sports_season A LA device
  | LANZA EL audiovisual_sports_season AL device
  | LANZAR LA audiovisual_sports_season A LA device
  | LANZAME EL audiovisual_sports_season A LA device
  | LANZA LA audiovisual_sports_season A LA device
  | COMENZAR A REPRODUCIR EN LA device
  | COMIENZA A REPRODUCIR EN LA device
  | COMENZAR A REPRODUCIR EN LA device time_instant
  | time_instant COMIENZA A REPRODUCIRLO EN LA device
  | LANZA LA audiovisual_sports_season time_instant A LA device
  | LANZA time_instant EL audiovisual_sports A LA device
  | INICIAR REPRODUCCION EN LA device
  | INICIA LA REPRODUCCION EN EL device
  | EMPEZAR A REPRODUCIR EN LA device
  | EMPIEZA EN LA device LA REPRODUCCION
  | COMENZAR A REPRODUCIR audiovisual_film_title EN LA device
  | COMENZAR A REPRODUCIR audiovisual_film_title
  | INICIA LA REPRODUCCION EN EL device time_instant
  | EMPEZAR A REPRODUCIR EN LA device time_instant
  | EMPIEZA EN LA device LA REPRODUCCION time_instant
  | COMENZAR A REPRODUCIR audiovisual_film_title time_instant EN LA device
  | COMENZAR A REPRODUCIR time_instant audiovisual_film_title
  | COMENZAR A REPRODUCIR ESTA audiovisual_genre
  | COMIENZA A REPRODUCIR EN LA device LA audiovisual_genre
  | INICIAR REPRODUCCION DE audiovisual_film_title EN LA device
  | INICIA LA REPRODUCCION EN EL device DE audiovisual_tvseries_title
  | EMPEZAR A REPRODUCIR EN LA device audiovisual_tvseries_title
  | EMPEZAR A REPRODUCIR audiovisual_tvseries_title EN LA device
  | EMPIEZA EN LA device LA REPRODUCCION DE audiovisual_tvseries_title
  | COMIENZA EN LA device ESTA audiovisual_genre
  | EMPIEZA EN LA device ESTA audiovisual_genre
  | COMENZAR LA REPRODUCCION DE audiovisual_film_title EN LA device
  | COMENZAR LA REPRODUCCION EN EL device DE audiovisual_tvseries_title
  | EMPIEZA A REPRODUCIR EN LA device audiovisual_tvseries_title
  | COMIENZA A REPRODUCIR audiovisual_tvseries_title EN LA device
  | COMIENZA EN LA device LA REPRODUCCION DE audiovisual_tvseries_title
  | REPRODUCIR EN LA device
  | REPRODUCE EN LA device
  | REPRODUCE ESTO EN LA device
  | REPRODUCEME ESTO EN LA device
  | REPRODUCEME ESTO EN EL device
  | REPRODUCEMELO EN LA device
  | REPRODUCIR ESTO EN LA device
  | ME LO PUEDES REPRODUCIR EN LA device
  | ME PUEDES REPRODUCIR ESTA audiovisual_genre
  | ME PUEDES REPRODUCIR ESTA audiovisual_genre
  | REPRODUCE EN LA device time_instant
  | REPRODUCE ESTO EN LA device time_instant
  | REPRODUCEME time_instant ESTO EN LA device
  | time_instant REPRODUCEME ESTO EN EL device
  | REPRODUCEMELO time_instant EN LA device
  | REPRODUCIR EN LA device audiovisual_film_title
  | REPRODUCIR audiovisual_film_title EN LA device
  | REPRODUCE EN LA device audiovisual_film_title
  | REPRODUCE audiovisual_tvseries_title EN LA device
  | REPRODUCEME audiovisual_tvseries_title EN LA device
  | REPRODUCEME audiovisual_tvseries_title EN EL device
  | REPRODUCEME audiovisual_tvseries_title EN LA device
  | REPRODUCIR audiovisual_tvseries_title EN LA device
  | ME PUEDES REPRODUCIR EN LA device audiovisual_tvseries_title
  | ME PUEDES REPRODUCIR audiovisual_tvseries_title
  | ME PUEDES REPRODUCIR audiovisual_film_title
  | PON audiovisual_film_title EN EL device
  | PON audiovisual_film_title EN LA device
  | PON audiovisual_tvseries_title EN LA device
  | PON audiovisual_film_title EN LA device
  | PON EN LA device LA audiovisual_genre audiovisual_film_title
  | PON LA audiovisual_genre audiovisual_film_title EN LA device
  | PON POR FAVOR LA audiovisual_genre audiovisual_tvshow_title EN LA device
  | PON EN LA device audiovisual_film_title
  | ME PUEDES REPRODUCIR audiovisual_film_title time_instant
  | PON audiovisual_film_title time_instant EN EL device
  | PON audiovisual_film_title EN LA device time_instant
  | PON audiovisual_tvseries_title EN LA device
  | time_instant PON audiovisual_film_title EN LA device
  | PON EN LA device time_instant LA audiovisual_genre audiovisual_film_title
  | PON LA audiovisual_genre audiovisual_film_title time_instant EN LA device
  | PON time_instant POR FAVOR LA audiovisual_genre audiovisual_tvshow_title EN LA device
  | PON EN LA device audiovisual_film_title time_instant
  | PON audiovisual_tvseries_title EN MI device
  | PON EN MI device audiovisual_tvseries_title
  | PON audiovisual_tvseries_title EN LA device
  | PON audiovisual_film_title EN LA device
  | PON EN LA device audiovisual_film_title
  | PON LA audiovisual_sports_season A LA device
  | PON EL audiovisual_sports AL device
  | PON EL audiovisual_sports A LA device
  | PON EL audiovisual_sports A LA device
  | PON EL audiovisual_sports_season A LA device
  | PON EL audiovisual_sports_season A LA device
  | PON EL audiovisual_sports_season AL device
  | PONER LA audiovisual_sports_season A LA device
  | PONER EL audiovisual_sports_season A LA device
  | POR FAVOR PON audiovisual_tvshow_title EN LA device
  | PON audiovisual_tvseries_title EN MI device
  | QUIERO VER EN MI device LA audiovisual_subgenre audiovisual_tvseries_title
  | QUIERO VER EN MI device LA audiovisual_genre audiovisual_film_title
  | QUIERO QUE ME PONGAS LA audiovisual_subgenre audiovisual_tvseries_title EN MI device
  | QUIERO VER audiovisual_film_title EN MI device
  | QUIERO VER EN MI device audiovisual_film_title
  | POR FAVOR time_instant PON audiovisual_tvshow_title EN LA device
  | PON audiovisual_tvseries_title EN MI device time_instant
  | QUIERO VER EN MI device LA audiovisual_subgenre audiovisual_tvseries_title time_instant
  | QUIERO VER time_instant EN MI device LA audiovisual_genre audiovisual_film_title
  | QUIERO QUE ME PONGAS LA audiovisual_subgenre audiovisual_tvseries_title time_instant EN MI device
  | QUIERO VER audiovisual_film_title EN MI device time_instant
  | QUIERO VER EN MI device time_instant audiovisual_film_title
  | QUIERO VER audiovisual_tvseries_title DE audiovisual_subgenre EN MI device
  | QUIERO VER audiovisual_film_title DE audiovisual_subgenre EN MI device
  | QUIERO VER EN MI device LA audiovisual_genre audiovisual_film_title
  | QUIERO VER LA audiovisual_genre audiovisual_film_title EN LA device
  | QUIERO VER LA audiovisual_genre DE audiovisual_tvseries_title EN MI device
  | QUIERO VER audiovisual_film_title EN MI device
  | QUIERO VER EN MI device audiovisual_film_title
  | QUIERO VER audiovisual_tvseries_title EN LA device
  | VER audiovisual_film_title EN MI device
  | VER EN MI device audiovisual_film_title
  | VER audiovisual_film_title EN LA device
  | VER EN LA device audiovisual_film_title
  | ME PUEDES PONER EN LA device audiovisual_tvseries_title GRACIAS
  | ME PUEDES PONER audiovisual_tvseries_title EN LA device GRACIAS
  | QUIERO VER ESTA audiovisual_genre DE audiovisual_actor  EN LA device
  | QUIERO VER LA audiovisual_genre DE audiovisual_actor  EN LA device
  | QUIERO VER  EN LA device LA DE audiovisual_director
  | QUIERO VER EN LA device ESTA DE audiovisual_actor
  | QUIERO VER ESTA audiovisual_genre DE audiovisual_actor EN LA device
  | PLAY A LA device
  | HAZ PLAY A LA device
  | HAZ PLAY EN LA device
  | PLAY EN LA device
  | PLAY ESTO A LA device
  | PLAY ESTO AL device
  | PLAY ESTA AL device
  | HAZ PLAY DE ESTO AL device
  | PLAYEALO EN LA device
  | PLAYEALO A LA device
  | time_instant PLAY ESTO AL device
  | PLAY time_instant ESTA AL device
  | HAZ PLAY DE ESTO AL device time_instant
  | PLAYEALO EN LA device time_instant
  | PLAYEALO A LA device time_instant
  | PLAYEALO AL device
  | PLAY ESTA A LA device
  | HAZ PLAY DE ESTA A LA device
  | PLAY audiovisual_film_title A LA device
  | HAZ PLAY DE audiovisual_documental_title A LA device
  | PLAY audiovisual_tvseries_title A LA device
  | HACER PLAY DE audiovisual_tvseries_title AL device
  | PLAY audiovisual_tvseries_title A LA device
  | PLAY audiovisual_film_title A LA device
  | PLAY audiovisual_film_title A LA device
  | PLAY audiovisual_film_title AL device
  | PLAYEAR audiovisual_film_title A LA device
  | ME PUEDES HACER PLAY A LA device DE audiovisual_film_title
  | ME PUEDES PLAYEAR ESTA audiovisual_genre EN EL device
  | ME PUEDES PLAYEAR ESTA audiovisual_genre EN LA device
  | PONER EN LA device
  | PON EN LA device
  | PON ESTO EN LA device
  | PLAY time_instant audiovisual_film_title AL device
  | PLAYEAR audiovisual_film_title time_instant A LA device
  | ME PUEDES HACER PLAY time_instant A LA device DE audiovisual_film_title
  | time_instant ME PUEDES PLAYEAR ESTA audiovisual_genre EN EL device
  | ME PUEDES PLAYEAR ESTA audiovisual_genre time_instant A LA device
  | PONER EN LA device time_instant
  | time_instant PON EN LA device
  | PON ESTO EN LA device time_instant
  | PON ESTO EN LA device
  | PONMELO EN LA device
  | VER EN LA device
  | QUIERO VER EN LA device
  | VER ESTO EN LA device
  | LANZAMELO A LA device
  | ME LO PUEDES LANZAR A LA device
  | ME PUEDES LANZAR ESTA audiovisual_genre
  | PONER audiovisual_film_title EN LA device
  | PON EN LA device audiovisual_film_title
  | PON audiovisual_tvseries_title EN LA device
  | PON audiovisual_film_title EN LA device
  | PON EN LA device audiovisual_film_title
  | LANZAME audiovisual_tvshow_title A LA device
  | LANZAR audiovisual_film_title A LA device
  | ME PUEDES LANZAR audiovisual_film_title A LA device
  | ME PUEDES LANZAR audiovisual_film_title
  | ME PUEDES LANZAR audiovisual_tvseries_title A LA device
  | ME PUEDES LANZAR ESTA audiovisual_genre
  | PLAY LA audiovisual_genre
  | PLAY
  | PLAYER
  | PLAYEALA
  | PLAYEALO
  | PLAYER DE LA audiovisual_genre
  | PLAY LA audiovisual_genre time_instant
  | PLAY time_instant
  | PLAYER time_instant POR FAVOR
  | PLAYEALA time_instant
  | PLAYEALO time_instant
  | PLAYER DE LA audiovisual_genre time_instant
  | PLAYER DE LA audiovisual_genre EN LA device
  | PLAYER EN LA device DE LA audiovisual_genre
  | PLAYER A LA device DE LA audiovisual_genre
  | PLAYER A LA device DE LA audiovisual_genre
  | LANZAR LA audiovisual_genre
  | LANZA LA audiovisual_genre
  | LANZAR
  | LANZA
  | LANZAR EL PLAYER
  | LANZA EL PLAYER
  | LANZAR EL PLAY
  | time_instant LANZA LA audiovisual_genre
  | LANZAR time_instant
  | LANZA time_instant
  | LANZAR EL PLAYER time_instant
  | LANZA EL PLAYER time_instant
  | time_instant LANZAR EL PLAY
  | LANZA EL PLAY
  | LANZA ESTO
  | LANZAME ESTO
  | LANZAMELO
  | LANZALO
  | REPRODUCE ESTO
  | REPRODUCEME ESTO
  | REPRODUCEMELO
  | REPRODUCIR ESTO
  | ME LO PUEDES REPRODUCIR
  | PONER EN LA device ESTO
  | PON EN LA device ESTO
  | PON ESTO EN LA device
  | PON ESTO
  | PON EN LA device ESTO
  | COMENZAR A REPRODUCIR
  | COMIENZA A REPRODUCIR
  | INICIAR REPRODUCCION
  | INICIA LA REPRODUCCION
  | EMPEZAR A REPRODUCIR
  | EMPIEZA LA REPRODUCCION
  | PONER EL audiovisual_sports_unit EN LA device
  | PON EL audiovisual_sports_unit EN LA device
  | PONER EN LA device EL audiovisual_sports_unit
  | time_instant INICIA LA REPRODUCCION
  | EMPEZAR A REPRODUCIR time_instant
  | EMPIEZA time_instant LA REPRODUCCION
  | PONER EL audiovisual_sports_unit EN LA device time_instant
  | time_instant PON EL audiovisual_sports_unit EN LA device
  | PONER EN LA device EL audiovisual_sports_unit time_instant
  | PON EN LA device EL audiovisual_sports_unit
  | PON audiovisual_sports_unit EN LA device
  | PON EL audiovisual_sports_unit EN LA device
  | VER EL audiovisual_sports_unit EN LA device
  | QUIERO VER EL audiovisual_sports_unit EN LA device
  | VER EN LA device EL audiovisual_sports_unit
  | QUIERO VER EN LA device EL audiovisual_sports_unit
  | VER EL audiovisual_sports_unit EN MI device
  | PON EL audiovisual_sports_unit EN MI device
  | PON EL audiovisual_sports_unit A LA device
  | LANZAME EL audiovisual_sports_unit A LA device
  | LANZAR EL audiovisual_sports_unit A LA device
  | ME PUEDES LANZAR EL audiovisual_sports_unit A LA device
  | ME PUEDES LANZAR ESTE audiovisual_sports_unit A LA device
  | POR FAVOR PON audiovisual_film_title EN MI device
  | POR FAVOR PON audiovisual_film_title EN MI device
  | POR FAVOR PONMELO EN MI device
  | POR FAVOR PONLO EN MI device
  | ME PUEDES LANZAR time_instant EL audiovisual_sports_unit A LA device
  | ME PUEDES LANZAR ESTE audiovisual_sports_unit A LA device time_instant
  | POR FAVOR PON audiovisual_film_title time_instant EN MI device
  | POR FAVOR PON time_instant audiovisual_film_title EN MI device
  | time_instant POR FAVOR PONMELO EN MI device
  | POR FAVOR PONLO time_instant EN MI device
  | POR FAVOR PON EN MI device ESTA audiovisual_genre
  | POR FAVOR PON EN MI device LA audiovisual_genre
  | PON audiovisual_film_title EN MI device POR FAVOR
  | PON audiovisual_film_title EN MI device POR FAVOR
  | PONMELO EN MI device POR FAVOR
  | PONLO EN MI device POR FAVOR
  | PON EN MI device ESTA audiovisual_genre POR FAVOR
  | PON EN MI device LA audiovisual_genre POR FAVOR
  | POR FAVOR LANZA audiovisual_film_title EN MI device
  | POR FAVOR LANZAME audiovisual_film_title EN MI device
  | POR FAVOR LANZAMELO EN MI device
  | POR FAVOR LANZALO EN MI device
  | POR FAVOR LANZA EN MI device ESTA audiovisual_genre
  | POR FAVOR LANZA EN MI device LA audiovisual_genre
  | LANZA audiovisual_film_title EN MI device POR FAVOR
  | LANZAME audiovisual_film_title EN MI device POR FAVOR
  | time_instant POR FAVOR LANZAMELO EN MI device
  | POR FAVOR time_instant LANZALO EN MI device
  | POR FAVOR LANZA EN MI device ESTA audiovisual_genre time_instant
  | POR FAVOR LANZA EN MI device LA audiovisual_genre time_instant
  | time_instant LANZA audiovisual_film_title EN MI device POR FAVOR
  | time_instant LANZAME audiovisual_film_title EN MI device POR FAVOR
  | LANZAMELO EN MI device POR FAVOR
  | LANZALO EN MI device POR FAVOR
  | LANZA EN MI device ESTA audiovisual_genre POR FAVOR
  | LANZA EN MI device LA audiovisual_genre POR FAVOR
  | POR FAVOR REPRODUCE audiovisual_film_title EN MI device
  | POR FAVOR REPRODUCEME audiovisual_film_title EN MI device
  | POR FAVOR REPRODUCELO EN MI device
  | POR FAVOR REPRODUCE EN MI device
  | POR FAVOR REPRODUCE EN MI device ESTA audiovisual_genre
  | POR FAVOR REPRODUCE EN MI device LA audiovisual_genre
  | REPRODUCE audiovisual_film_title EN MI device POR FAVOR
  | REPRODUCEME audiovisual_film_title EN MI device POR FAVOR
  | REPRODUCEMELO EN MI device POR FAVOR
  | REPRODUCELO EN MI device POR FAVOR
  | time_instant POR FAVOR REPRODUCE EN MI device LA audiovisual_genre
  | REPRODUCE time_instant audiovisual_film_title EN MI device POR FAVOR
  | REPRODUCEME audiovisual_film_title EN MI device time_instant POR FAVOR 
  | REPRODUCEMELO EN MI device time_instant POR FAVOR
  | time_instant REPRODUCELO EN MI device POR FAVOR
  | REPRODUCE EN MI device ESTA audiovisual_genre POR FAVOR
  | REPRODUCE EN MI device LA audiovisual_genre POR FAVOR
  | POR FAVOR COMENZAR A REPRODUCIR EN LA device
  | POR FAVOR COMIENZA A REPRODUCIR EN LA device
  | POR FAVOR INICIAR REPRODUCCION EN LA device
  | INICIA LA REPRODUCCION EN EL device POR FAVOR
  | POR FAVOR EMPEZAR A REPRODUCIR EN LA device
  | EMPIEZA EN LA device LA REPRODUCCION POR FAVOR
  | POR FAVOR COMENZAR A REPRODUCIR audiovisual_film_title EN LA device
  | COMENZAR A REPRODUCIR audiovisual_film_title POR FAVOR
  | POR FAVOR COMENZAR A REPRODUCIR ESTA audiovisual_genre
  | COMIENZA A REPRODUCIR EN LA device LA audiovisual_genre POR FAVOR
  | POR FAVOR INICIAR REPRODUCCION DE audiovisual_film_title EN LA device
  | INICIA LA REPRODUCCION EN EL device DE audiovisual_tvseries_title POR FAVOR
  | POR FAVOR EMPEZAR A REPRODUCIR EN LA device audiovisual_tvseries_title
  | EMPEZAR A REPRODUCIR audiovisual_tvseries_title EN LA device POR FAVOR
  | PASALO A LA device
  | PASAMELO A LA device
  | PON ALGUN audiovisual_genre EN LA device
  | PASAME audiovisual_film_title A LA device
  | PASAME A LA device audiovisual_tvseries_title
  | PASA A LA device audiovisual_tvseries_title
  | PASA audiovisual_film_title A LA device
  | PON audiovisual_tvseries_title EN LA device
  | audiovisual_film_title EN LA device
  | PON audiovisual_tvseries_title EN MI device
  | PON ESTE CANAL EN LA device
  | LANZAR audiovisual_tvshow_title A LA device
  | LANZA audiovisual_documental_title A LA device
  | LANZA audiovisual_documental_title A LA device
  | LANZA audiovisual_documental_title AL device
  | LANZAME audiovisual_documental_title A LA device
  | LANZAME audiovisual_tvshow_title A LA device
  | LANZA audiovisual_tvshow_title A LA device
  | LANZA audiovisual_tvshow_title AL device
  | LANZA time_instant audiovisual_documental_title AL device
  | LANZAME audiovisual_documental_title A LA device time_instant
  | time_instant LANZAME audiovisual_tvshow_title A LA device
  | LANZA audiovisual_tvshow_title time_instant A LA device
  | LANZA audiovisual_tvshow_title AL device time_instant
  | LANZAR audiovisual_tvshow_title A LA device
  | ME PUEDES LANZAR A LA device audiovisual_tvshow_title
  | COMENZAR A REPRODUCIR audiovisual_tvshow_title EN LA device
  | COMIENZA A REPRODUCIR audiovisual_tvshow_title
  | COMENZAR A REPRODUCIR ESTE audiovisual_genre
  | COMIENZA A REPRODUCIR EN LA device EL audiovisual_genre
  | COMENZAR A REPRODUCIR audiovisual_documental_title EN LA device
  | COMIENZA A REPRODUCIR audiovisual_documental_title
  | COMENZAR A REPRODUCIR ESTE audiovisual_genre
  | COMIENZA A REPRODUCIR EN LA device EL audiovisual_genre
  | INICIAR REPRODUCCION DE audiovisual_tvshow_title EN LA device
  | INICIA LA REPRODUCCION EN EL device DE audiovisual_documental_title
  | EMPEZAR A REPRODUCIR EN LA device audiovisual_documental_title
  | EMPEZAR A REPRODUCIR audiovisual_documental_title EN LA device
  | EMPIEZA EN LA device LA REPRODUCCION DE audiovisual_documental_title
  | COMIENZA EN LA device ESTE audiovisual_genre
  | EMPIEZA EN LA device ESTE audiovisual_genre
  | COMIENZA EN LA device ESTE audiovisual_genre
  | EMPIEZA EN LA device ESTE audiovisual_genre
  | COMENZAR LA REPRODUCCION audiovisual_tvshow_title EN LA device
  | COMENZAR LA REPRODUCCION EN EL device audiovisual_documental_title
  | EMPIEZA A REPRODUCIR EN LA device audiovisual_documental_title
  | COMIENZA A REPRODUCIR audiovisual_documental_title EN LA device
  | COMIENZA EN LA device LA REPRODUCCION DE audiovisual_documental_title
  | REPRODUCIR EN LA device audiovisual_tvshow_title
  | time_instant COMIENZA EN LA device ESTE audiovisual_genre
  | EMPIEZA EN LA device ESTE audiovisual_genre time_instant
  | COMENZAR LA REPRODUCCION audiovisual_tvshow_title EN LA device time_instant
  | time_instant COMENZAR LA REPRODUCCION EN EL device audiovisual_documental_title
  | EMPIEZA A REPRODUCIR time_instant EN LA device audiovisual_documental_title
  | COMIENZA A REPRODUCIR audiovisual_documental_title EN LA device time_instant
  | COMIENZA time_instant EN LA device LA REPRODUCCION DE audiovisual_documental_title
  | REPRODUCIR EN LA device audiovisual_tvshow_title time_instant
  | REPRODUCIR audiovisual_tvshow_title EN LA device
  | REPRODUCE EN LA device audiovisual_tvshow_title
  | REPRODUCE audiovisual_documental_title EN LA device
  | REPRODUCEME audiovisual_documental_title EN LA device
  | REPRODUCEME audiovisual_documental_title EN EL device
  | REPRODUCEME audiovisual_documental_title EN LA device
  | REPRODUCIR audiovisual_documental_title EN LA device
  | ME PUEDES REPRODUCIR EN LA device audiovisual_documental_title
  | ME PUEDES REPRODUCIR audiovisual_documental_title
  | ME PUEDES REPRODUCIR audiovisual_tvshow_title
  | PON audiovisual_tvshow_title EN EL device
  | PON audiovisual_tvshow_title EN LA device
  | PON audiovisual_documental_title EN LA device
  | PON audiovisual_tvshow_title EN LA device
  | PON EN LA device EL audiovisual_genre audiovisual_tvshow_title
  | PON EL audiovisual_genre audiovisual_tvshow_title EN LA device
  | PON POR FAVOR EL audiovisual_genre audiovisual_tvshow_title EN LA device
  | PON EN LA device audiovisual_tvshow_title
  | PON audiovisual_tvshow_title EN MI device
  | PON EN MI device audiovisual_tvshow_title
  | PON audiovisual_tvshow_title EN LA device
  | PON audiovisual_tvshow_title EN LA device
  | PON EN LA device audiovisual_tvshow_title
  | PON EL audiovisual_genre audiovisual_documental_title EN LA device
  | PON POR FAVOR EL audiovisual_genre audiovisual_documental_title EN LA device
  | POR FAVOR PON audiovisual_documental_title EN LA device
  | PON audiovisual_documental_title EN MI device
  | QUIERO VER EN MI device EL audiovisual_genre audiovisual_tvshow_title
  | QUIERO VER EN MI device EL audiovisual_genre audiovisual_documental_title
  | QUIERO QUE ME PONGAS EL audiovisual_genre audiovisual_tvshow_title EN MI device
  | QUIERO VER audiovisual_tvshow_title EN MI device
  | QUIERO VER EN MI device audiovisual_tvshow_title
  | QUIERO VER audiovisual_tvshow_title DE audiovisual_subgenre EN MI device
  | QUIERO VER audiovisual_tvshow_title DE audiovisual_subgenre EN MI device
  | QUIERO VER EN MI device LOS audiovisual_genre audiovisual_tvshow_title
  | QUIERO VER LOS audiovisual_genre audiovisual_tvshow_title EN LA device
  | QUIERO VER EL audiovisual_genre DE audiovisual_documental_title EN MI device
  | QUIERO VER audiovisual_tvshow_title EN MI device
  | QUIERO VER EN MI device audiovisual_tvshow_title
  | QUIERO VER audiovisual_documental_title EN LA device
  | VER audiovisual_tvshow_title EN MI device
  | VER EN MI device audiovisual_tvshow_title
  | VER audiovisual_tvshow_title EN LA device
  | VER EN LA device audiovisual_tvshow_title
  | ME PUEDES PONER EN LA device audiovisual_documental_title GRACIAS
  | ME PUEDES PONER audiovisual_documental_title EN LA device GRACIAS
  | PLAY audiovisual_tvshow_title A LA device
  | HAZ PLAY DE audiovisual_documental_title A LA device
  | PLAY audiovisual_documental_title A LA device
  | HACER PLAY DE audiovisual_documental_title AL device
  | PLAY audiovisual_documental_title A LA device
  | PLAY audiovisual_tvshow_title A LA device
  | PLAY audiovisual_tvshow_title A LA device
  | PLAY audiovisual_tvshow_title AL device
  | PLAYEAR audiovisual_tvshow_title A LA device
  | PONER audiovisual_tvshow_title EN LA device
  | PON EN LA device audiovisual_tvshow_title
  | PON audiovisual_documental_title EN LA device
  | PON audiovisual_tvshow_title EN LA device
  | PON EN LA device audiovisual_tvshow_title
  | LANZAME audiovisual_documental_title A LA device
  | LANZAR audiovisual_tvshow_title A LA device
  | ME PUEDES LANZAR audiovisual_tvshow_title A LA device
  | ME PUEDES LANZAR audiovisual_tvshow_title
  | PON EN LA device time_instant audiovisual_tvshow_title
  | time_instant LANZAME audiovisual_documental_title A LA device
  | LANZAR audiovisual_tvshow_title A LA device time_instant
  | ME PUEDES LANZAR time_instant audiovisual_tvshow_title A LA device
  | ME PUEDES LANZAR audiovisual_tvshow_title time_instant
  | ME PUEDES LANZAR audiovisual_documental_title A LA device
  | POR FAVOR LANZA audiovisual_tvshow_title EN MI device
  | POR FAVOR LANZAME audiovisual_tvshow_title EN MI device
  | LANZA audiovisual_tvshow_title EN MI device POR FAVOR
  | LANZAME audiovisual_tvshow_title EN MI device POR FAVOR
  | REPRODUCE audiovisual_tvshow_title EN MI device POR FAVOR
  | REPRODUCEME audiovisual_tvshow_title EN MI device POR FAVOR
  ;
//
//-------- Intent --- record -----------------
//
record
  : GRABAR
  | GRABA
  | GRABAME ESTO
  | GRABAMELO
  | GRABA ESTO
  | ME LO PUEDES GRABAR
  | ME PUEDES GRABAR ESTA audiovisual_genre
  | COMENZAR GRABACION
  | COMIENZA A GRABAR
  | INICIAR GRABACION
  | INICIA LA GRABACION
  | EMPEZAR A GRABAR
  | EMPIEZA LA GRABACION
  | DEJAR GRABANDO ESTA audiovisual_genre
  | GRABAME ESTA audiovisual_genre
  | GRABAR ESTA audiovisual_genre
  | GRABAR ESTA audiovisual_genre
  | GRABAR ESTE audiovisual_genre
  | GRABAR ESTE audiovisual_genre
  | GRABAR ESTO
  | GRABAR PARA time_interval
  | GRABAR PARA OTRO MOMENTO
  | GRABALO PARA VERLO EN OTRA OCASION
  | GRABARLO PARA VERLO EN OTRO MOMENTO
  | GRABAR audiovisual_genre
  | GRABAR UN audiovisual_genre
  | QUIERO GRABARLA
  | QUIERO GRABARLO
  | GRABALA
  | GRABALO
  | GRABARLA
  | GRABARLO
  | GRABARLO EN LA MEMORIA DE LA device
  | GUARDARLA EN LA MEMORIA DEL device
  | GUARDARLO EN LA MEMORIA DEL device
  | ME GUSTARIA VER ESTA audiovisual_genre EN OTRO MOMENTO ME LA PUEDES GRABAR
  | ME LA PUEDES GRABAR ME GUSTARIA VER ESTA audiovisual_genre EN OTRO MOMENTO
  | VER time_interval GRABALO
  | GRABAR PARA VER time_interval
  | GRABARLO PARA VER time_interval
  | GRABARLA PARA VER time_interval
  | GRABARLA PARA VER DESPUES
  | LA QUIERO VER DESPUES GRABALA
  | LO QUIERO VER DESPUES GRABALA
  | PARA VER DESPUES GRABALA
  | GRABALA PARA VER DESPUES
  | CONFIGURAR LA device PARA QUE COMIENCE A GRABAR CUANDO audiovisual_film_title EMPIECE
  | CONFIGURA LA device PARA QUE GRABE audiovisual_film_title CUANDO COMIENCE
  | GRABA EL audiovisual_sports_unit DEL audiovisual_sports_team QUE LO QUIERO VER ESTA NOCHE
  | GRABA EN LA MEMORIA DE LA device LA audiovisual_genre audiovisual_tvseries_title
  | GRABA LA audiovisual_genre audiovisual_film_title EN LA device
  | GRABA LA audiovisual_genre audiovisual_film_title
  | GRABA LA audiovisual_genre audiovisual_film_title EN MI device
  | GRABA EL audiovisual_sports_unit audiovisual_sports_team EN LA device PARA time_interval
  | GRABA EL audiovisual_sports_unit DE LOS audiovisual_sports_team EN LA device PARA time_interval
  | GRABA LA audiovisual_genre DE audiovisual_tvseries_title EN LA device
  | GRABA LA audiovisual_genre audiovisual_tvseries_title EN MI device
  | GRABAME audiovisual_film_title
  | GRABAR audiovisual_film_title EN LA device
  | GRABAR audiovisual_film_title EN LA device
  | GRABAR audiovisual_film_title PARA VERLO time_interval
  | GRABAR audiovisual_sports_team EN MI device
  | GRABAR EL audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team EN MI device PARA time_interval
  | GRABAR LA audiovisual_genre audiovisual_film_title EN LA device
  | GRABAR audiovisual_genre audiovisual_film_title EN LA device
  | GRABAR audiovisual_genre audiovisual_film_title EN MI device
  | ME GUSTARIA VER EL audiovisual_sports_unit DEL audiovisual_sports_team time_interval PUEDES GRABARLO
  | PROGRAMA LA device PARA QUE GRABE audiovisual_film_title
  | QUIERO GRABAR audiovisual_film_title PARA VERLO time_interval
  | QUIERO GRABAR audiovisual_film_title
  | QUIERO GRABAR EL audiovisual_sports_unit DEL audiovisual_sports_team
  | QUIERO GRABAR EL audiovisual_sports_unit DE LOS audiovisual_sports_team
  | QUIERO GRABAR EL audiovisual_genre audiovisual_tvshow_title
  | QUIERO GRABAR LA audiovisual_genre audiovisual_film_title
  | QUIERO QUE GRABES audiovisual_tvshow_title PARA time_interval
  | QUIERO QUE GRABES EL audiovisual_sports_unit DEL audiovisual_sports_team EN LA device
  | QUIERO QUE GRABES EL audiovisual_sports_unit DE LOS audiovisual_sports_team EN LA device
  | QUIERO VER audiovisual_tvseries_title time_interval GRABALO
  | QUIERO VER audiovisual_tvseries_title LUEGO GRABALO PARA VERLO ESTA NOCHE
  | QUIERO VER audiovisual_film_title PERO AHORA NO PUEDO PUEDES GRABARLO PARA time_interval
  | time_instant PONTE A GRABAR EL CANAL audiovisual_channel
  | time_instant QUIERO QUE INICIES LA GRABACION DE audiovisual_channel
  | time_instant ME GUSTARIA QUE GRABASES audiovisual_channel
  | time_instant QUIERO QUE GRABES audiovisual_channel
  | COMIENZA A GRABAR time_instant audiovisual_channel
  | COMIENZA A GRABAR audiovisual_channel time_instant
  | COMIENZA LA GRABACION DE audiovisual_channel time_instant
  | EMPIEZA time_instant A GRABAR audiovisual_channel
  | EMPIEZA A GRABAR time_instant audiovisual_channel
  | EMPIEZA LA GRABACION DE audiovisual_channel time_instant
  | GRABA time_instant ESTO QUE ESTOY VIENDO EN audiovisual_channel
  | GRABA audiovisual_channel time_instant
  | GRABA time_instant audiovisual_channel
  | GRABA time_instant LO QUE ESTAN DANDO EN audiovisual_channel
  | GRABA ESTO QUE ESTAN DANDO time_instant EN audiovisual_channel
  | GRABA LO QUE ESTAN PONIENDO EN audiovisual_channel time_instant
  | GRABA LO QUE ESTOY VIENDO time_instant EN audiovisual_channel
  | GRABAME audiovisual_channel time_instant
  | GRABAME time_instant audiovisual_channel
  | GRABAR LO QUE ESTOY VIENDO EN audiovisual_channel time_instant
  | INICIA time_instant LA GRABACION DE audiovisual_channel
  | INICIA LA GRABACION time_instant DE LO QUE ESTOY VIENDO EN audiovisual_channel
  | INICIA LA GRABACION DE audiovisual_channel time_instant
  | ME PODRIAS GRABAR time_instant LO QUE PONGAN EN audiovisual_channel
  | ME PODRIAS GRABAR LO QUE DAN EN audiovisual_channel time_instant
  | ME PUEDES GRABAR time_instant LO QUE DAN EN audiovisual_channel
  | ME PUEDES GRABAR LO QUE PONEN EN audiovisual_channel time_instant
  | PODRIAS GRABAR time_instant LO QUE PONEN EN audiovisual_channel
  | PODRIAS GRABARME LO QUE DAN EN audiovisual_channel time_instant
  | PODRIAS INICIAR time_instant LA GRABACION DE audiovisual_channel
  | PON A GRABAR audiovisual_channel time_instant
  | PON A GRABAR time_instant audiovisual_channel
  | PONER A GRABAR time_instant audiovisual_channel
  | PONTE time_instant A GRABAR audiovisual_channel
  | PONTE A GRABAR audiovisual_channel time_instant
  | ME GUSTARIA QUE GRABASES audiovisual_channel time_instant
  | PUEDES GRABAR time_instant audiovisual_channel
  | PUEDES GRABARME LO QUE HAY EN audiovisual_channel time_instant
  | QUIERO PONER A GRABAR time_instant audiovisual_channel
  | QUIERO QUE time_instant EMPIECES A GRABAR audiovisual_channel
  | QUIERO QUE time_instant GRABES audiovisual_channel
  | QUIERO QUE time_instant EMPIECES A GRABAR audiovisual_channel
  | QUIERO QUE EMPIECES A GRABAR audiovisual_channel time_instant
  | QUIERO QUE GRABES audiovisual_channel time_instant
  | QUIERO QUE GRABES audiovisual_channel time_instant
  | QUIERO QUE GRABES time_instant LO QUE DAN EN audiovisual_channel
  | QUIERO QUE GRABES LO QUE ESTAN DANDO EN audiovisual_channel time_instant
  | QUIERO QUE INICIES time_instant LA GRABACION DE audiovisual_channel
  | QUIERO QUE INICIES LA GRABACION DE audiovisual_channel time_instant
  | QUIERO QUE ME GRABES audiovisual_channel time_instant
  | QUIERO QUE ME GRABES time_instant LO QUE ESTAN PONIENDO EN audiovisual_channel
  | QUIERO QUE PONGAS A GRABAR audiovisual_channel time_instant
  | QUIERO QUE TE PONGAS A GRABAR audiovisual_channel time_instant
  | QUIERO QUE TE PONGAS A GRABAR time_instant audiovisual_channel
  | COMO HAGO PARA GRABAR audiovisual_channel time_instant
  | COMO GRABO time_instant audiovisual_channel
  | COMO GRABO audiovisual_channel time_instant
  | COMO GRABAR time_instant LO QUE DAN EN audiovisual_channel
  | COMO GRABO LO QUE HAY EN audiovisual_channel time_instant
  | time_instant PONTE A GRABAR EL audiovisual_sports_unit DEL audiovisual_sports_team
  | PONTE A GRABAR time_instant EL audiovisual_sports_unit QUE ESTOY VIENDO
  | time_instant QUIERO QUE GRABES EL audiovisual_sports_unit DEL audiovisual_sports_team
  | time_instant ME GUSTARIA GRABAR audiovisual_sports_unit DEL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | time_instant QUIERO QUE GRABES EL audiovisual_sports_unit DEL audiovisual_sports_team Y EL audiovisual_sports_team
  | COMIENZA A GRABAR EL audiovisual_sports_unit DEL audiovisual_sports_team
  | COMIENZA A GRABAR EL audiovisual_sports_unit QUE JUEGA EL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | GRABA LA audiovisual_sports_unit DE audiovisual_sports_unit QUE ESTOY VIENDO time_instant
  | GRABAME LA audiovisual_sports_unit DE audiovisual_sports QUE EMPIEZA time_instant
  | GRABAME EL audiovisual_sports_unit DE audiovisual_sports
  | GRABA LA audiovisual_sports_unit DE audiovisual_sports DE audiovisual_channel
  | COMIENZA LA GRABACION DEL audiovisual_sports_unit audiovisual_sports_team
  | PUEDES PONER A GRABAR time_instant LA audiovisual_sports_unit DE audiovisual_sports DE audiovisual_channel
  | EMPIEZA time_instant A GRABAR LA audiovisual_sports_unit DE audiovisual_sports
  | EMPIEZA time_instant A GRABAR EL audiovisual_sports
  | EMPIEZA A GRABAR time_instant EL audiovisual_sports DE audiovisual_channel
  | EMPIEZA LA GRABACION DEL audiovisual_sports_unit DE audiovisual_sports
  | GRABA time_instant LA audiovisual_sports_unit DE audiovisual_sports_unit DE audiovisual_channel
  | EMPIEZA time_instant A GRABAR EL audiovisual_sports_unit DEL audiovisual_sports_team DE audiovisual_channel
  | EMPIEZA A GRABAR EL audiovisual_sports_unit DE audiovisual_sports
  | EMPIEZA LA GRABACION DE LA audiovisual_sports_unit QUE DAN EN audiovisual_channel
  | GRABA time_instant LA audiovisual_sports_unit QUE ESTOY VIENDO EN audiovisual_channel
  | GRABA EL audiovisual_sports_unit time_instant
  | GRABA time_instant LA audiovisual_sports_unit DE audiovisual_channel
  | GRABA time_instant LA audiovisual_sports_unit QUE ESTAN DANDO EN audiovisual_channel
  | GRABA LA audiovisual_sports_unit QUE ESTAN DANDO time_instant EN audiovisual_channel
  | GRABA EL audiovisual_sports_unit QUE ESTAN PONIENDO EN audiovisual_channel time_instant
  | GRABA EL audiovisual_sports_unit QUE ESTOY VIENDO time_instant EN audiovisual_channel
  | GRABAME EL audiovisual_sports_unit DE audiovisual_sports DE audiovisual_channel time_instant
  | GRABAME EL audiovisual_sports_unit DE audiovisual_sports DEL audiovisual_sports_team time_instant
  | GRABAR LA audiovisual_sports_unit QUE ESTOY VIENDO EN audiovisual_channel time_instant
  | INICIA time_instant LA GRABACION DE LA audiovisual_sports_unit DE LA audiovisual_sports
  | INICIA LA GRABACION time_instant DEL audiovisual_sports_unit QUE ESTOY VIENDO EN audiovisual_channel
  | INICIA LA GRABACION time_instant DEL audiovisual_sports_unit DEL audiovisual_sports_team
  | INICIA LA GRABACION DE LA audiovisual_sports_unit time_instant
  | ME PODRIAS GRABAR time_instant LA audiovisual_sports_unit DE audiovisual_sports DE audiovisual_channel
  | ME PODRIAS GRABAR LA audiovisual_sports_unit DE audiovisual_sports QUE DAN EN audiovisual_channel time_instant
  | ME PUEDES GRABAR time_instant EL audiovisual_sports_unit DE audiovisual_sports QUE DAN EN audiovisual_channel
  | ME PUEDES GRABAR EL audiovisual_sports_unit DE audiovisual_sports time_instant
  | PODRIAS GRABAR time_instant LA audiovisual_sports_unit DE audiovisual_sports QUE PONEN EN audiovisual_channel
  | PODRIAS GRABARME LA audiovisual_sports_unit QUE DAN EN audiovisual_channel time_instant
  | PODRIAS INICIAR time_instant LA GRABACION DEL audiovisual_sports_unit DE audiovisual_sports
  | PON A GRABAR time_instant LA audiovisual_sports_unit DE audiovisual_channel
  | PON A GRABAR time_instant EL audiovisual_sports
  | PONER A GRABAR time_instant LA audiovisual_sports_unit DE audiovisual_channel
  | PONTE time_instant A GRABAR audiovisual_sports_season
  | PONTE A GRABAR audiovisual_sports_season time_instant
  | GRABAME EL audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team QUE DAN EN audiovisual_channel
  | ME GUSTARIA QUE GRABASES EL audiovisual_sports_unit DE audiovisual_sports time_instant
  | ME GUSTARIA GRABAR audiovisual_sports_unit DE audiovisual_sports
  | NECESITO QUE ME GRABES EL audiovisual_sports_unit DE audiovisual_sports_season
  | PUEDES GRABAR time_instant LOS audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team
  | PUEDES GRABARME audiovisual_sports_unit DE audiovisual_sports QUE HAY EN audiovisual_channel time_instant
  | QUIERO PONER A GRABAR time_instant EL audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team
  | QUIERO QUE time_instant EMPIECES A GRABAR EL audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team
  | QUIERO QUE time_instant GRABES EL audiovisual_sports_unit DE LOS audiovisual_sports_team
  | QUIERO QUE time_instant EMPIECES A GRABAR EL audiovisual_sports_unit DE audiovisual_sports QUE DAN EN audiovisual_channel
  | QUIERO QUE EMPIECES A GRABAR EL audiovisual_sports_unit ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team DE audiovisual_channel
  | QUIERO QUE GRABES EL audiovisual_sports time_instant
  | QUIERO QUE GRABES LA audiovisual_sports_unit DE audiovisual_sports EN audiovisual_channel time_instant
  | QUIERO QUE GRABES LA audiovisual_sports_unit DE audiovisual_sports QUE DAN EN audiovisual_channel
  | QUIERO QUE GRABES EL audiovisual_sports_unit DEL audiovisual_sports_team QUE ESTAN DANDO EN audiovisual_channel time_instant
  | QUIERO QUE INICIES time_instant LA GRABACION DEL audiovisual_sports_unit DE audiovisual_sports
  | QUIERO QUE INICIES LA GRABACION DE audiovisual_sports_season time_instant
  | QUIERO QUE ME GRABES EL audiovisual_sports_unit DE audiovisual_sports time_instant
  | QUIERO QUE ME GRABES audiovisual_sports_season QUE ESTAN PONIENDO EN audiovisual_channel
  | QUIERO QUE PONGAS A GRABAR EL audiovisual_sports time_instant
  | QUIERO QUE TE PONGAS A GRABAR EL audiovisual_sports_unit DE audiovisual_channel time_instant
  | QUIERO QUE TE PONGAS A GRABAR time_instant EL audiovisual_sports_team CONTRA EL audiovisual_sports_team
  | COMO HAGO PARA GRABAR LAS audiovisual_sports_unit DE audiovisual_sports
  | COMO GRABO time_instant EL audiovisual_sports
  | COMO GRABO LOS audiovisual_sports_unit DE audiovisual_sports_season DEL audiovisual_sports_team
  | COMO GRABAR time_instant EL audiovisual_sports_unit DEL audiovisual_sports_team
  | COMO GRABO EL audiovisual_sports_unit DE audiovisual_sports_season ENTRE EL audiovisual_sports_team Y EL audiovisual_sports_team
  ;
//
//-------- Intent --- from_beginning -----------------
//
from_beginning
  : PON EL audiovisual_genre DESDE EL PRINCIPIO
  | PON LA audiovisual_genre DESDE EL PRINCIPIO
  | PON EL CONTENIDO DESDE EL PRINCIPIO
  | PONLO DESDE EL PRINCIPIO
  | PONER DESDE EL PRINCIPIO
  | PON DESDE EL PRINCIPIO ESTE audiovisual_genre
  | PON DESDE EL PRINCIPIO ESTA audiovisual_genre
  | PON DESDE EL PRINCIPIO ESTA audiovisual_genre
  | (COMIENZA | COMENZAR) DE NUEVO (ESTA | ESTE | LA)* audiovisual_genre*
  | COMIENZA DESDE CERO LA* audiovisual_genre*
  | COMENZAR LA REPRODUCCION DESDE EL MINUTO CERO
  | COMENZAR ESTA REPRODUCCION DESDE EL PRINCIPIO
  | COMENZAR DESDE EL PRINCIPIO
  | COMIENZA A REPRODUCIRLO DESDE EL PRINCIPIO
  | (EMPIEZA | COMIENZA) OTRA VEZ
  | PON DESDE EL PRINCIPIO ESTE audiovisual_genre
  | PON DESDE EL PRINCIPIO ESTA audiovisual_genre
  | PON DESDE EL PRINCIPIO ESTA audiovisual_genre
  | PON ESTO DESDE EL PRINCIPIO
  | PON ESTA audiovisual_genre DESDE EL PRINCIPIO
  | PON ESTE audiovisual_genre DESDE EL PRINCIPIO
  | PON ESTA audiovisual_genre DESDE EL PRINCIPIO
  | EMPIEZA A REPRODUCIRLO DESDE EL PRINCIPIO
  | EMPIEZA A REPRODUCIR DESDE EL PRINCIPIO
  | EMPIEZA A REPRODUCIR DESDE EL COMIENZO
  | INICIA LA REPRODUCCION DESDE EL COMIENZO
  | INICIA LA REPRODUCCION DESDE EL PRINCIPIO
  | INICIAR LA audiovisual_genre DE NUEVO
  | INICIA LA audiovisual_genre DE NUEVO
  | INICIAR audiovisual_genre DE NUEVO
  | INICIA audiovisual_genre DE NUEVO
  | INICIA DE NUEVO LA audiovisual_genre
  | INICIALO DE NUEVO
  | IR AL COMIENZO
  | IR AL COMIENZO DE LA audiovisual_genre
  | VE AL COMIENZO DE LA audiovisual_genre
  | PON LA audiovisual_genre DE NUEVO
  | PON EL audiovisual_genre DE NUEVO
  | PONER DE NUEVO
  | PONELA DE NUEVO
  | PONELO DE NUEVO
  | PONMELO DE NUEVO
  | PON DESDE EL COMIENZO DE LA audiovisual_genre
  | PON DESDE EL PRINCIPIO DEL audiovisual_genre
  | PONLO DESDE EL COMIENZO 
  | PONER DESDE EL COMIENZO
  | PONER DESDE EL COMIENZO DE LA audiovisual_genre
  | PON DESDE EL COMIENZO DE LA audiovisual_genre
  | PON DESDE EL COMIENZO DEL audiovisual_genre
  | PONER LA audiovisual_genre DESDE EL COMIENZO
  | PONER LA audiovisual_genre DESDE EL COMIENZO
  | PONER EL audiovisual_genre DESDE EL COMIENZO
  | PONER LA audiovisual_genre DESDE EL INICIO
  | PONER LA audiovisual_genre DESDE EL INICIO
  | PONER EL audiovisual_genre DESDE EL INICIO
  | PON DESDE EL COMIENZO
  | VE AL COMIENZO DEL audiovisual_genre
  | VETE AL COMIENZO DEL audiovisual_genre
  | VE AL INICIO DE LA audiovisual_genre
  | VE AL INICIO DEL audiovisual_genre
  | INICIA EL audiovisual_genre
  | INICIA LA audiovisual_genre
  | INICIAR EL audiovisual_genre
  | INICIAR LA audiovisual_genre
  | VETE AL COMIENZO DE LA audiovisual_genre
  | IR AL INICIO
  | IR AL INICIO DEL audiovisual_genre
  | IR AL COMIENZO DEL audiovisual_genre
  | IR AL INICIO DE LA audiovisual_genre
  | IR AL COMIENZO DE LA audiovisual_genre
  | PONER EN EL INICIO
  | PONER COMIENZO
  | PON EN EL COMIENZO
  | PON EL COMIENZO
  | PONLA DESDE EL PRINCIPIO
  | PONLO DE NUEVO OTRA VEZ
  | PONLO DESDE EL INICIO
  | PONTE EN EL MINUTO
  | PONLO DESDE EL PRIMER MINUTO
  | PONLO DESDE CERO
  | EMPIEZA DESDE CERO
  | PON EL audiovisual_genre DESDE EL PRINCIPIO POR FAVOR
  | PON ESTE CONTENIDO DESDE EL PRINCIPIO
  | POR FAVOR PON EL audiovisual_genre DESDE EL PRINCIPIO
  | PON ESTE audiovisual_genre DESDE EL PRINCIPIO POR FAVOR
  | POR FAVOR PON LA audiovisual_genre DESDE EL PRINCIPIO
  | PON ESTE audiovisual_genre DESDE EL PRINCIPIO
  | QUIERO QUE LO VUELVAS A PONER ENTERO
  | VUELVE A PONERLO ENTERO
  | VUELVE A PONERLA ENTERA
  | PONLO DE NUEVO ENTERO
  | PONLA DE NUEVO
  | PONLA DE NUEVO ENTERA
  | PON EL audiovisual_genre DE NUEVO ENTERO
  | PON LA audiovisual_genre DE NUEVO ENTERA
  | VUELVE A PONER EL audiovisual_genre ENTERO
  | VUELVE A PONER LA audiovisual_genre ENTERA
  | PONER DE NUEVO LA audiovisual_genre
  | PONER DE NUEVO EL audiovisual_genre
  | QUIERO VER EL CAPITULO ENTERO
  | QUIERO VER ESTO DESDE EL PRINCIPIO
  | QUIERO VER LA audiovisual_genre DESDE QUE COMIENZA
  | QUIERO VERLO DESDE EL INICIO
  | REANUDAR DESDE EL COMIENZO
  | REANUDAR LA audiovisual_genre
  | REINICIAR LA audiovisual_genre
  | REINICIAR ESTA audiovisual_genre
  | REINICIAR EL audiovisual_genre
  | REINICIAR ESTE audiovisual_genre
  | (REPRODUCELA | REPRODUCELO | REPRODUCE) 
      (ESTE | ESTA | LA | EL)* audiovisual_genre*
      ( DESDE EL INICIO
      | DESDE EL PRINCIPIO
      | DESDE CERO
      )
      (OTRA VEZ)* (CUANDO ACABE)*
  | (VOLVER | VUELVE | VUELVELO) 
      ( AL PRINCIPIO
      | A REPRODUCIR DE NUEVO
      | A EMPEZAR
      | AL COMIENZO
      | A PONER DESDE EL PRINCIPIO
      ) POR* FAVOR*
  | DAR ATRAS Y VER DESDE EL PRINCIPIO
  | ME LO PUEDES PONER DESDE EL PRINCIPIO
  // ------------------------------------------
  | VUELVE A EMPEZAR
  | EMPIEZA OTRA VEZ
  | COMIENZA OTRA VEZ
  | PONLA UNA VEZ MAS
  | COMIENZA DESDE CERO LA audiovisual_genre
  | COMIENZA DESDE CERO
  | REPRODUCE DESDE EL PRINCIPIO
  | REPRODUCE OTRA VEZ CUANDO ACABE
  | RETOMAR DESDE CERO CUANDO ACABE
  | RETOMAR CUANDO ACABE
  | VOLVER AL INICIO
  | VOLVER A INICIAR 
  | VOLVER A INICIAR AL TERMINAR
  | REANUDAR AL ACABAR
  | RECOMENZAR
  | PON EL INICIO
  | RECOMENZAR LA audiovisual_genre
  | VUELVE AL PRINCIPIO
  | VUELVE AL PRINCIPIO DE LA audiovisual_genre
  | VETE AL PRINCIPIO
  | VETE AL COMIENZO
  | PON EL COMIENZO
  | PON EL INICIO
  | RECOMIENZA LA audiovisual_genre
  | RECOMENZAR OTRA VEZ
  | COMENZAR UNA VEZ MAS
  | QUIERO QUE VUELVA A EMPEZAR LA audiovisual_genre
  | QUIERO QUE LO REINICIES
  | QUIERO QUE LO PONGAS OTRA VEZ
  | QUIERO VOLVER A EMPEZAR DESDE PRINCIPIO
  | QUIERO VOLVER A COMENZAR
  | QUIERO VOLVER A EMPEZAR LA audiovisual_genre 
  | QUIERO QUE PONGAS LA audiovisual_genre DESDE CERO
  | QUIERO QUE PONGAS LA audiovisual_genre DESDE EL PRINCIPIO
  | VOLVER A INICIAR LA audiovisual_genre 
  | PONER DE NUEVO LA audiovisual_genre
  | VOLVER AL MINUTO CERO DE LA audiovisual_genre
  | REANUDAR DE NUEVO LA audiovisual_genre
  | COMENZAR DE NUEVO LA audiovisual_genre 
  | REPRODUCIR DE NUEVO LA audiovisual_genre
  | COMIENZA DESDE CERO LA audiovisual_genre 
  | REPRODUCE EL CONTENIDO DE NUEVO
  | REPRODUCE LA audiovisual_genre DE NUEVO
  | VUELVE A REPRODUCIR LA audiovisual_genre
  | VUELVE A PONER DESDE CERO LA audiovisual_genre
  | NECESITO QUE VUELVAS AL PRINCIPIO DE LA audiovisual_genre
  | EMPEZAR DE CERO LA audiovisual_genre
  | EMPEZAR DESDE CERO LA audiovisual_genre 
  | VOLVER A PONER LA audiovisual_genre 
  | IR AL PRINCIPIO
  | IR AL COMIENZO
  | IR AL INICIO
  | PON DESDE EL PRINCIPIO ESTA audiovisual_genre
  | PON LA audiovisual_genre DESDE EL PRINCIPIO
  | VUELVE A PONER LA audiovisual_genre
  | REPRODUCE DE NUEVO LA audiovisual_genre
  | REANUDAR LA audiovisual_genre
  | REPRODUCIR DESDE EL PRINCIPIO
  | REPRODUCIR DESDE CERO
  | VOLVER A EMPEZAR LA audiovisual_genre 
  | COMIENZA DE NUEVO LA audiovisual_genre
  | REPRODUCIR DESDE EL PRINCIPIO LA audiovisual_genre 
  | VOLVER A PONER LA audiovisual_genre DESDE EL PRINCIPIO
  | EMPEZAR DE NUEVO EL audiovisual_genre
  ;
//
//-------- Intent --- common_greetings -----------------
//
common_greetings
  : AURA QUE TAL
  | AURA HOLA
  | AURA
  | HOLA AURA
  | BUEN DIA
  | BUENOS DIAS
  | BUENAS TARDES
  | BUENAS NOCHES
  | BUENAS
  | BUENAS AURA
  | EMPEZAR
  | BUEN DIA AURA
  | BUENOS DIAS AURA
  | BUENAS NOCHES AURA
  | HELLO
  | EY
  | HI
  | HOLA
  | HOLA HOLA
  | HOLA AMIGA
  | HOLA AMIGO
  | HOLA COLEGA
  | HOLA MAQUINA
  | HOLA ROBOT
  | HOLA BOT
  | HOLA PROBANDO
  | HOLA BUENAS TARDES
  | HOLA BUENAS NOCHES
  | HOLA BUENOS DIAS
  | HOLA GUAPA
  | HOLA MUY BUENOS DIAS
  | HOLA PRECIOSA
  | MUY BUENAS TARDES
  | MUY BUENAS NOCHES
  | MUY BUENOS DIAS
  | MUY BUENAS
  | SALUDOS
  | EY QUE TAL
  | EY BUENAS
  | HOLA BUENAS
  | QUE TAL TODO
  | HOLA QUE TLA
  | QUE TAL
  | HOLA AURA QUE TAL
  | COMO ESTAS
  | HOLA TIO
  | HOLA FIGURA
  | HOLA CRACK
  ;
//
//-------- Intent --- common_goodbyes -----------------
//
common_goodbyes
  : ADIOS
  | BYE
  | HASTA LUEGO
  | BYE BYE
  | CHAO CHAO
  | CHAO
  | CHAU
  | CIAO
  | CUIDATE
  | HASTA LA PROXIMA
  | HASTA LA VISTA
  | HASTA NUNCA
  | HASTA OTRA
  | HASTA PRONTO
  | UN SALUDO
  | ABUR
  | ADEU
  | ADIOS AURA
  | ADIOS HASTA LUEGO
  | BUENO ADIOS
  | CHAU AURA
  | ESO ES TODO ADIOS
  | GOOD BYE
  | HASTA LUEGO LUCAS
  | HASTA MAÑANA
  | HASTA NUNKI
  | ESTA BIEN ADIOS
  | ESTA BIEN
  | ME LAS PIRO
  | ME PIRO VAMPIRO
  | ME PIRO
  | OK ADIOS
  | SALIR
  | TA LUEGO
  | TE DEJO
  | OK HASTA LUEGO
  | VALE
  | YO ME VOY
  | ME VOY
  | ADIOS ME VOY
  | ME VOY ADIOS
  | NADA ADIOS
  | NO ADIOS
  | NADA MAS
  | GRACIAS Y ADIOS
  | ADIOS Y GRACIAS
  | HASTA PRONTO MAJA
  | DEJALO
  | ES TODO
  | ESTO ES TODO
  | ESTO ES TODO CHAO
  ;
//
//-------- Intent --- common_help -----------------
//
common_help
  : AYUDA
  | AYUDA AYUDA
  | AYUDAME AYUDAME
  | AYUDA NO ENCUENTRO NADA
  | QUE DIGO
  | QUE DIGO AYUDAME
  | AYUDAME QUE DIGO
  | QUE DIGO ME AYUDAS
  | AURA QUE DIGO
  | AURA QUE DIGO AYUDAME
  | QUE DIGO AURA
  | ME AYUDAS AURA
  | AURA ME AYUDAS
  | ME AYUDAS
  | AYUDA NO ME HAS CONTESTADO
  | AYUDAME HAS CONTESTADO OTRA COSA
  | NO ME HAS CONTESTADO AYUDA
  | NO SE COMO SEGUIR AYUDAME
  | QUE SABES HACER
  | TE HAS EQUIVOCADO AURA
  | TE HAS EQUIVOCADO
  | NO ES ASÍ
  | NO ES ASÍ AURA
  | AURA NO ES ASÍ
  | NO ENCUENTRAS NADA
  | PUES NO ENCUENTRAS NADA
  | COMO FUNCIONA ESTO
  | AURA AUXILIO
  | AUXILIO AURA
  | AUXILIO
  | AURA SOCORRO
  | SOCORRO AURA
  | AYUDAME AURA
  | AYUDAME
  | AURA AYUDAME
  | CREO QUE NECESITO AYUDA
  | CREO QUE NECESITO AYUDA AURA
  | AURA CREO QUE NECESITO AYUDA
  | CREO QUE NECESITO AYUDA CON ESTO
  | ESTO NO VA
  | AURA ESTO NO VA
  | ESTO NO VA AYUDA
  | ESTO NO VA AYUDAME
  | HELP ME
  | HELP ME AYUDAME
  | HELP
  | AURA HELP
  | HELP AURA
  | NECESITO UNA AYUDA
  | NECESITO AYUDA AURA
  | NECESITO AYUDA
  | AURA NECESITO AYUDA
  | NECESITO AYUDA POR FAVOR
  | NECESITO QUE ME AYUDEN
  | NECESITO QUE POR FAVOR ME AYUDES
  | NECESITO QUE ME AYUDES
  | UN POCO DE AYUDA
  | POR FAVOR UN POCO DE AYUDA
  | NECESITO QUE POR FAVOR ME AYUDEN
  | NECESITO TU AYUDA
  | AURA ORIENTAME
  | ORIENTAME
  | ORIENTAME AURA
  | ORIENTAME YA
  | VENGA ORIENTAME
  | ORIENTAME VENGA
  | SOCORRO
  | SOS
  | SOS AYUDA
  | AYUDA SOS
  | SOS AYUDAME
  | AYUDAME SOS
  | TE PIDO AYUDA
  | UNA AYUDITA
  ;
//
//-------- Intent --- common_thankyous -----------------
//
common_thankyous
  : BUENO GRACIAS
  | BIEN GRACIAS
  | DE ACUERDO GRACIAS
  | DESDE YA MUCHAS GRACIAS
  | GRACIAS POR SU ATENCION
  | ERES LO MAS GRACIAS
  | ERES UN PRIMOR GRACIAS
  | ESO ES TODO GRACIAS
  | FUE UN PLACER
  | GRACIAS
  | NADA GRACIAS
  | GENIAL GRACIAS
  | GRACIAS POR ATENDER MI CONSULTA
  | GRACIAS POR ATENDERME
  | GRACIAS POR TODO
  | GRACIAS POR HABLAR
  | GRACIAS AURA
  | GRACIASSSSSSSSS
  | LISTO GRACIAS
  | MUCHAS GRACIAS
  | MUCHISIMAS GRACIAS
  | MUY AGRADECIDA
  | MUY AGRADECIDO
  | MUY AMABLE POR SU PARTE
  | MUY BIEN GRACIAS
  | OK GRACIAS
  | OK MUCHAS GRACIAS
  | OK MUCHISIMAS GRACIAS
  | PERFECTO GRACIAS
  | OK SE LO AGRADEZCO
  | ERES MUY AMABLE
  | ERES UN BOT MUY AMABLE
  | ERES UN ROBOT MUY SIMPATICO
  | THANKS
  | THANK YOU
  | TE AGRADEZCO LA ATENCION
  | TE LO AGRADEZCO AURA
  | TE DOY LAS GRACIAS POR ESTAR AHÍ
  | TE LO AGRADEZCO
  | YA GRACIAS
  ;
//
//-------- Intent --- common_swearwords -----------------
//
common_swearwords
  : QUE SERVICIO MAS INUTIL
  | ERES IDIOTA O TE LO HACES
  | QUIERES UNA BUENA HOSTIA
  | TU ERES TONTO O QUE TE PASA
  | A TOMAR POR CULO
  | ABORTO DE MONO
  | COÑO
  | JODETE
  | PUTA
  | CABRONA
  | INUTIL
  | IDIOTA
  | JODIDA
  | HIJA DE PUTA
  | QUE TE JODAS
  | VETE A TOMAR POR CULO
  | TU CULO
  | A LA MIERDA
  | CACA CULO PEDO PIS
  | CACA
  | CULO
  | PEDO
  | PIS
  | LAMECULOS
  | TOCAPELOTAS
  | COJONES
  | ME TIENES HASTA LOS COJONES
  | CAPULLO
  | CAPULLA
  | GILIPOLLAS
  | CHUPAME EL CULO
  | MAMADA
  | CHUPAMELA
  | HAZME UNA MAMADA
  | ME TOCAS LOS COJONES
  | ME TOCAS LAS PELOTAS
  | ME ESTAS TOCANDO LOS COJONES
  | ME ESTAS TOCANDO LAS PELOTAS
  | MARIMACHO
  | MOJON
  | CALIENTAPOLLAS
  | CALIENTABRAGUETAS
  | POLLAS
  | POLLA
  | BASTARDO
  | BASTARDA
  | MIERDA DE MAQUINA
  | MAQUINA INFERNAL
  | MAQUINA TONTA
  | MAMON
  | MAMONA
  | PUTON
  | HIJA DE LA GRAN PUTA
  | NO TIENES NI PUTA IDEA
  | CARAPOLLA
  | CARACHAPA
  | ME VAS A COMER LA POLLA
  | CABRONAZA
  | MIRA CABRONAZO
  | MIRA CARAPENE
  | CARAPENE
  | MIRA CABRONAZA VETE A TOMAR POR CULO
  | GILIPOLLEZ
  | ERES UNA GILIPOLLEZ
  | VETE A LA MIERDA
  ;
//
//------------------WORDS------------------

ABORTO:'aborto';
ABUR:'abur';
ACABAR:'acabar';
ACABE:'acabe';
ACONSEJAME:'aconsejame';
ACONSEJAR:'aconsejar';
ACONSEJARME:'aconsejarme';
ACONSEJAS:'aconsejas';
ACONSEJES:'aconsejes';
ACTRIZ:'actriz';
ACTUE:'actue';
ACUERDO:'acuerdo';
ADEU:'adeu';
ADORO:'adoro';
AGENDA:'agenda';
AGRADECIDA:'agradecida';
AGRADECIDO:'agradecido';
AGRADEZCO:'agradezco';
AHÍ:'ahí';
ALGO:'algo';
ALGUN:'algun';
ALGUNA:'alguna';
ALGUNAS:'algunas';
ALGUNO:'alguno';
AMABLE:'amable';
AMIGA:'amiga';
AMIGO:'amigo';
ANDA:'anda';
APAREZCA:'aparezca';
APETECE:'apetece';
APRENDER:'aprender';
ASEMEJE:'asemeje';
ASI:'asi';
ASÍ:'así';
ATENCION:'atencion';
ATENDER:'atender';
ATENDERME:'atenderme';
ATRAS:'atras';
AURA:'aura';
AUXILIO:'auxilio';
AYUDAME:'ayudame';
AYUDAS:'ayudas';
AYUDEN:'ayuden';
AYUDES:'ayudes';
AYUDITA:'ayudita';
BASTARDA:'bastarda';
BASTARDO:'bastardo';
BUEN:'buen';
BUENAS:'buenas';
BUENO:'bueno';
BUENOS:'buenos';
BUSCAME:'buscame';
BUSCAR:'buscar';
BUSCARME:'buscarme';
BUSCO:'busco';
BUSQUES:'busques';
CABRONA:'cabrona';
CABRONAZA:'cabronaza';
CABRONAZO:'cabronazo';
CACA:'caca';
CADENA:'cadena';
CAE:'cae';
CAEN:'caen';
CALIENTABRAGUETAS:'calientabraguetas';
CALIENTAPOLLAS:'calientapollas';
CAMBIADO:'cambiado';
CANALES:'canales';
CAPITULO:'capitulo';
CAPULLA:'capulla';
CAPULLO:'capullo';
CARACHAPA:'carachapa';
CARAPENE:'carapene';
CARAPOLLA:'carapolla';
CASA:'casa';
CATALOGO:'catalogo';
CELEBRAR:'celebrar';
CERO:'cero';
CHAU:'chau';
CHULA:'chula';
CHULAS:'chulas';
CHUPAME:'chupame';
CHUPAMELA:'chupamela';
CIAO:'ciao';
CLASIFICACION:'clasificacion';
COJONES:'cojones';
COLEGA:'colega';
COMENZAR:'comenzar';
COMER:'comer';
COMIENCE:'comience';
COMIENZA:'comienza';
COMIENZO:'comienzo';
COMO:'como';
CON:'con';
CONFIGURA:'configura';
CONFIGURAR:'configurar';
CONOCER:'conocer';
CONOCES:'conoces';
CONSULTA:'consulta';
CONSULTAR:'consultar';
CONTENIDO:'contenido';
CONTENIDOS:'contenidos';
CONTESTADO:'contestado';
CONTRA:'contra';
COSA:'cosa';
COSAS:'cosas';
COÑO:'coño';
CRACK:'crack';
CREO:'creo';
CUAL:'cual';
CUALES:'cuales';
CUALQUIERA:'cualquiera';
CUANDO:'cuando';
CUIDATE:'cuidate';
CULO:'culo';
DAME:'dame';
DANDO:'dando';
DAR:'dar';
DARAN:'daran';
DAS:'das';
DECIR:'decir';
DECIRME:'decirme';
DEJALO:'dejalo';
DEJAR:'dejar';
DEJO:'dejo';
DEN:'den';
DESABER:'desaber';
DESAPARICIONES:'desapariciones';
DESDE:'desde';
DESEO:'deseo';
DESPUES:'despues';
DIA:'dia';
DICES:'dices';
DIGAS:'digas';
DIGO:'digo';
DIME:'dime';
DIRECTOR:'director';
DIRIGIDA:'dirigida';
DIRIJA:'dirija';
DISPONIBLE:'disponible';
DISTOPICA:'distopica';
DIVERTIDO:'divertido';
DIVIERTEN:'divierten';
DONDE:'donde';
DOY:'doy';
ECHA:'echa';
ECHAN:'echan';
ECHANDO:'echando';
ECHAR:'echar';
ECHARAN:'echaran';
ECHEN:'echen';
EMISION:'emision';
EMISORA:'emisora';
EMITE:'emite';
EMITEN:'emiten';
EMITIENDO:'emitiendo';
EMPIECE:'empiece';
EMPIECES:'empieces';
EMPIEZA:'empieza';
ENCANTAN:'encantan';
ENCANTARIA:'encantaria';
ENCONTRAR:'encontrar';
ENCUENTRAS:'encuentras';
ENCUENTRO:'encuentro';
ENGANCHADO:'enganchado';
ENGANCHE:'enganche';
ENSEÑAME:'enseñame';
ENSEÑARME:'enseñarme';
ENSÉÑAME:'enséñame';
ENTERA:'entera';
ENTERO:'entero';
ENTRE:'entre';
EQUIPOS:'equipos';
EQUIVOCADO:'equivocado';
ERES:'eres';
ESO:'eso';
ESTABA:'estaba';
ESTAN:'estan';
ESTAR:'estar';
ESTARIA:'estaria';
ESTAS:'estas';
ESTEN:'esten';
ESTILO:'estilo';
ESTRENO:'estreno';
EY:'ey';
FAMILIA:'familia';
FAN:'fan';
FECHA:'fecha';
FECHAS:'fechas';
FICHA:'ficha';
FIGURA:'figura';
FRIKI:'friki';
FUE:'fue';
FUNCIONA:'funciona';
GANADO:'ganado';
GENERO:'genero';
GILIPOLLAS:'gilipollas';
GILIPOLLEZ:'gilipollez';
GOOD:'good';
GRABA:'graba';
GRABACION:'grabacion';
GRABALA:'grabala';
GRABALO:'grabalo';
GRABAME:'grabame';
GRABAMELO:'grabamelo';
GRABANDO:'grabando';
GRABAR:'grabar';
GRABARLA:'grabarla';
GRABARLO:'grabarlo';
GRABARME:'grabarme';
GRABASES:'grabases';
GRABE:'grabe';
GRABES:'grabes';
GRABO:'grabo';
GRACIASSSSSSSSS:'graciasssssssss';
GRAN:'gran';
GUAPA:'guapa';
GUARDARLA:'guardarla';
GUARDARLO:'guardarlo';
GUIA:'guia';
GUSTADO:'gustado';
GUSTAN:'gustan';
GUSTAR:'gustar';
GUSTE:'guste';
GUSTEN:'gusten';
GUÍA:'guía';
HA:'ha';
HABLAR:'hablar';
HACER:'hacer';
HACES:'haces';
HAGO:'hago';
HAY:'hay';
HAYA:'haya';
HAYAN:'hayan';
HAZ:'haz';
HAZME:'hazme';
HE:'he';
HELLO:'hello';
HELP:'help';
HI:'hi';
HIJA:'hija';
HORA:'hora';
HORARIO:'horario';
HORARIOS:'horarios';
HORAS:'horas';
HOSTIA:'hostia';
IDEA:'idea';
IDIOTA:'idiota';
INCLUIDA:'incluida';
INDICAME:'indicame';
INDICAR:'indicar';
INFERNAL:'infernal';
INGLES:'ingles';
INICIA:'inicia';
INICIALO:'inicialo';
INICIAR:'iniciar';
INICIES:'inicies';
INICIO:'inicio';
INTERESA:'interesa';
INTERESADA:'interesada';
INTERESADO:'interesado';
INUTIL:'inutil';
IR:'ir';
JODAS:'jodas';
JODETE:'jodete';
JODIDA:'jodida';
JUEGA:'juega';
JUEGAN:'juegan';
JUGAR:'jugar';
JUGARA:'jugara';
LAMECULOS:'lameculos';
LANZALA:'lanzala';
LANZALO:'lanzalo';
LANZAME:'lanzame';
LANZAMELO:'lanzamelo';
LANZAR:'lanzar';
LARGA:'larga';
LAS:'las';
LIBRE:'libre';
LIGA:'liga';
LISTO:'listo';
LO:'lo';
LUCAS:'lucas';
MAJA:'maja';
MAMADA:'mamada';
MAMON:'mamon';
MAMONA:'mamona';
MAQUINA:'maquina';
MARIMACHO:'marimacho';
MAÑANA:'mañana';
MEJOR:'mejor';
MEJORES:'mejores';
MEMORIA:'memoria';
MENTE:'mente';
MIERDA:'mierda';
MINUTO:'minuto';
MIRA:'mira';
MIRAR:'mirar';
MOJON:'mojon';
MOLARIA:'molaria';
MOMENTO:'momento';
MONO:'mono';
MOSTRARME:'mostrarme';
MOVISTAR:'movistar';
MUCHAS:'muchas';
MUCHISIMAS:'muchisimas';
MUCHO:'mucho';
MUESTRAME:'muestrame';
MUÉSTRAME:'muéstrame';
NAVIDAD:'navidad';
NECESITO:'necesito';
NI:'ni';
NIÑOS:'niños';
NOS:'nos';
NOCHE:'noche';
NUEVA:'nueva';
NUNCA:'nunca';
NUNKI:'nunki';
O:'o';
OCASION:'ocasion';
OFRECES:'ofreces';
OK:'ok';
ORIENTAME:'orientame';
OSCAR:'oscar';
OTRAS:'otras';
OTROS:'otros';
PALO:'palo';
PAQUETE:'paquete';
PARECIDA:'parecida';
PARECIDAS:'parecidas';
PARECIDO:'parecido';
PARECIDOS:'parecidos';
PAREZCA:'parezca';
PARRILLA:'parrilla';
PARTE:'parte';
PASALO:'pasalo';
PASAME:'pasame';
PASAMELO:'pasamelo';
PEDO:'pedo';
PELOTAS:'pelotas';
PENSANDO:'pensando';
PIDO:'pido';
PINTA:'pinta';
PIRO:'piro';
PIS:'pis';
PLACER:'placer';
PLAY:'play';
PLAYEALA:'playeala';
PLAYEALO:'playealo';
PLAYEAR:'playear';
PLAYER:'player';
PLEASE:'please';
PLUS:'plus';
POCO:'poco';
PODEMOS:'podemos';
PODER:'poder';
PODRIA:'podria';
PODRIAS:'podrias';
POLLA:'polla';
POLLAS:'pollas';
PONELA:'ponela';
PONELO:'ponelo';
PONEN:'ponen';
PONER:'poner';
PONERLA:'ponerla';
PONERLO:'ponerlo';
PONERME:'ponerme';
PONES:'pones';
PONGAN:'pongan';
PONGAS:'pongas';
PONGO:'pongo';
PONIENDO:'poniendo';
PONLA:'ponla';
PONLO:'ponlo';
PONMELO:'ponmelo';
PONTE:'ponte';
POSIBLE:'posible';
PRECIOSA:'preciosa';
PREFIERO:'prefiero';
PRETEMPORADA:'pretemporada';
PRIMER:'primer';
PRIMOR:'primor';
PRINCIPAL:'principal';
PRINCIPIO:'principio';
PROBANDO:'probando';
PROGRAMA:'programa';
PROGRAMACION:'programacion';
PROGRAMACIÓN:'programación';
PROGRAMADA:'programada';
PROGRAMADAS:'programadas';
PROGRAMADO:'programado';
PROGRAMADOS:'programados';
PROPONER:'proponer';
PROPONME:'proponme';
PROTAGINIZADAS:'protaginizadas';
PROTAGONICE:'protagonice';
PROTAGONIZADA:'protagonizada';
PROXIMA:'proxima';
PROXIMO:'proximo';
PUEDA:'pueda';
PUEDO:'puedo';
PUES:'pues';
PUTA:'puta';
PUTON:'puton';
QUERRIA:'querria';
QUIEN:'quien';
QUIERA:'quiera';
QUIERES:'quieres';
QUINTO:'quinto';
QUISIERA:'quisiera';
REANUDAR:'reanudar';
RECOMENDACIONES:'recomendaciones';
RECOMENDAR:'recomendar';
RECOMENDARAS:'recomendaras';
RECOMENDARME:'recomendarme';
RECOMENDASES:'recomendases';
RECOMENECHAR:'recomenechar';
RECOMIENDAME:'recomiendame';
RECOMIENDAS:'recomiendas';
RECOMIENDES:'recomiendes';
RECOMENZAR: 'recomenzar';
RECOMIENZA: 'recomienza';
REFIERO:'refiero';
REINICIAR:'reiniciar';
REINICIES:'reinicies';
REPRODUCCION:'reproduccion';
REPRODUCE:'reproduce';
REPRODUCELA:'reproducela';
REPRODUCELO:'reproducelo';
REPRODUCEME:'reproduceme';
REPRODUCEMELO:'reproducemelo';
REPRODUCIR:'reproducir';
REPRODUCIRLO:'reproducirlo';
REPRODUZCAS:'reproduzcas';
RETOMAR:'retomar';
RETRAMISTEN:'retramisten';
RETRANSMITE:'retransmite';
RETRANSMITEN:'retransmiten';
RETRANSMITIENDO:'retransmitiendo';
RISA:'risa';
ROBOT:'robot';
ROLLO:'rollo';
SABER:'saber';
SABES:'sabes';
SALGA:'salga';
SALIR:'salir';
SALUDO:'saludo';
SEA:'sea';
SEAN:'sean';
SEGUIR:'seguir';
SEMEJANTE:'semejante';
SEMEJANTES:'semejantes';
SER:'ser';
SERIA:'seria';
SERVICIO:'servicio';
SIMILAR:'similar';
SIMILARES:'similares';
SIMPATICO:'simpatico';
SOCORRO:'socorro';
SOLA:'sola';
SOLO:'solo';
SON:'son';
SOS:'sos';
SOY:'soy';
SU:'su';
SUGERIR:'sugerir';
SUGERIRME:'sugerirme';
SUGIERAS:'sugieras';
SUGIEREME:'sugiereme';
SUGIERES:'sugieres';
SUYA:'suya';
TA:'ta';
TE:'te';
TELEVISA:'televisa';
TELEVISAN:'televisan';
TELEVISANDO:'televisando';
TEMA:'tema';
TEMATICA:'tematica';
TENEIS:'teneis';
TENGA:'tenga';
TENGAS:'tengas';
TENGO:'tengo';
TERMINAR:'terminar';
THANK:'thank';
THANKS:'thanks';
TIENE:'tiene';
TIENEN:'tienen';
TIENES:'tienes';
TIO:'tio';
TIPO:'tipo';
TLA:'tla';
TOCANDO:'tocando';
TOCAPELOTAS:'tocapelotas';
TOCAS:'tocas';
TOMAR:'tomar';
TONTA:'tonta';
TONTO:'tonto';
TRANSMITEN:'transmiten';
TRASNMITE:'trasnmite';
TU:'tu';
UNAS:'unas';
UNOS:'unos';
VA:'va';
VALE:'vale';
VAMPIRO:'vampiro';
VAN:'van';
VAS:'vas';
VENGA:'venga';
VEO:'veo';
VERLO:'verlo';
VETE:'vete';
VIENDO:'viendo';
VIENE:'viene';
VISTA:'vista';
VISTAS:'vistas';
VISTO:'visto';
VOLVER:'volver';
VUELVAS:'vuelvas';
VUELVE:'vuelve';
VUELVA:'vuelva';
VUELVELO:'vuelvelo';
VUELVEN:'vuelven';
YO:'yo';
YOU:'you';


//
//-------- Entities Grammar Rules ----------------
//

audiovisual_channel           : AUDIOVISUAL_CHANNEL;
audiovisual_genre             : AUDIOVISUAL_GENRE;
audiovisual_subgenre          : AUDIOVISUAL_SUBGENRE;
audiovisual_releases          : AUDIOVISUAL_RELEASES;
audiovisual_most_watched      : AUDIOVISUAL_MOST_WATCHED;
audiovisual_best              : AUDIOVISUAL_BEST;
audiovisual_actor             : AUDIOVISUAL_ACTOR;
audiovisual_director          : AUDIOVISUAL_DIRECTOR;
audiovisual_tvseries_title    : AUDIOVISUAL_TVSERIES_TITLE;
audiovisual_film_title        : AUDIOVISUAL_FILM_TITLE;
audiovisual_tvshow_title      : AUDIOVISUAL_TVSHOW_TITLE;
audiovisual_documental_title  : AUDIOVISUAL_DOCUMENTAL_TITLE;
audiovisual_sports            : AUDIOVISUAL_SPORTS;
audiovisual_sports_season     : AUDIOVISUAL_SPORTS_SEASON;
audiovisual_sports_unit       : AUDIOVISUAL_SPORTS_UNIT;
audiovisual_sports_team       : AUDIOVISUAL_SPORTS_TEAM;
time_instant                  : TIME_INSTANT;
time_interval                 : TIME_INTERVAL;
device                        : DEVICE;
compo_device                  : (EN | A | SOBRE)* (MI | LA | EL | NUESTRA)* device;


//
//-------- Entities Lexer Rules ------------------
//

AUDIOVISUAL_CHANNEL           : 'tefaudiovisualchannel';
AUDIOVISUAL_GENRE             : 'tefaudiovisualgenre';
AUDIOVISUAL_SUBGENRE          : 'tefaudiovisualsubgenre';

AUDIOVISUAL_RELEASES          : 'tefaudiovisualreleases';
AUDIOVISUAL_MOST_WATCHED      : 'tefaudiovisualmostwatched';
AUDIOVISUAL_BEST              : 'tefaudiovisualbest';
AUDIOVISUAL_ACTOR             : 'tefaudiovisualactor';
AUDIOVISUAL_DIRECTOR          : 'tefaudiovisualdirector';

AUDIOVISUAL_TVSERIES_TITLE    : 'tefaudiovisualtvseriestitle';
AUDIOVISUAL_FILM_TITLE        : 'tefaudiovisualfilmtitle';
AUDIOVISUAL_TVSHOW_TITLE      : 'tefaudiovisualtvshowtitle';
AUDIOVISUAL_DOCUMENTAL_TITLE  : 'tefaudiovisualdocumentaltitle';

AUDIOVISUAL_SPORTS            : 'tefaudiovisualsports';
AUDIOVISUAL_SPORTS_SEASON     : 'tefaudiovisualsportsseason';
AUDIOVISUAL_SPORTS_UNIT       : 'tefaudiovisualsportsunit';
AUDIOVISUAL_SPORTS_TEAM       : 'tefaudiovisualsportsteam';

TIME_INSTANT                  : 'teftimeinstant';
TIME_INTERVAL                 : 'teftimeinterval';
DEVICE                        : 'tefdevice';

//
//-------- Intents Lexer Rules -------------------
//

ABANDONA
  : 'abandona' | 'abandonar' | 'abandoname'
  ;
SAL
  : 'sal'
  ;
CANAL
  : 'canal' | 'emisora' | 'dial' | 'cadena' | 'canales' | 'emisoras' | 'cadenas' | 'diales'
  ;
CAMBIA
  : 'cambia' | 'cambiar' | 'cambiame' | 'cambio' | 'cambias' | 'cambies'
  ;
PON
  : 'pon' | 'ponme' | 'ponte' | 'poner' | 'ponerme' | 'ponerte' | 'pongas'
  ;
Y
  : 'y'
  ;
EL
  : 'el'
  ;
LOS
  : 'los'
  ;
MI
  : 'mi'
  ;
NUESTRA
  : 'nuestra' | 'nuestro'
  ;
EN
  : 'en'
  ;
SOBRE
  : 'sobre'
  ;
AL
  : 'al'
  ;
VER
  : 'ver'
  ;
DAN
  : 'dan'
  ;
ESTO
  : 'esto'
  ;
DEL
  : 'del'
  ;
ACTUAL
  : 'actual'
  ;
ESTE
  : 'este'
  ;
VE
  : 've' | 'ves' | 'vete'
  ;
EJEMPLO
  : 'ejemplo'
  ;
UNO
  : 'uno'
  ;
DEJAME
  : 'dejame'
  ;
MUEVETE
  : 'muevete'
  ;
PASA
  : 'pasa' | 'pasame' | 'pasar' | 'pasate' | 'pases'
  ;
OTRO
  : 'otro'
  ;
BUSCA
  : 'busca' | 'buscame' | 'buscate' | 'buscar'
  ;
LANZA
  : 'lanza' | 'lanzame' | 'lanzate' | 'lanzar'
  ;


//
//-------- SKIP ---------------
//

WS
    : [ \t\r\n] -> skip
    ;

PUNT
    : [!¿?.,;:_+*"'=)(&%$/\-] -> skip
    ;
