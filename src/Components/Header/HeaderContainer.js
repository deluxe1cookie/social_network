import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    onLogoutClick = () => {
        this.props.logout();
    };

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} onLogoutClick={this.onLogoutClick}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {logout})(HeaderContainer);