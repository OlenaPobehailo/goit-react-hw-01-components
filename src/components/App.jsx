import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import user from 'assets/user.json';
import stats from 'assets/data.json';
import friends from 'assets/friends.json';
import transactions from 'assets/transactions.json';

export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />;
    </div>
  );
};
