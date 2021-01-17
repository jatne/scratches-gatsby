import React from 'react';
// import Card from '../components/Card';
import ReactScratch from 'react-scratch';
import Mask from '../images/mask.jpg';

const Temp = () => {
  console.log(Mask);
  return (
    <>
      <h3>temp</h3>
      {/* <Card
        containerWidth={300}
        mask={Mask}
      >
        MY RESULT
      </Card> */}
      <ReactScratch baseBg={`url(${Mask})`} coverBg="#dddddd" width="100">

      </ReactScratch>
    </>
  );
}

export default Temp;
