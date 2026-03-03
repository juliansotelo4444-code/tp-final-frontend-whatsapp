import React, { useContext } from 'react';
import { ContactsContext } from '../Context/ContactsContext'; 
import ChatCard from '../Components/ChatCard';    
import './Home.css';      

function Home() {
  
  const { contacts } = useContext(ContactsContext);

  return (
    <div className="home">
      {contacts.map((chat) => (
        <ChatCard 
          key={chat.id}
          id={chat.id}
          nombre={chat.nombre}
          ultimoMsg={chat.ultimoMsg}
          hora={chat.hora}
          foto={chat.foto}
        />
      ))}
    </div>
  );
}

export default Home;