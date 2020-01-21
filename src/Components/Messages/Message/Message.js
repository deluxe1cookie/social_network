import React from 'react';
import styles from "../Messages.module.css";

const Message = (props) => {
    if (props.yours) {
        return (
            <div className={styles.messageYours}>
                {props.text}
            </div>
        )
    } else {
        return (
            <div className={styles.message}>
                {props.text}
            </div>
        )
    }
};

export default Message;