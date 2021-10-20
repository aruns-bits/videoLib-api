import express from "express"
import bodyParser from "body-parser"
import Videos from "./src/Data/videos.json"
const app = express()
const PORT = 4001

/* hi.. */

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get("/videos", (req, res) => res.send(Videos))

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`))

