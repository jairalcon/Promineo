import React from "react";
import Post from "./post";

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        return (
            <div className="container mt-4">
                <h1>News Feed</h1>
                <Post />
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