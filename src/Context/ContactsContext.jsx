import React, { createContext, useState, useEffect } from 'react';
import { getContacts } from '../services/contactsService';

export const ContactsContext = createContext();

export function ContactsContextProvider({ children }) {
    
   const [currentUser] = useState({
    nombre: "Maestro Yoda",
    
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nHj8qy58KWCVzWixTK59jTlDx6aR_w5hmA&s"
});
    
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        
        const data = getContacts();
        setContacts(data);
    }, []);

    return (
        <ContactsContext.Provider value={{ currentUser, contacts }}>
            {children}
        </ContactsContext.Provider>
    );
}