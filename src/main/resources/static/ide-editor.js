// IDE Editor JavaScript - Enhanced code editor with execution

class IDEEditor {
    constructor(editorId, canvasId, outputId) {
        this.editor = document.getElementById(editorId);
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.output = document.getElementById(outputId);
        this.originalConsoleLog = console.log;
        this.originalConsoleError = console.error;
        this.outputBuffer = [];
        this.isRunning = false;
        
        this.init();
    }
    
    init() {
        // Setup console interception
        this.setupConsoleInterception();
        
        // Setup editor features
        this.setupEditorFeatures();
        
        // Setup keyboard shortcuts
        this.setupKeyboardShortcuts();
    }
    
    setupConsoleInterception() {
        // Intercept console.log
        const self = this;
        console.log = function(...args) {
            self.originalConsoleLog.apply(console, args);
            self.addOutput(args.join(' '), 'log');
        };
        
        console.error = function(...args) {
            self.originalConsoleError.apply(console, args);
            self.addOutput(args.join(' '), 'error');
        };
    }
    
    setupEditorFeatures() {
        // Auto-indentation
        this.editor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                this.insertText('    '); // 4 spaces
            }
            
            // Auto-close brackets
            if (e.key === '(') {
                e.preventDefault();
                this.insertText('()');
                this.editor.setSelectionRange(this.editor.selectionStart - 1, this.editor.selectionStart - 1);
            }
            
            if (e.key === '{') {
                e.preventDefault();
                this.insertText('{}');
                this.editor.setSelectionRange(this.editor.selectionStart - 1, this.editor.selectionStart - 1);
            }
            
            if (e.key === '[') {
                e.preventDefault();
                this.insertText('[]');
                this.editor.setSelectionRange(this.editor.selectionStart - 1, this.editor.selectionStart - 1);
            }
        });
        
        // Line numbers (simple version)
        this.updateLineNumbers();
        this.editor.addEventListener('scroll', () => this.updateLineNumbers());
        this.editor.addEventListener('input', () => this.updateLineNumbers());
    }
    
    setupKeyboardShortcuts() {
        this.editor.addEventListener('keydown', (e) => {
            // Ctrl+Enter or F5 to run
            if ((e.ctrlKey && e.key === 'Enter') || e.key === 'F5') {
                e.preventDefault();
                this.runCode();
            }
            
            // Ctrl+L to clear
            if (e.ctrlKey && e.key === 'l') {
                e.preventDefault();
                this.clearOutput();
            }
        });
    }
    
    insertText(text) {
        const start = this.editor.selectionStart;
        const end = this.editor.selectionEnd;
        const value = this.editor.value;
        
        this.editor.value = value.substring(0, start) + text + value.substring(end);
        this.editor.setSelectionRange(start + text.length, start + text.length);
        this.editor.focus();
    }
    
    updateLineNumbers() {
        // Simple line number display (could be enhanced)
        const lines = this.editor.value.split('\n').length;
        // This is a placeholder - full implementation would show actual line numbers
    }
    
    runCode() {
        if (this.isRunning) {
            this.addOutput('Code is already running...', 'error');
            return;
        }
        
        this.isRunning = true;
        this.clearOutput();
        this.updateStatus('running');
        
        // Clear canvas
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = '#000';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        
        // Make canvas and context available
        if (this.canvas && this.ctx) {
            window.gameCanvas = this.canvas;
            window.ctx = this.ctx;
            window.canvas = this.canvas;
        }
        
        const code = this.editor.value;
        
        try {
            // Create a safe execution context
            const executeCode = new Function(code);
            executeCode();
            
            this.addOutput('✓ Code executed successfully!', 'success');
            this.updateStatus('success');
            
            // Update game visualization if function exists
            if (typeof updateGameState === 'function') {
                setTimeout(() => {
                    updateGameState(currentLevel + 1, code);
                }, 100);
            }
            
        } catch (error) {
            this.addOutput('✗ Error: ' + error.message, 'error');
            this.addOutput('Stack: ' + error.stack, 'error');
            this.updateStatus('error');
        } finally {
            this.isRunning = false;
            setTimeout(() => {
                if (this.isRunning === false) {
                    this.updateStatus('ready');
                }
            }, 2000);
        }
    }
    
    resetCode() {
        if (confirm('Reset code to starter template?')) {
            const level = levels[currentLevel];
            if (level && level.starterCode) {
                this.editor.value = level.starterCode;
                this.clearOutput();
            }
        }
    }
    
    clearOutput() {
        if (this.output) {
            this.output.innerHTML = '';
        }
        this.outputBuffer = [];
    }
    
    addOutput(message, type = 'log') {
        if (!this.output) return;
        
        const outputLine = document.createElement('div');
        outputLine.className = `ide-output-${type}`;
        outputLine.textContent = message;
        
        this.output.appendChild(outputLine);
        this.output.scrollTop = this.output.scrollHeight;
        
        this.outputBuffer.push({ message, type, timestamp: Date.now() });
    }
    
    updateStatus(status) {
        const statusElement = document.getElementById('ideStatus');
        if (statusElement) {
            statusElement.className = `ide-status status-${status}`;
            const statusText = {
                'ready': 'Ready',
                'running': 'Running...',
                'success': 'Success',
                'error': 'Error'
            };
            statusElement.textContent = statusText[status] || 'Ready';
        }
    }
    
    getCode() {
        return this.editor.value;
    }
    
    setCode(code) {
        this.editor.value = code;
    }
}

// Initialize IDE when DOM is ready
let ideEditor = null;

document.addEventListener('DOMContentLoaded', () => {
    const editorElement = document.getElementById('ideCodeEditor');
    const canvasElement = document.getElementById('gameCanvas') || document.getElementById('snakeCanvas');
    const outputElement = document.getElementById('ideOutput');
    
    if (editorElement) {
        ideEditor = new IDEEditor('ideCodeEditor', canvasElement?.id, 'ideOutput');
        
        // Setup run button
        const runBtn = document.getElementById('ideRunBtn');
        if (runBtn) {
            runBtn.addEventListener('click', () => ideEditor.runCode());
        }
        
        // Setup reset button
        const resetBtn = document.getElementById('ideResetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => ideEditor.resetCode());
        }
        
        // Setup clear button
        const clearBtn = document.getElementById('ideClearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => ideEditor.clearOutput());
        }
    }
});

// Export for global access
window.IDEEditor = IDEEditor;
window.ideEditor = ideEditor;

