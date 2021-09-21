import PropTypes from 'prop-types';
import { useState } from 'react';

import style from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    const [filter, setFilter] = useState('');
    const handelChange = e => {
        setFilter(e.currentTarget.value);
        onChange(filter);
    };

    return (
        <label className={style.label}>
            Find contacts by name
            <input
                type="text"
                // value={value}
                onChange={handelChange}
                className={style.input}
            />
        </label>
    );
};

Filter.propTypes = {
    // value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
