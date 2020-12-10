import React from 'react';
import { TodoForm } from './todo/TodoForm';
import { TodoList } from './todo/TodoList';

export const Todo = () => {
  return (
    <>
      <TodoForm />
      <br />
      <TodoList />
    </>
  );
};
