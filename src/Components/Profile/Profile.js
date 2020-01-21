import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

let Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;
