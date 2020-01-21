import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    /*    onPageChanged = (pageNumber) => {
            this.props.getUsers(pageNumber, this.props.pageSize);
            /!*        this.props.toggleIsFetching(true);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
                        {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "2e403f5c-5d3b-4ee4-a662-100f73be85da"
                            }
                        })
                        .then(response => {
                            this.props.setUsers(response.data.items);
                            this.props.toggleIsFetching(false);
                            this.props.setCurrentPage(pageNumber);
                        });*!/
        };

        onFollowClick = (userId) => {
            this.props.followThunkCreator(userId);
            /!*        this.props.toggleFollowingInProgress(true, userId);
                    //this.props.toggleIsFetching(true);
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "2e403f5c-5d3b-4ee4-a662-100f73be85da"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                //this.props.toggleIsFetching(false);
                                this.props.follow(userId);
                            }
                            this.props.toggleFollowingInProgress(false, userId);
                        });*!/
        };

        onUnfollowClick = (userId) => {
            this.props.unfollowThunkCreator(userId);
            /!*        this.props.toggleFollowingInProgress(true, userId);
                    //this.props.toggleIsFetching(true);
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "2e403f5c-5d3b-4ee4-a662-100f73be85da"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {

                                //this.props.toggleIsFetching(false);
                                this.props.unfollow(userId);
                            }
                            this.props.toggleFollowingInProgress(false, userId);
                        });*!/
        };*/


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={(pageNumber) => this.props.getUsers(pageNumber, this.props.pageSize)}
                   users={this.props.users}
                   onFollowClick={this.props.follow} onUnfollowClick={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow
})(UsersContainer);