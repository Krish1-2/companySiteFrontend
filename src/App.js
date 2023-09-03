import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import Pipes from './pages/Products/pipes/pipes';
import Wires from './pages/Products/wires/wires'
import Switches from './pages/Products/switches/switches'
import Cables from './pages/Products/cables/cables'
import Contact from './pages/contact/contact';
import RegisterForm from './pages/auth/RegisterForm';
import LoginForm from './pages/auth/LoginForm';




function App() {
  return (
    <div className="App">
    <div className='head p-4'><p className="px-3">HITESH</p><img src='./images/logo.png ' alt='logo' className='head-img'/><p className='px-3'>ELECTRICALS</p></div>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path='/' exact element={<Home />} />
          <Route path="/register" element={<RegisterForm />} /> 
          <Route path="/login" element={<LoginForm />} />  
          <Route path='/pipes' element={<Pipes/>}/>
          <Route path='/wires' element={<Wires/>}/>
          <Route path='/switches' element={<Switches/>}/>
          <Route path='/cables' element={<Cables/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
