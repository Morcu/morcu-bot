import { BotBuilder } from '@telefonica/bot-core';
import * as request from 'request';
import * as logger from 'logops';

const DASHBOT_API_KEY = process.env.DASHBOT_API_KEY;
//const TRACKER_BASE = 'https://tracker.dashbot.io/track';
const TRACKER_BASE = 'https://unaurladecuada';

/**
 * Logs the incoming message received by the bot from the BotFramework
 */
export default {
    receive: (event: BotBuilder.IEvent, next: Function) => {
        if (DASHBOT_API_KEY) {
            /*
            let uri = TRACKER_BASE + `?platform=generic&v=0.7.3-rest&type=incoming&apiKey=${DASHBOT_API_KEY}`;
            let options: request.CoreOptions = {
                json: true,
                body: {
                    text: (<BotBuilder.IMessage>event).text,
                    userId: event.user.id
                }
            };
            request.post(uri, options, (err: any, response: any) => {
                logger.debug('Response from dashbot received');
            });
            */
        }

        next();
    },
    send: (event: BotBuilder.IEvent, next: Function) => {
        if (DASHBOT_API_KEY) {
            /*
            let uri = TRACKER_BASE + `?platform=generic&v=0.7.3-rest&type=outgoing&apiKey=${DASHBOT_API_KEY}`;
            let options: request.CoreOptions = {
                json: true,
                body: {
                    text: (<BotBuilder.IMessage>event).text,
                    userId: event.address.user.id
                }
            };
            request.post(uri, options, (err: any, response: any) => {
                logger.debug('Response from dashbot received');
            });
            */
        }

        next();
    }
} as BotBuilder.IMiddlewareMap;
