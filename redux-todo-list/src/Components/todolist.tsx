import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/store';
import { addTodo, toggleTodo, deleteTodo, filterTodos } from '../Redux/actions';

import Button from '@mui/material/Button';

const TodoList: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleFilterTodos = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterTodos(event.target.value));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <br />
      <input
        type="text"
        placeholder="Search Todos"
        onChange={handleFilterTodos}
      />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.title}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
