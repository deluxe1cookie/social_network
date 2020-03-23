import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import Preloader from '../common/Preloader';

let Profile = (props) => {
    if (!props.profileData) {
        return <Preloader/>;
    }

    return (
        <div>
            <ProfileInfo {...props}/>
            {props.isOwner &&
            <MyPosts posts={props.posts} smallPhoto={props.profileData.photos.small} addPost={props.addPost}/>}
        </div>
    );
};

export default Profile;
