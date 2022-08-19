import logo from './logo.svg';
import './App.css';
import { Header } from 'components/Header';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css"
import { Router } from 'components/Router';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header/>
      <Router />
    </div>
  );
}

export default App;
