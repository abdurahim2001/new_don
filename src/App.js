
import './App.css';
import Header from './components/Header.jsx';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Machen from './components/Machen.jsx';
import Menu from './components/Menu.jsx';
import Glavnay from './components/Glavnay';
import Comer from './components/Comer';
import Footer from './components/Footer';
import Kvar from './components/Kvar';
import Contac from './components/Contac';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Machen/>
      <Routes>
      <Route  path='/' element={<Header/>} />
      <Route  path='/menu' element={<Menu/>} />
      <Route  path='/glavnay' element={<Glavnay/>} />
      <Route  path='/comer' element={<Comer/>} />
      <Route  path='/footer' element={<Footer/>} />
      <Route  path='/kvar' element={<Kvar/>} />
      <Route  path='/contac' element={<Contac/>} />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
