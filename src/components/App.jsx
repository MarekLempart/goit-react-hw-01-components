// App.jsx

import { FriendList } from './friendList/FriendList';
import friends from './friendList/friends.json';
import { Profile } from './profile/Profile';
import user from './profile/user.json';
import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
        backgroundColor: '#eeeeee',
      }}
    >
      <Profile
        userName={user.userName}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
