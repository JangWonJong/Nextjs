import axios from 'axios';
import React, { useState } from 'react'



export default function SignUp(){
    const [inputs, setInputs] = useState({})
    const {username, password, name, telephone} = inputs;
    
    const handleChange = e =>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value})    
    }
    const handleSubmit = async e => {
        e.preventDefault()
        alert(`${username}님 회원가입을 축하합니다`)
        axios.post('http://localhost:5000/api/user/sign-up', inputs)       
        .then(res => {            
            const login = res.data
            console.log(JSON.stringify(res.data))
            document.getElementById(`result-span`).innerHTML = `
            <h3>사용자 ID : ${login.username}</h3>
            <h3>비밀번호 : ${login.password}</h3>
            <h3>이름 : ${login.name}</h3>
            <h3>전화번호 : ${login.telephone}</h3>
            `
        })
        .catch(err => (err))
    }  
   
   
    return (<>
    <form onSubmit={handleSubmit}>
    <h1>회원가입폼</h1>
    
    <div>
    
    <label><b>사용자 ID</b></label>
    <input type="text" name='username' onChange = {handleChange} /><br />
    
    <label htmlFor=""><b>비밀번호</b></label>
    <input type="text" name='password'  onChange = {handleChange}/><br />

    <label><b>이름</b></label>
    <input type="text" name='name' onChange = {handleChange} /><br />

    <label><b>전화번호</b></label>
    <input type="text" name='telephone' onChange = {handleChange} /><br />
    
    <input type="submit" value="가입" ></input>
    
    </div>    
    </form>
    <div> <span id = "result-span"></span></div> 
    </>)
}