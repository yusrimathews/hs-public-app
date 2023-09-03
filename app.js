const express = require('express');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const app = express();

// Configure parsers
app.use(cors());
app.use(history());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure headers
app.use(function (req, res, next) {
  res.set('Cache-control', 'no-store');
  res.set('Pragma', 'no-cache');
  next();
});
app.disable('x-powered-by');

// Configure routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/install', require('./routes/install'));
app.get('/callback', require('./routes/callback'));
app.get('/success', (req, res) => {
  res.send('Success');
});
app.get('/execute', require('./routes/execute'));
app.get('/options', require('./routes/options'));

// Start server
const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
