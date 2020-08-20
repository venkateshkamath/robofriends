import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './container/App.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render( 
  <React.StrictMode>
  <div>
  <App />
   </div>
  </React.StrictMode>, //Coma has to be noted. The above name,email,id can be accessed in the Card.js without using the prop.
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
