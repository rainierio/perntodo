const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./config/db');


//  middleware
app.use(cors());
app.use(express.json());

//ROUTES
//  get todos
app.get('/todos', async (req, res) => {
    const todos = await pool.query("SELECT * FROM todo")
    res.json(todos.rows)
})

// get details todo
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
        res.json(todo.rows[0])

    } catch (err) {
        console.error(err.message)
    }

})

// insert todo
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description])
        res.status(200).json("new todo has been inserted")
    } catch (err) {
        console.error(err.message)
    }

})

// update todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const updateTodos = await pool.query("UPDATE todo SET description = $1 WHERE todo_id= $2", [description, id])
        res.json(updateTodos.rows)
    } catch (err) {
        console.error(err.message)
    }

})

// delete todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const deleteTodos = await pool.query("DELETE FROM todo WHERE todo_id=$1", [id])
        res.json(`Record ${id} Has been deleted`)
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})

