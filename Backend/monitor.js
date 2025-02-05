require("dotenv").config();
const nodemailer = require("nodemailer");
const axios = require("axios");

const SERVER_URL = "http://localhost:5000"; // need to update with the active server
const CHECK_INTERVAL = 5 * 60 * 1000; 


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


async function checkServer() {
    try {
        const response = await axios.get(SERVER_URL);
        console.log(`✅ Server is up: ${response.status}`);
    } catch (error) {
        console.error("❌ Server is down! Sending alert...");
        sendEmailAlert();
    }
}


function sendEmailAlert() {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ALERT_EMAIL,
        subject: "🚨 Server Down Alert!",
        text: `The server at ${SERVER_URL} is down. Please investigate immediately.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("❌ Failed to send email:", error);
        } else {
            console.log("✅ Alert email sent:", info.response);
        }
    });
}


setInterval(checkServer, CHECK_INTERVAL);

console.log("🔍 Server monitoring started...");
