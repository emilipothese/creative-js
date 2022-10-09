const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ],
  animate: true
};

/**
 * Test Sketch
 */
// const sketch = () => {
//   return ({ context, width, height }) => {
//     context.fillStyle = 'white';
//     context.fillRect(0, 0, width, height);

//     const rectWidth = width * 0.02;
//     const rectHeight = height * 0.2;

//     context.fillStyle = 'black';

//     context.save();

//     for (let i = 0; i < 12; i++){
//       context.beginPath();
//       context.rect(100 * i, 100, rectWidth, rectHeight);
//       context.fill();
//     }

//     context.restore();
//     context.beginPath();
//     context.rect(Math.random() * 500, Math.random() * 50, 100, 100);
//     context.stroke();
//   };
// };

const sketch = () => {
  let y = 500;
  let velocity = 5;
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    y += velocity;

    if(y >= 1080 || y <= 0){
      velocity *= -1;
    }

    context.beginPath();
    context.arc(500, y, 20, 0, Math.PI * 2);
    context.fill();
};
};
canvasSketch(sketch, settings);
