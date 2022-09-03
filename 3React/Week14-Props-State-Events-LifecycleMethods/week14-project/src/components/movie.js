// todo this components will represent movie data (image, plot, rating, director, year)

import React, { Component } from 'react';
import Review from './review';

export class Movie extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         reviews: props.reviews,
    //         text: props.text
    //     };
    // }

    render() {
        // console.log('move props:', this.state.text)
        // let reviews;

        // if (this.state.reviews) {
        //     reviews = this.state.reviews.map((review, id) => {
        //     {console.log('what is a review?', review)};
        //      <ReviewList key={id} {...review} />
        //      return reviews;
        //     });
        //     console.log('these are reviews:', this.state.reviews);
        //     console.log('this is a review:', this.props.reviews);            
        // }
        // console.log('these are the reviews via props:', this.state.reviews)
        
        // console.log('this is the username:', this.state.reviews[0].username)
        // console.log('this is the text:', this.state.reviews[0].text)

        return (
            <>
                {/* <div className='ul mt-4 row'>
                    <div className='li col'>
                        <h3>Star Wars: A New Hope</h3>
                        <img width='33%' src='https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480' alt='start wars a new hope poster'></img>
                        <p className='col-4'>With the planet-destroying power of the Death Star, the Empire looks to cement its grip on the galaxy. Meanwhile, farm boy Luke Skywalker rises to face his destiny.</p>
                        <p>Release date: May 25, 1977 (USA)</p>
                        <p>Director: George Lucas</p>
                        <p>Writer: George Lucas</p>
                        <p>Stars: Mark Hamill, Harrison Ford, Carrie Fisher</p>
                    </div>
                </div> */}
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
                                        <div className='col-2'>Year: {this.props.year}</div>
                                        <div className='col-2'>Rated: {this.props.rating}</div>
                                        <div className='col-3'>Runtime: {this.props.length}</div>
                                        <div className='col-12'><Review /></div>
                                    </div>
                                </div>
                            </li>
                            {/* <div className='row text-start' id='data'>
                                <div className='col-2'>Year: {this.props.year}</div>
                                <div className='col-2'>Rated: {this.props.rating}</div>
                                <div className='col-2'>Runtime: {this.props.length}</div>
                            </div> */}

                            
                            {/* <div className='col-sm mt-4'>
                                <Stars />
                            </div> */}
                        </ul>
                    </section>
                </div>
                
                
            </>
        );
    }
}

export default Movie