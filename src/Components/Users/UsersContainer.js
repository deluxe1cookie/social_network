import React from 'react';
import {connect} from 'react-redux';
import {follow, requestUsers, unfollow} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const page = query.get('page') ? Number(query.get('page')) : 1;
        const {pageSize} = this.props;

        this.props.requestUsers(page, pageSize);
    }


    render() {
        if (this.props.users.length === 0) {
            return <Preloader/>;
        }

        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={(pageNumber) => this.props.requestUsers(pageNumber, this.props.pageSize)}
                   users={this.props.users}
                   onFollowClick={this.props.follow} onUnfollowClick={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}/>
        </>;
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        //users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default connect(mapStateToProps, {
    requestUsers,
    follow,
    unfollow
})(UsersContainer);