import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <p>Helo</p>,
    document.getElementById('root')
);

// spread operator

const a = { name: 'Pho' };
const b = { height: 180, ...a, age: 18 };

const c = [1, 3, 5, 7];
const d = [0, ...c, 9];
console.log(d);
