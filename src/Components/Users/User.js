import {NavLink} from 'react-router-dom';
import userDefaultPhoto from '../../assets/no-photo.png';
import styles from './Users.module.css';
import React from 'react';

const User = (props) => (
    <div>
        <span>
            <div>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img src={(props.user.photos.small !== null) ? props.user.photos.small : userDefaultPhoto}
                         className={styles.photo}
                         alt=''/>
                </NavLink>
            </div>
            <div>
                {props.user.followed ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                          onClick={() => props.onUnfollowClick(props.user.id)}>Unfollow</button> :
                    <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => props.onFollowClick(props.user.id)}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </span>
            <span>
                <div>props.location.country</div>
                <div>props.location.city</div>
            </span>
        </span>
    </div>
);

export default User;