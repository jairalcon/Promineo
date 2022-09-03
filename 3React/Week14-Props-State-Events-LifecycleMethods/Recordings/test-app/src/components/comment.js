import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';

// let e = React.createElement;

export default class Comment extends React.Component {
    render() {
        // changing to JSX
        return (
            <div className="card w-75">
                <div className="header bg-success text-white">
                    {/* //*calling props to show specific data */}
                    {this.props.username} {this.props.date}
                </div>
                <div className="card-body">
                    {/*//* calling props to show comment in comment boxes */}
                    {this.props.content}
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                </div>
            </div>
        );
        // !rewrote more simple version above
        // return e('div',
        //     {class: 'card w-75'},
        //     e('div',
        //         {class: 'card-header bg-success text-white'},
        //         'Username and Time'),
        //     e('div',
        //         {class: 'card-body'},
        //         'Comment Content'),
        //     e('div',
        //     {class: 'card-footer'},
        //         e(LikeButton, {}, null),
        //         e('span', {}, ' '),
        //         e(ReplyButton, {}, null)
        //     )
        // );
    }
}