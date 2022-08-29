import React from "react";
import Post from "./post";

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        let comments = [
            {            
                content: 'This is my comment',
                username: 'Tommy',
                date: '12-12-2022'
            },
            {
                content: 'This is another comment',
                username: 'Sammy',
                date: '12-17-2022'
            },
            {
                content: 'Here\'s a comment from me',
                username: 'Sally',
                date: '12-19-2022'
            }
        ];
        return (
            <div className="container mt-4">
                <h1>News Feed</h1>
                {/*//* spread operator inside comments array */}
                <Post {...{comments: comments, content: 'This is my post content!'}} />
                <Post {...{content: 'Here is another post!!!'}}/>
                <Post />
            </div>
        );
        // return e('div',
        // {class: 'container'},
        // e(Post, {}, null),
        // e(Post, {}, null),
        // e(Post, {}, null),
        // );
    }
}