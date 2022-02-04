import React, { Fragment } from 'react';
import './App.css';

//  component
import InputTodo from "./components/inputTodo";
import ListTodo from "./components/listTodo"
  ;



function App() {
  return <Fragment>
    <div className=''>
      <InputTodo />
      <ListTodo />
    </div>
  </Fragment>
}

export default App;
