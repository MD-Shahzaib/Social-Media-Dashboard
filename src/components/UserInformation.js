import React from 'react';

const UserInformation = ({ username, email }) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserInformation;
