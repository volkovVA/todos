import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import { IconButton, AppBar, Toolbar, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from './shared/hooks/useThemeContext';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

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

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const remainingTodos = todos.filter(todo => !todo.completed).length;

  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Theme Button
          </Typography>
          <Tooltip title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
            <IconButton color="inherit" onClick={toggleTheme}>
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Typography variant="h3" gutterBottom sx={{ marginTop: 4 }}>
        Todo List
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <TodoFooter
        remainingTodos={remainingTodos}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </Container>
  );
};

export default App;
