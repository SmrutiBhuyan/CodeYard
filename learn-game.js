document.addEventListener("DOMContentLoaded", () => {
    const startLearningButton = document.getElementById("startLearning");
    const gameDemoSection = document.getElementById("game-demo");
    const learningSection = document.getElementById("learn-js");
    const codeEditor = document.getElementById("code-editor");
    const runCodeButton = document.getElementById("run-code");
    const output = document.getElementById("output");
    const nextStepButton = document.getElementById("next-step");
    const learningStep = document.getElementById("learning-step");
    const gameCanvas = document.getElementById("gameCanvas");
    const ctx = gameCanvas.getContext("2d");

    let currentStep = 0;

    const steps = [
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
            test: (userCode) => userCode.includes("collision detection")
        },
        {
            instruction: "Step 5: Add an obstacle to the canvas that the square must avoid.",
            code: `let x = 50, y = 50;\nconst obstacle = { x: 200, y: 200, size: 50 };\nfunction drawSquare() {\n  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);\n  ctx.fillStyle = 'green';\n  ctx.fillRect(x, y, 50, 50);\n  ctx.fillStyle = 'red';\n  ctx.fillRect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);\n}\n\ndocument.addEventListener('keydown', function(event) {\n  if (event.key === 'ArrowUp' && y > 0) y -= 10;\n  if (event.key === 'ArrowDown' && y < gameCanvas.height - 50) y += 10;\n  if (event.key === 'ArrowLeft' && x > 0) x -= 10;\n  if (event.key === 'ArrowRight' && x < gameCanvas.width - 50) x += 10;\n  if (\n    x < obstacle.x + obstacle.size &&\n    x + 50 > obstacle.x &&\n    y < obstacle.y + obstacle.size &&\n    y + 50 > obstacle.y\n  ) {\n    alert('Game Over!');\n    x = 50;\n    y = 50;\n  }\n  drawSquare();\n});\ndrawSquare();`,
            test: (userCode) => userCode.includes("obstacle")
        }
    ];

    startLearningButton.addEventListener("click", () => {
        gameDemoSection.style.display = "none";
        learningSection.style.display = "block";
        updateStep();
    });

    runCodeButton.addEventListener("click", () => {
        const userCode = codeEditor.value;
        let capturedOutput = "";

        const originalConsoleLog = console.log;
        console.log = function (...args) {
            capturedOutput += args.join(" ") + "\n";
            originalConsoleLog.apply(console, args);
        };

        try {
            eval(userCode);
            if (steps[currentStep].test(userCode)) {
                output.innerHTML = `<p>Great job! You completed this step.</p>
                                    <p><strong>Output:</strong></p>
                                    <pre>${capturedOutput.trim()}</pre>`;
                nextStepButton.style.display = "inline-block";
            } else {
                output.innerHTML = `<p>Check your code and try again.</p>
                                    <p><strong>Output:</strong></p>
                                    <pre>${capturedOutput.trim()}</pre>`;
            }
        } catch (error) {
            output.innerHTML = `<p>Error: ${error.message}</p>`;
        } finally {
            console.log = originalConsoleLog;
        }
    });

    nextStepButton.addEventListener("click", () => {
        currentStep++;
        if (currentStep < steps.length) {
            updateStep();
        } else {
            learningStep.textContent = "Congratulations! You've completed the game-building tutorial.";
            codeEditor.style.display = "none";
            runCodeButton.style.display = "none";
            nextStepButton.style.display = "none";
        }
    });

    function updateStep() {
        learningStep.textContent = steps[currentStep].instruction;
        codeEditor.value = steps[currentStep].code;
        output.textContent = "";
        nextStepButton.style.display = "none";
    }
});
