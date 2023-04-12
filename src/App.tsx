import React from 'react';
import './App.css';
import { ContextProvider } from './context';
import PersonalInfo from './pages/personalInfo';

function App() {
  return (
    <React.Fragment>
      <ContextProvider >
        <PersonalInfo />
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
