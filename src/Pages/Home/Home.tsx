import React from 'react';
import { WelcomeContainer } from './styles';


export function HomePage() {
  return (
    <WelcomeContainer>
      <h1>Bienvenido</h1>
      <img src={require('../../../../assets/img/logo.png')} alt="" />
      <h2>El fracaso es la oportunidad de comenzar de nuevo, con más inteligencia</h2>
    </WelcomeContainer>
  );
}
