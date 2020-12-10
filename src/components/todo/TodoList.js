import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

export const TodoList = () => {
  const { todos, setChosenTodo, checkTodo, deleteTodo } = useContext(
    TodoContext
  );

  return todos.length ? (
    <div id="myUL">
      {todos.map((todo) => (
        <motion.li
          key={todo.id}
          animate={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 0.95 }}
          initial={{ scale: 0.9 }}
        >
          <div className="todoBody">
            <div
              style={todo.isDone ? { textDecoration: 'line-through' } : {}}
              className="leftTodo"
            >
              {todo.title}
            </div>
            <div className="rightTodo">
              <div
                onClick={() => setChosenTodo(todo)}
                className="btn btn-info float-left"
              >
                Edit
              </div>
              <div
                onClick={() => checkTodo(todo.id)}
                className="btn btn-primary float-left"
              >
                Check
              </div>
              <div
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger float-left"
              >
                Delete
              </div>
            </div>
          </div>
        </motion.li>
      ))}
    </div>
  ) : (
    <h2 style={{ textAlign: 'center' }}>List is empty</h2>
  );
};
