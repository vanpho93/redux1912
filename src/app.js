import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <p>Helo</p>,
    document.getElementById('root')
);

// spread operator

const a = { name: 'Pho' };
let b = { ...a };
a.name = 'SOn';

console.log(b);
console.log(a);
