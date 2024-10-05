const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to my portfolio API' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
