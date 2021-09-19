import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label className={style.label}>
            Find contacts by name
            <input
                type="text"
                value={value}
                onChange={onChange}
                className={style.input}
            />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
