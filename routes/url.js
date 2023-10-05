const express = require('express');
const router = express.Router();
const {LinkShrink} = require("../controllers/url");
const {getAnalytics} =  require("../controllers/url");

router.post('/',LinkShrink);
router.get('/analytics/:shortId',getAnalytics)

module.exports=router;