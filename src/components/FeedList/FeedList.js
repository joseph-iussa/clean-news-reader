import React from 'react';
import Feed from '../Feed/Feed';

function FeedList(props) {
    const feeds = props.feeds;
    const allFeedsLink = { id: 0, name: 'All Feeds' };
    return (
        <div className='FeedList'>
            <Feed feed={allFeedsLink} />
            {feeds.map(feed => {
                return <Feed key={feed.id} feed={feed} className='Feed' />;
            })}
        </div>
    );
};

export default FeedList;