import React from 'react'
import { IMessage } from '../context/chat/ChatContext'

export type IncomingMessageProps = {
    message: IMessage;
}


export const IncomingMessage: React.FC<IncomingMessageProps> = ({ message }) => {

    

    return (
        <>
            <div className="incoming_msg">
                <div className="incoming_msg_img">
                    <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
                </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{message.text}</p>
                        <span className="time_date"> 11:01 AM | June 9</span>
                    </div>
                </div>
            </div>
        </>
    )
}

