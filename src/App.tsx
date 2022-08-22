import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Contact from './routes/Contact';
import Detail from './routes/Detail';
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
            <Route path="/introduce" element={ <Introduce/> } />
            <Route path="/contact" element={ <Contact/> } />
            <Route path="/detail" element={ <Detail/> } />
            <Route path="*" element={ <Undefined /> } />
          </Routes>
        </div>

        <Footer />
    </div>

  )
}


export default App
