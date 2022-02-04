import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./editTodo";


const ListTodo = () => {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodos(jsonData);
        } catch (err) {
            console.log(err.message);
        }

    }

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <Fragment>
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Task List</h2>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Description
                                        </th>
                                        <th
                                            className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-right pr-10 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Edit
                                        </th>
                                        <th
                                            className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-right pr-10 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        todos.map(todo => (
                                            <tr key={todo.todo_id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap text-left">
                                                            {todo.description}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="px-2 py-2 border-b border-gray-200 bg-white text-right text-sm">
                                                    <EditTodo />
                                                </td>
                                                <td className="px-2 py-2 border-b border-gray-200 bg-white text-right text-sm">

                                                    <button className="px-1 py-1 text-xs font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-700 rounded-md sm:mx-2 hover:bg-red-600 focus:outline-none focus:bg-blue-600"
                                                        onClick={() => deleteTodo(todo.todo_id)}>
                                                        Delete

                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default ListTodo;

