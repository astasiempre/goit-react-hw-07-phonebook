import ContactListItem from './ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact.name}
          phone={contact.phone}
          onDeleteContact={onDeleteContact}
          id={contact.id}
        />
      ))}
    </List>
  );
};

export default ContactList;
