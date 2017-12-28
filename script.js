var canvas = document.getElementById('myCanvas');
// 2d Engine
var ctx = canvas.getContext('2d');
// Canvas size
var screenSize = {
  width: ctx.width,
  heigth: ctx.heigth
};
var ballSize = 20;
// Initial position
var ballPosition = {
  x: (ballSize + 5),
  y: (ballSize + 5)
}
// Ball speed
var ballSpeed = { x: 5, y: 5 };