import React, { createContext, useState, useEffect } from 'react';
import { getContacts } from '../services/contactsService';

export const ContactsContext = createContext();

export function ContactsContextProvider({ children }) {
    // Iniciamos con Yoda como tú lo pediste
   const [currentUser] = useState({
    nombre: "Maestro Yoda",
    // Esta imagen es de la guía oficial de Star Wars y es muy estable
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nHj8qy58KWCVzWixTK59jTlDx6aR_w5hmA&s"
});
    // Estado para la lista de contactos del Service
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        // Al cargar la app, pedimos los datos al Servicio
        const data = getContacts();
        setContacts(data);
    }, []);

    return (
        <ContactsContext.Provider value={{ currentUser, contacts }}>
            {children}
        </ContactsContext.Provider>
    );
}