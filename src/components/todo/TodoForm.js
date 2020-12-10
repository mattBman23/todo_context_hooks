import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';

export const TodoForm = () => {
  const { createTodo, chosenTodo, setChosenTodo, updateTodo } = useContext(
    TodoContext
  );

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (chosenTodo) {
      setTitle(chosenTodo.title);
    } else {
      setTitle('');
    }
  }, [chosenTodo]);

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = () => {
    if (chosenTodo) {
      updateTodo(title, chosenTodo.id);
      setChosenTodo(null);
    } else {
      createTodo(title);
      setTitle('');
    }
  };

  return (
    <div className="header" id="myDIV">
      <h2>Todo List</h2>
      <input
        type="text"
        id="myInput"
        value={title}
        placeholder="Title..."
        onChange={changeHandler}
      />
      <div className="addBtn" onClick={submitHandler}>
        {chosenTodo ? 'Update' : 'Add'}
      </div>
    </div>
  );
};
