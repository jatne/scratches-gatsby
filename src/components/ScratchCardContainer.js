import React, { useState } from 'react';
// import CardScratchOff from 'react-card-scratch-off';
// import CardScratchOff from './CardScratchOff';
import styled from 'styled-components';
import { randomIndexFromArray } from '../utils/helpers';
import Mask from '../images/mask.jpg';
import loadable from '@loadable/component';

const CardScratchOff = loadable(() => import('react-card-scratch-off'));

const ScratchCardContainerStyled = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
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
        <CardScratchOff
          allowClickToScratch={true}
          containerStyleClassname="scratch-off-container"
          canvasStyleClassName="scratch-off-canvas"
          coverSrc={mask}
          finishPercent={60}
          onScratchFinish={() => {
            setTimeout(() => {
              increaseCount()
            }, 3000);
          }}
        >
          <ResultStyled style={{backgroundSize: 'cover', backgroundImage: `url(${result})`}} />
        </CardScratchOff>
      </ScratchCardContainerStyled>

    )
  }

  return (
    <div>
      <Scratchie />
      <button type="button" onClick={increaseCount}>New</button>
    </div>
  )
}

export default ScratchCardContainer;
