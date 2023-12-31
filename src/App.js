import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./router/home/Home"
import CareTeeth from "./router/care-teeth/CareTeeth"
import Navbar from "./components/navbar/Navbar"
import About from './router/about/About';
import Service from './router/service/Service';
import Footer from './components/footer/Footer';
import SinglePageCertificate from './components/certificate_single_page/SinglePageCertificate';
import AfterBefore from './components/after-before/AfterBefore';
import Login from './router/login/Login'
import Admin from './router/admin/Admin'


function App() {
  return (
    <div className="App">
      <Navbar />
      <SinglePageCertificate />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/after' element={<AfterBefore />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
