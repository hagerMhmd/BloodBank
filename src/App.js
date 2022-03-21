/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import LastesNews from './Components/LastesNews/LastesNews';
import NavBar from './Components/NavBar/NavBar';
import SupportUs from './Components/SupportUs/SupportUs';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/supportus' element={<SupportUs />} />
      <Route path='/lastesnews' element={<LastesNews />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
    <Footer />
  </>
}
export default App;