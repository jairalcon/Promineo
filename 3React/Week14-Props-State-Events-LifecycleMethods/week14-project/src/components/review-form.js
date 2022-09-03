import React, { Component } from 'react'

export class ReviewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nicknameValue: '',
            reviewValue: ''
        }
    }

    handleNicknameChange = (event) => {
        // Sets our piece of state to whatever is currently in the textbox
        this.setState({ reviewValue: event.target.value })
    }

    handleReviewChange = (event) => {
        // Sets our piece of state to whatever is currently in the textbox
        this.setState({ reviewValue: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addReview(this.state.nicknameValue)
        this.props.addReview(this.state.reviewValue)
    }

  render() {
    return (
        <div>
            <form className='row mt-2' id='review-form'>
                {/* <h4>Leave a Review:</h4> */}
                {/* <textarea className='form-control w-25' id='name' rows='1'></textarea> */}
                <input placeholder='Nickname...' className='w-75' type='text' value={this.state.nicknameValue} onChange={this.handleNicknameChange}/>
                <textarea placeholder='Leave a Review...' type='text' className='form-control w-75' id='review-form' rows='3' value={this.state.reviewValue} onChange={this.handleReviewChange}></textarea>
                <button className="col-5 mt-2 btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </form>
        </div>
    )
  }
}

export default ReviewForm