import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction(
    'phonebook/AddContact',
    (name, number) => ({
        payload: {
            id: shortid.generate(),
            name,
            number,
        },
    }),
);

export const deleteContact = createAction('phonebook/DeleteContact');

export const findContact = createAction('phonebook/FindContact');
