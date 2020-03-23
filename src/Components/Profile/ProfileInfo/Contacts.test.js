import React from 'react';
import {create} from 'react-test-renderer';
import Contacts from './Contacts';
import Contact from './Contact';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        let contacts = {
            facebook: 'facebook.com'
        };
        let filteredContacts = Object.entries(contacts).filter(el => el[1] !== null);

        const component = create(<Contacts contacts={filteredContacts}/>);
        let tree = component.toJSON();

        const innerComponent = create(<Contact title={filteredContacts[0][0]} link={filteredContacts[0][1]}/>);
        let innerTree = innerComponent.toJSON();
        
        expect(tree.children[0].props.href).toBe(innerTree.props.href);
    });
});