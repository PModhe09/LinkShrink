const express =  require("express")
const urlRoute = require("./routes/url")
const { connectToMongoDB } = require("./connect")
const app = express()
const URL=require('./models/url');
const PORT=8001

connectToMongoDB('mongodb://0.0.0.0:27017/link-shrink').then(()=>console.log('database connected'))
app.use(
    express.urlencoded({ extended: true })
);   
app.use(express.json());
app.use("/url",urlRoute)

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectURL);
  });

app.listen(PORT,()=>console.log(`Server started at ${PORT}`))