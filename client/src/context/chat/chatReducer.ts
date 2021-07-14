import { IUser } from '../../auth/AuthContext';
import { ChatTypes } from '../../types/chat.types';
import { IMessage } from './ChatContext';

export type ChatState = {
    id: string;
    activeChat: string;
    users: IUser[];
    messages: IMessage[];
};


export interface ChatAction {
    type: ChatTypes;
}

export interface ListUsers extends ChatAction {
    type: ChatTypes.listUsers; 
    payload: IUser[];
}

// export type ChatAction = 
//     {type: ChatTypes.listUsers; payload: IUser[]} | 
//     {type: ChatTypes};


export const initialChatState = {
    id: '',
    activeChat: '',
    users: [],
    messages: [],
} as ChatState;



export const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
    
    switch(action.type){
        case ChatTypes.listUsers:
            return {
                ...state,
                users: [
                    ...(action as ListUsers).payload,
                ],
            };
        default:
            return {
                ...initialChatState,
            };

    }

};