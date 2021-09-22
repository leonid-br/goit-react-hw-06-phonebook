import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';
import Heading from './Heading';
import Notification from './Notification';
import { connect } from 'react-redux';

const App = ({ contacts }) => {
    return (
        <Container>
            <Heading title={'Phonebook'} />
            <ContactForm />
            <Heading title={'Contacts'} />
            {contacts.length >= 2 && <Filter />}

            {contacts.length > 0 ? <ContactList /> : <Notification />}
        </Container>
    );
};
const mapStateToProps = state => {
    return {
        contacts: state.contacts.items,
    };
};

export default connect(mapStateToProps)(App);
