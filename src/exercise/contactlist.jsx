import React from 'react';
import PropTypes from 'prop-types';
import ContactComponent from './Contact';
import { ContactClass } from './classes/Contact.class';


const Contactlist = () => {

    const defaultContact = new ContactClass('Lucas','Coronilla Salmeron','lucascoronilla@hotmail.com',false)
    return (
        <div>
            <ContactComponent Contact={defaultContact}></ContactComponent>
        </div>
    );
};


Contactlist.propTypes = {

};


export default Contactlist;
