// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import './global.css'
import 'bootstrap/dist/css/bootstrap.css'


import App from './components/App'


//const jsx = <h1>Hello, Platzi Badges!</h1>;
//const element = React.createElement('a', {href:'http://localhost:3000'}, 'hola soy el children')



const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render( <App/> , container);


//truco para saber que es un componente 
//preguntarte: 
// - que elementos se repiten?
// - que elementos cumplen una funcion especifica? 