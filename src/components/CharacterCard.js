import React from "react";
import styled from "styled-components";

const Man = styled.div`
font-size:18px;
  border:1px solid black;
  text-align:center;
  border-radius:10px;
  padding:5px;
  margin: 15px;
  color:black;
  background:#a9d3e9;
  padding:2%;
`;

export default function CharacterCard(props) {
  return (
    <Man>
      <h2>{props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
      <img src={props.image} />
    </Man>
  )
}
