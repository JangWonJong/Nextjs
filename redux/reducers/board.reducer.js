import { createSlice } from "@reduxjs/toolkit"

const boardSlice = createSlice({
    name: 'boards',
    initialState: [],
    reducers:{
    access(state, action){}
    }
})
    


const {actions, reducer} = boardSlice
export const {access} = actions
export default reducer