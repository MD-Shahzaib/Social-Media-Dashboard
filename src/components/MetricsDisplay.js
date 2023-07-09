import React from 'react';

const MetricsDisplay = ({ followers, posts, likes, comments }) => {
    return (
        <div>
            <h2>Metrics Display</h2>
            <p>Followers: {followers}</p>
            <p>Posts: {posts}</p>
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
        </div>
    );
};

export default MetricsDisplay;
