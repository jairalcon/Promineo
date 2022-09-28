//! basic component

import React from 'react'
import withRedBorder from './withRedBorder';

const Hello = () => {
    return (
        <>
            Hello, world.
        </>
    );
}
// being updated by using a HOC 'withRedBorder' with reusability
export default withRedBorder(Hello);