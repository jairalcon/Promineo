/* 
todo This component will house all review components:
todo review form for user to submit
*/

import React, { Component } from 'react'

export class ReviewList extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         typeValue: ""
    //     }
    // }

    // handleTypeChange = (event) => {
    //     this.setState({ typeValue: event.target.value });
    // }

    // onSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.addReview(this.state.typeValue)
    // }

    render() {
        return (
            <>
                <form className='row'>
                    {/* <textarea className='form-control w-25' id='name' rows='1'></textarea> */}
                    <textarea type='text' value={this.state.typeValue} onChange={this.handleTypeChange} className='form-control w-75' id='review-form' rows='3'></textarea>
                    <button className="col-5 mt-2 btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </form>
                <h4>Reviews:</h4>
                <ol>
                    <li>1</li>
                    {/* {this.props.reviewList.map(item =>
                        <li>
                            {item.id + " " + item.review}
                        </li>
                    )}  */}
                </ol>
            </>
        )
    }
}

export default ReviewList