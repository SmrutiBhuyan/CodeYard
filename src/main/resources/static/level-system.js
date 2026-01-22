// Level System for JavaScript Adventure Game
// This game teaches the entire JavaScript language through progressive levels

const levels = [
    {
        id: 1,
        title: "Level 1: Variables & Data Types",
        concept: "Variables",
        description: "Learn about variables, let, const, and data types",
        instructions: `
            <h5>Objective:</h5>
            <p>Create variables to store player information.</p>
            <ol>
                <li>Create a variable <code>playerName</code> with your name</li>
                <li>Create a variable <code>playerHealth</code> set to 100</li>
                <li>Create a variable <code>playerScore</code> set to 0</li>
                <li>Use <code>console.log()</code> to display all three variables</li>
            </ol>
        `,
        hint: "Use let or const to declare variables. Example: let playerName = 'Hero';",
        starterCode: `// Create your variables here
// Remember: Use let or const, and assign values with =`,
        solution: (code) => {
            return code.includes('let') || code.includes('const') &&
                   code.includes('playerName') &&
                   code.includes('playerHealth') &&
                   code.includes('playerScore') &&
                   code.includes('console.log');
        },
        test: (code) => {
            try {
                eval(code);
                return true;
            } catch (e) {
                return false;
            }
        }
    },
    {
        id: 2,
        title: "Level 2: Functions",
        concept: "Functions",
        description: "Learn to create and call functions",
        instructions: `
            <h5>Objective:</h5>
            <p>Create a function to move the player.</p>
            <ol>
                <li>Create a function called <code>movePlayer</code> that takes x and y parameters</li>
                <li>Inside the function, log "Player moved to (x, y)"</li>
                <li>Call the function with coordinates (10, 20)</li>
            </ol>
        `,
        hint: "Functions are created with: function functionName(parameters) { }",
        starterCode: `// Create your function here
// Then call it with movePlayer(10, 20)`,
        solution: (code) => {
            return code.includes('function') &&
                   code.includes('movePlayer') &&
                   code.includes('movePlayer(');
        }
    },
    {
        id: 3,
        title: "Level 3: Objects & Properties",
        concept: "Objects",
        description: "Learn about JavaScript objects",
        instructions: `
            <h5>Objective:</h5>
            <p>Create a player object with properties.</p>
            <ol>
                <li>Create an object called <code>player</code></li>
                <li>Add properties: name, health (100), x (0), y (0)</li>
                <li>Access and log the player's name</li>
            </ol>
        `,
        hint: "Objects use curly braces: { property: value }",
        starterCode: `// Create player object here
// const player = { ... }`,
        solution: (code) => {
            return code.includes('player') &&
                   (code.includes('{') || code.includes('name:')) &&
                   code.includes('player.name');
        }
    },
    {
        id: 4,
        title: "Level 4: Arrays",
        concept: "Arrays",
        description: "Learn to work with arrays",
        instructions: `
            <h5>Objective:</h5>
            <p>Create an array to store inventory items.</p>
            <ol>
                <li>Create an array called <code>inventory</code> with items: "sword", "shield", "potion"</li>
                <li>Add a new item "key" to the array</li>
                <li>Log the first item in the array</li>
            </ol>
        `,
        hint: "Arrays use square brackets: [item1, item2]. Use .push() to add items.",
        starterCode: `// Create inventory array here
// const inventory = [...]`,
        solution: (code) => {
            return code.includes('inventory') &&
                   (code.includes('[') || code.includes('Array')) &&
                   (code.includes('push') || code.includes('"key"'));
        }
    },
    {
        id: 5,
        title: "Level 5: Conditionals (if/else)",
        concept: "Conditionals",
        description: "Learn conditional statements",
        instructions: `
            <h5>Objective:</h5>
            <p>Create a function that checks player health.</p>
            <ol>
                <li>Create a function <code>checkHealth</code> that takes health as parameter</li>
                <li>If health > 50, log "Player is healthy"</li>
                <li>Else if health > 0, log "Player is injured"</li>
                <li>Else log "Player is dead"</li>
                <li>Call the function with health = 75</li>
            </ol>
        `,
        hint: "Use if (condition) { } else if (condition) { } else { }",
        starterCode: `// Create checkHealth function here
// Use if/else statements`,
        solution: (code) => {
            return code.includes('if') &&
                   code.includes('checkHealth') &&
                   code.includes('else');
        }
    },
    {
        id: 6,
        title: "Level 6: Loops (for/while)",
        concept: "Loops",
        description: "Learn to use loops",
        instructions: `
            <h5>Objective:</h5>
            <p>Use a loop to process inventory items.</p>
            <ol>
                <li>Create an array: <code>items = ["sword", "shield", "potion"]</code></li>
                <li>Use a for loop to log each item</li>
                <li>Each log should say "Item: [item name]"</li>
            </ol>
        `,
        hint: "For loops: for (let i = 0; i < array.length; i++) { }",
        starterCode: `// Create items array and loop here
// const items = [...]`,
        solution: (code) => {
            return code.includes('for') &&
                   code.includes('items') &&
                   code.includes('console.log');
        }
    },
    {
        id: 7,
        title: "Level 7: DOM Manipulation",
        concept: "DOM",
        description: "Learn to manipulate the DOM",
        instructions: `
            <h5>Objective:</h5>
            <p>Create and manipulate DOM elements.</p>
            <ol>
                <li>Get the canvas element: <code>const canvas = document.getElementById('gameCanvas')</code></li>
                <li>Get the 2D context: <code>const ctx = canvas.getContext('2d')</code></li>
                <li>Draw a rectangle: <code>ctx.fillRect(50, 50, 100, 100)</code></li>
                <li>Set fill color: <code>ctx.fillStyle = 'green'</code></li>
            </ol>
        `,
        hint: "Use document.getElementById() to get elements, then use canvas context methods.",
        starterCode: `// Get canvas and context
// Draw a rectangle`,
        solution: (code) => {
            return code.includes('getElementById') &&
                   code.includes('getContext') &&
                   code.includes('fillRect');
        }
    },
    {
        id: 8,
        title: "Level 8: Event Listeners",
        concept: "Events",
        description: "Learn to handle events",
        instructions: `
            <h5>Objective:</h5>
            <p>Add keyboard event listeners.</p>
            <ol>
                <li>Add an event listener for 'keydown' events</li>
                <li>Log the key that was pressed</li>
                <li>Check if the key is 'ArrowUp' and log "Moving up!"</li>
            </ol>
        `,
        hint: "Use: document.addEventListener('keydown', function(event) { event.key })",
        starterCode: `// Add event listener here
// document.addEventListener(...)`,
        solution: (code) => {
            return code.includes('addEventListener') &&
                   code.includes('keydown') &&
                   code.includes('event.key');
        }
    },
    {
        id: 9,
        title: "Level 9: Classes & OOP",
        concept: "Classes",
        description: "Learn object-oriented programming",
        instructions: `
            <h5>Objective:</h5>
            <p>Create a Player class.</p>
            <ol>
                <li>Create a class called <code>Player</code></li>
                <li>Add a constructor that takes name and health</li>
                <li>Add a method <code>attack()</code> that logs "Player attacks!"</li>
                <li>Create an instance: <code>const player1 = new Player("Hero", 100)</code></li>
                <li>Call the attack method</li>
            </ol>
        `,
        hint: "Classes: class ClassName { constructor() { } method() { } }",
        starterCode: `// Create Player class here
// class Player { ... }`,
        solution: (code) => {
            return code.includes('class') &&
                   code.includes('Player') &&
                   code.includes('constructor') &&
                   code.includes('new Player');
        }
    },
    {
        id: 10,
        title: "Level 10: Async/Await",
        concept: "Async",
        description: "Learn asynchronous programming",
        instructions: `
            <h5>Objective:</h5>
            <p>Create an async function to load game data.</p>
            <ol>
                <li>Create an async function <code>loadGameData</code></li>
                <li>Use await with a Promise that resolves after 1 second</li>
                <li>Log "Game data loaded!" after the promise resolves</li>
                <li>Call the function</li>
            </ol>
        `,
        hint: "async function name() { await new Promise(...) }",
        starterCode: `// Create async function here
// async function loadGameData() { ... }`,
        solution: (code) => {
            return code.includes('async') &&
                   code.includes('await') &&
                   code.includes('Promise');
        }
    }
];

