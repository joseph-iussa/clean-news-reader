import React from 'react';
import Article from '../Article/Article';

function ArticleList(props) {
    const articles = props.articles;
    return (
        <div className='ArticleList'>
            {articles.map(article => {
                return <Article key={article.id} article={article} className='Article' />;
            })}
        </div>
    );
}

export default ArticleList;