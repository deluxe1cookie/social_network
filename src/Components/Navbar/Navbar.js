import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile">My profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/feed">News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/messages">Messages</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/audio">Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/settings">Settings</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/users">Users</NavLink>
        </div>
    </nav>
}

export default Navbar;