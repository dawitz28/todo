import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import useForm
 from 'react-bootstrap';


function TodoForm(props) {
  const [item, setItem] = useState({})

// function TodoForm () {
//   const handleInputChange = e => {
//     this.setState({ item: { ...this.state.item, [e.target.name]: e.target.value } });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    // this.props.handleSubmit(this.state.item);
    const item = {};
    this.setState({ item });
  };

  return(
      <>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
        {/* <form onSubmit={(event) => handleSubmit(event.target.value)}> */}
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              // onChange={this.handleInputChange}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            {/* <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} /> */}
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={(event) => handleInputChange(event.target.value)} />

          </label>
          <label>
            <span>Assigned To</span>
            {/* <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} /> */}
            <input type="text" name="assignee" placeholder="Assigned To" onChange={(event) => handleInputChange(event.target.value)} />

          </label>
          <button>Add Item</button>
        </form>
      </>
 );
}

export default TodoForm;
