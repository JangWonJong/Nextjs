import style from "./style/team.module.css"
import { useState } from "react"

export default function TeamForm(){
    
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {teamid, orgy, favteam} = inputs

    const handleSubmit = e => {
        e.preventDefault()
        alert(`등록할 팀 정보 : ${teamid, orgy, favteam}`)
    
    }
    const handleClick =(e) =>{
        e.preventDefault()
        
        
    }  
    return (<>
        <div className={style.container}>
            <form action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="teamid">Team ID</label>
                </div>
                <div className={style.col75}>
                <input type="text" className="input-text" id="teamid" name="teamid" value="1"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="orgy">창단년도</label>
                </div>
                <div className={style.col75}>
                <input type="text" id="orgy" name="orgy" value="Owen"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="favteam">응원팀</label>
                </div>
                <div className={style.col75}>
                <select id="favteam" name="favteam">
                    <option value="K09" selected>서울 FC서울</option>
                    <option value="K02">수원 삼성블루윙즈</option>
                    <option value="K04">인천 유나이티드</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">Subject</label>
                </div>
                <div className={style.col75}>
                <textarea id="subject" name="subject" text="화이팅 FC서울" style="height:200px"></textarea>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" value="Submit"/>
            </div>
            <label htmlFor=""><b>num2</b></label><br/>
            <input name="num2" type="text" onChange={handleSubmit} /><br/> 
            <button onClick={handleSubmit}>전 송</button><br/>
            <div>등록 팀 정보: {teamid + orgy + favteam} </div>
                    
            </form>
            </div>
    </>)
}