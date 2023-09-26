import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// Контакти телефона
const phoneContacts = {
  items: [
   { id: 'id-1', name: 'Rosie Simpson', number: '369-10-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Rostyslav Dovhan', number: '337-81-15' },
      { id: 'id-5', name: 'Myroslava Mazuryk', number: '332-91-11' },
  ],
};


// Створення slice контактів з використанням createSlice
const contactsSlice = createSlice({
  name: 'contacts', // Ім'я slice контактів
  initialState: phoneContacts, // Початкове становище контактів
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload); // Добавити нового контакта в список контактів
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact }, // Підготовка даних для добавлення контакта с уникальним ідентифікатором
      };
    },
    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index, 1); // Видалення контакта зі списку контактів
    },
  },
});

// Експорт дії addContact та removeContact з slice контактів
export const { addContact, removeContact } = contactsSlice.actions;

// Створення persistReducer для збереження стану контактів с виктристанням redux-persist
export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
    contactsSlice.reducer
);