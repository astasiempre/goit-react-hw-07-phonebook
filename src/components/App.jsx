import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/Contactlist';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { Title } from './App.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  addContact,
  deleteContact,
  setFilter,
  fetchContacts,
} from 'redux/contactsReducer';
import { useEffect } from 'react';
import {
  selectContacts,
  selectContactsError,
  selectContactsFilter,
  selectContactsIsloading,
} from 'redux/contactsSelectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);
  const isLoading = useSelector(selectContactsIsloading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    console.log(newContact);
    const phoneBookHasContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (phoneBookHasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />
      <Title>Contacts</Title>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
