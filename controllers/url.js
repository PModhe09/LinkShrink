const shortid = require('shortid');
const URL = require('../models/url');

async function LinkShrink(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({
            error: 'url is required',
        });
    }
    const shortId = shortid(); 
    await URL.create({
        shortId: shortId, 
        redirectURL: body.url,
        visitedHistory: [],
    });

    return res.json({ id: shortId });
}

async function getAnalytics(req,res){
    const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
    LinkShrink,
    getAnalytics
};
