import React from 'react';

function Article(props) {
    const article = props.article;
    return (
        <div className='Article'>
            <a href='#'>{article.title}</a>
        </div>
    );
}

export default Article;