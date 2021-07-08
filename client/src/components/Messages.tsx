import React from 'react'

import { SendMessage } from './SendMessage'
import { OutgoingMessage } from './OutgoingMessage'
import { IncomingMessage } from './IncomingMessage'

export const Messages: React.FC = () => {

    const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {/* <!-- Chat inicio --> */}
            <div className="mesgs">

                {/* <!-- Historia inicio --> */}
                <div className="msg_history">

                    {

                        msgs.map(
                            (msg) => msg % 2 ? <OutgoingMessage key={msg} /> : <IncomingMessage key={msg} />

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
