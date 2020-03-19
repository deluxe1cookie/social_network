import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Feed from './Components/Feed/Feed';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import MessagesContainer from './Components/Messages/MessagesContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './Components/common/Preloader';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>;

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/feed' component={Feed}/>
                        <Route path='/messages'
                               render={() => <MessagesContainer/>}/>
                        <Route path='/audio' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/login' component={Login}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);