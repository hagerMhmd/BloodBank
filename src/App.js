import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import LastesNews from './Components/LastesNews/LastesNews';
import NavBar from './Components/NavBar/NavBar';
import SuportUs from './Components/SupportUs/SuportUs';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return <>
  <NavBar/>
  <Home/>
  <About/>
  {/* Component Dina msh 3arfa asmo eh */}
  <SuportUs/>
  <LastesNews/>
  <Testimonials/>
  <Footer/>
  </>
}
export default App;