require('dotenv').config();
const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const ContentTypeRouter = require('./src/routes/contentTypeRoutes');
const EntriesRouter = require('./src/routes/entriesRoutes');

app.use('/content_types', ContentTypeRouter);
app.use('/collections', EntriesRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});                         