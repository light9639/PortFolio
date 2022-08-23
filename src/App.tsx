import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import About from './routes/About';
import Footer from './routes/footer';
import Introduce from './routes/Introduce';
import Nav from "./routes/Nav";
import Section from './routes/Section';
import Undefined from './routes/Undefined';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

        <Nav />

        <div className='pt-16 pb-32'>
          <Routes>
            <Route path="/" element={ <Section/> } />
            <Route path="/PortFolio" element={ <Section/> } />
            <Route path="/About" element={ <About/> } />
            <Route path="/introduce" element={ <Introduce/> } />
            <Route path="*" element={ <Undefined /> } />
          </Routes>
        </div>

        <Footer />
    </div>

  )
}


export default App
