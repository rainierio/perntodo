import React, { Fragment, useState } from "react";


const InputTodo = () => {

    const [description, setDescription] = useState("");

    const onSubmitFrom = async e => {
        //e.preventDefault();
        try {
            const body = { description }
            const response = await fetch("http://localhost:5000/todos", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(body)
            })
            
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Fragment>
            <div>
                <section className="bg-white dark:bg-gray-800">
                    <form onSubmit={onSubmitFrom}>
                        <div className="max-w-3xl px-6 py-16 mx-auto text-center">
                            <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Please input your task</h1>
                            <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                                <input id="task" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Task" value={description} onChange={e => setDescription(e.target.value)} />

                                <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                    Input
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </Fragment>

    )

}
export default InputTodo;