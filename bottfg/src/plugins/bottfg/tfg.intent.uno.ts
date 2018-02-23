import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import { Sentences, S } from '../../sentences';

let INTENT_ID = 'uno';

// This dialog is managed by this discrete steps
export default [
    deMomentoUnPaso
];

function deMomentoUnPaso(session: BotBuilder.Session, args: any, next: Function) {

    session.sendTyping();
    session.send(Sentences.text(session, S.sampleUses));
    //session.send('uno');

    session.endDialog();
}
