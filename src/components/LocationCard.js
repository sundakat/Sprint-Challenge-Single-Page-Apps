import React from "react";
import styled from "styled-components"


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
  overflow: hidden;
`;

export default function LocationCard({ name, type, dimension, residents }) {

  return (

    <Man>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Residents: {residents}</p>
    </Man>

  )

}
