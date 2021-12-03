const express = require("express");
const router = express.Router();

//Test route for api/prices/test
router.get("/test", (req, res) => res.json({ msg: "This is the prices route" }));

module.exports = router;