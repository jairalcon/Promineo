/* 
todo This component will house all review components:
todo review form for user to submit
*/

import React, { Component } from 'react'
import Stars from './stars'

export class ReviewList extends Component {
    render() {
        return (
            <>
                <Stars />
                <form className='row'>
                    <h4>Leave a Review:</h4>
                    {/* <textarea className='form-control w-25' id='name' rows='1'></textarea> */}
                    <textarea type='text' className='form-control w-75' id='review-form' rows='3'></textarea>
                    <button className="col-5 mt-2 btn btn-primary">Submit</button>
                </form>
                <br></br>
                <h4>Reviews:</h4>
                <div className="card w-75">
                    <div className="card-header bg-secondary text-white">
                        {/* {this.props.author} {this.props.date} */}
                    </div>
                    <div className="card-body">
                        {/* {this.props.reviews.text} */}
                    </div>
                </div>
            </>
        )
    }
}

export default ReviewList