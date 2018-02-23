# bottfg

TFG project trying to create a audiovisual recomendation bot. 
Based on the MS Bot Framework and the bot-core created by Telefonica (https://github.com/Telefonica/bot-core).

## Run the app

The app entry point is [app.ts](./src/app.ts).
Run the following commands to clone the project, 
install its dependencies (**node 6.x required**) 
and run the bot in console mode.

```sh
git clone git@github.com:Morcu/morcu-bot.git
cd bottfg

npm login # See note below
npm install
npm run dev
```

Now, you can type something to start talking with the bot. 
Just type "Hola".


## Bot emulator
You can download the bot emulator here: https://github.com/Microsoft/BotFramework-Emulator
It requieres ngrok (https://ngrok.com/)
After registering the bot at Microsoft (https://dev.botframework.com -> Register a bot) 
you need to enter the AppId and Password in the .env file
Start the bot with 

```
npm run start
```

Enter those credentials in the emulator window and you are ready to test your bot using a graphical interface.


## Overall architecture

```
                                         +--------+
                                         |  LUIS  <--- Training tools
                                         +---+----+
                                             |
                         +-------------------------+
                         | +---+ +---+       |     |    +----------+
                         | |   | |   |       |     | +-->  plugin  |
                         | | m | | m |   +---+---+ | |  +----------+
           +---------+   | | i | | i |   |       | | |  +----------+     +-----------------+
           |         |   | | d | | d |   |       | | +-->  plugin  |  +-->3rd party service|
Direct     |   MS    |   | | d | | d |   |       | | |  +----------+  |  +-----------------+
 Line  +---+ gateway +---+ | l | | l +--->  BOT  +---+  +----------+  |
           |         |   | | e | | e |   |       | | +-->  plugin  +--+
           |         |   | | w | | w |   |       | |    +----------+
           +---------+   | | a | | a |   |       | |
                         | | r | | r |   |       + |
                         | | e | | e |   +---+---+ |
                         | |   | |   |       |     |
                         | +---+ +---+       |     |
                         +-------------------------+
                                             |
                                             |
                                        +----+----+
                                        | context |
                                        +---------+
```
