import React from 'react'

const Settings = () => {
    return (
        <div className="App" >
            <header className="App-header">
                <h1>Settings</h1>
                <label>Set Banner Notification Text</label>
                <textarea rows="4" columns="50"></textarea>
                <br></br><br></br>
                <button>Update</button>
            </header>
        </div>
        
    )
}

export default Settings