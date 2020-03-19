import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLength, required} from '../../../utils/validators';
import {Element} from '../../common/FormsControls/FormsControls';

const MyPosts = (props) => {
    console.log('render');
    const postsElements = props.posts.map(post => <Post id={post.id} text={post.text}
                                                        likesCount={post.likesCount}/>);

    const addNewPost = (values) => {
        props.addPost(values.newPostBody);
    };

    return (
        <div className={styles.myPosts}>
            <p>My Posts:</p><br/>
            <AddPostForm onSubmit={addNewPost}/>
            {postsElements}
        </div>
    );
};

const maxLength30 = maxLength(30);
const Textarea = Element('textarea');

let AddPostForm = (props) => (
    <form onSubmit={props.handleSubmit} className={styles.addPostForm}>
        <div>
            <div className={styles.imgAndTextarea}>
                <img className={styles.profilePic}
                     src='https://i.pinimg.com/236x/e9/06/de/e906de319adee56b1d9060b9c993b749.jpg' alt=''/>
                <Field component={Textarea} name='newPostBody' validate={[required, maxLength30]}
                       cols='30' rows='3' placeholder='Enter your post...'/>
            </div>
            <div className={styles.newPostBtn}>
                <button>New Post</button>
            </div>
        </div>
    </form>
);
AddPostForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm);

export default MyPosts;