import express, { request } from  'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const Users = [
    {id: 1, username: "Hayk"}, 
    {id: 2, username: "Arsen"},
    {id: 3, username: "Kara"}
]

app.get("/", (req, res) => {
    res.status(201).send({msg: "Hello"});
  
});


app.post("/api/users", (req, res) => {
    console.log(req.body); 
    const { body } = req;
    const newUsers = { id: Users[Users.length - 1].id +1, ...body };
    Users.push(newUsers);
    return res.send(Users);
});


app.get("/api/users", (req, res) => {
    console.log(req.query);
    const {
        query: {filter, value} 
    } = req;

    if (filter && value) return res.send(
        Users.filter((Users) => Users[filter].includes(value))
    );

    return res.send(Users);

});

app.get("/api/products", (req, res) => {
    res.send([{id: 123, name: "Hav", price: 90.7 }]);
});

app.get("/api/users/:id", (req, res) => {
   console.log(req.params); 
   const parsId = parseInt(req.params.id);
   console.log(parsId);
   if (isNaN(parsId)) {
    return res.status(400).send({msg : "Bad request"});
   }

   const findUser = Users.find((user) => user.id === parsId);
   if (!findUser) return res.sendStatus(404);
   return res.send(findUser);
});

app.put("/api/users/:id", (req, res) => {
    const {
        body,
        params: { id },
    } = req;

    const parsId = parseInt(id); 
    if (isNaN(parsId)) return res.sendStatus(400);

    const findUserIndex = Users.findIndex((user) => user.id === parsId);  
    if (findUserIndex === -1) return res.sendStatus(404);

    Users[findUserIndex] = { id: parsId, ...body };

    return res.sendStatus(200);  
});


app.patch("/api/users/:id", (req, res) => {
    const {
        body,
        params: { id },
    } = req;

    const parsId = parseInt(id); 
    if (isNaN(parsId)) return res.sendStatus(400);

    const findUserIndex = Users.findIndex((user) => user.id === parsId);  
    if (findUserIndex === -1) return res.sendStatus(404);

    Users[findUserIndex] = { ...Users[findUserIndex], ...body };

    return res.sendStatus(200);
});

app.delete("/api/users/:id", (req, res) => {
    const { 
        params: { id }, 
    } = req;
    const parsId = parseInt(id); 
    if (isNaN(parsId)) return res.sendStatus(400);  

    const findUserIndex = Users.findIndex((user) => user.id === parsId);  
    if (findUserIndex === -1) return res.sendStatus(404);  

    Users.splice(findUserIndex, 1);  

    return res.sendStatus(200);  
});




app.listen(PORT, () => {
    console.log(`Running in PORT${PORT}`);
});