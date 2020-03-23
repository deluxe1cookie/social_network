import React from 'react';
import styles from './ProfileInfo.module.css';
import Contact from './Contact';

class Contacts extends React.Component {
    render() {
        let contactsImagesElements = this.props.contacts.map(el => <Contact key={el[0]} title={el[0]} link={el[1]}/>);

        return (
            <div className={styles.contacts}>
                {contactsImagesElements}
            </div>
        );
    }
}

export default Contacts;