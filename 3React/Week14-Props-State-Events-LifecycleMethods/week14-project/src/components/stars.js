//todo This component will be for the star rating

import React, { Component } from 'react';
import { Rating } from '@mui/material';

export class Stars extends Component {
    render() {
        return (
            <>
                <h4>What's your rating?</h4>
                <Rating 
                    id='rating'
                    initialRating={2.5}
                    readonly
                />
            </>
        )
    }
}

export default Stars

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