import React from 'react';
import Paginator from './Paginator';
import User from './User';

const Users = (props) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {
                props.users.map(user => <User key={user.id} user={user} followingInProgress={props.followingInProgress}
                                              onFollowClick={props.onFollowClick}
                                              onUnfollowClick={props.onUnfollowClick}/>)
            }
        </div>
    );
};

export default Users;