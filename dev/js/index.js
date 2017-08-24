import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducers from './reducers';


const store = createStore(allReducers);
ReactDOM.render( <Provider store={store}> <App /> </Provider>, document.getElementById('root'));
