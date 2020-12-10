import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const initState = JSON.parse(localStorage.getItem('todoList')) || [];
  const [todos, setTodos] = useState(initState);
  const [chosenTodo, setChosenTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    setTodos([...todos, { title, id: uuidv4(), isDone: false }]);
  };

  const updateTodo = (title, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }

        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }

        return todo;
      })
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        chosenTodo,
        setChosenTodo,
        createTodo,
        updateTodo,
        deleteTodo,
        checkTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
