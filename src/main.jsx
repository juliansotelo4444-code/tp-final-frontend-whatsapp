import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import ContactsContextProvider from './Context/ContactsContext';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactsContextProvider> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContactsContextProvider>
  </StrictMode>
)