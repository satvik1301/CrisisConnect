import React from 'react'

const Settings = () => {
    return (
        <div className="App" >
            <header className="App-header">
                <h1>Settings</h1>
                <label>Set banner notification text</label>
                <textarea rows="4" columns="50"/>
                <br/>
                <input type="checkbox" id="myCheckbox" value="option1"/>
                <label for="myCheckbox">Send out an email notification about this update</label>
                <button>Update</button>
                <br/>
                <label>Set service a subtext</label>
                <textarea rows="4" columns="50"/>
                <br/>
                <button>Update</button>
            </header>
        </div>
        
    )
}

export default Settings