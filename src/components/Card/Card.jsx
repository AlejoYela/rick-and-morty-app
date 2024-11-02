import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const CajaPrincipal = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px;
  animation: fade-in-down 0.5s ease;

  &:hover {
    border: ${(props) =>
      props.status === "Dead"
        ? "1px solid #f44336"
        : props.status === "Alive"
        ? "1px solid #6cf448"
        : "1px solid gray"};

    box-shadow: ${(props) =>
      props.status === "Dead"
        ? "0 0 20px 10px #f44336"
        : props.status === "Alive"
        ? "0 0 20px 10px #6cf448"
        : "0 0 20px 10px gray"};
    transition: all 1s ease;
  }
  &:hover .texto {
    transform: translateY(0);
    opacity: 1;
  }

  .imagen {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
  }

  .texto {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  &:hover .imagen {
    transform: scale(1.2);
  }

  .boton-cerrar {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background-color: #f44336;
    border: none;
    color: white;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 999;
    background-color: #f44336;
  }

  .Link {
    text-decoration: none;
    color: #9bd4e4;
  }
`;

const ContenedorIconoFav = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 999;

  button {
    background-color: transparent;
    font-size: 25px;
    cursor: pointer;
    padding: 0;
    border: none;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (event) => {
    event.preventDefault();
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  useEffect(() => {
    // Verificar si 'props.id' está en 'myFavorites'
    const isFavorite = props.myFavorites.some((fav) => fav.id === props.id);
    setIsFav(isFavorite);
 }, [props.myFavorites, props.id]); // Incluir 'props.id' aquí 

  return (
    <CajaPrincipal status={props.status}>
      <ContenedorIconoFav>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </ContenedorIconoFav>

      <button className="boton-cerrar" onClick={() => props.onClose(props.id)}>
        X
      </button>

      <img className="imagen" src={props.image} alt="" />
      <div className="texto">
        <Link className="Link" to={`/detail/${props.id}`}>
          <h1>{props.name}</h1>
        </Link>
        <hr />
        <h2>{props.status}</h2>
        <p>Specie: {props.species}</p>
        <p>Gender: {props.gender}</p>
        <p>Origin: {props.origin}</p>
      </div>
    </CajaPrincipal>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (char) => dispatch(addFav(char)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export function mapStateToProps(state){
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
