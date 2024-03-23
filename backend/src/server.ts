import "dotenv/config"; 
import express from "express";
import env from './util/validateEnv'
const app = express();

const port = env.PORT;

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})