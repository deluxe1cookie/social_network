import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={styles.header}>
        <div>
            <NavLink to="/feed">
                <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png" alt=""/>
            </NavLink>
        </div>
        <div className={styles.loginBlock}>
            {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
        </div>
    </header>
};

export default Header;