import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shortid from 'shortid';

const initialState = {
    contacts: {
        items: [],
        filter: '',
    },
};

const addContact = (state, { payload }) => {
    const { items } = state.contacts;
    const normalizeName = payload.name.toLowerCase();
    const checkedName = items.find(
        ({ name }) => normalizeName === name.toLowerCase(),
    );

    const newContact = {
        id: shortid.generate(),
        name: payload.name,
        number: payload.number,
    };

    if (checkedName) {
        return alert(
            `This contact "${payload.name.toUpperCase()}" has already been added to your Phonebook`,
        );
    }

    return {
        ...state,
        contacts: {
            ...state.contacts,
            items: [newContact, ...state.contacts.items],
        },
    };
};

const deleteContact = (state, { payload }) => ({
    ...state,
    contacts: {
        ...state.contacts,
        items: state.contacts.items.filter(({ id }) => id !== payload),
    },
});

const findContact = (state, action) => {
    return {
        ...state,
        contacts: {
            ...state.contacts,
            filter: action.payload,
        },
    };
    // console.log('action.payload', action.payload);
    // const normalizeFilter = action.payload.toLowerCase();
    // const findContact = state.contacts.items.filter(contact =>
    //     contact.name.toLowerCase().includes(normalizeFilter),
    // );
    // if (findContact.length === 0) {
    //     alert(`No contact ${normalizeFilter.toUpperCase()}`);
    // }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'phonebook/AddContact':
            return addContact(state, action);

        case 'phonebook/DeleteContact':
            return deleteContact(state, action);

        case 'phonebook/FindContact':
            return findContact(state, action);

        default:
            return state;
    }
};

const store = createStore(
    reducer,
    composeWithDevTools(),
    // applyMiddleware(...middleware),
);

export default store;
