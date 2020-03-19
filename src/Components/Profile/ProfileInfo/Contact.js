import React from 'react';
import './Contacts.css';

const Contact = (props) => {
    return (
        <a target='_blank' rel='noopener noreferrer' href={props.link}><div  className={props.title}/></a>
    );
};

export default Contact;

