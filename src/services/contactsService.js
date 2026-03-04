
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
  },
  {
    id: 6,
    nombre: "Capitán Rex (CT-7567)",
    ultimoMsg: "La experiencia supera a la programación.",
    hora: "12:05",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkyC-6K2h5TiWk2YkWQ0uVsPJbZLJ4IZ9Xw&s",
    messages: [
      { id: 601, texto: "Señor, los niveles de energía están estables.", soyYo: false },
      { id: 602, texto: "La experiencia supera a la programación.", soyYo: false }
    ]
  },
  {
    id: 7,
    nombre: "Conde Dooku",
    ultimoMsg: "Me he vuelto más poderoso que cualquier Jedi.",
    hora: "16:10",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEdsAgCIZVBCFvc63h06kP4xGYb5264PoyQ&s",
    messages: [
      { id: 1101, texto: "Maestro Yoda, se ha vuelto lento con los años.", soyYo: false },
      { id: 1102, texto: "Únase a mí, y juntos destruiremos a los Sith.", soyYo: false },
      { id: 1103, texto: "Me he vuelto más poderoso que cualquier Jedi.", soyYo: false }
    ]
  },
  {
    id: 8,
    nombre: "Fives (ARC-5555)",
    ultimoMsg: "¡La misión... las pesadillas... finalmente terminaron!",
    hora: "13:00",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcKmx8im3G2HBBjLPx_hQX5HLeCCBIu6tWA&s",
    messages: [
      { id: 801, texto: "¡Descubrí algo sobre los chips inhibidores!", soyYo: false },
      { id: 802, texto: "¡Las pesadillas finalmente terminaron!", soyYo: false }
    ]
  },
  {
    id: 9,
    nombre: "Echo (CT-1409)",
    ultimoMsg: "Mis algoritmos detectan una trampa.",
    hora: "14:20",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzeqoxH3ojWsE7xFuU629lJMAvrexU8LeCg&s",
    messages: [
      { id: 901, texto: "Reparando sistemas de la HoloNet.", soyYo: false }
    ]
  },
  {
    id: 10,
    nombre: "Hunter (Bad Batch)",
    ultimoMsg: "Puedo sentir las vibraciones de los droides.",
    hora: "15:45",
    foto: "data:image/jpeg;base64,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",
    messages: [
      { id: 1001, texto: "Tenemos un rastro que seguir.", soyYo: false }
    ]
  },{
    id: 11,
    nombre: "Comandante Cody",
    ultimoMsg: "Señor, se le cayó esto. (Sable de luz)",
    hora: "12:15",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVkI3xd6lHlWdgqvzIr52orJ4Fun_QthZJw&s",
    messages: [
      { id: 701, texto: "¿Órdenes para el ataque a Utapau?", soyYo: false },
      { id: 702, texto: "Señor, se le cayó esto.", soyYo: false }
    ]
  },
];

export const getContacts = () => {
  return contacts;
};
