// Java Level System - Similar to JavaScript but for Java concepts

const javaLevels = [
    {
        id: 1,
        title: "Level 1: Variables & Data Types",
        concept: "Variables",
        description: "Learn about Java variables, data types, and declarations",
        instructions: `
            <h5>Objective:</h5>
            <p>Create variables to store player information.</p>
            <ol>
                <li>Create an <code>int</code> variable <code>playerHealth</code> with value 100</li>
                <li>Create a <code>String</code> variable <code>playerName</code> with value "Hero"</li>
                <li>Create a <code>double</code> variable <code>playerSpeed</code> with value 5.5</li>
                <li>Create a <code>boolean</code> variable <code>isAlive</code> with value true</li>
                <li>Print all variables using <code>System.out.println()</code></li>
            </ol>
            <p><strong>Note:</strong> In Java, you must declare the type before the variable name.</p>
        `,
        hint: "Java syntax: int health = 100; String name = \"Hero\";",
        starterCode: `// Create your variables here
// Remember: Java requires type declarations
// int variableName = value;
// String variableName = "value";`,
        solution: (code) => {
            return code.includes('int') &&
                   code.includes('String') &&
                   code.includes('playerHealth') &&
                   code.includes('playerName') &&
                   code.includes('System.out.println');
        }
    },
    {
        id: 2,
        title: "Level 2: Methods & Functions",
        concept: "Methods",
        description: "Learn to create and call methods in Java",
        instructions: `
            <h5>Objective:</h5>
            <p>Create methods to handle player actions.</p>
            <ol>
                <li>Create a method <code>void attack()</code> that prints "Player attacks!"</li>
                <li>Create a method <code>int getHealth()</code> that returns 100</li>
                <li>Call both methods in the main method</li>
                <li>Print the result of getHealth()</li>
            </ol>
            <p><strong>Note:</strong> Methods in Java must be inside a class.</p>
        `,
        hint: "Method syntax: public void methodName() { } or public int methodName() { return value; }",
        starterCode: `// Create your methods here
// public void attack() { ... }
// public int getHealth() { return 100; }`,
        solution: (code) => {
            return code.includes('void') &&
                   code.includes('attack') &&
                   code.includes('int') &&
                   code.includes('getHealth') &&
                   code.includes('return');
        }
    },
    {
        id: 3,
        title: "Level 3: Classes & Objects",
        concept: "Classes",
        description: "Learn about Java classes and object creation",
        instructions: `
            <h5>Objective:</h5>
            <p>Create a Player class and instantiate it.</p>
            <ol>
                <li>Create a class called <code>Player</code></li>
                <li>Add a field <code>String name</code></li>
                <li>Add a field <code>int health</code></li>
                <li>Create a constructor that takes name and health</li>
                <li>Create an object: <code>Player player = new Player("Hero", 100)</code></li>
            </ol>
        `,
        hint: "Class syntax: class ClassName { fields; constructor; }",
        starterCode: `// Create Player class here
// class Player { ... }`,
        solution: (code) => {
            return code.includes('class') &&
                   code.includes('Player') &&
                   code.includes('new Player');
        }
    },
    {
        id: 4,
        title: "Level 4: Arrays & Collections",
        concept: "Arrays",
        description: "Learn to work with arrays and ArrayLists",
        instructions: `
            <h5>Objective:</h5>
            <p>Create arrays to store game data.</p>
            <ol>
                <li>Create an array: <code>String[] items = {"sword", "shield", "potion"}</code></li>
                <li>Create an ArrayList: <code>ArrayList&lt;String&gt; inventory = new ArrayList&lt;&gt;()</code></li>
                <li>Add "key" to the ArrayList using <code>inventory.add("key")</code></li>
                <li>Print the first item from the array</li>
            </ol>
        `,
        hint: "Arrays: String[] arr = {val1, val2}; ArrayList: ArrayList&lt;Type&gt; list = new ArrayList&lt;&gt;();",
        starterCode: `// Create arrays and ArrayLists here
// String[] items = {...};
// ArrayList<String> inventory = new ArrayList<>();`,
        solution: (code) => {
            return (code.includes('String[]') || code.includes('[]')) &&
                   (code.includes('ArrayList') || code.includes('add'));
        }
    },
    {
        id: 5,
        title: "Level 5: Conditionals (if/else)",
        concept: "Conditionals",
        description: "Learn conditional statements in Java",
        instructions: `
            <h5>Objective:</h5>
            <p>Create a method that checks player health status.</p>
            <ol>
                <li>Create a method <code>void checkHealth(int health)</code></li>
                <li>If health > 50, print "Player is healthy"</li>
                <li>Else if health > 0, print "Player is injured"</li>
                <li>Else print "Player is dead"</li>
                <li>Call the method with health = 75</li>
            </ol>
        `,
        hint: "if (condition) { } else if (condition) { } else { }",
        starterCode: `// Create checkHealth method here
// Use if/else statements`,
        solution: (code) => {
            return code.includes('if') &&
                   code.includes('else') &&
                   code.includes('checkHealth');
        }
    },
    {
        id: 6,
        title: "Level 6: Loops (for/while)",
        concept: "Loops",
        description: "Learn to use loops in Java",
        instructions: `
            <h5>Objective:</h5>
            <p>Use loops to process game data.</p>
            <ol>
                <li>Create an array: <code>String[] items = {"sword", "shield", "potion"}</code></li>
                <li>Use a for loop to print each item</li>
                <li>Each print should say "Item: [item name]"</li>
            </ol>
        `,
        hint: "for (int i = 0; i < array.length; i++) { } or for (String item : items) { }",
        starterCode: `// Create items array and loop here
// String[] items = {...};
// for (...) { ... }`,
        solution: (code) => {
            return code.includes('for') &&
                   code.includes('items') &&
                   code.includes('System.out.println');
        }
    },
    {
        id: 7,
        title: "Level 7: Inheritance",
        concept: "Inheritance",
        description: "Learn object-oriented inheritance",
        instructions: `
            <h5>Objective:</h5>
            <p>Create a class hierarchy using inheritance.</p>
            <ol>
                <li>Create a base class <code>Character</code> with field <code>String name</code></li>
                <li>Create a class <code>Player extends Character</code></li>
                <li>Add a field <code>int level</code> to Player</li>
                <li>Create an object: <code>Player player = new Player()</code></li>
            </ol>
        `,
        hint: "Inheritance: class ChildClass extends ParentClass { }",
        starterCode: `// Create Character and Player classes here
// class Character { ... }
// class Player extends Character { ... }`,
        solution: (code) => {
            return code.includes('class') &&
                   code.includes('extends') &&
                   code.includes('Player');
        }
    },
    {
        id: 8,
        title: "Level 8: Interfaces",
        concept: "Interfaces",
        description: "Learn about Java interfaces",
        instructions: `
            <h5>Objective:</h5>
            <p>Create an interface and implement it.</p>
            <ol>
                <li>Create an interface <code>Attackable</code> with method <code>void attack()</code></li>
                <li>Create a class <code>Player implements Attackable</code></li>
                <li>Implement the attack method to print "Player attacks!"</li>
                <li>Create a Player object and call attack()</li>
            </ol>
        `,
        hint: "Interface: interface InterfaceName { void method(); } Implementation: class ClassName implements InterfaceName { }",
        starterCode: `// Create interface and implementation here
// interface Attackable { ... }
// class Player implements Attackable { ... }`,
        solution: (code) => {
            return code.includes('interface') &&
                   code.includes('implements') &&
                   code.includes('attack');
        }
    },
    {
        id: 9,
        title: "Level 9: Exception Handling",
        concept: "Exceptions",
        description: "Learn to handle exceptions",
        instructions: `
            <h5>Objective:</h5>
            <p>Create code that handles exceptions safely.</p>
            <ol>
                <li>Create a try-catch block</li>
                <li>In the try block, divide 10 by 0 (this will throw an exception)</li>
                <li>In the catch block, catch ArithmeticException and print "Cannot divide by zero!"</li>
            </ol>
        `,
        hint: "try { } catch (ExceptionType e) { }",
        starterCode: `// Create try-catch block here
// try { int result = 10 / 0; } catch (ArithmeticException e) { ... }`,
        solution: (code) => {
            return code.includes('try') &&
                   code.includes('catch') &&
                   code.includes('ArithmeticException');
        }
    },
    {
        id: 10,
        title: "Level 10: Generics",
        concept: "Generics",
        description: "Learn about Java generics",
        instructions: `
            <h5>Objective:</h5>
            <p>Create a generic class for game items.</p>
            <ol>
                <li>Create a generic class <code>class Item&lt;T&gt;</code></li>
                <li>Add a field <code>T value</code></li>
                <li>Create a constructor that takes T value</li>
                <li>Create an object: <code>Item&lt;String&gt; item = new Item&lt;&gt;("Sword")</code></li>
            </ol>
        `,
        hint: "Generics: class ClassName&lt;T&gt; { T field; }",
        starterCode: `// Create generic Item class here
// class Item<T> { ... }`,
        solution: (code) => {
            return code.includes('class') &&
                   code.includes('<T>') &&
                   code.includes('Item');
        }
    }
];

