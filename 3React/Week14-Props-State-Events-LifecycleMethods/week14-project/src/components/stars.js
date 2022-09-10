//todo This component will be for the star rating

import React, { Component } from 'react';
// import { Rating } from 'react-simple-star-rating'
import { Rating } from '@mui/material';
import { Star } from '@mui/icons-material';

export default class Stars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onChange: props.onChange,
            onSubmit: props.onSubmit
        }
    }
    render() {
        return (
            <>
                <h4>What's your rating?</h4>
                <Rating
                    onChange={this.state.onChange}
                    onSubmit={this.state.onSubmit}
                    name="hover-feedback"
                    precision={0.5}
                    emptyIcon={<Star style={{ opacity: 0.55 }}  />}
                />                
            </>
        )
    }
}

// import React, { useState } from "react";

// const StarRating = () => {
//     const [rating, setRating] = useState(0);
//     const [hover, setHover] = useState(0);
//     return (
//         <div className="star-rating">
//             {[...Array(5)].map((star, index) => {
//                 index += 1;
//                 return (
//                     <button
//                         type="button"
//                         key={index}
//                         className={index <= ((rating && hover) || hover) ? "on" : "off"}
//                         onClick={() => setRating(index)}
//                         onMouseEnter={() => setHover(index)}
//                         onMouseLeave={() => setHover(rating)}
//                     >
//                         <span className="star">&#9733;</span>
//                     </button>
//                 );
//             })}
//         </div>
//     );
// };

// export default StarRating;