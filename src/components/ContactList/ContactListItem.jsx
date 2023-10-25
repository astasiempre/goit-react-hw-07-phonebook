
import {ListItem, DeleteButton} from './ContactListItem.styled'


const ContactListItem = ({ contact, number, onDeleteContact }) => {

    return (
      <ListItem>
        {contact}: {number}
        <DeleteButton onClick={() => onDeleteContact(contact)}>Delete</DeleteButton>
      </ListItem>
    );
  }


export default ContactListItem;
