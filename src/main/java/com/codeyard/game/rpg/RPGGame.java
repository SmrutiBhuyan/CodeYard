package com.codeyard.game.rpg;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * Main RPG Game class
 * Complete RPG game implementation
 */
public class RPGGame {
    private Player player;
    private GameMap gameMap;
    private Scanner scanner;
    private boolean gameRunning;
    private List<Item> inventory;
    
    public RPGGame() {
        this.scanner = new Scanner(System.in);
        this.inventory = new ArrayList<>();
        this.gameRunning = true;
    }
    
    public void start() {
        System.out.println("╔═══════════════════════════════════════╗");
        System.out.println("║      Welcome to CodeYard RPG!        ║");
        System.out.println("╚═══════════════════════════════════════╝");
        System.out.println();
        
        System.out.print("Enter your name, brave adventurer: ");
        String playerName = scanner.nextLine();
        
        if (playerName.trim().isEmpty()) {
            playerName = "Hero";
        }
        
        player = new Player(playerName);
        gameMap = new GameMap(15, 10);
        
        // Set player starting position
        player.setX(1);
        player.setY(1);
        
        System.out.println("\nWelcome, " + player.getName() + "!");
        System.out.println("Your adventure begins now!");
        System.out.println("\nCommands:");
        System.out.println("  w/a/s/d - Move (up/left/down/right)");
        System.out.println("  stats - View your stats");
        System.out.println("  map - View the map");
        System.out.println("  inventory - View inventory");
        System.out.println("  fight - Fight nearby enemies");
        System.out.println("  explore - Look for items");
        System.out.println("  quit - Exit game");
        System.out.println();
        
        gameLoop();
    }
    
    private void gameLoop() {
        while (gameRunning && player.isAlive()) {
            System.out.println("\n" + "═".repeat(50));
            System.out.println(player.toString());
            System.out.println("═".repeat(50));
            
            System.out.print("\nWhat would you like to do? ");
            String command = scanner.nextLine().toLowerCase().trim();
            
            switch (command) {
                case "w":
                case "up":
                    movePlayer(0, -1);
                    break;
                case "s":
                case "down":
                    movePlayer(0, 1);
                    break;
                case "a":
                case "left":
                    movePlayer(-1, 0);
                    break;
                case "d":
                case "right":
                    movePlayer(1, 0);
                    break;
                case "stats":
                    showStats();
                    break;
                case "map":
                    gameMap.printMap(player);
                    break;
                case "inventory":
                    showInventory();
                    break;
                case "fight":
                    startCombat();
                    break;
                case "explore":
                    explore();
                    break;
                case "quit":
                case "exit":
                    gameRunning = false;
                    System.out.println("Thanks for playing! Goodbye!");
                    break;
                default:
                    System.out.println("Unknown command. Try: w/a/s/d, stats, map, inventory, fight, explore, quit");
            }
            
            // Check for nearby enemies
            checkForEnemies();
            
            // Check for items
            checkForItems();
        }
        
        if (!player.isAlive()) {
            System.out.println("\n💀 You have been defeated! Game Over!");
        }
        
        scanner.close();
    }
    
    private void movePlayer(int dx, int dy) {
        int newX = player.getX() + dx;
        int newY = player.getY() + dy;
        
        if (gameMap.isValidPosition(newX, newY)) {
            player.move(dx, dy);
            System.out.println("You moved to (" + player.getX() + ", " + player.getY() + ")");
        } else {
            System.out.println("You can't move there! (Wall or boundary)");
        }
    }
    
    private void showStats() {
        System.out.println("\n=== PLAYER STATS ===");
        System.out.println(player.toString());
        System.out.println("Position: (" + player.getX() + ", " + player.getY() + ")");
        System.out.println("Inventory Items: " + inventory.size());
    }
    
