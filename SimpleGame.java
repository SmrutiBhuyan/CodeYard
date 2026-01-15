import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class SimpleGame extends JPanel implements KeyListener {
    // Square position and size
    private int squareX = 50, squareY = 50, squareSize = 50;

    // Obstacle position and size
    private int obstacleX = 150, obstacleY = 150, obstacleWidth = 50, obstacleHeight = 50;

    // Goal position and size
    private int goalX = 300, goalY = 300, goalWidth = 50, goalHeight = 50;

    public SimpleGame() {
        // Set up the panel
        setFocusable(true);
        addKeyListener(this);
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        // Draw the background
        g.setColor(Color.WHITE);
        g.fillRect(0, 0, getWidth(), getHeight());

        // Draw the goal
        g.setColor(Color.BLUE);
        g.fillRect(goalX, goalY, goalWidth, goalHeight);

        // Draw the obstacle
        g.setColor(Color.RED);
        g.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);

        // Draw the player's square
        g.setColor(Color.GREEN);
        g.fillRect(squareX, squareY, squareSize, squareSize);
    }

    // Move the square based on arrow key input
    public void moveSquare(KeyEvent e) {
        int keyCode = e.getKeyCode();

        // Clear previous position
        if (keyCode == KeyEvent.VK_UP && squareY > 0) squareY -= 10;
        if (keyCode == KeyEvent.VK_DOWN && squareY < getHeight() - squareSize) squareY += 10;
        if (keyCode == KeyEvent.VK_LEFT && squareX > 0) squareX -= 10;
        if (keyCode == KeyEvent.VK_RIGHT && squareX < getWidth() - squareSize) squareX += 10;

        checkCollision();
        checkGoal();
        repaint();
    }

    // Check if the square collides with the obstacle
    public void checkCollision() {
        if (squareX < obstacleX + obstacleWidth &&
            squareX + squareSize > obstacleX &&
            squareY < obstacleY + obstacleHeight &&
            squareY + squareSize > obstacleY) {
            JOptionPane.showMessageDialog(this, "Game Over!");
            resetGame();
        }
    }

    // Check if the square reaches the goal
    public void checkGoal() {
        if (squareX < goalX + goalWidth &&
            squareX + squareSize > goalX &&
            squareY < goalY + goalHeight &&
            squareY + squareSize > goalY) {
            JOptionPane.showMessageDialog(this, "You Win!");
            resetGame();
        }
    }

    // Reset the game
    public void resetGame() {
        squareX = 50;
        squareY = 50;
        repaint();
    }

    // KeyListener methods
    @Override
    public void keyPressed(KeyEvent e) {
        moveSquare(e);
    }

    @Override
    public void keyReleased(KeyEvent e) {}

    @Override
    public void keyTyped(KeyEvent e) {}

    // Main method to set up the JFrame
    public static void main(String[] args) {
        JFrame frame = new JFrame("Simple Game");
        SimpleGame gamePanel = new SimpleGame();

        frame.add(gamePanel);
        frame.setSize(400, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
