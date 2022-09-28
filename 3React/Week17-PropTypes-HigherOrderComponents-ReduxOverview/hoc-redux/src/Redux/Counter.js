//! separating UI features from functions

import React from "react";
// need to connect to Redux
import { connect } from "react-redux";
import CardBody from "./CardBody";

// will receive props as deconstructed
const Counter = ({ count, dispatch }) => {
    const handleIncrement = () => {
        //dispatches actions
        dispatch({ type: 'INCREMENT' });
    };

    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Click Counter! (Redux)
            </div>
            <CardBody
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement} />
        </div>
    );
}

const mapStateToProps = state => ({
    count: state.count
});

//! preferred method export default line
// const connectCounter = connect();
// const ReduxCounter = connectCounter(Counter);

export default connect(mapStateToProps)(Counter);