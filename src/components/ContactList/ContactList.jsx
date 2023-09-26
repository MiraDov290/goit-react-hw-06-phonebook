import React from 'react';
import { List, Item, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

// Компонент списка контактiв
const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            // Кнопка видалення контакта
            <Button type="button" name="delete" onClick={handleDelete}>
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;