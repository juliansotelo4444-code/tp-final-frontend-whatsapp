
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsContextProvider from './Context/ContactsContext'; 
import Navbar from './Navbar'; 
import Home from './pages/Home';
import ChatView from './pages/ChatView';
import './App.css';


function App() {
  return (
    <ContactsContextProvider>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:contactoId" element={<ChatView />} />
          </Routes>
        </div>
    </ContactsContextProvider>
  );
}

export default App;