import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';



export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
        <ContactList />
    </div>
  );
}

// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import ContactForm from 'components/ContactForm/ContactForm';

// export const App = () => {
// const [contacts, setContacts] = useState([
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]);
// const [filter, setFilter] = useState('');

// useEffect(() => {
// const contacts = localStorage.getItem('contacts');
// const parsedContacts = JSON.parse(contacts);
// if (parsedContacts) {
// setContacts(parsedContacts);
// }
// }, []);

// useEffect(() => {
// localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);

// const AddContact = ({ name, number }) => {
// const contact = {
// id: nanoid(5),
// name,
// number,
// };


// contacts.find(
//   contact => contact.name.toLowerCase() === name.toLowerCase()
// )
//   ? window.alert(`${name} is already in contacts.`)
//   : setContacts([contact, ...contacts]);
// };

// const delContact = contactId => {
// setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
// };

// const formSubmitHandler = ({ name, number }) => {
// AddContact({ name, number });
// };

// const changeFilter = e => {
// setFilter(e.currentTarget.value);
// };

// const getVisibleContacts = () => {
// const normalizedFilter = filter.toLowerCase();


// return contacts.filter(contact =>
//   contact.name.toLowerCase().includes(normalizedFilter)
// );
// };

// const visibleContacts = getVisibleContacts();

// return (
// <div>
// <h1>Phonebook</h1>
// <ContactForm onSubmit={formSubmitHandler} />
// <h2>Contacts</h2>
// <Filter value={filter} onChange={changeFilter} />
// <ContactList
//      contacts={visibleContacts}
//      onDelContact={delContact}
//    />
// </div>
// );
// }



