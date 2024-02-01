const express = require('express');
const cron = require('node-cron');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function logMessage() {
    console.log('Cron job executed at:', new Date().toLocaleString());
}

cron.schedule('* * * * *', () => {
    logMessage();
});