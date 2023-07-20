const pacMan = document.getElementById("ball");

const moveSpeed = 5;
let pacmanX = 200;
let pacmanY = 200;

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      pacmanY -= moveSpeed;
      break;
    case "ArrowDown":
      pacmanY += moveSpeed;
      break;
    case "ArrowLeft":
      pacmanX -= moveSpeed;
      break;
    case "ArrowRight":
      pacmanX += moveSpeed;
      break;
  }

  pacMan.style.left = pacmanX + "px";
  pacMan.style.top = pacmanY + "px";
});
