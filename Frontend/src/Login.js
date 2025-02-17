import React from 'react'

const Login = () => {
    return (
        <div className="App" >
            <header className="App-header">
                <h1>Login</h1>
                <p>Username:</p>
                <input type = "text" placeholder="Enter your username" />
                <p>Password:</p>
                <input type = "password" placeholder="Enter your password" />
                <br></br>
                <button>Login</button>
            </header>
        </div>
        
    )
}

export default Login