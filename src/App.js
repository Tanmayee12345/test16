
import './App.css';
// import F1 from './components/f1'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter,Routes,Route}from "react-router-dom";
import {Home,About} from './components/f2';
import Nav from './components/nav';
import Contact from './components/contact';
function App() {
  return (
    <div>
      <HashRouter>
      <Nav/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </HashRouter>
 

    </div>
   
  );
}

export default App;
