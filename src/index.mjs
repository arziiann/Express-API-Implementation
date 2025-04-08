import express from 'express';

const app = express();

app.use(express.json());  // Middleware to parse JSON request bodies

const PORT = process.env.PORT || 3000;

let users = [  // Renamed 'Users' to 'users' as it is an array
    {id: 1, username: "Hayk"}, 
    {id: 2, username: "Arsen"},
    {id: 3, username: "Kara"}
];

// Home page route
app.get("/", (req, res) => {
    res.status(201).send({ msg: "Hello" });
});

// Create a new user (POST)
app.post("/api/users", (req, res) => {
    console.log(req.body); 
    const { body } = req;
    const newUser = { id: users[users.length - 1].id + 1, ...body };
    users.push(newUser);  // Adding new user
    return res.send(users);
});

// Get all users (GET)
app.get("/api/users", (req, res) => {
    const { filter, value } = req.query;

    if (filter && value) {
        return res.send(
            users.filter((user) => user[filter]?.includes(value))  // Optional chaining for safe property access
        );
    }

    return res.send(users);
});

// Get a user by ID (GET)
app.get("/api/users/:id", (req, res) => {
   const parsId = parseInt(req.params.id);

   if (isNaN(parsId)) return res.status(400).send({ msg: "Bad request" });

   const findUser = users.find((user) => user.id === parsId);
   if (!findUser) return res.sendStatus(404);
   return res.send(findUser);
});

// Update or replace a user (PUT)
app.put("/api/users/:id", (req, res) => {
    const { body, params: { id } } = req;
    const parsId = parseInt(id); 

    if (isNaN(parsId)) return res.sendStatus(400);

    const findUserIndex = users.findIndex((user) => user.id === parsId);  
    if (findUserIndex === -1) return res.sendStatus(404);

    users[findUserIndex] = { id: parsId, ...body };  // Updating user
    return res.sendStatus(200);  
});

// Partially update user details (PATCH)
app.patch("/api/users/:id", (req, res) => {
    const { body, params: { id } } = req;
    const parsId = parseInt(id); 

    if (isNaN(parsId)) return res.sendStatus(400);

    const findUserIndex = users.findIndex((user) => user.id === parsId);  
    if (findUserIndex === -1) return res.sendStatus(404);

    users[findUserIndex] = { ...users[findUserIndex], ...body };  // Partially updating user
    return res.sendStatus(200);
});

// Delete a user (DELETE)
app.delete("/api/users/:id", (req, res) => {
    const { params: { id } } = req;
    const parsId = parseInt(id); 

    if (isNaN(parsId)) return res.sendStatus(400);  

    const findUserIndex = users.findIndex((user) => user.id === parsId);  
    if (findUserIndex === -1) return res.sendStatus(404);  

    users.splice(findUserIndex, 1);  // Removing user from array
    return res.sendStatus(200);  
});

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});
