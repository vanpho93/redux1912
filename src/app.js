import React from 'react';
import ReactDOM from 'react-dom';

const redux = require('redux');

ReactDOM.render(
    <p>Helo</p>,
    document.getElementById('root')
);

// spread operator

const reducer = (state = { money: 100, gold: 10 }, action) => {  
    switch (action.type) {
        case 'ADD_GOLD':
            return { ...state, gold: state.gold + 1 };
        case 'ADD_MONEY':
            return { ...state, money: state.money + 1 };
        default:
            return state;
    }
};

const store = redux.createStore(reducer);

store.dispatch({ type: 'ADD_MONEY' });
store.dispatch({ type: 'ADD_GOLD' });
store.dispatch({ type: 'ADD_MONEY' });
store.dispatch({ type: 'ADD_GOLD' });

console.log(store.getState());
