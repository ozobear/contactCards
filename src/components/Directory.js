import React, { Component } from 'react';
import dataContact from './dataContact';
import ContactCard from './ContactCard';

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            contacts: dataContact
        }
    }

    render() {
        const cards = this.state.contacts.map((contact, idx) => <ContactCard info={contact} key={idx} /> );

        return(
            <>
                {cards}
            </>
        );
    }
};

export default Directory;