import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Nav />
    <App />
    <Footer />
  </BrowserRouter>
)
