import React from 'react';
import ReactCardScratchOff from 'react-card-scratch-off';
import Mask from '../images/mask.jpg';
import Result from '../images/example.jpg';
import styled from 'styled-components';

const ResultStyle = styled.div`
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const Temp = () => {
  console.log(Mask);
  return (
    <>
      <ReactCardScratchOff
        allowClickToScratch={true}
        containerStyleClassname="scratch-off-container"
        canvasStyleClassName="scratch-off-canvas"
        coverSrc={Mask}
      >
        <ResultStyle style={{backgroundImage: `url(${Result})`}}>xddd</ResultStyle>
      </ReactCardScratchOff>
    </>
  );
}

export default Temp;
