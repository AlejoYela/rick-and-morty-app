import React from "react";
import styled from "styled-components";
import { useState } from "react";

const CajaPrincipal = styled.div`
  background-color: #2c2f33;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  border: 1px solid #8d98a5;
  transition: all 0.5s ease;

  &:hover {
    border: 1px solid #61dbfb;
    box-shadow: 0 0 5px 5px #48a2bb;
    transition: all 1s ease;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 50px;
  border: none;
  width: 80%;
  background-color: black;
  color: white;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  border-radius: 40px;
  background-color: #61dbfb;
  color: #2a5f6d;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  transition: all 0.5s ease;

  &:hover {
    background-color: #6cf448;
    border: #6cf448;
    box-shadow: 0 0 10px 5px #6cf448
  }
`;

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    props.onSearch(id);
  };

  return (
    <CajaPrincipal>
      <Input type="search" onChange={handleChange} />
      <Button onClick={handleSearch}>+</Button>
    </CajaPrincipal>
  );
}
