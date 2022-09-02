//todo This component will be for the star rating

import React, { Component } from 'react';
import { Rating } from '@mui/material';

export class Stars extends Component {
    render() {
        return (
            <>
                <h5>What's your rating?</h5>
                <Rating />
            </>
        )
    }
}

export default Stars