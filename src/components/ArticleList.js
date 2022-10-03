import React from 'react';
import Article from './Article';

const ArticleList=({ posts })=>{
    const postItem = posts.map((post,id)=>{
        return <Article key={post.id} date={post.date} preview={post.preview} title={post.title} />
    });
    return(
        <main>
            {postItem}
        </main>
    );
}
export default ArticleList
