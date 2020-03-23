import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userDefaultPhoto from './../../../assets/no-photo.png';
import Contacts from './Contacts';

const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.uploadPhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <div className={styles.profileInfo}>
                <div>
                    <img className={styles.profilePhoto} alt=''
                         src={props.profileData.photos.large ? props.profileData.photos.large : userDefaultPhoto}/>
                    {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
                </div>

                <div>
                    <h1 className={styles.fullName}>{props.profileData.fullName}</h1>
                    {props.isOwner
                        ? <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        : <span>{props.status}</span>}
                    <p>{props.profileData.aboutMe}</p>
                </div>
            </div>

            <Contacts contacts={Object.entries(props.profileData.contacts).filter(el => el[1] !== null)}/>
        </div>
    );
};

export default ProfileInfo;