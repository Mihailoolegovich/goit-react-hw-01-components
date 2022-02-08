import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ props }) {
  return (
    <ul className={s.friendList}>
      {props.map(({ id, isOnline, avatar, name }) => (
        <li className={s.item} key={id}>
          <span className={isOnline ? s.statusOn : s.statusOf}></span>
          <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={s.name}>{name}</p>
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
