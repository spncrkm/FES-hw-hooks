import { useState } from 'react'
import './App.css'
import ContactContext from './context/ContactContext'
import DisplayContacts from './component/DisplayContacts';
import DisplaySelectedContact from './component/DisplaySelectedContact';

function App() {
  const allContacts = [
    { id: 1, name: 'Spencer', phone: '1111111111' },
    { id: 2, name: 'John', phone: '2222222222' },
    { id: 3, name: 'Brad', phone: '3333333333' },
    { id: 4, name: 'Karen', phone: '4444444444' }
];
  const [contacts] = useState(allContacts)
  const [selectedContact, setSelectedContact] = useState({ name: '', phone: ''});



  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      <DisplayContacts />
      <DisplaySelectedContact />
    </ContactContext.Provider>
  )
}

export default App
