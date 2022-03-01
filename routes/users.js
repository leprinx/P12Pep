const router = require('express').Router();
const path = require('path');
const readFiles = require('../readers/reader');

const userPath = path.join(__dirname, '../data/users.json');

router.get('', (req, res) => {
  readFiles(userPath)
    .then((users) => {
      const usersParsed = JSON.parse(users);
      return res.send(usersParsed);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
  readFiles(userPath)
    .then((users) => {
      const userId = req.params.id;
      const getUsers = JSON.parse(users);
      const match = getUsers.filter((user) => user._id === userId);
      if (match.length >= 1) {
        return res.send(match);
      }
      return res.status(404).json({ message: 'User ID not found' });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
