import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/slice'; 
import s from './Filter.module.css';


export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);



    return (
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filter}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={e => dispatch(setFilter(e.target.value))}
          required
        />
      </label>
    );
}

