import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';


export default function ContactForm ({formSubmitHandler}) {
 const [name, setName] = useState('');
 const [number, setNumber] = useState('');
 
 

 const handleSubmit = e => {
  const lowerName = e.target.name.value.toLowerCase();
  const resultName = lowerName.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  formSubmitHandler(resultName, number);
  setName('');
  setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
   switch(name) {
    case 'name':
    setName(value);
    break;

    case 'number':
      setNumber(value);
      break;

      default:
        break;
   }
  };



    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            required
          />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }

  ContactForm.propTypes = {
    formSubmitHandler: PropTypes.func.isRequired,
  }

