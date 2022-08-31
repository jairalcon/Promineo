//todo this will be a container for all the movie components and their data

import React, { Component } from 'react'
import { Movie } from './movie'
import Stars from './stars'

export default class MovieList extends Component {
    render() {
        return (
            <div className=''>
                <Movie />
            </div>
        )
    }
}
