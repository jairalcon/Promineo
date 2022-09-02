// todo this components will represent movie data (image, plot, rating, director, year)

import React, { Component } from 'react';
import ReviewList from './review-list';

export class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews,
            id: props.id,
            username: props.username,
            text: props.text,
            date: props.text
        };
    }

    render() {
        // console.log('move props:', this.state.text)
        let reviews;

        if (this.state.reviews) {
            reviews = this.state.reviews.map((review, index) => {
            {console.log('what is a review?', review)};
             <ReviewList key={index} {...review} />
             return reviews;
            });
            console.log('these are reviews:', this.state.reviews);
            console.log('this is a review:', this.props.reviews);            
        }
        console.log('these are the reviews via props:', this.state.reviews)
        
        console.log('this is the id:', this.state.reviews[0].id)
        console.log('this is the username:', this.state.reviews[0].username)
        console.log('this is the date:', this.state.reviews[0].date)
        console.log('this is the text:', this.state.reviews[0].text)

        return (
            <>
                <div className='ul mt-4 row'>
                    <div className='li col'>
                        <h3>Star Wars: A New Hope</h3>
                        <img width='33%' src='https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480' alt='start wars a new hope poster'></img>
                        <p className='col-4'>With the planet-destroying power of the Death Star, the Empire looks to cement its grip on the galaxy. Meanwhile, farm boy Luke Skywalker rises to face his destiny.</p>
                        <p>Release date: May 25, 1977 (USA)</p>
                        <p>Director: George Lucas</p>
                        <p>Writer: George Lucas</p>
                        <p>Stars: Mark Hamill, Harrison Ford, Carrie Fisher</p>
                    </div>
                </div>
                <ReviewList />                
            </>
        );
    }
}

export default Movie