import React, {useEffect} from 'react'
import {Redirect} from "react-router-dom";

const Home = (props) => {

    const checkForLogin = () =>
        !props.isLoggedIn ?
        <Redirect to='/signin' />
        : null

    return(
        <div>
            {checkForLogin()}
            <h2>Hello </h2>
            <p>Welcome to my demo on creating a single page application for user authentication.

            My goal is to include two types of authentications: Auth0 and simple login checks from backend server.
                I will try to use Firebase for logins and lastly create a simple login system using postgres</p>
        </div>
    )
}

export default Home