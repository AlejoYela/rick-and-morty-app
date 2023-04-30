import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './views/About.jsx';
import Detail from './views/Detail.jsx';
import Form from './components/Form/Form'
import { useState, useEffect } from "react"
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';



function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const location = useLocation();
   const isHome = location.pathname === "/";
   const isRealHome = location.pathname === "/home"
   const EMAIL = 'andres.alejo.yela@gmail.com';
   const PASSWORD = 'Aayb1999@';
   const navigate = useNavigate();

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/about');
      }
   }

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const existingCharacter = characters.find((character) => character.id === data.id);
            if (existingCharacter) {
               window.alert('¡Este personaje ya ha sido agregado!');
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };


   const onClose = (id) => {
      const personajesFiltrados = characters.filter(character => character.id !== parseInt(id))
      setCharacters(personajesFiltrados)
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App background'>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         {!isHome && (
            <Nav onSearch={onSearch} />
         )}
         {isHome && (
            <h1 className='titulo-inicial'>Rick And Morty App</h1>
         )}
         {characters.length===0 && isRealHome && (
            <p className='texto-alt'>¡Ingresa un id de personaje para ver su tarjeta!</p>
         )}
         <Routes>
            <Route path="/" element={<Form login={login}/>} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
