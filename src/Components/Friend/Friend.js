import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Friend.css';




const Friend = (props) => {
  // console.log(props.friend)
  const { name, picture, email, salary, address } = props.friend;
  return (
    <div className="row p-4 friend-area">
      <div className="col-md-3 col-12">
        <img src={picture} alt="" />
      </div>
      <div className="col-md-9 col-12 pl-md-5 pl-lg-4 friend-details">
        <h4>{name}</h4>
        <p>Address: street-{address.street}, City-{address.city}</p>
        <p>Email: {email}</p>
        <p>Salary: ${salary}</p>
        <button onClick={()=> props.handleAddFriend(props.friend)} className="btn btn-primary mt-1"><FontAwesomeIcon icon={faPlus} /> Add Friend</button>
      </div>
    </div>
  );
};

export default Friend;