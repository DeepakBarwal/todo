import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((todo) => todo.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos([...updatedTodos]);
      setEditId(0);
      setTodo('');
      return;
    }

    if (todo !== '') {
      setTodos([...todos, { id: `${todo}-${Date.now()}`, todo }]);
      setTodo('');
    }
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">{editId ? 'Edit' : 'Add'}</button>
        </form>

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
      </div>
    </div>
  );
};

export default App;
