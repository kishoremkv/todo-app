const express = require("express");
const { createTodo, updateTodo } = require("./type");
const app = express()

app.use(express.json());

// body {
    // title: string;
    // description: string;
    // completed: boolean
// }
app.post("/todo", function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})