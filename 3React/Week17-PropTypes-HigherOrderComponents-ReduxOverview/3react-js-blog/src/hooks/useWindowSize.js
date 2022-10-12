import { useState, useEffect } from 'react';

// defining hook
const useWindowSize = () => {
    // setting state
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        // calling handelResize function once at load time
        handleResize();
        // this fires every time handleResize is called
        window.addEventListener('resize', handleResize);
        // prevents memory leak aka cleanUp function
        return () => window.removeEventListener('resize', handleResize);

    }, [])
    // returning customHook
    return windowSize;
}

export default useWindowSize;