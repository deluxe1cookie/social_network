import React from 'react';
import styles from "./Users.module.css";
import userPhoto from './../../assets/no-photo.png';
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                if (Math.abs(p - props.currentPage) < 5) {
                    return <span key={p.id} className={(p === props.currentPage) && styles.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                    >{p} </span>
                }
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                            <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                <img src={(u.photos.small !== null) ? u.photos.small : userPhoto}
                                     className={styles.photo} alt=''/>
                                </NavLink>
                                </div>
                            <div>
                            {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => props.onUnfollowClick(u.id)}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.onFollowClick(u.id)}>Follow</button>}
                            </div>
                            </span>
                    <span>
                            <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
                            <span>
                            <div>u.location.country</div>
                            <div>u.location.city</div>
                            </span>
                            </span>
                </div>)
        }
    </div>
};

export default Users;