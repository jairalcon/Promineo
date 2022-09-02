//todo this will be a container for all the movie components and their data

import React, { Component } from 'react';
import { Movie } from './movie';
import ReviewList from './review-list';

export default class MovieList extends Component {
    render() {
        let reviews = [
            {
                id: 0,
                username: 'User#1',
                text: 'This is a fantastic movie!',
                date: '7-4-2022'
            },
            {
                id: 1,
                username: 'User#2',
                text: 'It was okay.',
                date: '9-1-2022'
            }
        ];
        return(
            <div className='container'>
                <h1>Rate this movie!</h1>
                {/* passing in as prop of two objects */}
                <Movie {...{reviews: reviews }}/>
                {/* {console.log({...{reviews: reviews}})} */}
            </div>
        )
    }
}

// addReview = (newUser, newReview) => {
//     const reviewItem = {
//         // id: this.state.reviewList.length ? reviewList[reviewList.length - 1].id + 1 : 0,
//         id: this.state.reviewList[this.state.reviewList.length - 1].id + 1,
//         user: newUser,
//         review: newReview
//     }

//     this.setState({ reviewList: this.state.reviewList.concat(reviewItem) })
// }

// render() {
//     return (
//         <div className=''>
//             <Movie />
//             <Stars />
//             <ReviewList addReview={this.addReview} />
//         </div>
//     )
// }
