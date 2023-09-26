import { useSelector } from "react-redux";
import { getContacts } from 'redux/selectors';

import { Container, Title, SubTitle, Wrapper } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

    
const App = () => {
  const contacts = useSelector(getContacts);

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm/>
        <SubTitle>Contacts</SubTitle>
        {contacts.length > 0 ? (
          // Фільтр для відображення контактів
          <Filter/>
        ) : (
          <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
        )}
        {contacts.length > 0 && (
          // Список контактів
          <ContactList/>
        )}
      </Container>
    );
  }

export default App;
