import React, { useState } from 'react';
import "./App.css"
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import {connect} from 'react-redux';
import {add_todo_list}  from './action';
import ListItem from "./Components/listItem";

library.add(faTrash);
const App=(props)=>{
  
  const [todo_input_text,set_todo_input_text]=useState('');
 
  //console.log(todo_input_text); 
 
  const  inputChangeHandler=(e)=>{
     set_todo_input_text( [e.target.name]=e.target.value);
  }

 const handelSubmit=(e)=>{
   e.preventDefault();
  const todo_text={
     _id:Number(new Date()),
     text:todo_input_text,
    }
    props.add_todo_list(todo_text);
 }

    return (
      <div className="app">
      
        <form className="todo__form" onSubmit={handelSubmit}>
          <p>To-do</p>
          <input className="todo__input"
                 type="text"
                 name='todo_input_text'
                 value={todo_input_text}
                 placeholder="Enter your text"
                 onChange={inputChangeHandler} />
          <button>ADD</button>
        </form>
         <ListItem />
        </div>
    );
}
export default connect(null,{add_todo_list})(App);