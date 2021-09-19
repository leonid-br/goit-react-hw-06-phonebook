import { useState } from 'react';
import style from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handelChange = e => {
        const { name, value } = e.currentTarget;

        if (name === 'name') {
            setName(value);
        }
        if (name === 'number') {
            setNumber(value);
        }
    };

    const handelSubmit = e => {
        e.preventDefault();

        onSubmit(name, number);
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
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
