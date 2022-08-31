// todo this components will represent movie data (image, plot, rating, director, year)

import React, { Component } from 'react';
import ReviewList from './review-list';

export class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews,
            review: props.review
        };
    }

    render() {
        let reviews;

        if (this.state.reviews) {
            reviews = this.state.reviews.map((review, id) => {
            {console.log('what is a review?', review)};
             <ReviewList key={id} {...review} />
            });
            console.log('these are the reviews:', reviews);
        }


        console.log('these are the reviews via props:', this.state.reviews)
        return (
            <>
                <div className='ul mt-4 row'>
                    <div className='li col'>
                        <h3>Star Wars: A New Hope</h3>
                        <img width='33%' src='https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480' alt='start wars a new hope poster'></img>
                        <p className='col-4'>With the planet-destroying power of the Death Star, the Empire looks to cement its grip on the galaxy. Meanwhile, farm boy Luke Skywalker rises to face his destiny.</p>
                        <br></br>
                        <p>Release date: May 25, 1977 (USA)</p>
                        <p>Director: George Lucas</p>
                        <p>Writer: George Lucas</p>
                        <p>Stars: Mark Hamill, Harrison Ford, Carrie Fisher</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Movie