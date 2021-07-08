import React from 'react'
import { SideBarChatItem } from './SideBarChatItem'

export const SideBar: React.FC = () => {

    const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {/* <!-- Sidebar inicio --> */}
            <div className="inbox_chat">

                {
                    chats.map(i => <SideBarChatItem key={i} />)
                }

                {/* <!-- Espacio extra para scroll --> */}
                <div className="extra_space"></div>


            </div>
            {/* <!-- Sidebar Fin --> */}
        </>
    )
}
