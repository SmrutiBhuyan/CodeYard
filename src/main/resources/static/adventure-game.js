// Adventure Game - This will be enhanced as levels progress
// The game evolves based on what the user learns in each level

let gameState = {
    player: null,
    enemies: [],
    items: [],
    score: 0,
    level: 1
};

// This will be called when user completes code in each level
function updateGameState(level, code) {
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw based on level
    switch(level) {
        case 1:
            // Variables level - show player stats
            drawPlayerStats(ctx, code);
            break;
        case 2:
            // Functions level - show player movement
            drawPlayerMovement(ctx, code);
            break;
        case 3:
            // Objects level - show player object
            drawPlayerObject(ctx, code);
            break;
        case 4:
            // Arrays level - show inventory
            drawInventory(ctx, code);
            break;
        case 5:
            // Conditionals level - show health status
            drawHealthStatus(ctx, code);
            break;
        case 6:
            // Loops level - show multiple items
            drawItems(ctx, code);
            break;
        case 7:
            // DOM level - draw shapes (user's code handles this)
            // But we can show a default if nothing drawn
            if (!code.includes('fillRect') && !code.includes('fillStyle')) {
                drawDefaultCanvas(ctx);
            }
            break;
        case 8:
            // Events level - show keyboard input
            drawKeyboardInput(ctx);
            break;
        case 9:
            // Classes level - show player class instance
            drawPlayerClass(ctx, code);
            break;
        case 10:
            // Async level - show loading animation
            drawAsyncAnimation(ctx);
            break;
        default:
            drawDefaultCanvas(ctx);
    }
}

function drawDefaultCanvas(ctx) {
    ctx.fillStyle = '#ff007f';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Write code to see the game!', ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.fillText('Use ctx.fillRect() and ctx.fillStyle to draw', ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
}

function drawPlayerStats(ctx, code) {
    // Draw background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw title
    ctx.fillStyle = '#ff007f';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🎮 Player Stats', ctx.canvas.width / 2, 50);
    
    // Draw stats box
    ctx.fillStyle = 'rgba(255, 0, 127, 0.1)';
    ctx.fillRect(50, 80, ctx.canvas.width - 100, 250);
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 80, ctx.canvas.width - 100, 250);
    
    ctx.fillStyle = '#00ffff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'left';
    
    let y = 120;
    if (code.includes('playerName') || code.includes('name')) {
        ctx.fillText('👤 Name: Hero', 80, y);
        y += 40;
    }
    if (code.includes('playerHealth') || code.includes('health')) {
        // Draw health bar
        ctx.fillStyle = '#ff4444';
        ctx.fillRect(80, y - 15, 200, 20);
        ctx.fillStyle = '#00ff88';
        ctx.fillRect(80, y - 15, 200, 20); // Full health
        ctx.fillStyle = '#fff';
        ctx.fillText('❤️ Health: 100/100', 80, y);
        y += 40;
    }
    if (code.includes('playerScore') || code.includes('score')) {
        ctx.fillText('⭐ Score: 0', 80, y);
        y += 40;
    }
    
    // Draw player character
    ctx.fillStyle = '#00ff88';
    ctx.fillRect(ctx.canvas.width / 2 - 30, 280, 60, 60);
    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Your Character', ctx.canvas.width / 2, 360);
}

function drawPlayerMovement(ctx, code) {
    // Draw game world
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let x = 0; x < ctx.canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, ctx.canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < ctx.canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(ctx.canvas.width, y);
        ctx.stroke();
    }
    
    // Draw player (animated position)
    const time = Date.now() / 1000;
    const x = 200 + Math.sin(time) * 50;
    const y = 150 + Math.cos(time) * 30;
    
    ctx.fillStyle = '#00ff88';
    ctx.fillRect(x, y, 50, 50);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, 50, 50);
    
    // Draw movement indicator
    ctx.fillStyle = '#00ffff';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Player moved!', ctx.canvas.width / 2, 50);
    ctx.fillText('Use arrow keys to move', ctx.canvas.width / 2, 350);
}

function drawPlayerObject(ctx, code) {
    ctx.fillStyle = '#ff007f';
    ctx.fillRect(200, 150, 100, 100);
    
    ctx.fillStyle = '#fff';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Player Object', ctx.canvas.width / 2, 280);
}

function drawInventory(ctx, code) {
    const items = ['sword', 'shield', 'potion', 'key'];
    const colors = ['#ff007f', '#00ffff', '#00ff88', '#ffff00'];
    
    items.forEach((item, index) => {
        ctx.fillStyle = colors[index];
        ctx.fillRect(100 + index * 100, 200, 60, 60);
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(item, 130 + index * 100, 235);
    });
}

function drawHealthStatus(ctx, code) {
    const health = 75;
    ctx.fillStyle = health > 50 ? '#00ff88' : '#ff4444';
    ctx.fillRect(200, 150, health * 2, 30);
    
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(health > 50 ? 'Player is healthy!' : 'Player is injured!', ctx.canvas.width / 2, 250);
}

function drawItems(ctx, code) {
    const items = ['sword', 'shield', 'potion'];
    items.forEach((item, index) => {
        ctx.fillStyle = '#00ffff';
        ctx.fillRect(150 + index * 120, 180, 80, 80);
        ctx.fillStyle = '#fff';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Item: ${item}`, 190 + index * 120, 225);
    });
}

function drawKeyboardInput(ctx) {
    ctx.fillStyle = '#ff007f';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Press arrow keys!', ctx.canvas.width / 2, canvas.height / 2);
}

function drawPlayerClass(ctx, code) {
    ctx.fillStyle = '#00ff88';
    ctx.fillRect(250, 150, 100, 100);
    
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Player Class Instance', ctx.canvas.width / 2, 280);
}

function drawAsyncAnimation(ctx) {
    const time = Date.now() / 1000;
    const x = ctx.canvas.width / 2 + Math.sin(time * 2) * 50;
    const y = ctx.canvas.height / 2;
    
    ctx.fillStyle = '#00ffff';
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#fff';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Loading...', ctx.canvas.width / 2, y + 60);
}

// Export for use in level system
window.updateGameState = updateGameState;

