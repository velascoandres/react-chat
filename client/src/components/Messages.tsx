import React, { useContext } from 'react'

import { SendMessage } from './SendMessage'
import { OutgoingMessage } from './OutgoingMessage'
import { IncomingMessage } from './IncomingMessage'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'


export const Messages: React.FC = () => {

    const { auth } = useContext(AuthContext);
    const { chatState } = useContext(ChatContext);

    return (
        <>
            {/* <!-- Chat inicio --> */}
            <div className="mesgs">

                {/* <!-- Historia inicio --> */}
                <div className="msg_history">

                    {

                        chatState.messages.map(
                            (msg) => (msg.to !== auth.id)
                                ? <OutgoingMessage key={msg.id} message={msg} />
                                : <IncomingMessage key={msg.id} message={msg} />

                        )

                    }


                </div>
                {/* <!-- Historia Fin --> */}

                <SendMessage />

            </div>
            {/* <!-- Chat Fin --> */}
        </>
    )
}
