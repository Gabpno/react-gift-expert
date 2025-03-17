import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();

    if (value.length <= 1) return;

    onAddCategory(value);
    setInputValue('');
  };

  return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar..."
                value={ inputValue }
                onChange={ onChange }
            />
        </form>
    )
};

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}
