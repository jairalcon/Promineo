import React, { Component } from 'react'

export class ReviewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: '',
            review: ''
        }
    }

    handleChange = (event) => {
        // Sets our piece of state to whatever is currently in the textbox
        this.setState({ nickname: event.target.nickname });
        this.setState({ review: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addReview(this.state.nickname)
        this.props.addReview(this.state.review)      
    }

  render() {
    return (
        <div>
            <form className='row mt-2' id='review-form'>
                {/* <h4>Leave a Review:</h4> */}
                {/* <textarea className='form-control w-25' id='name' rows='1'></textarea> */}
                <input type='text' placeholder='Nickname...' className='w-75'  value={this.state.nickname} name='nickname' onChange={this.handleChange}/>
                <textarea type='text' placeholder='Leave a Review...' className='form-control w-75' id='review-form' rows='3' value={this.state.review} name='review' onChange={this.handleChange}></textarea>
                <button type='submit' className="col-5 mt-2 btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </form>
        </div>
    )
  }
}

export default ReviewForm