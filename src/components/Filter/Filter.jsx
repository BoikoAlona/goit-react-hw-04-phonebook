import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export { Filter };