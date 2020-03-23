import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {addPost, getStatus, getUserProfile, updateStatus, uploadPhoto} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {toggleIsFetching} from '../../redux/common-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
        );
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.usersPage.isFetching,
    profileData: state.profilePage.profileData,
    status: state.profilePage.status,
    userId: state.auth.userId,
    posts: state.profilePage.posts
});

export default compose(
    connect(mapStateToProps, {
        toggleIsFetching, getUserProfile, getStatus,
        updateStatus, uploadPhoto, addPost
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);