import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css'
import 'toastr/build/toastr.css'

const WithRouter = () => <BrowserRouter><App/></BrowserRouter>

ReactDOM.render(<WithRouter />, document.getElementById('root'));

serviceWorker.unregister();

