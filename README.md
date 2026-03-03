# WhatsApp Clone - Proyecto Final Frontend

Esta es una aplicación web desarrollada en **React** que simula la interfaz y funcionalidad básica de WhatsApp, cumpliendo con los lineamientos del trabajo final de la cursada.

## 🚀 Despliegue
- **Link del proyecto:** [PEGA_AQUÍ_TU_LINK_DE_VERCEL]
- **Repositorio:** [PEGA_AQUÍ_TU_LINK_DE_GITHUB]

## 🛠️ Tecnologías y Librerías Usadas
* **React 19**: Biblioteca principal para la construcción de la interfaz.
* **React Router DOM**: Utilizado para el enrutamiento de la página, permitiendo la navegación entre la lista de chats y la vista individual.
* **Context API**: Se implementó `ContactsContext` para manejar de forma global el estado de los contactos y el usuario logueado.
* **Vite**: Herramienta de construcción para un desarrollo rápido y optimizado.
* **CSS3**: Estilos totalmente responsivos (320px - 2000px) con enfoque en accesibilidad.

## 📱 Funcionalidades
* **Navegación Dinámica**: Uso de `useParams` para cargar conversaciones específicas mediante el ID del contacto en la URL.
* **Envío de Mensajes**: Formulario funcional que permite añadir mensajes al historial del chat mediante estados de React.
* **Diseño Responsivo**: Adaptación fluida para dispositivos móviles y monitores de escritorio.

## 🧠 Dificultades Presentadas
Durante el desarrollo, el mayor desafío fue gestionar las **importaciones sensibles a mayúsculas/minúsculas** entre el entorno local (Windows) y el entorno de despliegue, así como la correcta implementación del **Context Provider** para envolver las rutas de navegación y asegurar que los datos fluyeran correctamente a todos los componentes.

Julian Alexis Sotelo 
