# DirectLineBotAndroid's README

# Módulos
Se está construyendo el emulador de movistar+ como una apliación en base 
a módulos con funcionalidad tan aislada como sea posible. 
La idea es que cada módulo se apoye en la funcionalidad de uno 
o varios módulos para ofrecer sus servicios a los demás. 
La comunicación entre los módulos se establece intercambiando 
eventos con eventbus. 
 

Una breve relación entre los módulos del sistema
```
app
 |
 |__emulator      (lanza  MessageToBotEvent, MessageAnalizedFromBotEvent)
 |   |            (espera MessageFromBotEvent, MessageWithStatusToBotEvent)
 |   |__eventbus
 |   |__model
 |
 |__chat          (lanza  ToggleASREvent y MessageWithStatusToBotEvent)
 |   |            (espera MessageAnalizedFromBotEvent, ASREvent y PartialASREvent)
 |   |__eventbus
 |   |__model
 |
 |__dl            (lanza  MessageFromBotEvent)
 |   |            (espera MessageToBotEvent)
 |   |__eventbus
 |   |__model
 |
 |__speech        (lanza  ASREvent y PartialASREvent)
 |   |            (espera ToggleASREvent)
 |   |__eventbus
 |
 |__eventbus
 |   |__model
 |
 |__model
```

## Módulo app
Aplicación, de momento muestra un chat con aura.
 
Usa el módulo **chat** e inicializa unos singletons de los módulos **dl**, **speech**


## Módulo emulator
Emulador del funcionamiento real de la aplicación.

Está suscrito a los eventos de eventbus MessageFromBotEvent procedente del módulo **dl** para 
mostrar resultado en el módulo **chat**
y MessageWithStatusToBotEvent procedente del módulo **chat** para enviar mensajes 
al bot a través del modulo **dl**.

Usa el despachador de BotMessageDispatcher para generar eventos cuando recibimos 
mensajes del chat. 
```
BotMessageDispatcher(MessageToBotEvent y MessageAnalizedFromBotEvent)
```

Usa los módulos **eventbus**, **model**


## Módulo chat
Encargado de manejar el view del chat.

Está suscrito a los eventos de eventbus MessageAnalizedFromBotEvent, ASREvent, PartialASREvent
mostrando adecuadamente los mensajes procedentes del bot en la vista del chat 
y los textos generados por el reconocimineto de voz.

Usa los despachadores de SpeechDispatcher y el BotMessageDispatcher para generar 
eventos tanto para disparar el reconocimiento, como para enviar mensajes al bot.
```
SpeechDispatcher(ToggleASREvent)
BotMessageDispatcher(MessageWithStatusToBotEvent)
```

Maneja una librería para mostrar los tres puntos animados.
```
DotsTextView (com.github.tajchert:WaitingDots:0.4.0)
```
Maneja otra librería para mostrar el carrusel.
```
CarouselLayoutManager (com.azoft.carousellayoutmanager:carousel:1.1.5)
```
Maneja otra librería para cargar las imagenes en los ImageViews.
```
Picasso (com.squareup.picasso:picasso:2.5.2)
```

Usa los módulos **eventbus**, **model**


## Módulo dl
Conexión por directline con un bot del MS Bot Framework empleando websockets.

Está suscrito a los eventos de eventbus MessageToBotEvent para enviar mensajes 
al bot.

Usa el despachador de BotMessageDispatcher para generar eventos cuando recibimos 
mensajes del bot a través de websockts. 
```
BotMessageDispatcher(MessageFromBotEvent)
```

Maneja una librería para gestionar conexiones.
```
okhttp3 (com.squareup.okhttp3:okhttp:3.10.0)
```
 

Usa los módulos **eventbus**, **model**

## Módulo speech
Para manejar el reconocimiento de voz de Google.

Está suscrito a los eventos de eventbus ToggleASREvent para arrancar el reconocimiento.

Cuando tenemos resultados de reconocimiento los entrega a la aplicación 
a través de eventbus con el despachador
```
SpeechDispatcher(ASREvent y PartialASREvent)
```

Usa los recursos nativos de speech de android 
```
android.speech.RecognizerIntent
android.speech.SpeechRecognizer
```

Nota: en esta versión hay un postprocesado especial de los resultados del reconocedor
con el ánimo de conseguir un mejor reconocimiento de la palabra "Aura".
La intención es que este procesado sea el germen de un mecanismo más 
general de postprocesado de las frases reconocidas. 

Usa el módulo **eventbus**


## Módulo eventbus
Facilitadores para usar eventbus.

Maneja una librería para gestionar la dinámica del bus de eventos.
```
eventbus (org.greenrobot:eventbus:3.1.1)
```
Esta librería también es usada por los demás módulos que usen eventbus.


Se le han incluido un conjunto de eventos y unos despachadores de conveniencia 
* **BotMessageDispatcher** (para eventos de los mensajes DirectLine hacia/desde el bot)
    - **MessageToBotEvent**: (emulator) marca el envío de un mendaje al bot
    - **MessageFromBotEvent**: (dl) marca la llegada de un mensaje procedente del bot
    - **MessageAnalizedFromBotEvent**: (emulator) marca el análisis de un mensaje procedente del
     bot
    - **MessageWithStatusToBotEvent**: (chat) marca la intención de enviar un mensaje y el estado
     simulado al bot
* **SpeechDispatcher** (para eventos del arranque del reconocimineto de voz y la entrega de resultados)
    - **ASREvent**: (speech) marca la presencia del resultado final de reconocimiento de voz
    - **PartialASREvent**: (speech) marca la presencia de resultados parciales de reconocimineto de
     voz
    - **ToggleASREvent**: (chat) marca el arranque del reconocedor de voz de Google

Usa el módulo **model**

## Módulo model
Mantiene el modelo de datos de la aplicación.
Ahora mismo es un cajón de sastre...