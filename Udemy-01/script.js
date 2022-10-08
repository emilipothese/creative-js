const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/**
 * Click to add point
 */
// canvas.addEventListener('click', function (e){
//   ctx.beginPath();
//   ctx.rect(e.x, e.y, 10, 10); // 2 premiers position, 2 suivants taille de l'élément
//   ctx.stroke();
// })

/**
 * mouse move and draw
 */
// canvas.addEventListener('mousemove', function (e){
//   ctx.beginPath();
//   ctx.rect(e.x, e.y, 10, 10);
//   ctx.stroke();
// })

const degToRad = (deg) => {
  return deg / 180 * Math.PI;
}

ctx.beginPath();
ctx.arc(100, 100, 50, 0, degToRad(180));
ctx.stroke();
