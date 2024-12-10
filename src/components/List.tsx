import List from "@mui/material/List";

import { Todo } from "../app/App";
import Item from "./Item";

type ListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

const TodoList: React.FC<ListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
