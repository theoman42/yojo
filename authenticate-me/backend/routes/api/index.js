const router = require("express").Router();

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

module.exports = router;
