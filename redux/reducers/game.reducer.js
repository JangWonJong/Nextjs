import { createSlice } from "@reduxjs/toolkit"

const gameSlice = createSlice({
    name: 'games',
    initialState: [],
    reducers:{
    access(state, action){}
    }
})
    


const {actions, reducer} = gameSlice
export const {access} = actions
export default reducer