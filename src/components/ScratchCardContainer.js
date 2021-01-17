import React, { useState } from 'react';
import ScratchCard from 'scratchcard-for-react';
import styled from 'styled-components';
import { randomIndexFromArray } from '../utils/helpers';
import Mask from '../images/mask.jpg';

const ScratchCardContainerStyled = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const ResultStyled = styled.div`
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
`;

const ScratchCardContainer = ({ background, groups }) => {
  const uniqueImages = Array.from(new Set(groups.map(group => group.image.map(cat => cat.asset.url)).flat()));

  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const mask = background[randomIndexFromArray(background)]?.asset.url || Mask;
  const result = uniqueImages.length ? uniqueImages[randomIndexFromArray(uniqueImages)] : false;

  const Scratchie = () => {

    if (!result) {
      return (
        <h1><span role="img" aria-label="empty result">😅</span> ups</h1>
      )
    }

    return (
      <ScratchCardContainerStyled>
        <ScratchCard
          maskImageSrc ={ mask }
          width = '1000'
          height= '400'
          radius = {60}
          fadeout = '1000'
          percent={60}
          onTouched={() => {
          }}
          onFinish={() => {
            setTimeout(() => increaseCount(), 3000)
          }}
        >
          <ResultStyled style={{backgroundSize: 'cover', backgroundImage: `url(${result})`}} />
        </ScratchCard>
      </ScratchCardContainerStyled>

    )
  }

  return (
    <>
      <Scratchie />
      <button type="button" onClick={increaseCount}>New</button>
    </>
  )
}

export default ScratchCardContainer;
