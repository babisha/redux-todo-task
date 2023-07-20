import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({ 
    name: 'todo',
    initialState: 0,
    reducers : {
        increment(state){
            // this will update the state
            state = state + 1
        },
    },
})

const todoReducer = todoSlice.reducer

export default todoReducer