import { useState } from 'react';
// import { nanoid } from 'nanoid';
import {
  FormContainer,
  Label,
  Span,
  Input,
  Button,
} from './ContactForm.styled';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddContact = () => {
    const { name, phone } = formData;
    if (name.trim() === '' || phone.trim() === '') return;

    const newContact = {
      // id: nanoid(),
      name,
      phone,
    };

    onAddContact(newContact);

    setFormData({
      name: '',
      phone: '',
    });
  };

  return (
    <FormContainer>
      <h2>Phonebook</h2>
      <Label>
        <Span>Name</Span>
        <Input
          onChange={handleInputChange}
          value={formData.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          onChange={handleInputChange}
          value={formData.phone}
          type="tel"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          name="phone"
          required
        />
      </Label>
      <Button onClick={handleAddContact} type="submit">
        Add contact
      </Button>
    </FormContainer>
  );
};

export default ContactForm;
