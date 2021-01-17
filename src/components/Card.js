import React, { useEffect, useRef, useState } from 'react';
import { loadImage } from '../utils/helpers';

const cardConfig = {
  containerWidth: 300,
}

const Card = (props) => {
  const {mask} = props;

  const [isDrawning, setIsDrawning] = useState(false);
  const [lastMouseCoordinate, setLastMouseCoordinate] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [containerWidth, setContainerWidth] = useState('300px');
  const [containerHeight, setContainerHeight] = useState('300px');
  const [ctx, setCtx] = useState(null);

  const canvas = useRef();

  useEffect(() => {
    setCtx(canvas.current.getContext('2d'));

    const imgMask = new Image();
    // imgMask.src = mask;
    // imgMask.crossOrigin = 'Anonymous';
    loadImage(mask).then(img => {
      console.log(img);
      // imgMask.src = img.src;
      // imgMask.crossOrigin = 'Anonymous';
      ctx.drawImage(img, 0, 0, 300, 300);
    })
    // imgMask.onload = () => {

    //   ctx.drawImage(imgMask, 0, 0);
    //   ctx.globalCompositeOperation = 'destination-out';
    //   setLoaded(true);
    // }
  }, []);


  return (
    <div className="card__cointainer">
      <canvas className="card__canvas" ref={canvas}></canvas>
      <div className="card__result">

      </div>
    </div>
  )
}

export default Card;
