import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import { Sentences, S } from '../../sentences';

let INTENT_ID = 'saludo';

// This dialog is managed by this discrete steps
export default [
    saludar
];

function saludar(session: BotBuilder.Session, args: any, next: Function) {

    session.sendTyping();
    session.send(Sentences.text(session, S.saludos));
    session.endDialog();
}
