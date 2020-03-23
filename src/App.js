import React, {Suspense} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './Components/common/Preloader';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';

// lazy loadings
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const Feed = React.lazy(() => import('./Components/Feed/Feed'));
const MessagesContainer = React.lazy(() => import('./Components/Messages/MessagesContainer'));
const Music = React.lazy(() => import('./Components/Music/Music'));
const Settings = React.lazy(() => import('./Components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const Login = React.lazy(() => import('./Components/Login/Login'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>;

        return (
            <HashRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>

                    <Navbar/>

                    <div className="app-wrapper-content">
                        <Suspense fallback={<Preloader/>}>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer hell={'hell'}/>}/>
                            <Route path='/feed' component={Feed}/>
                            <Route path='/messages' component={MessagesContainer}/>
                            <Route path='/audio' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/users' component={UsersContainer}/>
                            <Route path='/login' component={Login}/>
                        </Suspense>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);