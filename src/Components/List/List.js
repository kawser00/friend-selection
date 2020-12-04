import React, { useState } from 'react';
import fakeData from '../../fakeData/friend';
import Friend from '../Friend/Friend';
import Cart from '../Cart/Cart';


const List = () => {
  const first10 = fakeData.slice(0,15);
 const [friends, setFriends] = useState(first10);
 const [addFriend, setAddFriend] = useState([]);
 
const handleAddFriend = (friend) =>{
 console.log('friend added', friend)
 const newFriend = [...addFriend, friend]
 setAddFriend(newFriend)
}
 
  return (
    <div>
      <div className="row">
        <div className="col-md-8 col-8 list-area border-right border-dark">
        <ul>
          {
            friends.map(friend =><Friend friend={friend} key={friend.id} handleAddFriend={handleAddFriend}></Friend>)
          }
        </ul>
        </div>
        <div className="col-md-4 col-4">
          {
            addFriend.map(item => <Cart item={item} addFriend={addFriend}></Cart>)
          }
          {/* <Cart ></Cart> */}
        </div>
      </div>
      
    </div>
  );
};

export default List;