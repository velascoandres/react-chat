import React from 'react'
import { IUser } from '../auth/AuthContext';

export type SideBarChatItemProps = {
    user: IUser;
};


export const SideBarChatItem: React.FC<SideBarChatItemProps> = ({ user }: SideBarChatItemProps) => {

    const { username, online } = user;

    return (
        <>
            {/* <!-- conversación activa inicio --> */}
            <div className="chat_list active_chat">
                <div className="chat_people">
                    <div className="chat_img">
                        <img src="http://cemokalab.com/wp-content/uploads/2015/07/avatar-369-456321.png" alt="sunil" />
                    </div>
                    <div className="chat_ib">
                        <h5>{username}</h5>
                        {
                            (online)
                                ? <span className="text-success">Online</span>
                                : <span className="text-danger">Offline</span>
                        }
                    </div>
                </div>
            </div>
            {/* <!-- conversación activa Fin --> */}

        </>
    )
}
