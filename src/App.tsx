import React from 'react';
import { ContextProvider } from './context';
import Container from './pages';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <ContextProvider >
        <Container />
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
