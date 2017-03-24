import React, { Component } from 'react';

export default class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }
    handleAdd() {
        const { parent } = this.props;
        parent.state.value ++;
        parent.setState(parent.state);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleAdd.bind(this)}>Hard add</button>
            </div>
        );
    }
}
