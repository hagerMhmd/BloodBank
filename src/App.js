/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ABnegative from './Components/ABnegative/ABnegative';
import Anegative from './Components/Anegative/Anegative';
import Apositive from './Components/Apositive/Apositive';
import BloodInfo from './Components/BloodInfo/BloodInfo';
import BloodType from './Components/BloodType/BloodType';
import Bnegative from './Components/Bnegative/Bnegative';
import Bpositive from './Components/Bpositive/Bpositive';
import DonateNow from './Components/DonateNow/DonateNow';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Onegative from './Components/Onegative/Onegative';
import Opositive from './Components/Opositive/Opositive';
<<<<<<< HEAD
import ABpositive from './Components/ABpositive/ABpositive';
import BloodRequest from './Components/BloodReuest/BloodRequest';
import About from './Components/About/About';
import Countonme from './Components/Countonme/Countonme';
import Donors from './Components/Donors/Donors';



function App() {
    return <>
        <NavBar />
        < Routes >
            <Route path='/' element={< Home />} />
            <Route path='/home' element={< Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/bloodInfo' element={< BloodInfo />} />
            <Route path='/bloodtype' element={< BloodType />} />
            <Route path='/onegative' element={< Onegative />} />
            <Route path='/opositive' element={< Opositive />} />
            <Route path='/anegative' element={< Anegative />} />
            <Route path='/apositive' element={< Apositive />} />
            <Route path='/bnegative' element={< Bnegative />} />
            <Route path='/bpositive' element={< Bpositive />} />
            <Route path='/abnegative' element={< ABnegative />} />
            <Route path='/abpositive' element={< ABpositive />} />
            <Route path='/donatenow' element={< DonateNow />} />
            <Route path='/countonme' element={<Countonme/>} />
            <Route path='/bloodrequest' element={< BloodRequest />} />
            <Route path='/donors' element={<Donors/>} />
            <Route path='*' element={<h1>404</h1>} />
        </Routes>
        <Footer />
    </>
=======
import Testimonials from './Components/Testimonials/Testimonials';
import ABpositive from './Components/ABpositive/ABpositive';
import BloodRequest from './Components/BloodReuest/BloodRequest';
import Supportbox from "./Components/Supportbox/Supportbox";


function App() {
  return <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/lastesnews' element={<LastesNews />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/bloodInfo' element={<BloodInfo/>} />
      <Route path='/bloodtype' element={<BloodType/>} />
      <Route path='/onegative' element={<Onegative/>} />
      <Route path='/opositive' element={ <Opositive/> } />
      <Route path='/anegative' element={ <Anegative/> } />
      <Route path='/apositive' element={ <Apositive/> } />
      <Route path='/bnegative' element={ <Bnegative/> } />
      <Route path='/bpositive' element={ <Bpositive/> } />
      <Route path='/abnegative' element={ <ABnegative/> } />
      <Route path='/abpositive' element={ <ABpositive/> } />
      <Route path='/donatenow' element={<DonateNow/>} />
      <Route path="supportbox" element={<Supportbox />} />
      <Route path='/bloodrequest' element={<BloodRequest/>} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
    <Footer />
  </>
>>>>>>> 435ef54aba71f351cccc0340fb44db22d51ffd96
}
export default App;