let currentLevel = 0;
let completedLevels = JSON.parse(localStorage.getItem('completedLevels') || '[]');

// Initialize level system
function initLevelSystem() {
    renderLevelsList();
    loadLevel(0);
    updateProgress();
    
    // Event listeners
    document.getElementById('runCode').addEventListener('click', runCode);
    document.getElementById('checkCode').addEventListener('click', checkSolution);
    document.getElementById('resetLevel').addEventListener('click', resetLevel);
    document.getElementById('hintBtn').addEventListener('click', toggleHint);
    document.getElementById('nextLevel').addEventListener('click', nextLevel);
    document.getElementById('prevLevel').addEventListener('click', prevLevel);
}

function renderLevelsList() {
    const list = document.getElementById('levelsList');
    list.innerHTML = '';
    
    levels.forEach((level, index) => {
        const isCompleted = completedLevels.includes(level.id);
        const isActive = index === currentLevel;
        
        const item = document.createElement('div');
        item.className = `level-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
        item.innerHTML = `
            <div class="level-number">Level ${level.id}</div>
            <div class="level-name">${level.title.split(':')[1].trim()}</div>
            <div class="level-concept">${level.concept}</div>
        `;
        item.addEventListener('click', () => {
            if (index <= currentLevel || isCompleted) {
                loadLevel(index);
            }
        });
        list.appendChild(item);
    });
}

function loadLevel(index) {
    if (index < 0 || index >= levels.length) return;
    
    currentLevel = index;
    const level = levels[index];
    
    // Update UI
    document.getElementById('levelTitle').textContent = level.title;
    document.getElementById('levelDescription').textContent = level.description;
    document.getElementById('instructions').innerHTML = level.instructions;
    document.getElementById('codeEditor').value = level.starterCode;
    document.getElementById('conceptBadge').textContent = level.concept;
    document.getElementById('hintText').textContent = level.hint;
    
    // Update navigation
    document.getElementById('prevLevel').disabled = index === 0;
    document.getElementById('nextLevel').disabled = index === levels.length - 1;
    
    // Update level list
    renderLevelsList();
    
    // Clear status
    document.getElementById('codeStatus').textContent = '';
    document.getElementById('codeStatus').className = 'code-status';
    document.getElementById('hintContent').style.display = 'none';
    
    // Initialize game canvas for this level
    initGameCanvas(level);
}

function initGameCanvas(level) {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw level-specific content
    ctx.fillStyle = '#ff007f';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(level.title, canvas.width / 2, canvas.height / 2);
    ctx.fillStyle = '#fff';
    ctx.font = '16px Arial';
    ctx.fillText('Complete the code to see the game!', canvas.width / 2, canvas.height / 2 + 40);
}

function runCode() {
    const code = document.getElementById('codeEditor').value;
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Make canvas and context available
    window.gameCanvas = canvas;
    window.ctx = ctx;
    
    try {
        eval(code);
        
        // Update game visualization based on level
        if (typeof updateGameState === 'function') {
            updateGameState(currentLevel + 1, code);
        }
        
        document.getElementById('codeStatus').textContent = '✓ Code executed successfully!';
        document.getElementById('codeStatus').className = 'code-status success';
    } catch (error) {
        document.getElementById('codeStatus').textContent = '✗ Error: ' + error.message;
        document.getElementById('codeStatus').className = 'code-status error';
    }
}

function checkSolution() {
    const code = document.getElementById('codeEditor').value;
    const level = levels[currentLevel];
    
    if (level.solution(code)) {
        // Mark as completed
        if (!completedLevels.includes(level.id)) {
            completedLevels.push(level.id);
            localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
        }
        
        document.getElementById('codeStatus').textContent = '✓ Level Complete! Well done!';
        document.getElementById('codeStatus').className = 'code-status success';
        
        // Enable next level if not last
        if (currentLevel < levels.length - 1) {
            document.getElementById('nextLevel').disabled = false;
        }
        
        updateProgress();
        renderLevelsList();
    } else {
        document.getElementById('codeStatus').textContent = '✗ Not quite right. Check the instructions!';
        document.getElementById('codeStatus').className = 'code-status error';
    }
}

function resetLevel() {
    loadLevel(currentLevel);
}

function toggleHint() {
    const hint = document.getElementById('hintContent');
    hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
}

function nextLevel() {
    if (currentLevel < levels.length - 1) {
        loadLevel(currentLevel + 1);
    }
}

function prevLevel() {
    if (currentLevel > 0) {
        loadLevel(currentLevel - 1);
    }
}

function updateProgress() {
    const progress = (completedLevels.length / levels.length) * 100;
    document.getElementById('overallProgress').style.width = progress + '%';
    document.getElementById('progressPercent').textContent = Math.round(progress) + '%';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initLevelSystem);

