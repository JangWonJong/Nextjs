import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
    access(state, action){}
    }
})

const {actions, reducer} = todoSlice
export const {access} = actions
export default reducer