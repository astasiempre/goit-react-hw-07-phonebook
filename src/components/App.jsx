import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/Contactlist';
import { Title } from './App.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { addContacts, deleteContacts, setFilter } from 'redux/contactsReducer';
export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    const phoneBookHasContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (phoneBookHasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContacts(newContact));
  };

  const handleDeleteContact = contactName => {
    dispatch(deleteContacts(contactName));
  };

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />
      <Title>Contacts</Title>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
