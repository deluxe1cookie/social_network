import {NavLink} from 'react-router-dom';
import userDefaultPhoto from '../../assets/no-photo.png';
import styles from './Users.module.css';
import React from 'react';

const User = (props) => (
    <div className={styles.user}>
        <NavLink to={`/profile/${props.user.id}`}>
            <img src={(props.user.photos.small !== null) ? props.user.photos.small : userDefaultPhoto}
                 className={styles.photo} alt=''/>
        </NavLink>

        <div><NavLink to={`/profile/${props.user.id}`}>{props.user.name}</NavLink></div>

        {props.user.followed
            ? <button className={`${styles.button} ${styles.unsubscribe}`}
                      disabled={props.followingInProgress.some(id => id === props.user.id)}
                      onClick={() => props.onUnfollowClick(props.user.id)}>Вы подписаны</button>
            : <button className={styles.button}
                      disabled={props.followingInProgress.some(id => id === props.user.id)}
                      onClick={() => props.onFollowClick(props.user.id)}>Добавить в друзья</button>}
    </div>
);

export default User;