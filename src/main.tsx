import ReactDOM from 'react-dom/client'
import App from './App'
import '@styles/style.css'
import '@styles/DarkMode.css'
import '@styles/gradient.css'
import Footer from "@components/Footer/Footer";
import Nav from "@components/Nav/Nav";
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Nav />
        <App />
      <Footer />
    </BrowserRouter>
  </QueryClientProvider>
)
