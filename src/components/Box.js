import React, { Component } from 'react';
import BoxForm from './BoxForm';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    add() {
        this.state.value++;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <h3>{this.state.value}</h3>
                <button onClick={this.add.bind(this)}>Easy add</button>
                <BoxForm parent={this} />
            </div>
        );
    }
}
