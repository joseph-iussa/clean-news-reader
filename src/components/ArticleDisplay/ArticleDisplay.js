import React from 'react';

function ArticleDisplay(props) {
    const article = props.article;
    return (
        <div className='ArticleDisplay'>
            <h1>{article.title}</h1>
            <div className='articleContent'
                dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
    );
}

export default ArticleDisplay;