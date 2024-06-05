import React from 'react';

import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { useThemeContext } from '../app/ThemeProvider/lib/useThemeContext';

interface HeaderProps {
  sort: boolean;
  setSort: (sort: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sort, setSort }) => {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <AppBar position="static" sx={{ marginBottom: 2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          todos
        </Typography>
        <Tooltip title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
          <IconButton color="inherit" onClick={toggleTheme} data-testid="toggle">
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
        <Tooltip title={`Sort ${sort ? 'Descending' : 'Ascending'}`}>
          <IconButton color="inherit" onClick={() => setSort(!sort)} data-testid="toggle-sort">
            {sort ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
