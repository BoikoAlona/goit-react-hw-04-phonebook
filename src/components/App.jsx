import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addFriend = formData => {
    const hasDuplicates = contacts.some(
      profile => profile.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

    const newFriend = { ...formData, id: nanoid().toString() };

    setContacts(prevState => [...prevState.contacts, newFriend])
    };

  const handleChangeFilter = event => {
    const value = event.target.value;
    setFilter(value);
  };

  const handleDeleteProfile = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  };

  // const componentDidMount() {
  //   const stringifiedContacts = localStorage.getItem('contacts');
  //   const contacts = JSON.parse(stringifiedContacts) ?? [];
  //   this.setState({ contacts });
  // }

  // const componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     const stringifiedContacts = JSON.stringify(this.state.contacts);
  //     localStorage.setItem('contacts', stringifiedContacts)
  //   }
  // }

    const filteredProfiles = contacts.filter(profile =>
      profile.name
        .toLowerCase()
        .includes(filter.trim().toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addFriend={addFriend} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleChangeFilter} />
        <ContactList
          contacts={filteredProfiles}
          handleDeleteProfile={handleDeleteProfile}
        />
      </div>
    );
  }
