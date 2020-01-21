import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {toggleIsFetching} from "../../redux/common-reducer";
import {getAuthUserData} from "../../redux/auth-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5484;
        }
        this.props.getUserProfile(userId);
        //this.props.getAuthUserData();
        /*
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
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.usersPage.isFetching,
        profileData: state.profilePage.profileData,
        isAuth: state.auth.isAuth
    }
};

let withUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    toggleIsFetching, getUserProfile, getAuthUserData
})(withUrlDataContainer);