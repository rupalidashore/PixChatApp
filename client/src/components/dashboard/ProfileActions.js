import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle iconColor mr-1" /> Edit Profile
      </Link>
      
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap iconColor mr-1" />
        Add Education
      </Link>
    </div>
  );
};

export default ProfileActions;