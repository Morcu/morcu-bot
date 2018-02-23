import { BotBuilder } from '@telefonica/bot-core';
import { BotBuilderExt } from '@telefonica/bot-core';
import * as logger from 'logops';
import { IContentInteraction } from './DLMessages';
import { Sentences, S } from '../sentences';


export function send(session: BotBuilder.Session, label: S, ...args: any[]) {
    console.log('____TT____send____0___', label, args);

    let text = Sentences.text(session, label);
    console.log('____TT____send____1___', label, text, args);
    session.send(text, ...args);
}