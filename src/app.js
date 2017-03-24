import React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box';

const redux = require('redux');

ReactDOM.render(
    <Box />,
    document.getElementById('root')
);

// spread operator

const reducer = (state = { money: 100, gold: 10 }, action) => {  
    switch (action.type) {
        case 'ADD_GOLD':
            return { ...state, gold: state.gold + action.amount };
        case 'ADD_MONEY':
            return { ...state, money: state.money + 1 };
        default:
            return state;
    }
};

const store = redux.createStore(reducer);

store.dispatch({ type: 'ADD_MONEY' });
store.dispatch({ type: 'ADD_GOLD', amount: 10 });

console.log(store.getState());
