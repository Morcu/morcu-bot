# Reconocedor basado en gramáticas

npm install
npm run build

npm run start

npm run testRecognizer

# Instalar antlr

http://www.antlr.org/
https://github.com/antlr/antlr4/blob/master/doc/index.md
https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md

#generar gramáticas antlr

Instalar la extensión para vscode
ANTLR4 grammar syntax support


##configurar extensión gramáticas antlr
En la configuracion de usuario del vscode añadir lo siguiente
```
{
    // ...

    "antlr4.atn.saveDir": ".",
    "antlr4.rrd.saveDir": ".",
    "antlr4.generation": {
        "mode": "external",
        "language": "JavaScript",
        "listeners": false,
        "visitors": true
    }

    //...
}
```

Al editar los ficheros Gram.g4 que contienen la descripción de la gramática,
se generan automáticamente los ficheros javascript adecuados:

Por ejemplo, a partir de 
    Gram.g4             (definimos la gramática que queremos)
se generan:
    Gram.interp
    Gram.tokens
    GramLexer.interp
    GramLexer.js
    GramLexer.tokens
    GramParser.js
    Gramvisitor.js

Y para completar el modelo de gramática, tenemos que implementar:
    GramConsts.ts           (definimos las constantes a emplear en la app)
    GramVisitorApp.ts       (definimos la visita al arbol parseado y establecemos la interpretación)

## visualización gráfica
La extensión ANTLR4 grammar syntax support tiene unos comandos que aprecen en el menú
al pulsar el botón derecho del ratón dentro de un fichero .g4 

... explorense ...

Se pueden obtener bonitos svg de la estructura de las reglas de la gramática.

#comprobar gramáticas

ejecutar
    node ./lib/testRecognizer.js
o ejecutar
    npm run testgram 
