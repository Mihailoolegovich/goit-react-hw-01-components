// import styles from "./FriendList.module.css";
import PropTypes from 'prop-types';

export default function FriendList({ props }) {
  // const friend-list = styles;
  return (
    <ul className="friend-list">
      {props.map(({ id, isOnline, avatar, name }) => (
        <li className="item" key={id}>
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
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
