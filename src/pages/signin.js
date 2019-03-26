import React from 'react'

const signin = () => {

    const authenticate = () => {}

    return(
        <div className='signin-form'>
            <form onSubmit={authenticate}>
                <h4>Please Sign In</h4>
                <label>Email:</label>
                <input value='text'/>
                <br/>
                <label>Password:</label>
                <input type='password'></input>
                <br/>
                <button type='submit'> Sign In</button>
            </form>
        </div>
    )
}

export default signin