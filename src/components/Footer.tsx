import React from 'react';

import { Button, ButtonGroup, Typography, Box } from '@mui/material';

type Filter = 'all' | 'active' | 'completed';

interface FooterProps {
  remainingTodos: number;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ remainingTodos, filter, setFilter, clearCompleted }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
      <Typography data-testid="remaining-todos">{remainingTodos} item{remainingTodos !== 1 ? 's' : ''} left</Typography>
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

export default Footer;