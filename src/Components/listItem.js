import React from 'react';
import "./listItem.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

import {connect} from "react-redux"
import { remove_todo_list} from '../action';
import{update_Todo_list} from '../action';
const ListItem=(props)=>{
 

    const deleteTodoListHandler=(textKey)=>{
      props.dispatch(remove_todo_list(textKey));

    }

    const update_Todo_list_handler=(text,key)=>{
         //console.log(text,key);    
        props.dispatch(update_Todo_list(text,key));
    }
    const items=props.text_item;
    console.log(items);
    const listItem=items.map((item)=>{
        return  <div className="list" key={item._id}>
             <p>
              <input type="text" 
              id={item._id} 
              onChange={(e)=>update_Todo_list_handler(e.target.value,item._id)}
              value={item.text}
              
               />
              <span>
              <FontAwesomeIcon className='faicons' 
              icon='trash'
               onClick={()=>deleteTodoListHandler(item._id)}/>
              </span>
             </p>
            </div>
        
    })

    return ( 
    <FlipMove>
        {listItem}
    </FlipMove>
    
    )
};
const mapStatesToProps=(state)=>{
 return{
     text_item:state.todo_Text
 }
}
export default connect(mapStatesToProps)(ListItem);