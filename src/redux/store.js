import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shortid from 'shortid';

const initialState = {
    contacts: {
        items: [],
        filter: '',
    },
};

const addContact = (state, action) => {
    const { items } = state.contacts;
    const normalizeName = action.payload.name.toLowerCase();
    const checkedName = items.find(
        ({ name }) => normalizeName === name.toLowerCase(),
    );

    const newContact = {
        id: shortid.generate(),
        name: action.payload.name,
        number: action.payload.number,
    };

    if (checkedName) {
        return alert(
            `This contact "${action.payload.name.toUpperCase()}" has already been added to your Phonebook`,
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

const deleteContact = (state, action) => {
    console.log('deleteContact ~ action', action);
    console.log(state.contacts);
    return {
        ...state,
        contacts: {
            ...state.contacts,
            items: state.contacts.items.filter(
                ({ id }) => id !== action.payload,
            ),
        },
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'phonebook/AddContact':
            return addContact(state, action);

        case 'phonebook/DeleteContact':
            return deleteContact(state, action);

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
