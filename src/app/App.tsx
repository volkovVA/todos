import React, { useState } from 'react';

import { Container, Typography, IconButton, AppBar, Toolbar, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { useThemeContext } from './ThemeProvider/lib/useThemeContext';

import Form from '../components/Form';
import TodoList from '../components/List';
import Footer from '../components/Footer';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [sort, setSort] = useState<boolean>(true);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const sortedTodos = todos.sort((a, b) => {
    if (sort) {
      return a.text.localeCompare(b.text);
    } else {
      return b.text.localeCompare(a.text);
    }
  });

  const filteredTodos = sortedTodos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;

    return true;
  });

  const remainingTodos = todos.filter(todo => !todo.completed).length;

  return (
    <Container maxWidth="sm">
      <AppBar position="static" sx={{ marginBottom: 2 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            todos
          </Typography>
          <Tooltip title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
            <IconButton color="inherit" onClick={toggleTheme}>
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
          <Tooltip title={`Sort ${sort ? 'Descending' : 'Ascending'}`}>
            <IconButton color="inherit" onClick={() => setSort(!sort)}>
              {sort ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Form addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <Footer
        remainingTodos={remainingTodos}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </Container>
  );
};

export default App;
