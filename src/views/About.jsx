import styled from "styled-components";

const CajaPrincipal = styled.div`
  margin: 20px;
  display: grid;
  color: white;
  background-color: #23272a;
  margin: 50px;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 0 0 30px 20px #a6a6a6;
  animation: fade-in-down 0.5s ease;
`;

const Texto = styled.div`
  h1,
  h2 {
    color: white;
  }

  h1 {
    font-size: 60px;
    padding: 5px 20px 5px 20px;
    margin: 30px 0 0 0;
  }

  p {
    font-size: 20px;
    color: #a6a6a6;
    margin-bottom: 30px;
  }
`;

const Descripcion = styled.div`
  display: flex;
  gap: 60px;
  padding: 50px;

  img {
    width: 300px;
  }

  p {
    font-size: 25px;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 20px;
    margin: 0;
    transition: all 0.5s ease;

    &:hover {
      border: 1px solid #6cf448;
      box-shadow: 0 0 20px 10px #6cf448;
      transform: translate(-0.5rem, -0.5rem);
    }
  }
`;

const Creador = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 50px 30px 50px;
  p {
    font-size: 25px;
    color: white;

    border-radius: 5px;
    padding: 20px;
    margin: 0;
    transition: all 0.5s ease;
  }
`;

export default function About() {

  return (
    <CajaPrincipal>
      <Texto>
        <h1>¡Bienvenido a la aplicación de Rick y Morty! </h1>
        <p>
          Esta app está diseñada para que los fans de la serie puedan explorar
          el universo de Rick y Morty de una manera interactiva y divertida.
        </p>
        <hr />
        <Descripcion>
          <img src="/Pistola_Portal.webp" alt="" />
          <p>
            Esta aplicación se basa en la API de Rick y Morty, que nos permite
            acceder a la información sobre los personajes, episodios y otros
            aspectos de la serie. Esta aplicación es la herramienta perfecta
            para los fans de Rick y Morty que quieran explorar el universo de la
            serie de una manera única y divertida. ¡Espero que la disfrutes
            tanto como yo disfruté creándola!
          </p>
        </Descripcion>
        <hr />
      </Texto>

      <Creador>
        <h2>Creado por:</h2>
        <p>Alejandro Yela, desarrollador de software.</p>
      </Creador>
    </CajaPrincipal>
  );
}
