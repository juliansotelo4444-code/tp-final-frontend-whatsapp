import React, { createContext, useState, useEffect } from 'react';
import { getContacts } from '../services/contactsService';

export const ContactsContext = createContext();

export function ContactsContextProvider({ children }) {
    const [currentUser] = useState({
        nombre: "Maestro Yoda",
        foto: "https://starwars-visualguide.com/assets/img/characters/20.jpg"
    });
    
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts(getContacts());
    }, []);

    // FUNCIÓN CLAVE: Crea una copia nueva del estado para que React re-renderice
    const enviarMensaje = (contactoId, texto) => {
        setContacts(prevContacts => 
            prevContacts.map(c => {
                if (c.id === parseInt(contactoId)) {
                    return {
                        ...c,
                        messages: [
                            ...c.messages,
                            {
                                id: Date.now(),
                                texto: texto,
                                soyYo: true // Esto activa el color verde de Yoda
                            }
                        ]
                    };
                }
                return c;
            })
        );
    };

    return (
        <ContactsContext.Provider value={{ currentUser, contacts, enviarMensaje }}>
            {children}
        </ContactsContext.Provider>
    );
}