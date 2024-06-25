import React, { useContext } from 'react'
import ContactContext from '../context/ContactContext'


const DisplaySelectedContact = () => {
    const { selectedContact } = useContext(ContactContext)

    // if (!selectedContact) {
    //     return 
    // }


    return (
        <div>
            <h2>Contact Details</h2>
            <p>Name: {selectedContact.name}</p>
            <p>Phone: {selectedContact.phone}</p>
        </div>
    )
}

export default DisplaySelectedContact
