import React from 'react';
// Images.
import up from '../images/icon-up.svg';
import down from '../images/icon-down.svg';

const FollowerCard = ({ icon, username, count, countLabel, todayCount, isUp, highlighter }) => {
    return (
        <article className={`bg-gray-800 p-5 rounded-lg shadow shadow-slate-700 border-t-8 ${highlighter}`}>
            <ul className="flex items-center justify-center text-center">
                <li><img src={icon} alt={username} className="mr-2" /></li>
                <li className="text-sm text-slate-400 font-bold">@{username}</li>
            </ul>
            <h2 className="text-4xl font-bold text-slate-300 text-center my-5">{count} <span className="text-sm block text-slate-400 font-normal uppercase tracking-widest">{countLabel}</span></h2>
            <p className={`text-center flex items-center justify-center text-sm font-bold text-${isUp ? 'emerald' : 'rose'}-600`}><img src={isUp ? up : down} alt="" className="mr-2 w-3" />{todayCount} today</p>
        </article>
    );
};

export default FollowerCard;