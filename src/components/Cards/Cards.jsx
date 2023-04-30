import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";

const CajaPrincipal = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 20px;
  background-color: #181818;
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
  justify-content: center;

  .fade-in-down {
    animation: fade-in-down 2s ease infinite;
  }
  @keyframes fade-in-down {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in-left {
    animation: fade-in-left 2s ease infinite;
  }
  @keyframes fade-in-left {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default function Cards({ characters, onClose }) {
  console.log(characters)
  return (
    <CajaPrincipal>
      {characters.map((character) => (
        <Card
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </CajaPrincipal>
  );
}
