import React, { Component } from 'react';
import NavBar from './nav-bar';
import LoginForm from './login-form';

export default class MainPage extends Component {
    render() {
        return (
            <>
            <NavBar/>
            <LoginForm/>
            </>
        )
    }
}