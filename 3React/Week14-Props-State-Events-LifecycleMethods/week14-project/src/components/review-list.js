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
                    {/* <textarea className='form-control w-25' id='name' rows='1'></textarea> */}
                    <textarea type='text' className='form-control w-75' id='review-form' rows='3'></textarea>
                    <button className="col-5 mt-2 btn btn-primary">Submit</button>
                </form>
                <h4>Reviews:</h4>
                <div className=''>
                    {/*// todo not getting information, possibly in movie.js */}
                    {this.props.review}
                    {console.log(this.props)}
                </div>
            </>
        )
    }
}

export default ReviewList