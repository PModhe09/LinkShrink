const express = require('express');
const router = express.Router();
const {LinkShrink} = require("../controllers/url");

router.post('/',LinkShrink);

module.exports=router;