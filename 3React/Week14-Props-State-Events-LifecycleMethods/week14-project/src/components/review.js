import React, { Component } from 'react'
import ReviewForm from './review-form'
import ReviewList from './review-list';
import { Rating } from 'react-simple-star-rating';

export class Review extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviewList: [
                {
                    id: 0,
                    nickname: 'John',
                    review: 'Amazing!',
                    rating: <Rating size='25' />
                }
            ]
        };
    }

    addReview = (newNickname, newReview, newRating) => {
        const postReview = {
            id: this.state.reviewList[this.state.reviewList.length - 1].id + 1, //todo need to update
            nickname: newNickname,
            review: newReview,
            rating: newRating
        }
        // console.log('this is postReview', postReview);
        this.setState({reviewList: this.state.reviewList.concat(postReview)})
    }


  render() {
    return (
            <>
                <div className='col-sm mt-2'>
                    {/* <Stars /> */}
                    <br></br>
                    <ReviewForm addReview={this.addReview} reviewList={this.state.reviewList} />
                    {/* {console.log(this.addReview)} */}
                    {/* {console.log(this.state.reviewList)} */}
                    {/* <br></br> */}
                    <ReviewList reviewList={this.state.reviewList}/>
                    {console.log(this.state.reviewList)}
                </div>                
            </>
        )
    }
}

export default Review