import React, { useState } from 'react'
import { createUserandSignUp } from "../firebase/firebase-auth";

const signup = () => {

    const [userData, setUserData] = useState({})

    const updateState = (e) => {
        const key = e.target.id
        userData[key] = e.target.value
        setUserData(userData)
    }

    const callSignup = (e) => {
        createUserandSignUp(userData)
        e.preventDefault()

    }

    return(
        <div>
            <form onSubmit={callSignup}>
                <h4> Please Sign Up</h4>
                <label> First Name: </label>
                <input type='text' id="firstName" onChange={updateState}
                       value={userData.firstName}
                       />
                <br/>
                <label> Last Name: </label>
                <input type='text' id="lastName" onChange={updateState}
                       value={userData.lastName}/>
                <br/>
                <label> Email: </label>
                <input type='email' id="email" onChange={updateState}
                       value={userData.email}/>
                <br/>
                <label> Password: </label>
                <input type='password' id="password" onChange={updateState}
                       value={userData.password}/>
                <br/>
                <label> Confirm Password: </label>
                <input type='password' id="password" onChange={updateState}
                       value={userData.password}/>
                <br/>
                <button type='submit'> Sign In</button>
            </form>
        </div>
    )
}

export default signup