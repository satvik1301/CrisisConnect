
async function fetchMessage() {
    try {
        const response = await fetch('http://localhost:5000/api/message');
        const data = await response.json();
        document.getElementById('message').innerText = data.message;
    } catch (error) {
        console.error('❌ Error fetching the message:', error);
    }
}


async function sendEmailAlert() {
    try {
        const response = await fetch('http://localhost:5000/sendAlert', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: "🚨 Alert triggered from the frontend!" })
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
}
