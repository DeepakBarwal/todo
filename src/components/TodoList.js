import React from 'react';

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  return (
    <ul className="todoList">
      {todos.map((todo) => {
        return (
          <li className="todo" key={todo.id}>
            <span className="todoText">{todo.todo}</span>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
