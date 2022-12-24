
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Footer from './footer';
import Navbar from './Navbar';
import Addhabit from './Addhabit';
import Habitdetailed from './habitdetailed';
function App() {
  return (
    
// REACT rOUTER USED
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'  element={<Home/>}  />
    <Route path='/Add'  element={<Addhabit/>}  />
    <Route path='/detail'  element={<Habitdetailed/>}  />
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  
   

  );
}

export default App;
