import React from 'react';

const UserInformation = ({ username, email, age, city, country, occupation, hobbies, socialMedia }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            <p className='font-semibold text-slate-400 mb-1'>Username: <span className='font-semibold text-slate-300'>{username}</span></p>
            <p className='font-semibold text-slate-400 mb-1'>Email: <span className='font-semibold text-slate-300'>{email}</span></p>
            <p className='font-semibold text-slate-400 mb-1'>Age: <span className='font-semibold text-slate-300'>{age}</span></p>
            <p className='font-semibold text-slate-400 mb-1'>City: <span className='font-semibold text-slate-300'>{city}</span></p>
            <p className='font-semibold text-slate-400 mb-1'>Country: <span className='font-semibold text-slate-300'>{country}</span></p>
            <p className='font-semibold text-slate-400 mb-1'>Occupation: <span className='font-semibold text-slate-300'>{occupation}</span></p>
            <p className='font-semibold text-slate-400 mb-1'>Hobbies: <span className='font-semibold text-slate-300'>{hobbies?.join(', ')}</span></p>
            <p className="font-semibold text-slate-400 mb-1">Social Media: <span className="font-semibold text-slate-300">{socialMedia?.instagram}, {socialMedia?.youtube}</span></p>
        </div>
    );
}

export default UserInformation;