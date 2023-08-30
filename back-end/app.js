require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./db/connect');
const router = require('./routes/index');
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/', router);

main().catch(err => console.log(err));

async function main() {
  await connectDB();
}

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
});