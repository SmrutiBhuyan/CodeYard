document.addEventListener("DOMContentLoaded", () => {
    const startSnakeLearningButton = document.getElementById("startSnakeLearning");
    const startDodgerLearningButton = document.getElementById("startDodgerLearning");
    const learningSection = document.getElementById("learn-js");
    const codeEditor = document.getElementById("code-editor");
    const runCodeButton = document.getElementById("run-code");
    const output = document.getElementById("output");
    const nextStepButton = document.getElementById("next-step");
    const resetStepButton = document.getElementById("reset-step");
    const learningStep = document.getElementById("learning-step");
    const gameCanvas = document.getElementById("snakeCanvas") || document.getElementById("gameCanvas");
    const ctx = gameCanvas ? gameCanvas.getContext("2d") : null;

    let currentStep = 0;
    let currentGame = "snake"; // "snake" or "dodger"

    const snakeSteps = [
        {
            instruction: "Step 1: Write a function to display 'Hello, World!' in the console.",
            code: "function sayHello() {\n  console.log('Hello, World!');\n}\nsayHello();",
            test: (userCode) => userCode.includes("console.log('Hello, World!')")
        },
        {
            instruction: "Step 2: Create a function to draw a square on the canvas.",
            code: `function drawSquare() {\n  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);\n  ctx.fillStyle = 'green';\n  ctx.fillRect(50, 50, 50, 50);\n}\ndrawSquare();`,
            test: (userCode) => userCode.includes("ctx.fillRect")
        },
        {
            instruction: "Step 3: Make the square move using arrow keys. Write a function to handle key presses and redraw the square.",
            code: `let x = 50, y = 50;\nfunction drawSquare() {\n  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);\n  ctx.fillStyle = 'green';\n  ctx.fillRect(x, y, 50, 50);\n}\n\ndocument.addEventListener('keydown', function(event) {\n  if (event.key === 'ArrowUp') y -= 10;\n  if (event.key === 'ArrowDown') y += 10;\n  if (event.key === 'ArrowLeft') x -= 10;\n  if (event.key === 'ArrowRight') x += 10;\n  drawSquare();\n});\ndrawSquare();`,
            test: (userCode) => userCode.includes("ArrowUp") && userCode.includes("drawSquare")
        },
        {
            instruction: "Step 4: Add collision detection to prevent the square from going outside the canvas boundaries.",
            code: `let x = 50, y = 50;\nfunction drawSquare() {\n  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);\n  ctx.fillStyle = 'green';\n  ctx.fillRect(x, y, 50, 50);\n}\n\ndocument.addEventListener('keydown', function(event) {\n  if (event.key === 'ArrowUp' && y > 0) y -= 10;\n  if (event.key === 'ArrowDown' && y < gameCanvas.height - 50) y += 10;\n  if (event.key === 'ArrowLeft' && x > 0) x -= 10;\n  if (event.key === 'ArrowRight' && x < gameCanvas.width - 50) x += 10;\n  drawSquare();\n});\ndrawSquare();`,
            test: (userCode) => userCode.includes("gameCanvas.height") || userCode.includes("canvas.height")
        },
        {
            instruction: "Step 5: Add an obstacle to the canvas that the square must avoid.",
            code: `let x = 50, y = 50;\nconst obstacle = { x: 200, y: 200, size: 50 };\nfunction drawSquare() {\n  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);\n  ctx.fillStyle = 'green';\n  ctx.fillRect(x, y, 50, 50);\n  ctx.fillStyle = 'red';\n  ctx.fillRect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);\n}\n\ndocument.addEventListener('keydown', function(event) {\n  if (event.key === 'ArrowUp' && y > 0) y -= 10;\n  if (event.key === 'ArrowDown' && y < gameCanvas.height - 50) y += 10;\n  if (event.key === 'ArrowLeft' && x > 0) x -= 10;\n  if (event.key === 'ArrowRight' && x < gameCanvas.width - 50) x += 10;\n  if (\n    x < obstacle.x + obstacle.size &&\n    x + 50 > obstacle.x &&\n    y < obstacle.y + obstacle.size &&\n    y + 50 > obstacle.y\n  ) {\n    alert('Game Over!');\n    x = 50;\n    y = 50;\n  }\n  drawSquare();\n});\ndrawSquare();`,
            test: (userCode) => userCode.includes("obstacle")
        }
    ];

    const dodgerSteps = [
        {
            instruction: "Step 1: Create a player rectangle at the bottom of the canvas.",
            code: `const canvas = document.getElementById('dodgerCanvas');\nconst ctx = canvas.getContext('2d');\nlet playerX = canvas.width / 2 - 20;\n\nfunction drawPlayer() {\n  ctx.fillStyle = '#0095DD';\n  ctx.fillRect(playerX, canvas.height - 20, 40, 10);\n}\n\ndrawPlayer();`,
            test: (userCode) => userCode.includes("fillRect") && userCode.includes("playerX")
        },
        {
            instruction: "Step 2: Make the player move left and right with arrow keys.",
            code: `const canvas = document.getElementById('dodgerCanvas');\nconst ctx = canvas.getContext('2d');\nlet playerX = canvas.width / 2 - 20;\n\nfunction drawPlayer() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.fillStyle = '#0095DD';\n  ctx.fillRect(playerX, canvas.height - 20, 40, 10);\n}\n\ndocument.addEventListener('keydown', function(event) {\n  if (event.key === 'ArrowLeft' && playerX > 0) playerX -= 10;\n  if (event.key === 'ArrowRight' && playerX < canvas.width - 40) playerX += 10;\n  drawPlayer();\n});\ndrawPlayer();`,
            test: (userCode) => userCode.includes("ArrowLeft") && userCode.includes("ArrowRight")
        }
    ];

    function getCurrentSteps() {
        return currentGame === "snake" ? snakeSteps : dodgerSteps;
    }

    if (startSnakeLearningButton) {
        startSnakeLearningButton.addEventListener("click", () => {
            currentGame = "snake";
            currentStep = 0;
            if (learningSection) learningSection.style.display = "block";
            learningSection.scrollIntoView({ behavior: 'smooth' });
            updateStep();
        });
    }

    if (startDodgerLearningButton) {
        startDodgerLearningButton.addEventListener("click", () => {
            currentGame = "dodger";
            currentStep = 0;
            if (learningSection) learningSection.style.display = "block";
            learningSection.scrollIntoView({ behavior: 'smooth' });
            updateStep();
        });
    }

    if (runCodeButton) {
        runCodeButton.addEventListener("click", () => {
            const userCode = codeEditor.value;
            let capturedOutput = "";

            const originalConsoleLog = console.log;
            console.log = function (...args) {
                capturedOutput += args.join(" ") + "\n";
                originalConsoleLog.apply(console, args);
            };

            try {
                // Make canvas and ctx available if they exist
                if (gameCanvas && ctx) {
                    window.gameCanvas = gameCanvas;
                    window.ctx = ctx;
                }
                
                eval(userCode);
                const steps = getCurrentSteps();
                if (steps[currentStep].test(userCode)) {
                    output.innerHTML = `<p style="color: #1ef34a;">✓ Great job! You completed this step.</p>
                                        <p><strong>Output:</strong></p>
                                        <pre>${capturedOutput.trim() || 'Code executed successfully!'}</pre>`;
                    if (nextStepButton) nextStepButton.style.display = "inline-block";
                } else {
                    output.innerHTML = `<p style="color: #ff6b6b;">Check your code and try again. Make sure you include the required elements.</p>
                                        <p><strong>Output:</strong></p>
                                        <pre>${capturedOutput.trim() || 'Code executed, but check the requirements.'}</pre>`;
                }
            } catch (error) {
                output.innerHTML = `<p style="color: #ff6b6b;">Error: ${error.message}</p>`;
            } finally {
                console.log = originalConsoleLog;
            }
        });
    }

    if (nextStepButton) {
        nextStepButton.addEventListener("click", () => {
            const steps = getCurrentSteps();
            currentStep++;
            if (currentStep < steps.length) {
                updateStep();
            } else {
                learningStep.textContent = "Congratulations! You've completed the game-building tutorial.";
                if (codeEditor) codeEditor.style.display = "none";
                if (runCodeButton) runCodeButton.style.display = "none";
                nextStepButton.style.display = "none";
                if (resetStepButton) resetStepButton.style.display = "none";
            }
        });
    }

    if (resetStepButton) {
        resetStepButton.addEventListener("click", () => {
            updateStep();
        });
    }

    function updateStep() {
        const steps = getCurrentSteps();
        if (learningStep) learningStep.textContent = steps[currentStep].instruction;
        if (codeEditor) codeEditor.value = steps[currentStep].code;
        if (output) output.textContent = "";
        if (nextStepButton) nextStepButton.style.display = "none";
    }
});
