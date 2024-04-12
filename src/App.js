
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Sidebar from "./common/Sidebar";
import Blogs from './component/Blogs';
import Error from './component/Error';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Header from './component/Header';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Header />} >
       <Route index element= {<Home />} />

        <Route path="blogs" element= {<Blogs />} />
        <Route path="sidebar" element= {<Sidebar />} />
        <Route path="about" element= {<About />} />
        <Route path="*" element= {<Error />} />
      </Route>
    </Routes>
      {/* <Header />
      <Sidebar></Sidebar> */}
    </BrowserRouter>
  );
}

export default App;
