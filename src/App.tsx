import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
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
      <Typography variant="h3" gutterBottom sx={{ marginTop: 4 }}>
        todos
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