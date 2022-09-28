import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Counter from './Redux/Counter';

// creating beginning of state data
const initialState = {
    count: 0
};

// 1. will be an argument inside the Store
// will take in currentState and then action (incrementor)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };

        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

// 2. passing in reducer function
const store = configureStore(reducer);

const ReduxApp = () => {
    return (
        // Provider component will pass down Store to each child component
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}

export default ReduxApp;

// OLD
// npm i redux react-redux
// ! NEW
// npm install @reduxjs/toolkit    