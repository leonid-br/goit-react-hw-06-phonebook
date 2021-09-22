import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.css';

const ContactList = () => {
    const getUserContacts = (items, filter) => {
        const normalizedFilter = filter.toLowerCase();

        const findContacts = items.filter(item =>
            item.name.toLowerCase().includes(normalizedFilter),
        );

        if (findContacts.length === 0) {
            alert(`No contact ${normalizedFilter.toUpperCase()}`);
        }
        return findContacts;
    };

    const { items, filter } = useSelector(state => state.contacts);
    const contacts = getUserContacts(items, filter);

    return (
        <ul className={style.list}>
            {contacts.map(el => (
                <ContactItem
                    key={el.id}
                    name={el.name}
                    number={el.number}
                    id={el.id}
                />
            ))}
        </ul>
    );
};

ContactItem.porpTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
};
export default ContactList;
