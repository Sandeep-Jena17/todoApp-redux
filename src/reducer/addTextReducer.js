const intialText=[];
export  const addTextReducer=(state=intialText,action)=>{
 switch(action.type){
     case "ADD_TODO_LIST":
         return [...state,action.payload];
     case "REMOVE_TODO_LIST":
         const newState=[...state].filter((copyState)=>{
            return  copyState._id!==action.payload
         })       
       return newState;
       case "UPDATE_TODO_LIST":
         console.log(state);  
         return state;
         
        
         
     default :return state;
 }
}