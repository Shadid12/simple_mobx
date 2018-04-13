import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from "./TodoList";
import TodoStore from "./TodoStore";

ReactDOM.render(<TodoList store={TodoStore}/>, document.getElementById('root'));