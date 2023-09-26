export const getContacts = state => state.contacts.items; // Повернення списку контактів із стану

export const getFilter = state => state.filter; // Повертає  фільтр із стану

export const getVisibleContacts = state => {
  const contacts = getContacts(state); // Отримуємо список контактів
  const filter = getFilter(state); // Отримуємо фильтр
  const normalizedFilter = filter.toLowerCase(); // Перетворюємо фильтр в нижній регістр

  // Фільтрує контакти, для того щоб ім'я фільтра містило в нижнім регістрі)
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};