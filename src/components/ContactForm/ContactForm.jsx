import { useState } from 'react';
import { nanoid } from 'nanoid';
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
    number: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddContact = () => {
    const { name, number } = formData;
    if (name.trim() === '' || number.trim() === '') return;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    onAddContact(newContact);

    setFormData({
      name: '',
      number: '',
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
          value={formData.number}
          type="tel"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          name="number"
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
