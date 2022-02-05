import user from 'patch/user.json';
import data from 'patch/data.json';
import friends from 'patch/friends.json';
import transactions from 'patch/transactions.json';


import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transactions from "./Transaction/Transaction";


export const App = () => {
  return (
    // <div
    // // style={{
    // //   height: '100vh',
    // //   display: 'flex',
    // //   justifyContent: 'center',
    // //   alignItems: 'center',
    // //   fontSize: 40,
    // //   textTransform: 'uppercase',
    // //   color: '#010101',
    // // }}
    // >
    //   {/* React homework template */}
    //   <Profile
    //     username={user.username}
    //     tag={user.tag}
    //     location={user.location}
    //     avatar={user.avatar}
    //     stats={user.stats}
    //   />
    // </div>

    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" props={data} />
      <FriendList props={friends} />
      <Transactions props={transactions}/>
    </>
  );
};
