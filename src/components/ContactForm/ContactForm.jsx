import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ addFriend }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const formData = {
      name,
      number,
    };

    addFriend(formData);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name:
        <input
          className={css.formInput}
          id="inputName"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.formLabel}>
        Number:
        <input
          className={css.formInput}
          id="inputNumber"
          name="number"
          type="tel"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
