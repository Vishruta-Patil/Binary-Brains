import logo from './logo.svg';
import './App.css';
import { Header } from 'components/Header';
import { LogIn } from 'pages/auth/login';

import "./styles/index.css"
import { Router } from 'components/Router';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router />
    </div>
  );
}

export default App;
