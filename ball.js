// BALL 1 
var positionX1 = 0;
var positionY1 = 0;

var directionX1 = 1;
var directionY1 = 1;

var x1 = window.innerWidth - 50;
var y1 = window.innerHeight - 50;

var ball = document.getElementById("ball");
var ballVelocityX1 = 5;
var ballVelocityY1 = 2;


function ballMove() {
  
  if (directionX1 === 1 && positionX1 >= x1) {
    directionX1 = -1;
  }
  if (directionX1 === -1 && positionX1 < 0) {
    directionX1 = 1;
  }

  if (directionY1 === 1 && positionY1 >= y1) {
    directionY1 = -1;
  }
  if (directionY1 === -1 && positionY1 < 0) {
    directionY1 = 1;
  }

  positionY1 = positionY1 + ballVelocityY1 * directionY1;
  ball.style.top = positionY1 + "px";

  positionX1 = positionX1 + ballVelocityX1 * directionX1;
  ball.style.left = positionX1 + "px";

}

setInterval(ballMove, 20);


// BALL 2
var positionX2 = 0;
var positionY2 = 0;

var directionX2 = 1;
var directionY2 = 1;

var x2 = window.innerWidth - 100;
var y2 = window.innerHeight - 100;

var ball2 = document.getElementById("ball2");
var ballVelocityX2 = 3;
var ballVelocityY2 = 6;


function ballMove2() {
  
  if (directionX2 === 1 && positionX2 >= x2) {
    directionX2 = -1;
  }
  if (directionX2 === -1 && positionX2 < 0) {
    directionX2 = 1;
  }

  if (directionY2 === 1 && positionY2 >= y2) {
    directionY2 = -1;
  }
  if (directionY2 === -1 && positionY2 < 0) {
    directionY2 = 1;
  }

  positionY2 = positionY2 + ballVelocityY2 * directionY2;
  ball2.style.top = positionY2 + "px";

  positionX2 = positionX2 + ballVelocityX2 * directionX2;
  ball2.style.left = positionX2 + "px";

}

setInterval(ballMove2, 10);

// BALL 3
var positionX3 = 100;
var positionY3 = 100;

var directionX3 = 1;
var directionY3 = -1;

var x3 = window.innerWidth - 100;
var y3 = window.innerHeight - 100;

var ball3 = document.getElementById("ball3");
var ballVelocityX3 = 4;
var ballVelocityY3 = 2;


function ballMove3() {
  
  if (directionX3 === 1 && positionX3 >= x3) {
    directionX3 = -1;
  }
  if (directionX3 === -1 && positionX3 < 0) {
    directionX3 = 1;
  }

  if (directionY3 === 1 && positionY3 >= y3) {
    directionY3 = -1;
  }
  if (directionY3 === -1 && positionY3 < 0) {
    directionY3 = 1;
  }

  positionY3 = positionY3 + ballVelocityY3 * directionY3;
  ball3.style.top = positionY3 + "px";

  positionX3 = positionX3 + ballVelocityX3 * directionX3;
  ball3.style.left = positionX3 + "px";

}

setInterval(ballMove3, 15);


// BALL 4
var positionX4 = 200;
var positionY4 = 100;

var directionX4 = -1;
var directionY4 = 1;

var x4 = window.innerWidth - 100;
var y4 = window.innerHeight - 100;

var ball4 = document.getElementById("ball4");
var ballVelocityX4 = 4;
var ballVelocityY4 = 2;


function ballMove4() {
  
  if (directionX4 === 1 && positionX4 >= x4) {
    directionX4 = -1;
  }
  if (directionX4 === -1 && positionX4 < 0) {
    directionX4 = 1;
  }

  if (directionY4 === 1 && positionY4 >= y4) {
    directionY4 = -1;
  }
  if (directionY4 === -1 && positionY4 < 0) {
    directionY4 = 1;
  }

  positionY4 = positionY4 + ballVelocityY4 * directionY4;
  ball4.style.top = positionY4 + "px";

  positionX4 = positionX4 + ballVelocityX4 * directionX4;
  ball4.style.left = positionX4 + "px";

}

setInterval(ballMove4, 12);



