import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const CajaPrincipal = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-around; 
  background-color: #23272a; 
  padding: 10px; 
`;

const CajaSecundaria = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .about,
  .home {
    border-radius: 50px;
    width: 100px;
    height: 50px;
    background-color: #61dbfb;
    color: #2a5f6d;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s ease;

    &: hover {
      background-color: #6cf448;
      border: #6cf448;
      box-shadow: 0 0 10px 5px #6cf448;
      color: #337422
    }
  }
`;

const Titulo = styled.h1`
  color: white;
  color: #3fabc0;
  font-size: 50px;
  font-family: 'get_schwifty', sans-serif;
  -webkit-text-stroke: 0.1px #6cf448; 
`;

export default function Nav(props) {
  
  return (
    <CajaPrincipal>
      <Titulo>Rick and Morty App</Titulo>
      <CajaSecundaria>
        <NavLink to="/about">
          <button className="about">About</button>
        </NavLink>
        <NavLink to="/home">
          <button className="home">Home</button>
        </NavLink>
        <SearchBar onSearch={props.onSearch} />
      </CajaSecundaria>
    </CajaPrincipal>
  );
}
