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

export interface ActiveChat extends ChatAction {
    type: ChatTypes.activeChat;
    payload: string;
}

export interface NewMessage extends ChatAction {
    type: ChatTypes.newMessage;
    payload: IMessage;
}


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
        case ChatTypes.activeChat:
            const activeChatAction = (action as ActiveChat);

            if (state.activeChat === activeChatAction.payload) return state; 

            return {
                ...state,
                activeChat: activeChatAction.payload,
                messages: [],
            };
        case ChatTypes.newMessage:
            const newMessageAction = (action as NewMessage);

            if (state.activeChat === newMessageAction.payload.from ||
                state.activeChat === newMessageAction.payload.to
                ) {
                    return {
                        ...state,
                        messages: [
                            ...state.messages,
                            newMessageAction.payload,
                        ],
                    };        
                } else {
                    return state;
                }
        
        default:
            return {
                ...initialChatState,
            };

    }

};