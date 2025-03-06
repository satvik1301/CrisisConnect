import React, { useState } from "react";

const AlertButton = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const sendEmailAlert = async () => {
        try {
            const response = await fetch("http://localhost:5000/sendAlert", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, body }),
            });

            const data = await response.json();
            if (data.success) {
                alert("Email Sent Successfully!");
            } else {
                alert("Failed to send email.");
            }
        } catch (error) {
            console.error(" Error sending alert:", error);
            alert("Error sending email.");
        }
    };

    return (
        <div>
            <h2>Send an Email Alert</h2>
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
            <button onClick={sendEmailAlert}>🚀 Send Alert</button>
        </div>
    );
};

export default AlertButton;
