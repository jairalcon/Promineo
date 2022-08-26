import React, { Component } from 'react';
// import LoginForm from './components/login-form';
import MainPage from './components/main-page';
// import NavBar from './components/nav-bar';


export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <MainPage/>
        </div>
      </div>
    )
  }
}