const canvas = document.getElementById('raycast');
const ctx = canvas.getContext('2d');

const screenWidth = (canvas.width = 800);
const screenHeight = (canvas.height = 600);

// is a wall or not
const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const mapWidth = map[0].length;
const mapHeight = map.length;
const tileSize = 64;

function castRay(x, y, angle) {
  const rayDirX = Math.cos(angle);
  const rayDirY = Math.sin(angle);

  let mapX = Math.floor(x / tileSize);
  let mapY = Math.floor(y / tileSize);

  // Implement ray-grid intersection logic here
  // (See resources for detailed explanations)
}

function render() {
  ctx.clearRect(0, 0, screenWidth, screenHeight);

  // Cast rays for each column of pixels on the screen
  for (let x = 0; x < screenWidth; x++) {
    const angle = (x / screenWidth) * Math.PI * 2 - Math.PI;
    castRay(screenWidth / 2, screenHeight / 2, angle);
  }

  requestAnimationFrame(render);
}

render();
