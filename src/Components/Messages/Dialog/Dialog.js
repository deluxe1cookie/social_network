import React from 'react';
import styles from "../Messages.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    const path = "/messages/" + props.id;

    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default Dialog;