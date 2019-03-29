import React, { useEffect, useState, Component } from 'react';
import { Redirect, BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signin'
import signup from './pages/signup'
import './App.css';

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const Notfound = () => <h1>Not found</h1>

    return (
        <BrowserRouter>
            <div className="App">
                <h1> Single Page User Authentication Demo</h1>
                <div className='menu-bar'>
                    {isLoggedIn ?
                        <p><NavLink to={'/home'}> Home </NavLink></p>
                        :
                        <>
                        <p><NavLink to={'/signin'}> Sign In </NavLink></p>
                        <p><NavLink to={'/signup'} > Sign Up </NavLink></p>
                        </>
                    }
                </div>
            </div>

            <div className="content">
                <Switch>
                    <Route path='/signin' render={(props) =>
                        <Signin setLoggedIn={setIsLoggedIn}
                        isLoggedIn={isLoggedIn}
                                {...props} />
                    } />
                    <Route path='/home' render={(props)=>
                        <Home isLoggedIn={isLoggedIn} />} />
                    <Route path='/signup' component={signup} />
                    <Route render={Notfound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )

}

export default App
