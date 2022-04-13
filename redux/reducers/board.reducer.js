import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const boardSlice = createSlice({
    name: 'boards',
    initialState: [],
    reducers:{
        addTitle(state, action){
            alert('들어온 게시글제목' + action.payload.title)
            const board = {id: new Date(), title: action.payload.title, completed: false}
            state.push(board)
        },
        addWriter(state,action){
            alert('올린 작성자' + action.payload.write)
            const board = {id: new Date(), write: action.payload.write, completed: false}
            state.push(board)
        },
        addTeam(state,action){
            alert('응원할 팀' + action.payload.team)
            const board = {id: new Date(), team: action.payload.team, completed: false}
            state.push(board)
        },
        addContent(state,action){
            alert('들어온 게시글' + action.payload.content)
            const board = {id: new Date(), content: action.payload.content, completed: false}
            state.push(board)
        }
    }
})
    


const {actions, reducer} = boardSlice
export const {addContent,addWriter,addTeam,addTitle} = boardSlice.actions
export default reducer