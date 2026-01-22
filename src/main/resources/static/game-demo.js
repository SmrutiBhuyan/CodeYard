const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let playerX = canvas.width / 2 - 20;
let playerWidth = 40;
let playerHeight = 10;
let playerSpeed = 10;

let blocks = [];
let blockWidth = 40;
let blockHeight = 10;
let blockSpeed = 2;

let isGameRunning = false;
let score = 0;

function drawPlayer() {
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(playerX, canvas.height - 20, playerWidth, playerHeight);
}

function createBlock() {
    const x = Math.random() * (canvas.width - blockWidth);
    blocks.push({ x: x, y: 0 });
}

function drawBlocks() {
    ctx.fillStyle = "#FF5733";
    blocks.forEach(block => {
        ctx.fillRect(block.x, block.y, blockWidth, blockHeight);
    });
}

function moveBlocks() {
    blocks.forEach(block => {
        block.y += blockSpeed;
    });

    blocks = blocks.filter(block => block.y < canvas.height);
}

function detectCollision() {
    blocks.forEach(block => {
        if (
            block.x < playerX + playerWidth &&
            block.x + blockWidth > playerX &&
            block.y + blockHeight > canvas.height - 20
        ) {
            isGameRunning = false;
            alert(`Game Over! Your score: ${score}`);
            location.reload();
        }
    });
}

function updateScore() {
    score++;
    document.getElementById("score").innerText = `Score: ${score}`;
}

function gameLoop() {
    if (!isGameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawBlocks();
    moveBlocks();
    detectCollision();
    updateScore();

    requestAnimationFrame(gameLoop);
}

document.getElementById("startGame").addEventListener("click", () => {
    if (!isGameRunning) {
        isGameRunning = true;
        setInterval(createBlock, 1000); // Create a block every second
        gameLoop();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" && playerX > 0) {
        playerX -= playerSpeed;
    } else if (event.key === "ArrowRight" && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed;
    }
});
