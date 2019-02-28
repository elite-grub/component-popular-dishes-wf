const express = require('express');
const bodyParser = require('body-parser');

const { findRestaurant } = require('../database/index.js');

const app = express();
const port = 3030;

app.use(bodyParser.json());

app.get('/popular/:id', (req, res) => {
  const id = req.params;
  const getIdValue = Object.values(id);
  const newReqId = Number(getIdValue);
  findRestaurant(newReqId, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.use(express.static('./client/dist'));

app.listen(port, () => console.log(`Listening on port ${port}`));
