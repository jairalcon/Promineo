import React, { Component } from 'react';
import SecondCounter from './second-counter';

export default class SecondCounterContainer extends Component {
    constructor() {
        super();
        this.state = {
            showCounter: true
        };
    }
    render() {
        return (
            <div>
                {this.state.showCounter ? <SecondCounter /> : null}
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                showCounter: false
            });
        }, 11000);
    }
}
