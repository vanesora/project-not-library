import React from 'react';
import { WelcomeContainer } from './styles';


export function HomePage() {
  return (
    <WelcomeContainer>
      <h1>Bienvenido</h1>
      <img src={require('../../assets/images/logo.png')} alt="" />
    </WelcomeContainer>
  );
}
