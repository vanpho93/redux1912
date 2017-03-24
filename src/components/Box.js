import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxForm from './BoxForm';

class Box extends Component {
    add() {
        const { dispatch } = this.props;
        dispatch({ type: 'ADD_VALUE' });
    }

    render() {
        return (
            <div>
                <h3>{this.props.value}</h3>
                <button onClick={this.add.bind(this)}>Easy add</button>
                <BoxForm parent={this} />
            </div>
        );
    }
}

module.exports = connect(state => ({ value: state.value }))(Box);
