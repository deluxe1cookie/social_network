import React from 'react';
import styles from './NewPost.module.css';

const NewPost = (props) => {
    const newPostText = React.createRef();

    const onPostChange = () => {
        const text = newPostText.current.value;
        props.updateNewPostText(text);
    };

    const onAddPost = () => {
        props.addPost();
    };

    return (
        <div className={styles.newPost}>
            <div>
                <img className={styles.profilePic}
                     src="https://i.pinimg.com/236x/e9/06/de/e906de319adee56b1d9060b9c993b749.jpg" alt=""/>
                <textarea onChange={onPostChange} ref={newPostText}
                          value={props.newPostText}
                          cols="30" rows="3"
                          placeholder="Enter your post..."/>
            </div>
            <div className={styles.newPostBtn}>
                <button onClick={onAddPost}>New Post
                </button>
            </div>
        </div>
    )
};

export default NewPost;