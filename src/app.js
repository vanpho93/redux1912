import React from 'react';
import ReactDOM from 'react-dom';

const redux = require('redux');

ReactDOM.render(
    <p>Helo</p>,
    document.getElementById('root')
);

// spread operator

const reducer = (state = { money: 100 }, action) => {
    return state;
};

const store = redux.createStore(reducer);

console.log(store.getState());

/*
    reducer -> pure function
    store -> 
    state -> Trang thai 
*/
