import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const friend = props.addFriend
  console.log(friend)

  // const totalSalary = friend.reduce((total, friend) => total + friend.salary,0)
  
  let totalSalary = 0;
  for (let i = 0; i < friend.length; i++) {
    const SingleFriend = friend[i];
    totalSalary = totalSalary + SingleFriend.salary;
  }
  return (
    <div className="text-center mt-3 friend-area">
      <h2 className="mb-4">User History</h2>
      <hr/>
      <h4>Added Friend: {friend.length}</h4>
      <h4>Total Salary: ${totalSalary}</h4>

  <h4>{props.item.salary}</h4>
    </div>
  );
};

export default Cart;