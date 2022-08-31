//todo this will be a container for all the movie components and their data

import React, { Component } from 'react';
import { Movie } from './movie';
import ReviewList from './review-list';
import Stars from './stars';

export default class MovieList extends Component {
    render() {
        let reviews = [
            {
                id: 0,
                user: 'User#1',
                review: 'This is a fantastic movie!'
            },
            {
                id: 1,
                user: 'User#2',
                review: 'It was okay.'
            }
        ];
        return(
            <div className='container'>
                <h1>Rate this movie!</h1>
                {/* passing in as prop of two objects */}
                <Movie {...{reviews: reviews, review: 'This is my review'}}/>
                <ReviewList />
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
