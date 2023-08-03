import React from 'react';

const UserInformation = ({ username, email }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">User Information</h2>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserInformation;