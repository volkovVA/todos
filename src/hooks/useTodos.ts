import { useEffect, useState } from "react";

import { Todo, Filter } from "../app/App";
import { generateRandomId } from "../utils/generateRandomId";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = { id: generateRandomId(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const sortedTodos = todos.sort((a, b) =>
    sort ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
  );

  const filteredTodos = sortedTodos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return {
    filteredTodos,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
    remainingTodos,
    filter,
    setFilter,
    sort,
    setSort,
  };
};

export default useTodos;
