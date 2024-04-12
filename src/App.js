import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Sidebar from "./common/Sidebar";
import './App.css';
import Header from './component/Header';
function App() {
  return (
    <div>
      <Header />
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
