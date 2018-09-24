import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store'; 
import registerServiceWorker from './registerServiceWorker';

var app = <Provider store={store}>
                <App />
            </Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
