import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./router/home/Home"
import CareTeeth from "./router/care-teeth/CareTeeth"
import Navbar from "./components/navbar/Navbar"
import About from './router/about/About';
import Service from './router/service/Service';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/care-teeth' element={<CareTeeth/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
