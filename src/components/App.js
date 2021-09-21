import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';
import Heading from './Heading';
import Notification from './Notification';
import * as actions from '../redux/phonebook-actions';
import { connect } from 'react-redux';

// const useLocalStorage = (key, defValue) => {
//     const [state, setState] = useState(
//         () => JSON.parse(window.localStorage.getItem(key)) ?? defValue,
//     );

//     useEffect(() => {
//         window.localStorage.setItem(key, JSON.stringify(state));
//     }, [key, state]);

//     return [state, setState];
// };

const App = ({
    contacts,
    filter,
    state,
    addContact,
    findContact,
    onDelete,
}) => {
    // const [contacts, setContacts] = useLocalStorage('contacts', []);
    // const [filter, setFilter] = useState('');

    // const [contacts, setContacts] = useState(
    //     () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    // );

    // useEffect(() => {
    //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);

    // const addContact = (name, number) => {
    //     const normalizeName = name.toLowerCase();
    //     const checkedName = contacts.find(
    //         ({ name }) => normalizeName === name.toLowerCase(),
    //     );

    //     const newContact = {
    //         id: shortid.generate(),
    //         name,
    //         number,
    //     };

    //     if (checkedName) {
    //         return alert(
    //             `This contact "${name.toUpperCase()}" has already been added to your Phonebook`,
    //         );
    //     }

    //     setContacts(prevState => [newContact, ...prevState]);
    // };

    // const changeFilter = e => {
    //     setFilter(e.currentTarget.value);
    // };

    // const findContact = () => {
    //     const normalizeFilter = filter.toLowerCase();

    //     const findContact = contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(normalizeFilter),
    //     );

    //     if (findContact.length === 0) {
    //         alert(`No contact ${normalizeFilter.toUpperCase()}`);
    //     }

    //     return findContact;
    // };

    // const onDelete = idContact => {
    //     setContacts(contacts.filter(({ id }) => id !== idContact));
    // };

    return (
        <Container>
            <Heading title={'Phonebook'} />
            <ContactForm onSubmit={addContact} />
            <Heading title={'Contacts'} />
            {contacts.length >= 2 && (
                <Filter
                    // value={filter}
                    onChange={findContact}
                />
            )}

            {contacts.length > 0 ? (
                <ContactList contactsArr={contacts} deleteContact={onDelete} />
            ) : (
                <Notification />
            )}
        </Container>
    );
};
const mapStateToProps = state => {
    return {
        contacts: state.contacts.items,
        filter: state.contacts.filter,
        state: state.contacts,
    };
};

const mapDispatchToProps = dispathc => {
    return {
        addContact: (name, number) =>
            dispathc(actions.addContact(name, number)),
        findContact: filter => dispathc(actions.findContact(filter)),
        onDelete: id => dispathc(actions.deleteContact(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
