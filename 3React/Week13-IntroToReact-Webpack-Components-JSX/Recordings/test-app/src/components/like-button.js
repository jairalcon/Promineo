import React from 'react';

export default class LikeButton extends React.Component {
    render() {
        // converting to JSX
        return <button className="btn btn-primary">Like</button>;
        // where we define what the component will look like/HTML
        // return React.createElement('button', {class: 'btn btn-primary'}, 'Like:');
    }
}