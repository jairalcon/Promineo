//! using 'with' for HOC file names
import React, { Component } from 'react';

const withRedBorder = (WrappedComponent) => {
    // will return a class component (life cycles methods)
    return class extends Component {
        render() {
            return (
                //adds styling
                <div style={{ border: '5px red solid' }}>
                    <WrappedComponent />
                </div>
            );
        }
    }
}

export default withRedBorder;