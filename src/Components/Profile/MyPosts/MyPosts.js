import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
    const postsElements = props.posts.map(post => <Post id={post.id} text={post.text}
                                                        likesCount={post.likesCount}/>);

    return (
        <div className={styles.myPosts}>
            <p>My Posts:</p><br/>
            <NewPost updateNewPostText={props.updateNewPostText} addPost={props.addPost}
                     newPostText={props.newPostText}/>
            {postsElements}
        </div>

    )
};

export default MyPosts;