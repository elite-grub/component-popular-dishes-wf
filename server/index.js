const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { findRestaurant } = require('../database/index.js');

const app = express();
const port = 3030;

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/:id', (req, res) => {
  const { id } = req.params;
  findRestaurant(id, (err, data) => {
    if (err) {
      res.sendStatus(400);
      return;
    }
    res.status(200).send(data);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
