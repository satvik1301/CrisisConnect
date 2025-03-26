import React, { useState} from "react";

const Settings = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    


    return (
        <div className="App" >
            <header className="App-header">
                <h1>Settings</h1>
                <label>Set banner notification text</label>
                <textarea rows="4" columns="50"/>
                <br/>
                <label className="subtext" for="myCheckbox">Send out an email notification about this update</label>
                <input type="checkbox" id="myCheckbox" value="option1"/>
                <button>Update</button>
                <br/>
                <label>Set service a subtext</label>
                <textarea rows="4" columns="50"/>
                <br/>
                <button>Update</button>
                {/* 🚨 Debugging Section */}
                {/*<h2 style={{ background: "yellow", color: "black", padding: "10px" }}>
                    🛠 DEBUG: Checking Email Alert Section Visibility
                </h2>*/}
                    <label>Send an Email Alert</label>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <textarea 
                        placeholder="Message" 
                        value={body} 
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <button onClick={() => alert("🚀 Button Clicked!")}>🚀 Send Alert</button>

            </header>
        </div>
        
    )
}

export default Settings