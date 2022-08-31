// todo this components will represent movie data (image, plot, rating, director, year)

import React, { Component } from 'react'
import ReviewList from './review-list'
import Stars from './stars'

export class Movie extends Component {
    render() {
        return (
            <>
                <div className='ul mt-4 row'>
                    <div className='li col'>
                        <h3>Star Wars: A New Hope</h3>
                        <img width='33%' src='https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480'></img>
                        <p className='col-4'>With the planet-destroying power of the Death Star, the Empire looks to cement its grip on the galaxy. Meanwhile, farm boy Luke Skywalker rises to face his destiny.</p>
                        <br></br>
                        <p>Year:</p>
                        <p>Directed by:</p>
                        <Stars />
                        <ReviewList />
                    </div>
                </div>
            </>
        )
    }
}

export default Movie