import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img className={styles.postLogo}
                 src="https://i.pinimg.com/236x/e9/06/de/e906de319adee56b1d9060b9c993b749.jpg" alt=""/> Рома Дрюцкий
            <div className={styles.postText}>
                {props.text}
            </div>
        </div>
    )
};

export default Post;