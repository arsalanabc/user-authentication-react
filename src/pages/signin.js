import React, {Redirect, useState } from 'react'
import { userSignIn } from "../firebase/firebase-auth";


const signin = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authenticate = (e) => {
        e.preventDefault()
        userSignIn(email, password)
    }

    const fakelogin = () => {
       props.setLoggedIn(true)
        props.history.push('/home')
    }

    return(
        <div className='signin-form'>
            <form onSubmit={authenticate}>
                <h4>Please Sign In</h4>
                <label>Email: </label>
                <input type='text' id='email' value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <label>Password:</label>
                <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
                <br/>
                <button type='submit' onSubmit={authenticate}> Sign In</button>
            </form>
            <button onClick={fakelogin}>test</button>
        </div>
    )
}

export default signin