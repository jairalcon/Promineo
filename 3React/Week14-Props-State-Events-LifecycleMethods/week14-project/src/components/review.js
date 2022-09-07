import React, { Component } from 'react'
import ReviewForm from './review-form'
import Stars from './stars';
import ReviewList from './review-list';

export class Review extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviewList: [
                {
                    id: 0,
                    nickname: 'John',
                    review: 'Amazing!'
                }
            ]
        }
    }

    addReview = (newNickname, newReview) => {
        const postReview = {
            id: this.state.reviewList[this.state.reviewList.length - 1].id + 1, //todo need to update
            nickname: newNickname,
            review: newReview
        }
        console.log(postReview);
        this.setState({reviewList: this.state.reviewList.concat(postReview)})
    }


  render() {
    return (
            <>
                <div className='col-sm mt-2'>
                    <Stars />
                    <br></br>
                    <ReviewForm addReview={this.addReview} reviewList={this.state.reviewList} />
                    {console.log(this.addReview)}
                    {console.log(this.state.reviewList)}
                    {/* <br></br> */}
                    <ReviewList reviewList={this.state.reviewList}/>
                    {console.log(this.state.reviewList)}
                </div>                
            </>
        )
    }
}

export default Review