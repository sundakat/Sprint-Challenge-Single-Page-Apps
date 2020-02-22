import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const FormInput = styled.form`
  text-align:center;
  padding:15px;
`


export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState('')

  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const data = response.data.results
        const results = data.filter(item => {
          return item.name.toLowerCase().includes(searchTerm)
        })
        setSearchResults(results)
      })

  }, [searchTerm])

  const handleChange = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }

  return (
    <section className="search-form">
      <FormInput>
        <input
          type="text"
          placeholder="Search"
          name="textfield"
          value={searchTerm}
          onChange={handleChange}
        />
      </FormInput>
      <ul>
        {
          searchResults.map(item => {
            return (
              <div key={item.id}>
                <Link to={`/character/${item.id}`}>
                  <img src={item.image} alt="character profile" />
                  <h2>Name: {item.name}</h2>
                  <p>Species: {item.species}</p>
                  <p>Status:{item.status}</p>
                </Link>
              </div>
            )
          })
        }
      </ul>
    </section>
  );
}