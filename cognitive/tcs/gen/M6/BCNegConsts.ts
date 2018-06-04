export var I = {
  negacion: 'tef.intent.dm.negacion',
  //
  dm: 'tef.intent.dm'
};

export var E = {
  no: 'tef.entity.no',
  tipoNeg: 'tef.entity.tipoNeg',
  tipoElem: 'tef.entity.tipoElem',
  term: 'tef.entity.term',
  tipoContenido: 'tef.entity.tipoContenido',
  //
  meGusta: 'tef.entity.meGusta',
  //
  tipoGenero: 'tef.entity.tipoGenero',
  tipoEmocion: 'tef.entity.tipoEmocion',
  tipoDatos: 'tef.entity.tipoDatos',
  tipoEstado: 'tef.entity.tipoEstado',
  tipoTiempo: 'tef.entity.tipoTiempo',
  //
  INTENT_INFO: 'tef.entity.INTENT_INFO'
};


export enum TipoGeneroTOK {
  COMEDIA,
  MIEDO,
  AVENTURA,
  DRAMA,
  ACCION,
  ROMANTICA,
  DEPORTES,
  DOCUMENTAL,
  ENTRETENIMIENTO,
  PENSAR,
  CLASICA,
  SUSPENSE,
  MONSTRUO,
  INTRIGA,
  THRILLER,
  WESTER,
  SITCOM,
  CRIMEN,
  POLICIACO,
  FANTASTICO,
  POLITICA,
  COMIC,
  DISTOPIA,
  ESPIAS,
  PARODIA,
  ANIMACION,
  TELENOVELA,
  FANTASMAS,
  CORTOMETRAJE,
  INFANTIL,
  PIXAR,
  MELODRAMA,
  MARVEL,
  DC
};

export var TipoGeneroRUL = {
  serieTV: 'SERIE_TV',
  comediaNegra: 'COMEDIA_NEGRA',
  miniserieDeTV: 'MINISERIE_DE_TV',
  cienciaFiccion: 'CIENCIA_FICCION',
  marvelComics: 'MARVEL_COMICS',
  dcComics: 'DC_COMICS',
  guerraFria: 'GUERRA_FRIA',
  segundaGuerraMundial: 'SEGUNDA_GUERRA_MUNDIAL',
  thrillerPsicologico: 'THRILLER_PSICOLOGICO',
  dramaRomantico: 'DRAMA_ROMANTICO',
  comediaDramatica: 'COMEDIA_DRAMATICA',
  superHeroes: 'SUPER_HEROES',
  basadoHechosReales: 'BASADO_EN_HECHOS_REALES',
  tipoTiempo: {type: 'visit', item: 'visitTipoTiempo'}
};

export enum TipoEmocionTOK {
  ALEGRIA,
  TRISTEZA,
  ODIO,
  IRA,
  ENVIDIA,
  ENFADADO,
  ENTUSIASMO,
  FUERTE,
  NEUTRO,
  PELIGROSO,
  SENSIBLE,
  EGOISTA,
  VENGANZA,
  BIEN,
  MAL,
  IRRITABLE,
  VIOLENCIA,
  DEPRESION,
  CULPA,
  AVARICIA
};

export enum TipoContenidoTOK {
  PELICULA,
  SERIE
};

export enum TipoDatosTOK {
  GENERO,
  TITULO,
  ACTOR,
  DIRECTOR,
  FICHA
};

export enum TipoTiempoTOK {
  ESTRENO,
  ACTUAL
};

export enum TipoDecadasTOK {
  CINCUENTA,
  SESENTA,
  SETENTA,
  OCHENTA,
  NOVENTA
};

// posibles valores de los elementos  
// string: 'ULTIMO_ESTRENO'
// obj:    {type: 'tok',   item: TipoDecadasTOK}
// obj:    {type: 'rul',   item: TipoTiempoRUL}
// obj:    {type: 'visit', item: 'visitTipoTiempo'}
export var TipoTiempoRUL = {
  ultimoLanzamiento: 'ULTIMO_LANZAMIENTO',
  ultimoEstreno: 'ULTIMO_ESTRENO',
  deLasDecadas: {type: 'tok', item: TipoDecadasTOK},
  esteAnno: 'CIENCIA_FICCION'
};

export enum V {
  // auxiliares
  ME_GUSTA
};
