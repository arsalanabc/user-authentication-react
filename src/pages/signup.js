import React from 'react'

const signup = () => {
    const signup = () => {}
    return(
        <div>
            <form className='form' onSubmit={signup}>
                <h4> Please Sign Up</h4>
                <label> First Name: </label>
                <input type='text'/>
                <br/>
                <label> Last Name: </label>
                <input type='text'/>
                <br/>
                <label> Email: </label>
                <input type='email'/>
                <br/>
                <label> Password: </label>
                <input type='password'/>
                <br/>
                <label> Confirm Password: </label>
                <input type='password'/>
                <br/>
                <button type='submit'> Sign In</button>
            </form>
        </div>
    )
}

export default signup