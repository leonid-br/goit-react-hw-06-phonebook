export const addContact = (name, number) => ({
    type: 'phonebook/AddContact',
    payload: {
        name,
        number,
    },
});

export const deleteContact = id => ({
    type: 'phonebook/DeleteContact',
    payload: id,
});

export const findContact = contactsArr => ({
    type: 'phonebook/FindContact',
    payload: contactsArr,
});
