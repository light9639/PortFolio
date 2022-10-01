import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/footer';
import Introduce from './components/Introduce';
import Nav from "./components/Nav";
import Section from './components/Section';
import Undefined from './components/Undefined';

function App() {
  return (
    <div className="App">

      <Nav />

      <div className='pt-16 pb-32'>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/About" element={<About />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/Dark" element={<DarkModeToggle />} />
          <Route path="/*" element={<Undefined />} />
        </Routes>
      </div>

      <Footer />
    </div>

  )
}


export default App
