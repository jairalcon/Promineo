import React from "react";

//! just a UI component with no logic inside

const CardBody = (props) => {
    return(
        <div className="card-body">
            <p className="card-text">Click Count: {props.count} </p>
            <button className="btn btn-primary" onClick={props.handleIncrement}
            >Increment</button>{" "}
            <button className="btn btn-danger" onClick={props.handleDecrement}
            >Decrement</button>
        </div>
    );
}

export default CardBody;