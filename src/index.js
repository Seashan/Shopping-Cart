import React from "react";
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import  {Provider}from 'react-redux';
import Reducer from './redux/reducer.js'

import Shop from './components/Shop';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

let store =createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
        <Shop />
    </Provider>,
    document.getElementById("root")
)
registerServiceWorker();