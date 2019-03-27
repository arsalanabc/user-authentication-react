import React, { useState } from 'react'
import { userSignIn } from "../firebase/firebase-auth";

const signin = () => {

    const [login, setLogin] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authenticate = (e) => {
        e.preventDefault()
        userSignIn(email, password)
    }

    return(
        <div className='signin-form'>
            <form onSubmit={authenticate}>
                <h4>Please Sign In</h4>
                <label>Email: </label>
                <input type='text' id='email' value={login.email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <label>Password:</label>
                <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
                <br/>
                <button type='submit' onSubmit={authenticate}> Sign In</button>
            </form>
        </div>
    )
}

export default signin