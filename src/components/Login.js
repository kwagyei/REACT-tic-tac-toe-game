import React, { useState } from 'react'

function Login() {

    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const login = () => {

    };


  return (
    <div className='login'>
        <label htmlFor="">Log In</label>

        <input 
        type="text"
        placeholder='User Name'
        onChange={(event) => {setUserName(event.target.value)}}
        />

        <input 
        type="password"
        placeholder='Password Name'
        onChange={(event) => {setPassword(event.target.value)}}
        />

        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login