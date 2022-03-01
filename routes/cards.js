const router = require('express').Router();
const path = require('path');
const readFiles = require('../readers/reader');

const cardsPath = path.join(__dirname, '../data/cards.json');

router.get('', (req, res) => {
  readFiles(cardsPath)
    .then((cards) => res.send(JSON.parse(cards)))
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
