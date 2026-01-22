// Snake Game - Initialize for snakeCanvas
function initSnakeGame() {
    const canvas = document.getElementById("snakeCanvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");

    // Step 2: Define the game variables
    const box = 20; // Size of each box (20px by 20px)
    const canvasSize = 20; // Number of boxes per row/column (20x20 grid)
    let snake = [{ x: 9 * box, y: 9 * box }]; // Snake starts at the center of the grid
    let direction = ""; // Direction of movement (initially empty)
    let food = generateFood(); // Randomly place food on the grid
    let score = 0; // Start the score at 0
    let game; // Game interval

    // Step 4: Generate random food positions on the grid
    function generateFood() {
        return {
            x: Math.floor(Math.random() * canvasSize) * box,
            y: Math.floor(Math.random() * canvasSize) * box,
        };
    }

    // Step 3: Listen for arrow key presses to control the snake
    function changeDirection(event) {
        // Only handle if not typing in code editor
        if (event.target.tagName === 'TEXTAREA') return;
        
        const key = event.key; // Get the key pressed
        if (key === "ArrowUp" && direction !== "DOWN") direction = "UP";
        else if (key === "ArrowDown" && direction !== "UP") direction = "DOWN";
        else if (key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
        else if (key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    }

    document.addEventListener("keydown", changeDirection);

    // Step 5: Draw the game objects (snake, food, and background)
    function draw() {
        // Clear the canvas and set the background
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the snake
        ctx.fillStyle = "#00FF00";
        for (let part of snake) {
            ctx.fillRect(part.x, part.y, box, box);
        }

        // Draw the food
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(food.x, food.y, box, box);

        // Move the snake
        let head = { ...snake[0] }; // Copy the current head of the snake
        if (direction === "UP") head.y -= box;
        else if (direction === "DOWN") head.y += box;
        else if (direction === "LEFT") head.x -= box;
        else if (direction === "RIGHT") head.x += box;

        // Check if the snake eats the food
        if (head.x === food.x && head.y === food.y) {
            score++;
            food = generateFood(); // Generate new food
        } else {
            snake.pop(); // Remove the tail if no food is eaten
        }

        // Add the new head to the snake
        snake.unshift(head);

        // Check for collisions (walls or itself)
        if (
            head.x < 0 ||
            head.x >= canvas.width ||
            head.y < 0 ||
            head.y >= canvas.height ||
            snake.slice(1).some((part) => part.x === head.x && part.y === head.y)
        ) {
            clearInterval(game); // Stop the game loop
            alert(`Game Over! Your score: ${score}`);
            resetSnakeGame();
        }

        // Display the score
        ctx.fillStyle = "#FFF";
        ctx.font = "20px Arial";
        ctx.fillText(`Score: ${score}`, 10, 20);
    }

    function resetSnakeGame() {
        snake = [{ x: 9 * box, y: 9 * box }];
        direction = "";
        food = generateFood();
        score = 0;
        clearInterval(game);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Step 6: Start the game when the button is clicked
    const startButton = document.getElementById("startSnakeGame");
    if (startButton) {
        startButton.addEventListener("click", () => {
            resetSnakeGame();
            game = setInterval(draw, 200); // Start the game loop (slower speed)
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSnakeGame);
} else {
    initSnakeGame();
}
