import React from "react";

function FunctionalComponent() {
    return(
        <div className="FunctionalComponent">
            {/* passed via props destructured on line 16 */}
            <Person name='Tom' age='32'/>
            <Person name='Sally' age='34'/>
        </div>
    );
}

// pass props via parameter
const Person = (props) => {
    // destructure props
    const {name, age} = props;
    return(
        <div>
            <h1>{name}</h1>
            <h2>Person Age: {age}</h2>
        </div>
    );
}

export default FunctionalComponent