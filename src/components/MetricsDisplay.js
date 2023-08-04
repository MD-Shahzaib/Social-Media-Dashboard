import React from 'react';

const MetricsDisplay = ({ followers, posts, likes, comments, engagementRate }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Metrics Display</h2>
            <p className='font-semibold text-slate-400'>Followers: <span className='font-semibold text-slate-300'>{followers}</span></p>
            <p className='font-semibold text-slate-400'>Posts: <span className='font-semibold text-slate-300'>{posts}</span></p>
            <p className='font-semibold text-slate-400'>Likes: <span className='font-semibold text-slate-300'>{likes}</span></p>
            <p className='font-semibold text-slate-400'>Comments: <span className='font-semibold text-slate-300'>{comments}</span></p>

            <h2 className="text-xl font-semibold my-4">Engagement Rate</h2>
            <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex-shrink-0">
                    <div className="flex items-center justify-center h-full">
                        <span className="text-white text-2xl">{engagementRate}</span>
                    </div>
                </div>
                <div className="ml-4">
                    <p className="text-slate-300">Engagement Rate</p>
                    <p className="font-semibold text-slate-400"><span className='text-slate-300'>{likes}</span> Likes | <span className='text-slate-300'>{comments}</span> Comments </p>
                </div>
            </div>
        </div>
    );
};

export default MetricsDisplay;