// Note: Since Java can't run in browser, these levels will show code examples
// and instructions, but actual execution would need to be done in an IDE

let currentJavaLevel = 0;
let completedJavaLevels = JSON.parse(localStorage.getItem('completedJavaLevels') || '[]');

function initJavaLevelSystem() {
    renderJavaLevelsList();
    loadJavaLevel(0);
    updateJavaProgress();
}

function renderJavaLevelsList() {
    const list = document.getElementById('levelsList');
    if (!list) return;
    
    list.innerHTML = '';
    
    javaLevels.forEach((level, index) => {
        const isCompleted = completedJavaLevels.includes(level.id);
        const isActive = index === currentJavaLevel;
        
        const item = document.createElement('div');
        item.className = `level-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
        item.innerHTML = `
            <div class="level-number">Level ${level.id}</div>
            <div class="level-name">${level.title.split(':')[1].trim()}</div>
            <div class="level-concept">${level.concept}</div>
        `;
        item.addEventListener('click', () => {
            if (index <= currentJavaLevel || isCompleted) {
                loadJavaLevel(index);
            }
        });
        list.appendChild(item);
    });
}

function loadJavaLevel(index) {
    if (index < 0 || index >= javaLevels.length) return;
    
    currentJavaLevel = index;
    const level = javaLevels[index];
    
    // Update UI elements if they exist
    const levelTitle = document.getElementById('levelTitle');
    const levelDescription = document.getElementById('levelDescription');
    const instructions = document.getElementById('instructions');
    const codeEditor = document.getElementById('codeEditor');
    const conceptBadge = document.getElementById('conceptBadge');
    const hintText = document.getElementById('hintText');
    
    if (levelTitle) levelTitle.textContent = level.title;
    if (levelDescription) levelDescription.textContent = level.description;
    if (instructions) instructions.innerHTML = level.instructions;
    if (codeEditor) codeEditor.value = level.starterCode;
    if (conceptBadge) conceptBadge.textContent = level.concept;
    if (hintText) hintText.textContent = level.hint;
    
    // Update navigation
    const prevBtn = document.getElementById('prevLevel');
    const nextBtn = document.getElementById('nextLevel');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === javaLevels.length - 1;
    
    renderJavaLevelsList();
}

function updateJavaProgress() {
    const progress = (completedJavaLevels.length / javaLevels.length) * 100;
    const progressBar = document.getElementById('overallProgress');
    const progressPercent = document.getElementById('progressPercent');
    
    if (progressBar) progressBar.style.width = progress + '%';
    if (progressPercent) progressPercent.textContent = Math.round(progress) + '%';
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initJavaLevelSystem);
} else {
    initJavaLevelSystem();
}

