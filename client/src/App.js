import React from 'react';
import Grid from './components/Grid';
import AppProvider from './AppProvider';

// Wrap App with AppProvider so that context can be available to all components
function App() {
  return (
    <AppProvider>
      <Grid />
    </AppProvider>
    
  );
}

export default App;
