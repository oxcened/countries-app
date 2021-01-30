import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/style.scss';
import Loader from './app/components/Loader/Loader';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <Loader />
    </React.StrictMode>,
    document.getElementById('root')
);
