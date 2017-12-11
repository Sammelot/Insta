import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {LocaleProvider} from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';
import 'toastr/build/toastr.css';

import App from './App';
import './index.css';


const WithRouter = () => (
    <BrowserRouter>
        <LocaleProvider locale={esES}>
            <App/>
        </LocaleProvider>

    </BrowserRouter>
);


ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
