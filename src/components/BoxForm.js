import React, { Component } from 'react';
import { connect } from 'react-redux';

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }
    add() {
        const { dispatch } = this.props;
        dispatch({ type: 'ADD_VALUE' });
    }
    render() {
        return (
            <div>
                <button onClick={this.add.bind(this)}>Hard add</button>
            </div>
        );
    }
}

module.exports = connect()(BoxForm);
