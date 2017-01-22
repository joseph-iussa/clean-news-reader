import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import FeedList from '../FeedList/FeedList';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay';
import data from '../../data.json';

function App(props) {
    return (
        <div className="App">
            <Nav />
            <FeedList feeds={data.feeds} />
            <ArticleList articles={data.articles} />
            <ArticleDisplay article={data.articles[0]} />
        </div>
    );
};

export default App;