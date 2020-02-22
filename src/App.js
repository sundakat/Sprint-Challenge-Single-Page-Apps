import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/LocationsList";
import SearchForm from "./components/SearchForm";
import styled from 'styled-components';

const Nav = styled.nav`
  text-align:center;
  padding:30px;
  display:flex;
  justify-content:space-evenly;
  text-declaration: none;
  color: black;
  `;



export default function App() {
  return (
    <main>


      <Nav>
        <Link className="navLinks" to="/">Home</Link>
        <Link className="navLinks" to="/search">Search by Name </Link>
        <Link className="navLinks" to="/characters">Characters</Link>
        <Link to="/location">Location</Link>
      </Nav>

      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/search" component={SearchForm} />
      <Route exact path="/location" component={LocationsList} />
    </main>
  );
}
