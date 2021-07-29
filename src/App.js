import React from 'react'
import Header from './Componentes/Header/Header.js'
import { createGlobalStyle } from 'styled-components';
import AreaFilmes from './Componentes/Filmes/AreaFilmes'
function App() {
  const GlobalStyle = createGlobalStyle`
  body,html{
    margin: 0px;
    padding: 0px;
    background-color:black
  }
`;
  return (
    <main>
        <GlobalStyle/>
        <Header/>
        <AreaFilmes/>
    </main>
  );
}

export default App;
