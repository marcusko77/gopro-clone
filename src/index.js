import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import { unregister } from './registerServiceWorker'
import store from './store';
import './styles/main.css'





ReactDOM.render(
  
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
    , document.getElementById('root'));
unregister();

