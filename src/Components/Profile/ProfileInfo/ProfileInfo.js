import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';
import userDefaultPhoto from './../../../assets/no-photo.png';
import Contacts from './Contacts';

const ProfileInfo = (props) => {
    if (!props.profileData) {
        return <Preloader/>;
    } else {
        return (
            <div>
                <div className={styles.profileInfo}>
                    <img src={props.profileData.photos.large ? props.profileData.photos.large : userDefaultPhoto}
                         alt=''/>
                    <div>
                        <h1>{props.profileData.fullName}</h1>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        <p>{props.profileData.aboutMe}</p>
                    </div>
                </div>
                <Contacts contacts={props.profileData.contacts}/>
            </div>
        );
    }
};

export default ProfileInfo;