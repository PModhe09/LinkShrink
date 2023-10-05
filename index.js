const express =  require("express")
const urlRoute = require("./routes/url")
const { connectToMongoDB } = require("./connect")
const app = express()
const PORT=8001

connectToMongoDB('mongodb://0.0.0.0:27017/link-shrink').then(()=>console.log('database connected'))
app.use(
    express.urlencoded({ extended: true })
);   
app.use(express.json());
app.use("/url",urlRoute)

app.listen(PORT,()=>console.log(`Server started at ${PORT}`))