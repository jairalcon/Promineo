// todo this components will represent movie data (image, plot, rating, director, year)

import React, { Component } from 'react'
import Stars from './stars'

export class Movie extends Component {
    render() {
        return (
            <>
                movie data with title, plot, rating, year, director
                <div className='container'>
                    <Stars />
                </div>
            </>
        )
    }
}

export default Movie