import React, { Component } from 'react';
import Counter from './counter';


export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {},
            highestCount: 0,
            //* EVENTS PART 3 - highest count name
            highestCountName: ''
        };
        this.countClicks = this.countClicks.bind(this)
    }

    countClicks(name) {
        this.setState(state => {            
            state.counts[name]
                ? state.counts[name] += 1
                : state.counts[name] = 1;
            //* EVENTS PART 3 - highest count name
            if (state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }
            return state;
        });
    }

  render() {
    return (
        <>
            <h2>{this.state.highestCountName}</h2>
            <Counter 
                name="one"
                count={this.state.counts.one}
                action={this.countClicks}
            />
            <Counter 
                name="one"
                count={this.state.counts.one}
                action={this.countClicks}
            />
            <Counter 
                name="two"
                count={this.state.counts.two}
                action={this.countClicks}
            />
            <Counter 
                name="two"
                count={this.state.counts.two}
                action={this.countClicks}
            />
            <Counter 
                name="three"
                count={this.state.counts.three}
                action={this.countClicks}
            />
        </>
    );
  }
}
