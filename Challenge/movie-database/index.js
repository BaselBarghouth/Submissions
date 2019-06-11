import express from 'express';
import dcb from './DataBase/DataBase';
// Set up the express app
const app = express();
// get all todos
app.get("/",(req, res) => {
  res.send("OK")
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
