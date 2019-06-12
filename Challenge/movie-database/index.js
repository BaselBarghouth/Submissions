import express from 'express';
import dcb from './DataBase/DataBase';
// Set up the express app
const app = express();
// get all todos

app.get("/",(req, res) => {
  res.send("OK")
});
app.get("/test",(req, res) => {

    res.send({
        status:200, 
        message:"ok"
    })
  });
  app.get("/time",(req, res) => {
    var t = new Date()
    res.send({
        status:200, 
        message:t.getHours()+':'+t.getMinutes()+':'+t.getSeconds()
    })
  });
  app.get("/hello/:id",(req, res) => {
    const id = req.params.id;
    var t = new Date()
    res.send({
        status:200, 
        message:'Hello, ' +id
    })
  });
  app.get("/search",(req, res) => {
    const s = req.query.s;
    let data;
    let status=200;
    !s ?  (data='you have to provide a search',status=500)  : (data=s)
    res.send({
      status:status, 
      message:'hello',
      data:data
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
