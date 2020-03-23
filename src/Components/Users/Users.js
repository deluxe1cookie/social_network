import React from 'react';
import Paginator from './Paginator';
import User from './User';
import styles from './Users.module.css';

const Users = (props) => {
    return (
        <div className={styles.users}>
            <h1>Пользователи соц сети ({props.totalUsersCount}):</h1>
            {props.users.map(user => <User key={user.id} user={user} followingInProgress={props.followingInProgress}
                                           onFollowClick={props.onFollowClick}
                                           onUnfollowClick={props.onUnfollowClick}/>)}
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        </div>
    );
};

export default Users;