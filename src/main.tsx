import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import { CustomThemeProvider } from './app/ThemeProvider/ui/CustomThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);