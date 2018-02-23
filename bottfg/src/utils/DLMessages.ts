import { BotBuilder } from '@telefonica/bot-core';

export interface IDLMessage extends BotBuilder.IMessage {
    payload?: {
        userId: string, //“USERID”,
        accountId: string, //"ADMINCODE",
        userType: string, //“REAL” o “ARQUETYPE”,
        userVodType: string, //“REAL” o “PREDEFINED”,
        onboardingId?: string,
        system?: string,
        credentials?: any,
        //Defines the onboarding request with all candidates to be se
        data?: {
            vod?: {
                contentId?: {date: string, title: string, description: string, category: string}
            },
            profile?: {date: string, title: string, description: string, category: string, profile: string}
        }
    };
}

export interface IContentInteraction {
    contentInteraccion: {
        tipoRes: string,
        status: string,
        desc: string,
    };
}

