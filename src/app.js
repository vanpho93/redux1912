import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Box from './components/Box';
//react-redux

const redux = require('redux');

const reducer = (state = { value: 0 }, action) => {
    if (action.type === 'ADD_VALUE') return { ...state, value: state.value + 1 };
    return state;
};

const store = redux.createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Box />
    </Provider>,
    document.getElementById('root')
);



console.log(store.getState());

// store.dispatch({ type: 'ADD_VALUE' });

console.log(store.getState());
// spread operator

// const reducer = (state = { money: 100, gold: 10 }, action) => {  
    //     switch (action.type) {
    //         case 'ADD_GOLD':
    //             return { ...state, gold: state.gold + action.amount };
    //         case 'ADD_MONEY':
    //             return { ...state, money: state.money + 1 };
    //         default:
    //             return state;
    //     }
    // };
    // const store = redux.createStore(reducer);
    // store.dispatch({ type: 'ADD_MONEY' });
    // store.dispatch({ type: 'ADD_GOLD', amount: 10 });
    // console.log(store.getState());
