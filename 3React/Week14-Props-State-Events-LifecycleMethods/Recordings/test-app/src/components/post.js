import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

let e = React.createElement;

export default class Post extends React.Component {
    //* adding constructor with props / must have
    constructor(props) {
        //* always call super constructor and pass props first thing
        super(props);
        //* add props to state which will be the "source of truth" regarding data being displayed
        this.state = {
            comments: props.comments,
            content: props.content,
            // count: 0
        };
    }
    render() {
        // we'll use previous state as argument in a function, wrapped in a Timeout
        // avoid this.state
        // setTimeout(() => this.setState((state, props) => ({count: props.count + 1}), () => console.log(this.state.count)), 2000)

        // let tempComments = this.state.comments;
        // //* UPDATE STATE using setSate, will only update defined properties
        // //* takes object as first parameter, then callback with defined properties
        // setTimeout(() => this.setState({content: 'state updated', comments: []},
        //     //* adding parameter callback to setTimeout & setState again
        //     () => setTimeout(() => this.setState({comments: tempComments}), 2000)), 2000);
        
        //* empty array to contain all comments 
        let comments;
        //* check state, are there comments?
        if (this.state.comments) {
            // * UNIQUE KEY PROPR
            // * map method will take each comment, create JSX components and push to comments array
            // * helps React keep track of what has changed and what's needs to be re-rendered
            comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />);
            // ! Not using for unique key prop
            //* if so, iterate through them
            // for (let comment of this.state.comments) {
            //     //* push to Comment Component to Array
            //     comments.push(<Comment {...comment} />);
            // }
        }
        // changing to JSX
        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    {/*  */}
                    {this.state.content}
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                    {/*//* translates into comment for each comment */}
                    {comments}

                    {/* //! Not used for state */}
                    {/* adding attribute to comment 
                    data will be passed as a prop*/}
                    {/* three dots are the spread operator which will avoid overwriting
                    data already in the object */}
                    
                    {/* <Comment {...commentOne}/>
                    <Comment {...commentTwo} />
                    <Comment {...commentThree} /> */}
                </div>
            </div>
        );
        // return e('div',
        //     { class: 'card w-75' },
        //     e('div',
        //         { class: 'card-header bg-success text-white' },
        //         'Username and Time'),
        //     e('div',
        //         { class: 'card-body' },
        //         'Post Content'),
        //     e('div',
        //         { class: 'card-footer' },
        //         e(LikeButton, {}, null),
        //         e('span', {}, ' '),
        //         e(ReplyButton, {}, null),
        //         e('br', {}, null),
        //         e(Comment, {}, null),
        //         e(Comment, {}, null)
        //     )
        // );
    }
}