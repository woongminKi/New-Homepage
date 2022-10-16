import React from 'react';
import styled from 'styled-components';
import StyledImage from '../common/StyledImage';

import Haaland from '../images/ErlingHaaland.jpeg';
import Mood from '../images/moodbackground.jpeg';
import goodjob from '../images/goodjob.jpeg';
import cat from '../images/cat.jpeg';
import dog from '../images/dog.jpeg';
import kobe from '../images/kobe.jpeg';

export default function Home() {
  return (
    <>
    <Img src={Mood} alt="Mood Background" />
    <Img src={Haaland} alt="Erling Haaland" />
    <Img src={goodjob} alt="Good job" />
    <Img src={cat} alt="Cat" />
    <Img src={dog} alt="Dog" />
    <Img src={kobe} alt="Kobe" />
  </>
  )
}

const Img = styled(StyledImage)`
  display: flex;
`;