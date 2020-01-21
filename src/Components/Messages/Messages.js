import React from "react";
import styles from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Messages = (props) => {
    const dialogsElements = props.messagesPage.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
    const messagesElements = props.messagesPage.messages.map(message => <Message id={message.id}
                                                                                 text={message.text}
                                                                                 yours={message.yours}/>);
    const newMessageBody = props.messagesPage.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    };
    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessage(body);
    };

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={styles.messages}>
            <div className={styles.messagesUsers}>
                {dialogsElements}
            </div>
            <div className={styles.messagesBlock}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder="Enter your message..."/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Messages;