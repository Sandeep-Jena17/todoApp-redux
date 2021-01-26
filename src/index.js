import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
const store=createStore(reducer);
console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState());
})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.querySelector("#root")
);