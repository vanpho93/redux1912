import React from 'react';
import ReactDOM from 'react-dom';

const redux = require('redux');

ReactDOM.render(
    <p>Helo</p>,
    document.getElementById('root')
);

// spread operator

const reducer = (state = { money: 100, gold: 10 }, action) => {
    if (action.type === 'ADD_MONEY') return { ...state, money: state.money + 1 };
    // if (action.type === 'ADD_MONEY') {
    //     state.money++;
    //     return state;
    // }
    return state;
};

const store = redux.createStore(reducer);

store.dispatch({ type: 'ADD_MONEY' });

console.log(store.getState());

/*
    reducer -> pure function
    store -> 
    state -> Trang thai 
*/
