import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import styled from 'styled-components';

import HeaderComponent from './components/default/HeaderComponent';

import './App.css';
import HomeComponent from './features/home/HomeComponent';
import FooterComponent from './components/default/FooterComponent';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
  @media screen and (max-width: 480px){
    width: 100%;
  }
`;
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;
function App() {
  return (
    <Container>
      <HeaderComponent />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
      <FooterComponent />
    </Container>
  );
}

export default App;
