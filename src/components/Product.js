import React from 'react';
import styled from 'styled-components';
import StyledImage from '../common/StyledImage';

import forehead from '../images/forehead.jpeg';
import dinorun from '../images/dinorun.gif';
import nikeWoman from '../images/nikeW.png';
import niceWeather from '../images/niceweather.jpeg';
import pleaseBackground from '../images/please.jpeg';

export default function Product() {
  return (
    <>
      <Img src={forehead} alt="forehead" />
      <Img src={dinorun} alt="dinorun" />
      <Img src={nikeWoman} alt="nikeWoman" />
      <Img src={niceWeather} alt="niceWeather" />
      <Img src={pleaseBackground} alt="pleaseBackground" />
    </>
  )
}

const Img = styled(StyledImage)`
  display: flex;
`;


// https://pin.it/njsJUvl