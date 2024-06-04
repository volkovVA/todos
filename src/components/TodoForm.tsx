import React, { useState } from 'react';
import { TextField, Button, Box} from '@mui/material';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={2}>
      <TextField
        fullWidth
        variant="outlined"
        label="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add
      </Button>
    </Box>
  );
};

export default TodoForm;