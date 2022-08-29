import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    // !Not using for Events Part 2
    // this.state = {
    //     name: props.name,
    //     count: 0
    // };
    // bind THIS object
        this.handleClick = this.handleClick.bind(this);
    }

    //      
    handleClick() {
        // !Not using for Events Part 2
        // this.setState(state => ({count: state.count + 1}));
        this.props.action(this.props.name);
    }

  render() {
    return (
        <div className='container mt-4'>
            <button
                className='btn btn-primary'
                //* onClick is camelCase
                onClick={this.handleClick}>
                {this.props.name} {this.props.count}
            </button>
        </div>
    );
  }
}


