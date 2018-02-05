var canvas = document.getElementById('myCanvas');
// 2d Engine
var ctx = canvas.getContext('2d');
// Canvas size
var screenSize = {
  width: canvas.width,
  height: canvas.height
};
var ballSize = 30;
// Initial position
var ballPosition = {
  x: (ballSize + 5),
  y: (ballSize + 5)
}
// Ball speed
var ballSpeed = { x: 4, y: 4 };
// Ball color
var ballColor = '#ff0000';
var oldballColor = '#000000';

var engine = (function() {
  // Draw a circle
  var draw =  function() {
    // clear last frame, rectangle that makes last draw transparent
    ctx.clearRect(0, 0, screenSize.width, screenSize.height);
    // Init a new path for a new element
    ctx.beginPath();
    ctx.arc(ballPosition.x, ballPosition.y, ballSize, 0, Math.PI*2, false);
    // Paint ball in color red
    var grd = ctx.createRadialGradient(ballPosition.x, ballPosition.y, 20, ballPosition.x, ballPosition.y, 300);
    grd.addColorStop(0, ballColor);
    grd.addColorStop(1, oldballColor);
    
    
    ctx.fillStyle = grd;
    ctx.shadowColor= '#333';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetX = 20;
    ctx.shadowOffsetY = 20;
    
    
    ctx.fill();
  }

  var move = function() {
    collision();
    ballPosition.x += ballSpeed.x;
    ballPosition.y += ballSpeed.y;
    draw();
    requestAnimationFrame(move);
  }

  var collision = function() {
    // Change direcction on border collision
    if (ballPosition.y >= screenSize.height - ballSize || ballPosition.y <= ballSize) {
      ballSpeed.y *= -1;
      // Get random hex color
      oldballColor = ballColor;
      ballColor = `#${Math.random().toString(16).substr(-6)}`;
    }
    if (ballPosition.x >= screenSize.width - ballSize || ballPosition.x <= ballSize) {
      ballSpeed.x *= -1;
      // Get random hex color: random value beetwen 0 ~ 1, convert to hex string, get las 6 digits to get hex color value
      oldballColor = ballColor;
      ballColor = `#${Math.random().toString(16).substr(-6)}`;
    }
  }

  return {
    // Expose draw circle method
    onDraw: function() {
      move();
    }
  }
})();
engine.onDraw();