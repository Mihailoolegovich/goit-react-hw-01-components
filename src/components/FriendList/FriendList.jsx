// import styles from "./FriendList.module.css";
export default function FriendList({ props }) {
    // const friend-list = styles;
  return (
    <ul className="friend-list">
      {props.map(prop => (
        <li className="item" key={prop.id}>
          <span className="status">{prop.isOnline}</span>
          <img className="avatar" src={prop.avatar} alt="User avatar" width="48" />
          <p className="name">{prop.name}</p>
        </li>
      ))}
    </ul>
  );
}
