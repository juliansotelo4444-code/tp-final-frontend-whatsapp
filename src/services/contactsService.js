
const contacts = [
  {
    id: 1,
    nombre: "Anakin Skywalker",
    ultimoMsg: "¡Desde mi punto de vista los Jedi son malvados!",
    hora: "10:05",
    foto: "https://static.wikia.nocookie.net/esstarwars/images/6/6f/Anakin_Skywalker_RotS.png",
    messages: [
      { id: 101, texto: "¿Has oído la tragedia de Darth Plagueis el Sabio?", soyYo: false },
      { id: 102, texto: "No es una historia que los Jedi te contarían.", soyYo: true },
      { id: 103, texto: "¡Desde mi punto de vista los Jedi son malvados!", soyYo: false }
    ]
  },
  {
    id: 2,
    nombre: "Obi-Wan Kenobi",
    ultimoMsg: "¡Tú eras el elegido!",
    hora: "10:15",
    foto: "https://hips.hearstapps.com/hmg-prod/images/obi-wan-kenobi-1602508425.jpg?resize=1400:*",
    messages: [
      { id: 201, texto: "¡Hola a todos!", soyYo: false },
      { id: 202, texto: "¡Tú eras el elegido!", soyYo: false }
    ]
  },
  {
    id: 3,
    nombre: "Padmé Amidala",
    ultimoMsg: "Así es como muere la libertad... con un estruendoso aplauso.",
    hora: "09:45",
    foto: "https://i0.wp.com/tomatazos.buscafs.com/2025/05/natalie-portman-en-star-wars.jpg?fit=1200,628&quality=75&strip=all",
    messages: [
      { id: 301, texto: "Anakin, me estás rompiendo el corazón.", soyYo: false }
    ]
  },
  {
    id: 4,
    nombre: "Mace Windu",
    ultimoMsg: "El senado decidirá tu suerte.",
    hora: "08:30",
    foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnNmhSyCUPBuWGxQ_4VkzBm5qKbEI9DWWsHNvzYinoJd90nUwXSHtTay-ccvOCOVriQAbLV9O13Prawnm9_aLtlnlH-Wcu9kLWAg3r7DuaKcZNm7hV7P1nDXq8kupK23N1TYB8aC9_s8XS/s1600/53035.jpg",
    messages: [
      { id: 401, texto: "¡Yo soy el senado!", soyYo: true },
      { id: 402, texto: "Todavía no.", soyYo: false }
    ]
  },
  {
    id: 5,
    nombre: "General Grievous",
    ultimoMsg: "General Kenobi, es usted un audaz.",
    hora: "11:20",
    foto: "https://sm.ign.com/t/ign_latam/screenshot/default/griev_ana7.1280.jpg",
    messages: [
      { id: 501, texto: "Esta será una fina adición a mi colección.", soyYo: false }
    ]
  }
];

export const getContacts = () => {
  return contacts;
};