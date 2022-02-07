import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
// console.log('styles', styles);

export default function FriendList({ props }) {
  // const friend-list = styles;
  return (
    <ul className={styles.friendList}>
      {props.map(({ id, isOnline, avatar, name }) => (
        <li className={styles.item} key={id}>
          <span
            className={
              (styles.status, isOnline ? styles.statusOn : styles.statusOf)
            }
          ></span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
