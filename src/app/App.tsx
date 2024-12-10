import { Container } from "@mui/material";

import useTodos from "../hooks/useTodos";

import Form from "../components/Form";
import TodoList from "../components/List";
import Footer from "../components/Footer";
import Header from "../components/Header";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Filter = "all" | "active" | "completed";

const App: React.FC = () => {
  const {
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
  } = useTodos();

  return (
    <Container maxWidth="sm">
      <Header sort={sort} setSort={setSort} />
      <Form addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
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
