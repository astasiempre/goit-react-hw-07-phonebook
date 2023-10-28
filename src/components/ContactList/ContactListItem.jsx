
import {ListItem, DeleteButton} from './ContactListItem.styled'


const ContactListItem = ({id, contact, phone, onDeleteContact }) => {

    return (
      <ListItem>
        {contact}: {phone}
        <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
      </ListItem>
    );
  }


export default ContactListItem;
