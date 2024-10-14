import React from 'react';
import HomePage from './components/Home';
import { ThemeProvider } from './components/Theme';

const App = () => {
  return (
    
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
