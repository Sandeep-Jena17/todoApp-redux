//create add action 

export const add_todo_list=(text)=>{
    return {
        type:'ADD_TODO_LIST',
        payload:text
    }
}

export const remove_todo_list=(textKey)=>{
    return{
         type:"REMOVE_TODO_LIST",
         payload:textKey
     }
}

export const update_Todo_list=(todo_text,todo_key)=>{
    return{
        type:"UPDATE_TODO_LIST",
        payload:{
            text:todo_text,
            key:todo_key
        }
    }
}