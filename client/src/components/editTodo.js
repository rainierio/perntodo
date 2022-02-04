import React, { Fragment, useState, useCallback } from 'react';

const EditTodo = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);
    return (
        <Fragment>
            <div>
                <button onClick={handleShowModal} id="buttonmodal" className="px-1 py-1 text-xs font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-lime-700 rounded-md sm:mx-2 hover:bg-lime-600 focus:outline-none focus:bg-blue-600" type="button">Open modal</button>
            </div>
            {showModal &&

                <div id="modal"
                    className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-500 bg-opacity-50 transform scale-0 transition-transform duration-300">
                    <div className="bg-white w-1/2 h-1/2 p-12">
                        <button id="closebutton" type="button" className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Minus placeat maiores repudiandae, error perferendis inventore
                            aspernatur voluptatum omnis sint debitis!
                        </p>
                    </div>
                </div>

            }
        </Fragment>
    )
}
export default EditTodo;

