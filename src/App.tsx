import React from 'react';
import logo from './logo.svg';
// import './App.css';
// import ProjectList from './screens/projectList/index';
// import TsReactTest from './screens/TsReactTest';

import LoginScreen from './screens/login/LoginScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Learn React
      </header>
      <LoginScreen />
      {/* <TsReactTest /> */}
      {/* <ProjectList /> */}
    </div>
  );
}

export default App;
