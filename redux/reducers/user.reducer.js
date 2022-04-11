import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    ame: 'users',
    initialState: [],
    reducers:{
    access(state, action){}
    }
})
    


const {actions, reducer} = userSlice
export const {access} = actions
export default reducer