import React, { useState } from 'react'

function SignUp() {
    const [user,setUser] = useState(null);

    const signUp = () => {

    };


  return (
    <div className='signUp'>
        <label htmlFor="">Sign Up</label>

        <input 
        type="text"
        placeholder='First Name'
        onChange={(event) => {setUser({...user, firstName: event.target.value})}}
        />

        <input 
        type="text"
        placeholder='Last Name'
        onChange={(event) => {setUser({...user, lastName: event.target.value})}}
        />

        <input 
        type="text"
        placeholder='User Name'
        onChange={(event) => {setUser({...user, userName: event.target.value})}}
        />

        <input 
        type="password"
        placeholder='Password Name'
        onChange={(event) => {setUser({...user, password: event.target.value})}}
        />

        <button onClick={signUp}>Sign Up</button>
    </div>
  )
}

export default SignUp