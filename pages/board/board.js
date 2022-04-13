import axios from "axios";
import style from "board/style/board-form.module.css"
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addContent, addTeam, addTitle, addWriter } from "../../redux/reducers/board.reducer";

export default function BoardhtmlForm(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {title,  name, teamId} = inputs;
    const dispatch = useDispatch()
    //const [value, setValue] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        /*alert(`등록할 게시글 : ${JSON.stringify(inputs)}`)
        axios.post('http://localhost:5000/api/board/board', inputs)
        .then(res => {
            alert(JSON.stringify(res.data))
        })
        .catch(err => alert(err))*/
    }
    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({
            ...inputs, [name]: value
        })
    }
  
    return (<>
        <div className={style.container}>
            <form onSubmit={e=>{
                e.preventDefault()
                if(inputs) dispatch(addTitle({title:inputs}))
                if(inputs) dispatch(addWriter({write:inputs}))
                if(inputs) dispatch(addTeam({team:inputs}))
                if(inputs) dispatch(addContent({content:inputs}))

            }}>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="title">글 제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="title" name="title" onChange={e=>setInputs(e.target.inputs)}/>
                </div>
            </div>
            
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">작성자</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="name" name="name" onChange={e=>setInputs(e.target.inputs)}/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">팀명</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={e=>setInputs(e.target.inputs)}>
                    <option value="K09" >FC 서울</option>
                    <option value="K02" >수원 삼성 블루윙즈</option>
                    <option value="K04" >인천 유나이티드</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" style={{height:200 + "px"}} onChange={e=>setInputs(e.target.inputs)}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
            <input type="submit"  className={style.inputSubmit} value="Submit" />
            
            </div>
            </form>
            </div>
    </>)
}
