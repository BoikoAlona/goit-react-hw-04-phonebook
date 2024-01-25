import css from './Profile.module.css';

const Profile = ({ name, number, id, handleDeleteProfile }) => {
  return (
    <li className={css.profileItem}>
      {name}: {number}
      <button className={css.buttonProfile} onClick={() => handleDeleteProfile(id)}>
        Delete
      </button>
    </li>
  );
};

export { Profile };