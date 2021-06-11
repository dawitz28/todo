import React from 'react';

  function TodoList(props) {

    return (
      <ul>
        {this.props.list.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => this.props.handleComplete(item._id)}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    );
  }

export default TodoList;
