import React from 'react';
import styles from './ProfileInfo.module.css';
import Contact from './Contact';

const Contacts = (props) => {
    let contactsUserHas = Object.entries(props.contacts).filter(el => el[1] !== null);
    let contactsImages = contactsUserHas.map(el => <Contact title={el[0]} link={el[1]}/>);

    return (
        <div className={styles.contacts}>
            {contactsImages}
        </div>
    );
};

export default Contacts;