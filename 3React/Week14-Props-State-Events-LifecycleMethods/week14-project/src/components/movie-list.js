//todo this will be a container for all the movie components and their data

import React, { Component } from 'react';
import Movie from './movie';

export default class MovieList extends Component {
    render() {
        let movieOne = {
            image:
                "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
            title: "John Wick",
            about:
                "With the untimely death of his beloved wife still bitter in his mouth, John Wick, the expert former assassin, receives one final gift from her--a precious keepsake to help John find a new meaning in life now that she is gone. But when the arrogant Russian mob prince, Iosef Tarasov, and his men pay Wick a rather unwelcome visit to rob him of his prized 1969 Mustang and his wife's present, the legendary hitman will be forced to unearth his meticulously concealed identity. Blind with revenge, John will immediately unleash a carefully orchestrated maelstrom of destruction against the sophisticated kingpin, Viggo Tarasov, and his family, who are fully aware of his lethal capacity. Now, only blood can quench the boogeyman's thirst for retribution. —Nick Riganas",
            year: "2014",
            rating: "R",
            length: "1h 41min",
        };

        let movieTwo = {
            image:
                "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg",
            title: "John Wick: Chapter 2",
            about:
                "Bound by an inescapable blood debt to the Italian crime lord, Santino D'Antonio, and with his precious 1969 Mustang still stolen, John Wick--the taciturn and pitiless assassin who thirsts for seclusion--is forced to visit Italy to honour his promise. But, soon, the Bogeyman will find himself dragged into an impossible task in the heart of Rome's secret criminal society, as every killer in the business dreams of cornering the legendary Wick who now has an enormous price on his head. Drenched in blood and mercilessly hunted down, John Wick can surely forget a peaceful retirement as no one can make it out in one piece. —Nick Riganas",
            year: "2017",
            rating: "R",
            length: "2h 2min",
        };
        let movieThree = {
            image:
                "https://image.tmdb.org/t/p/original/jeNTqOnux7KSulznSh4UdiDlfmV.jpg",
            title: "John Wick: Chapter 3 - Parabellum",
            about:
                "In this third installment of the adrenaline-fueled action franchise, skilled assassin John Wick (Keanu Reeves) returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin's guild, the High Table, John Wick is excommunicado, but the world's most ruthless hit men and women await his every turn. -IMDB",
            year: "2019",
            rating: "R",
            length: "2h 10min",
        };
        return (
            <>
                <div className='row'>
                    <div className='col-lg-12'>
                        {/* passing object props of movieOne to instance of components class Movie */}
                        <Movie {...movieOne} />
                        {/* {console.log(movieOne)}; */}
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-12'>
                        {/* passing object props of movieTwo to instance of components class Movie */}
                        <Movie {...movieTwo} />
                        {/* {console.log(movieTwo)}; */}
                    </div>
                </div>  

                <div className='row'>
                    <div className='col-lg-12'>
                        {/* passing object props of movieThree to instance of components class Movie */}
                        <Movie {...movieThree} />
                        {/* {console.log(movieThree)}; */}
                    </div>
                </div>
            </>
        );
    }
}