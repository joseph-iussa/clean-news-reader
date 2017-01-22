import React from 'react';

function Feed(props) {
    const feed = props.feed;
    return (
        <div className='Feed'>
            <a href='#'>{feed.name}</a>
        </div>
    );
};

export default Feed;