import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({ 
    name: 'todo',
    initialState: [{
        name: "Danny",
        address: "123 main st",
    }],
    reducers : {
        increment:(state, action)=>{
            // this will update the state
          
          const newName = {name:action.payload.name, address:action.payload.address}
        
          state.push(newName);
        },
        deleteItem:(state, action)=> {
            return state.filter((name)=>name.name="Danny")
        }
    },
})

const todoReducer = todoSlice.reducer

export const {increment}= todoSlice.actions
export default todoReducer