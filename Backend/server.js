const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const app = express();

// Middleware
app.use(cors({ origin: '*', credentials: true, optionSuccessStatus: 200 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); // You don't really need both express.json() AND bodyParser.json(), but it's fine if both are present
app.use((req, res, next) => {
    console.log(`➡️ ${req.method} request to ${req.url}`);
    next();
});

// Routes
app.use('/', router);

// Server Start
const port = 5000;
app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});
