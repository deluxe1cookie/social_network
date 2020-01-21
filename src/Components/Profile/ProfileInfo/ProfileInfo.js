import React from 'react';
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import facebookSvgUrl from '../../../assets/001-facebook.svg';
import websiteSvgUrl from '../../../assets/002-wattpad.svg';
import vkSvgUrl from '../../../assets/003-vk.svg';
import instagramSvgUrl from '../../../assets/005-instagram.svg';
import youtubeSvgUrl from '../../../assets/006-youtube.svg';
import githubSvgUrl from '../../../assets/007-github.svg';
import mainlinkSvgUrl from '../../../assets/m.svg';

const ProfileInfo = (props) => {
    if (!props.profileData) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    <img className={styles.header} src="https://www.dw.com/image/44504125_303.jpg" alt=""/>
                </div>
                <div className={styles.profileInfo}>
                    <img src={props.profileData.photos.large} alt=""/>
                    <div>
                        <h1>{props.profileData.fullName}</h1>
                        <p>{props.profileData.aboutMe}</p>
                    </div>
                </div>
                <div className={styles.contacts}>
                    {props.profileData.contacts.facebook ?
                        <a target="_blank" href={props.profileData.contacts.facebook}><img src={facebookSvgUrl}
                                                                                           alt=""/></a> : null}
                    {props.profileData.contacts.website ?
                        <a href={props.profileData.contacts.website}><img src={websiteSvgUrl} alt=""/></a> : null}
                    {props.profileData.contacts.vk ?
                        <a href={props.profileData.contacts.vk}><img src={vkSvgUrl} alt=""/></a> : null}
                    {props.profileData.contacts.instagram ?
                        <a href={props.profileData.contacts.instagram}><img src={instagramSvgUrl} alt=""/></a> : null}
                    {props.profileData.contacts.youtube ?
                        <a href={props.profileData.contacts.youtube}><img src={youtubeSvgUrl} alt=""/></a> : null}
                    {props.profileData.contacts.github ?
                        <a href={props.profileData.contacts.github}><img src={githubSvgUrl} alt=""/></a> : null}
                    {props.profileData.contacts.mainLink ?
                        <a href={props.profileData.contacts.mainLink}><img src={mainlinkSvgUrl} alt=""/></a> : null}
                </div>

            </div>
        )
    }
};

export default ProfileInfo;