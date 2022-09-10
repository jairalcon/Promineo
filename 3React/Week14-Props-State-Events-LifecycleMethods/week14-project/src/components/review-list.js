/* 
todo This component will house all review components:
todo review form for user to submit
*/

import React, { Component } from 'react'

export class ReviewList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: props.nickname,
            review: props.review,
            rating: props.rating
        }
        console.log('state of review-list:', this.state);
    }
    render() {
        let reviews = [];
        let index = 0;
        // console.log('got inside render');
        if (this.state.reviews) {
            // console.log('got inside if statement');
            for (let review of this.state.reviews) {
                index++
                reviews.push(<ReviewList key={index} {...review} />);
            }
        }         
        return (
            <>
                <h4 className='mt-2'>Reviews:</h4>
                <ul>
                    {console.log(this.props.reviewList)}
                    {this.props.reviewList.map(review =>
                        <div className="card w-75">
                            <div className="card-header bg-secondary text-white">
                                {review.nickname}
                            </div>
                            <div className="card-body">
                                {review.review} {review.rating}
                            </div>
                        </div>
                    )}
                </ul>
            </>
        )
    }
}

export default ReviewList