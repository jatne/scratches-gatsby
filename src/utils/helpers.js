export function randomIndexFromArray (customArray) {
  return Math.floor(Math.random() * customArray.length);
}


export function loadImage(src) {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.crossOrigin = 'Anonymous'; // Work only if the server response headers contains [Access-Control-Allow-Origin: *]
    image.onload = () => {
      resolve(image);
    };
    image.src = src;
    image.onerror = (event) => {
      const error = new Error(`Image ${src} is not loaded.`);
      reject(error);
    }
  });
}
