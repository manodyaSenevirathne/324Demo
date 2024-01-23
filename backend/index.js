const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

app.get('/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});