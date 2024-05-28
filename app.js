const express = require('express');
const path = require("path")
const bodyParser = require("body-parser");
const apiRouter = require("./routes/api.js")
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages.js")

const connectToDatabase = require("./database/connect");
const cors = require("./middlewares/cors.js");

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, "public"))
  );

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});