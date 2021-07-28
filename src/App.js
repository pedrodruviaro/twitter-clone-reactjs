import React from "react";
import styled from "styled-components";
import Menu from './objects/Menu'
import MainTweets from './objects/MainTweets'
import Aside from './objects/Aside'

const MainContent = styled.main`
  width: 100%;
  height: 100vh;

  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 250px 1fr 350px;
  grid-template-areas: "menu main aside";

`;

function App() {
  return (
    <MainContent>
      <Menu />
      <MainTweets />
      <Aside />
    </MainContent>
  );
}

export default App;
