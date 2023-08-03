import React from 'react';

const MetricsDisplay = ({ followers, posts, likes, comments, engagementRate }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Metrics Display</h2>
            <p>Followers: {followers}</p>
            <p>Posts: {posts}</p>
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
            <h2 className="text-lg font-semibold my-4">Engagement Rate</h2>
            <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex-shrink-0">
                    <div className="flex items-center justify-center h-full">
                        <span className="text-white text-2xl">{engagementRate}</span>
                    </div>
                </div>
                <div className="ml-4">
                    <p className="text-gray-500">Engagement Rate</p>
                    <p className="font-semibold">{likes} Likes | {comments} Comments</p>
                </div>
            </div>
        </div>
    );
};

export default MetricsDisplay;