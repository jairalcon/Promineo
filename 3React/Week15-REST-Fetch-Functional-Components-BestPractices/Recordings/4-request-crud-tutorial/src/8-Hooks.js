import React, { useState, useEffect } from "react";

export default function Hooks() {
    // state first, method second / pass in default value into useState parameter
    const [ isOn, setIsOn] = useState(false);
    // keep count of time switch has been clicked, destructure with useState and starting value of (0)
    const [clickCount, setClickCount] = useState(0);

    // use effect is a function, callback that runs every time it renders
    useEffect(() => {
        // changes title on tab in browser
        document.title = isOn ? 'ON' : 'OFF';
        // good place to put HTTP calls, asynchronous input/output
    });
  return (
    <div>Hooks
        <p>{isOn ? 'Yes, it is on' : 'OFF'}</p>
            {/* keeps track of time being clicked */}
            <p>Times Clicked: {clickCount}</p>
            {/* set anonymous function to be able to determine what happens*/}
        <button onClick={() => {
            setIsOn(!isOn);
            // setting what previous click count was and adding one to it
            setClickCount(clickCount + 1);
            }
        }>Switch</button>
    </div>
  );
}
