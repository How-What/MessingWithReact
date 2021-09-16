import Express from 'express';
import Products from "./products.js";
import routes from "./productendpoint.js";

const app = Express();
const PORT = 4000;
app.use(Express.json());
app.use(Express.urlencoded({ extened: true }))

app.use('/', routes);

//GET, PUT, POST, DELETE
// app.get("/", (req, res) => {
//     res.send("Hello World")
// });
// app.get("/products/:id", (req,res) => {
//     res.json(Products.find((product) => {
//         return Number(req.params.id) === product.id;
//     }));
//     // res.send(req.query);
// });

// app.post("/add", (req,res) => {
//     console.log(req.body.id);
//     res.sendStatus(200);
// });

app.listen(PORT, () => console.log(`Port: ${PORT} opened; Listening...`));