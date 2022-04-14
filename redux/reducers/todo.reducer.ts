import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
        addTodo(state, action){
            alert('리듀서 내부로 들어온 ?'+ action.payload.task)
            const todo = {id: new Date(), task: action.payload.task, completed: false}
            state.push(todo)
        }
    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer