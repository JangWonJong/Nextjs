import { createSlice } from "@reduxjs/toolkit"

const basicSlice = createSlice({
    name: 'basics',
    initialState: [],
    reducers:{
    access(state, action){}
    }
})

export default basicSlice.reducer