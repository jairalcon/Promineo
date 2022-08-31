//! https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state

// todo this will be the App that will hold state data and all other components

import React, { Component } from 'react'
import MovieList from './components/movie-list'

export default class MovieApp extends Component {
  render() {
    return (
      <div className='container'>
        <MovieList />
      </div>
    )
  }
}

