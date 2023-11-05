const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const fs = require('fs');
const cors = require('cors');

const upload = multer({ dest: 'uploads/' });
// Enable All CORS Requests
app.use(cors());
// Serve static files from the Angular app
const angularDistFolder = path.join(__dirname, '../dist/client');
app.use(express.static(angularDistFolder));

app.get('/api/read-json', (req, res) => {
    const filePath = path.join(__dirname, 'uploads', 'sample.json');
  
    // Read the JSON file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading JSON file:', err);
        res.status(500).send('Error reading JSON file');
      } else {
        try {
          const jsonData = JSON.parse(data);
                // Modify the JSON data as needed

      // Write the updated data back to the file
      fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (writeErr) => {
        if (writeErr) {
          console.error('Error writing JSON data:', writeErr);
          return res.status(500).send('Error writing JSON data');
        }

        res.json(jsonData); // Respond with the updated JSON data
      });
        } catch (parseError) {
          console.error('Error parsing JSON data:', parseError);
          res.status(500).send('Error parsing JSON data');
        }
      }
    });
  });

app.get('/data', (req, res) => {
    // Replace this with your data retrieval logic
    const data = { message: 'Hello from Express.js!' };
    res.json(data);
  });

app.post('/upload', upload.single('file'), (req, res) => {
  // Your file handling logic here
  res.status(200).send('File uploaded successfully');
});

// All other GET requests not handled before will return the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(angularDistFolder, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});