    private void showInventory() {
        if (inventory.isEmpty()) {
            System.out.println("\nYour inventory is empty!");
        } else {
            System.out.println("\n=== INVENTORY ===");
            for (int i = 0; i < inventory.size(); i++) {
                System.out.println((i + 1) + ". " + inventory.get(i));
            }
            System.out.print("\nUse an item? (Enter number or 'no'): ");
            String input = scanner.nextLine();
            if (!input.equalsIgnoreCase("no") && !input.isEmpty()) {
                try {
                    int index = Integer.parseInt(input) - 1;
                    if (index >= 0 && index < inventory.size()) {
                        Item item = inventory.get(index);
                        item.use(player);
                        inventory.remove(index);
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid number!");
                }
            }
        }
    }
    
    private void checkForEnemies() {
        for (Enemy enemy : new ArrayList<>(gameMap.getEnemies())) {
            // Simple proximity check (within 2 tiles)
            int distance = Math.abs(enemy.hashCode() % gameMap.getWidth() - player.getX()) +
                          Math.abs(enemy.hashCode() % gameMap.getHeight() - player.getY());
            if (distance <= 2 && Math.random() < 0.3) {
                System.out.println("\n⚠️  An enemy is nearby! Type 'fight' to engage!");
                return;
            }
        }
    }
    
    private void startCombat() {
        if (gameMap.getEnemies().isEmpty()) {
            System.out.println("No enemies nearby!");
            return;
        }
        
        Enemy enemy = gameMap.getEnemies().get(0);
        System.out.println("\n⚔️  COMBAT STARTED!");
        System.out.println("You encounter: " + enemy);
        
        while (player.isAlive() && enemy.isAlive()) {
            System.out.println("\n--- Your Turn ---");
            System.out.print("Attack (a) or Run (r)? ");
            String action = scanner.nextLine().toLowerCase();
            
            if (action.equals("a") || action.equals("attack")) {
                int damage = player.attack(enemy);
                System.out.println("You attack for " + damage + " damage!");
                System.out.println(enemy);
                
                if (!enemy.isAlive()) {
                    System.out.println("🎉 You defeated " + enemy.getName() + "!");
                    player.addExperience(enemy.getExperienceReward());
                    player.addGold(enemy.getGoldReward());
                    gameMap.removeEnemy(enemy);
                    break;
                }
            } else if (action.equals("r") || action.equals("run")) {
                System.out.println("You run away!");
                break;
            } else {
                System.out.println("Invalid action! Attacking anyway...");
                int damage = player.attack(enemy);
                System.out.println("You attack for " + damage + " damage!");
            }
            
            if (enemy.isAlive()) {
                System.out.println("\n--- Enemy Turn ---");
                int damage = enemy.attack(player);
                System.out.println(enemy.getName() + " attacks you for " + damage + " damage!");
                System.out.println(player);
            }
        }
    }
    
    private void checkForItems() {
        if (!gameMap.getItems().isEmpty() && Math.random() < 0.2) {
            Item item = gameMap.getItems().get(0);
            System.out.println("\n✨ You found: " + item.getName() + "!");
            System.out.print("Pick it up? (y/n): ");
            String answer = scanner.nextLine().toLowerCase();
            if (answer.equals("y") || answer.equals("yes")) {
                inventory.add(item);
                gameMap.removeItem(item);
                System.out.println("Added to inventory!");
            }
        }
    }
    
    private void explore() {
        System.out.println("\n🔍 You search the area...");
        if (Math.random() < 0.5) {
            Item item = new Item("Health Potion", Item.ItemType.POTION, 20, 15, "Restores 20 HP");
            System.out.println("You found: " + item.getName() + "!");
            inventory.add(item);
        } else {
            int gold = (int)(Math.random() * 30) + 10;
            player.addGold(gold);
            System.out.println("You found " + gold + " gold!");
        }
    }
    
    public static void main(String[] args) {
        RPGGame game = new RPGGame();
        game.start();
    }
}

