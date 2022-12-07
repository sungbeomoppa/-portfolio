import './App.css';
import Navbar from './Navbar'
import {Router,Routes,Route,BrowserRouter} from 'react-router-dom';
import Main from './Main'
import Time from './Time';
import About from './About';
import Pyth from './Pyth';
import Text from './Text';
import Contact from './Contact'
import Act from './Act'
import 'bootstrap/dist/css/bootstrap.css'


function App() {



  return (
    <div>
  
     <Navbar/>
     
    <Routes>
      <Route path = '/' element = {<Main/>}></Route>
      <Route path = '/about' element = {<About/>}></Route>
      <Route path = '/Timeline' element = {<Time/>}></Route>
      <Route path = '/pyth' element = {<Pyth/>}></Route>
      <Route path = '/act' element = {<Act/>}></Route>
      <Route path = '/contact' element = {<Contact/>}></Route>



      </Routes>
   
    </div>
  );
}

export default App;
