import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {toggleIsFetching} from "../../redux/common-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

        /*
        this.props.getAuthUserData();
                let data = {
                    "aboutMe": "был, есть и буду",
                    "contacts": {
                        "facebook": "facebook.com",
                        "github": "github.com",
                        "instagram": "instagram.com/sds",
                        "mainLink": null,
                        "twitter": "https://twitter.com/@sdf",
                        "vk": "vk.com/dimych",
                        "website": null,
                        "youtube": null
                    },
                    "lookingForAJob": "true",
                    "lookingForAJobDescription": 'не ищу',
                    "fullName": "Рома Дрюцкий"
                };
                axios.put(`https://social-network.samuraijs.com/api/1.0/profile`, data,
                    {
                        withCredentials: true,
                        headers: {'API-KEY': '2e403f5c-5d3b-4ee4-a662-100f73be85da'}
                    })
                    .then(response => {
                        console.log(response)
                    })*/
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.usersPage.isFetching,
    profileData: state.profilePage.profileData,
    status: state.profilePage.status,
    userId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {toggleIsFetching, getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);