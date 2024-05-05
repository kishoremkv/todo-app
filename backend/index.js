const express = require("express");
const { todo } = require("./db");
const { createTodo, updateTodo } = require("./type");
const app = express()

app.use(express.json());

// body {
    // title: string;
    // description: string;
    // completed: boolean
// }
app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    // put it in mongodb

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
})

app.get("/todos", async function(req, res){
     const todos = await todo.find({});
     console.log(todos);

     res.json({
        todos
     })
})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3001);