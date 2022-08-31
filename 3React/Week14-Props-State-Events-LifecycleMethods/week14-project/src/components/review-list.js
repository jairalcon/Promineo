/* 
todo This component will house all review components:
todo review form for user to submit
*/

import React, { Component } from 'react'

export class ReviewList extends Component {
    render() {
        return (
            <>
                <form className='row'>
                    <label for="review-form" className='form-label'>Leave your review:</label>
                    <textarea className='form-control w-75' id='review-form' rows='3'></textarea>
                    <button className="col-5 mt-2 btn btn-primary" >Submit</button>
                </form>
                <h4>Reviews:</h4>
                

            </>
        )
    }
}

export default ReviewList