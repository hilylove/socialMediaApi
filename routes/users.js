const router = require('express').Router();

router.get('/', (req, res) => {
  res.send("Hey it's the user route");
});

module.exports = router;
