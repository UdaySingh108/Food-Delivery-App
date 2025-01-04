import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import StoreContextProcider from './Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <StoreContextProcider>
      <App />
    </StoreContextProcider>
   </BrowserRouter>

)