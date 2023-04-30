import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Titulo = styled.h1`
  color: white;
  margin: 40px;
`;

const CajaPrincipal = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  gap: 100px;
  animation: fade-in-down 0.5s ease;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const CajaImagen = styled.div`
  margin: 20px 0 20px 0;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    width: 25rem;
    border: 1px solid black;
    transition: all 0.5s ease;

    &:hover {
      box-shadow: 0 0 20px 10px #6cf448;
      transform: translate(-0.5rem, -0.5rem);
    }
  }
`;

const CajaTexto = styled.div`
  width: 30%;
  display: flex
  flex-direction: column;
  opacity: 0.7;
  background-color: #23272a;
  border: 1px solid white;
  border-radius: 5px;
  padding: 30px;
  margin: 20px 0 20px 0;
  transition: all 0.5s ease;

  h1 {
    font-size: 50px;
    color: #9bd4e4;
  }

  h3 {
    font-size: 25px;
  }

  &:hover {
    box-shadow: 0 0 20px 10px #6cf448;
    transform: translate(-0.5rem, -0.5rem);
  }
`;

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <>
      <Titulo>Información detallada del personaje.</Titulo>
      <CajaPrincipal>
        <CajaTexto>
          <h1>{character.name}</h1>
          <h3>Status | {character.status}</h3>
          <h3>Specie | {character.species}</h3>
          <h3>Gender | {character.gender}</h3>
        </CajaTexto>
        <CajaImagen>
          <img src={character.image} alt="" />
        </CajaImagen>
      </CajaPrincipal>
    </>
  );
}
