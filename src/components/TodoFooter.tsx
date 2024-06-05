import React from 'react';
import { Button, ButtonGroup, Typography, Box } from '@mui/material';

interface TodoFooterProps {
  remainingTodos: number;
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
}

const TodoFooter: React.FC<TodoFooterProps> = ({ remainingTodos, filter, setFilter, clearCompleted }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
      <Typography>{remainingTodos} item{remainingTodos !== 1 ? 's' : ''} left</Typography>
      <ButtonGroup>
        <Button
          variant={filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'contained' : 'outlined'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'contained' : 'outlined'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </ButtonGroup>
      <Button color="secondary" onClick={clearCompleted}>
        Clear completed
      </Button>
    </Box>
  );
};

export default TodoFooter;