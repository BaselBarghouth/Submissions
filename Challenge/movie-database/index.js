import express from 'express';
import dcb from './DataBase/DataBase';
// Set up the express app
const app = express();
// get all todos
const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get("/",(req, res) => {
  res.send("OK")
});
app.get("/test",(req, res) => {

    res.status(200).send({
        status:200, 
        message:"ok"
    })
  });
  app.get("/time",(req, res) => {
    var t = new Date()
    res.status(200).send({
        status:200, 
        message:t.getHours()+':'+t.getMinutes()+':'+t.getSeconds()
    })
  });
  app.get("/hello/:id",(req, res) => {
    const id = req.params.id;
    var t = new Date()
    res.status(200).send({
        status:200, 
        message:'Hello, ' +id
    })
  });


  app.get('/search', (req, res) => {
    const mySearch = req.query.s;
    ///console.log(data)
    //console.log(req.query)
    if(!mySearch) {
      res.status(500).send({
        status: 500,
        error: 'true',
        message:'you have to provide a search'
      })
    } else  {
      res.status(200).send({
        status: 200,
        message: 'ok',
        data: mySearch
      })
    }
  });
  app.get("/movies/create",(req, res) => {

    res.status(200).send({
      title: 'Jaws',
      year: 1975, 
      rating: 8
    })
  });
  app.get("/movies/read",(req, res) => {

    res.status(200).send({
      status:200,
      data: movies
    })
  });
  app.get("/movies/update",(req, res) => {

    res.status(200).send({
      title: 'Basel',
      year: 2000, 
      rating: 10
    })
  });
  app.get("/movies/delete",(req, res) => {

    res.status(200).send({
      title: 'Basel',
      year: 2019, 
      rating: 10
    })
  });
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
