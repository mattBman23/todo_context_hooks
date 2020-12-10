import React from 'react';
import { render } from 'react-dom';
import { Todo } from './components/Todo';
import { TodoProvider } from './context/TodoContext';

import './index.css';

render(
  <TodoProvider>
    <Todo />
  </TodoProvider>,
  document.getElementById('root')
);
