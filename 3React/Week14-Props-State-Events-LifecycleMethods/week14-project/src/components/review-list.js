/* 
todo This component will house all review components:
todo review form for user to submit
*/

import React, { Component } from 'react'

export class ReviewList extends Component {
    render() {         
        return (
            <>
                <h4 className='mt-2'>Reviews:</h4>
                <ul>
                    {this.props.reviewList.map(review =>
                        <div className="card w-75">
                            <div className="card-header bg-secondary text-white">
                                {review.nickname}
                            </div>
                            <div className="card-body">
                                {review.review}
                            </div>
                        </div>
                    )}
                </ul>
            </>
        )
    }
}

export default ReviewList