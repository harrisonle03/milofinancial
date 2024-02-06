const cron = require('node-cron');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/data', (req, res) => {
  try {
    // Your API logic here
    const responseData = { message: 'Hello from the server!' };
    res.json(responseData);
  } catch (error) {
    console.error('Error handling /api/data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Schedule tasks to be run on the server.
cron.schedule('* * * * * *', function() {
  console.log('running a task every second');
});