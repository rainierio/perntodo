import React, { Fragment, useState, useCallback } from 'react';

const EditTodo = ({ todo }) => {
    const [showModal, setShowModal] = useState(false);
    const [description, setDescription] = useState(todo.description)

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location = "/";
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleShowModal = useCallback(() => {
        setShowModal(!showModal);
        setDescription(todo.description)
    }, [showModal]);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);

    return (
        <Fragment>
            <div>
                <button onClick={handleShowModal} id="buttonmodal" className="px-5 py-2 text-xs font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-lime-700 rounded-md sm:mx-2 hover:bg-lime-600 focus:outline-none focus:bg-blue-600" type="button">Edit</button>
            </div>
            {showModal &&

                <div id="modal" className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
                    <div className="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">


                        <div className="flex justify-between items-center bg-lime-700 text-white text-xl rounded-t-md px-4 py-2">
                            <h3>Edit Data</h3>
                            <button onClick={handleCloseModal}>x</button>
                        </div>


                        <div className="max-h-48 p-4">
                            <div className="mb-4 relative">
                                <input className="input form-control border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="task" type="text" autoFocus value={description} onChange={e => setDescription(e.target.value)} />
                            </div>
                        </div>


                        <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-500 transition" onClick={handleCloseModal}>Close</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition" onClick={e => updateDescription(e)}>Submit</button>
                        </div>
                    </div>
                </div>

            }
        </Fragment>
    )
}
export default EditTodo;

