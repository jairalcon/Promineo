//! https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state

// todo this will be the App that will hold state data and all other components

import React, { Component } from 'react'
import MovieList from './components/movie-list';

export default class MovieApp extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <h1 id='page-heading' className='mt-4 text-center'>Give these movies a rating and a review:</h1>
                <MovieList />
            </div>
        );
    }
}