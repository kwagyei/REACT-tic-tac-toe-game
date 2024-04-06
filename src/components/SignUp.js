import React, { useState } from 'react';
import Axios from "axios"; 
import Cookies from "universal-cookie"; 



function SignUp() {
    const cookies = new Cookies();
    const [user,setUser] = useState(null);

    const signUp = async() => {
      await Axios.post("http://localhost:3001/signup", user).then( res => {
        const { token, userId, firstName, lastName, userName, hashedPassword } = res.data;
        
        cookies.set('token', token);
        cookies.set('userId', userId);
        cookies.set('firstName', firstName);
        cookies.set('lastName', lastName);
        cookies.set('userName', userName);
        cookies.set('hashedPassword', hashedPassword);

      });
      
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