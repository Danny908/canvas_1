var canvas = document.getElementById('myCanvas');
// 2d Engine
var ctx = canvas.getContext('2d');
// Canvas size
var screenSize = {
  width: canvas.width,
  height: canvas.height
};
var ballSize = 20;
// Initial position
var ballPosition = {
  x: (ballSize + 5),
  y: (ballSize + 5)
}
// Ball speed
var ballSpeed = { x: 5, y: 5 };

var engine = (function() {
  // Draw a circle
  var draw =  function() {
    // clear last frame, rectangle that makes last draw transparent
    ctx.clearRect(0, 0, screenSize.width, screenSize.height);
    // Init a new path for a new element
    ctx.beginPath();
    ctx.arc(ballPosition.x, ballPosition.y, ballSize, 0, Math.PI*2, false);
    ctx.fill();
  }

  var move = function() {
    ballPosition.x += ballSpeed.x;
    ballPosition.y += ballSpeed.y;
    draw();
    requestAnimationFrame(move);
  }

  return {
    // Expose draw circle method
    onDraw: function() {
      move();
    }
  }
})();

engine.onDraw();