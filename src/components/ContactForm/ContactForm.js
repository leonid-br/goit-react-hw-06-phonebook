import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/phonebook-actions';
import style from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    const handelChange = e => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        }
        if (name === 'number') {
            setNumber(value);
        }
    };

    const changeEnterName = name => {
        const normalizeName = name.toLowerCase();

        return contacts.find(
            ({ name }) => normalizeName === name.toLowerCase(),
        );
    };

    const handelSubmit = e => {
        e.preventDefault();

        if (changeEnterName(name)) {
            setName('');
            setNumber('');
            return alert(
                `This contact "${name.toUpperCase()}" has already been added to your Phonebook`,
            );
        }

        dispatch(addContact(name, number));

        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handelSubmit} className={style.form}>
            <label className={style.lable}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handelChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    className={style.input}
                />
            </label>

            <label className={style.lable}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handelChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    className={style.input}
                />
            </label>

            <button type="submit" className={style.button}>
                Add contact
            </button>
        </form>
    );
};
ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    handelChange: PropTypes.func,
    handelSubmit: PropTypes.func,
};

export default ContactForm;
