import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

function Profile() {
  const { user } = useContext(UserContext);

  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <img src={user.photoUrl} alt="" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
