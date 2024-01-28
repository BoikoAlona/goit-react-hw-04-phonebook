import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
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

    setContacts(prevState => [...prevState, newFriend]);
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    setFilter(value);
  };

  const handleDeleteProfile = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const filteredProfiles = contacts.filter(profile =>
    profile.name.toLowerCase().includes(filter.trim().toLowerCase())
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
};
