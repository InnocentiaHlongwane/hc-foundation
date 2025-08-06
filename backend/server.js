const express = require('express');
const path = require('path');

console.log('✅ Starting server.js...');

const app = express();
const PORT = process.env.PORT || 3000;

// Check __dirname for debugging
console.log('📁 __dirname is:', __dirname);

// Serve static files from the parent directory
app.use(express.static(path.join(__dirname, '../')));

// Route for homepage
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '../index.html');
  console.log('📄 Trying to serve:', indexPath);

  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('❌ Error sending index.html:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at: http://localhost:${PORT}`);
});
