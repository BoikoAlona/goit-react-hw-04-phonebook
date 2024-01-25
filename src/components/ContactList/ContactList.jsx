import css from './ContactList.module.css';
import { Profile } from 'components/Profile/Profile';

const ContactList = ({ contacts, handleDeleteProfile }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <Profile
            key={id}
            id={id}
            name={name}
            number={number}
            handleDeleteProfile={handleDeleteProfile}
          />
        );
      })}
    </ul>
  );
};

export { ContactList };