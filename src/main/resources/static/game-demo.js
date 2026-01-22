// Block Dodger Game
function initDodgerGame() {
    const canvas = document.getElementById("dodgerCanvas");
    if (!canvas) return;
    
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
    let blockInterval;

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
                clearInterval(blockInterval);
                alert(`Game Over! Your score: ${score}`);
                resetDodgerGame();
            }
        });
    }

    function updateScore() {
        score++;
        const scoreElement = document.getElementById("dodgerScore");
        if (scoreElement) {
            scoreElement.innerText = `Score: ${score}`;
        }
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

    function resetDodgerGame() {
        blocks = [];
        score = 0;
        playerX = canvas.width / 2 - 20;
        isGameRunning = false;
        const scoreElement = document.getElementById("dodgerScore");
        if (scoreElement) {
            scoreElement.innerText = `Score: 0`;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    const startButton = document.getElementById("startDodgerGame");
    if (startButton) {
        startButton.addEventListener("click", () => {
            if (!isGameRunning) {
                resetDodgerGame();
                isGameRunning = true;
                blockInterval = setInterval(createBlock, 1000);
                gameLoop();
            }
        });
    }

    document.addEventListener("keydown", event => {
        if (isGameRunning && canvas === document.activeElement || 
            (event.target !== document.getElementById("code-editor"))) {
            if (event.key === "ArrowLeft" && playerX > 0) {
                playerX -= playerSpeed;
            } else if (event.key === "ArrowRight" && playerX < canvas.width - playerWidth) {
                playerX += playerSpeed;
            }
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDodgerGame);
} else {
    initDodgerGame();
}
