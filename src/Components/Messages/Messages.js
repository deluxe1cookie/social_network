import React from "react";
import styles from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators";

const Messages = (props) => {
    const dialogsElements = props.messagesPage.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);
    const messagesElements = props.messagesPage.messages.map(message => <Message id={message.id}
                                                                                 text={message.text}
                                                                                 yours={message.yours}/>);

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={styles.messages}>
            <div className={styles.messagesUsers}>
                {dialogsElements}
            </div>
            <div className={styles.messagesBlock}>
                <div>{messagesElements}</div>

                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};

const maxLength100 = maxLength(100);
const Textarea = Element("textarea");

let AddMessageForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name='newMessageBody' validate={[required, maxLength100]}
               placeholder='Enter your message...'/>
        <button>Send</button>
    </form>
);
AddMessageForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Messages;