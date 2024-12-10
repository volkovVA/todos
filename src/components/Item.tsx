import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { Todo } from "../app/App";

type ItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

const Item: React.FC<ItemProps> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <ListItem>
      <Checkbox
        edge="start"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        tabIndex={-1}
        disableRipple
      />
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "inherit",
        }}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removeTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Item;
