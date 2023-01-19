import { Routes, Route } from 'react-router-dom';
import About from '@router/About/About';
import Site from '@router/Site/Site';
import Introduce from '@router/Introduce/Introduce';
import Section from '@router/Section/Section';
import Undefined from '@router/Undefined/Undefined';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <div className='pt-16 pb-32'>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/About" element={<About />} />
          <Route path="/Site" element={<Site />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/*" element={<Undefined />} />
        </Routes>
      </div>
    </div>
  )
}