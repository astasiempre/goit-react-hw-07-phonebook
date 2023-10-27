
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
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
      </List>
  );
};

export default ContactList;
