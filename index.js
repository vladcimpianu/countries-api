const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const router = require('./config/routes');
const customResponses = require('./middlewares/customResponses');

app.use(bodyParser.json());
app.use(customResponses);

// Use API routes in the app
app.use(router);
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World from Express'));

// Setup server port
const port = process.env.PORT || 3000;
// Launch app  to listen to specified port
app.listen(port, function () {
     console.log(`Running RestHub on port ${port}`);
});