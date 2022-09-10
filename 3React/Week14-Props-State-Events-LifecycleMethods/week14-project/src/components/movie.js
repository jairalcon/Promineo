// todo this components will represent movie data (image, plot, rating, director, year)

import React, { Component } from 'react';
import Review from './review';

export class Movie extends Component {
    render() {
        return (
            <>
                <div>
                    <section className='container'>
                        <ul className='list-unstyled'>
                            <li className='media row mt-4'>
                                <img src={this.props.image} id='movie-image' className='img-fluid rounded' alt='movie-poster'></img>
                                <div className='media-body col-lg'>
                                    <h3 id='title'>
                                        {this.props.title}
                                    </h3>
                                    <p id='about'>{this.props.about}</p>
                                    <div className='row text-start' id='data'>
                                        <div className='col-sm'>Year: {this.props.year}</div>
                                        <div className='col-sm'>Rated: {this.props.rating}</div>
                                        <div className='col-sm'>Runtime: {this.props.length}</div>
                                        <div className='col-12'><Review /></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>   
            </>
        );
    }
}

export default Movie