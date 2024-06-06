import React, { useState } from 'react';

import { TextField, Button, Box} from '@mui/material';

interface FormProps {
  addTodo: (text: string) => void;
}

const Form: React.FC<FormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={2}>
      <TextField
        fullWidth
        variant="outlined"
        label="Add a new task"
        value={text}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} data-testid="add-task">
        Add
      </Button>
    </Box>
  );
};

export default Form;