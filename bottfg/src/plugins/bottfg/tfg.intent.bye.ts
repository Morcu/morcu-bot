import { BotBuilder } from '@telefonica/bot-core';
import * as logger from 'logops';
import { Sentences, S } from '../../sentences';
import { mongo_find } from '../../utils';
import { debug } from 'logops';

let INTENT_ID = 'bye';

// This dialog is managed by this discrete steps
export default [
    saludar
];

function saludar(session: BotBuilder.Session, args: any, next: Function) {
    session.sendTyping();
    let intent = {
        id: args.intent,
        name: args.intent,
        entities: args.entities
    };

    let actions = {
        name: 'a',
        type: 'a',
        style: 'a',
        inline: false,
        text: 'aaaaaaaaaa',
        value: {
            intent: args.intent,
            entities: args.entities
        }
    };
    let content = {
        text: Sentences.text(session, S.despedida),
        speak: Sentences.text(session, S.despedida),
        actions: [actions]
    };
    let empty_array: any[] = [];
    let channelData = {
        intent: intent,
        content: content,
        customData: {
            type: 'tipo'
        },
        actions: {}
    };
    let msgText = new BotBuilder.Message(session)
    .sourceEvent({
        directline: channelData
    });

    session.send(msgText);
    //session.endDialog();
}
