import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img className={styles.postLogo}
                 src={props.smallPhoto} alt=""/> Рома Дрюцкий
            <div className={styles.postText}>
                {props.text}
            </div>
        </div>
    )
};

export default Post;