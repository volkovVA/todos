import React, { useState } from 'react';

import { Container } from '@mui/material';

import Form from '../components/Form';
import TodoList from '../components/List';
import Footer from '../components/Footer';
import Header from '../components/Header';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
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
      <Header sort={sort} setSort={setSort} />
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
