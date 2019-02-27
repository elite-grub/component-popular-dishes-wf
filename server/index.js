const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { findRestaurant } = require('../database/index.js');

const app = express();
const port = 3030;

app.use('/popular', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/popular/:id', (req, res) => {
  const id = req.params;
  const getIdValue = Object.values(id);
  const newId = getIdValue[0].split(':');
  const newReqId = Number(newId[1]);
  findRestaurant(newReqId, (err, data) => {
    if (err) {
      res.sendStatus(400);
      return;
    }
    res.status(200).send(data);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
