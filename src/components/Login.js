import React, { useState } from 'react'

function Login() {

    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);

    const login = () => {

    };


  return (
    <div className='login'>
        <label htmlFor="">Log In</label>

        <input 
        type="text"
        placeholder='User Name'
        onChange={(event) => {setUsername({...username, userName: event.target.value})}}
        />

        <input 
        type="password"
        placeholder='Password Name'
        onChange={(event) => {setPassword({...password, password: event.target.value})}}
        />

        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login