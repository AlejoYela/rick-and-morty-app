import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";

function Favorites(props) {
  return (
    <>
      <h1>Personajes Favoritos</h1>
      <div className={style.cajaPrincipal}>
        {props.myFavorites.length === 0 && (
          <p>No tienes personajes favoritos</p>
        )}
        {props.myFavorites.map((character) => (
          <Card
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
          />
        ))}
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
