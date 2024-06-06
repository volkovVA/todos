import React, { useState, useEffect } from 'react';

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

export type Filter = 'all' | 'active' | 'completed';

const generateRandomId = () => Number(Date.now().toString() + Math.floor(Math.random() * 1000));

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');

    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = { id: generateRandomId(), text, completed: false };

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

  const sortedTodos = todos.sort((a, b) => (
    sort ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
  ));

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
