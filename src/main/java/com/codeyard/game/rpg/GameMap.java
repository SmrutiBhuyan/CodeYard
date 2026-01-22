package com.codeyard.game.rpg;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * GameMap class for the RPG game
 * Manages the game world and locations
 */
public class GameMap {
    private int width;
    private int height;
    private char[][] map;
    private List<Enemy> enemies;
    private List<Item> items;
    private Random random;
    
    public GameMap(int width, int height) {
        this.width = width;
        this.height = height;
        this.map = new char[height][width];
        this.enemies = new ArrayList<>();
        this.items = new ArrayList<>();
        this.random = new Random();
        initializeMap();
    }
    
    private void initializeMap() {
        // Fill map with empty spaces
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                map[y][x] = '.';
            }
        }
        
        // Add walls around the edges
        for (int x = 0; x < width; x++) {
            map[0][x] = '#';
            map[height - 1][x] = '#';
        }
        for (int y = 0; y < height; y++) {
            map[y][0] = '#';
            map[y][width - 1] = '#';
        }
        
        // Add some random walls
        for (int i = 0; i < 20; i++) {
            int x = random.nextInt(width);
            int y = random.nextInt(height);
            if (map[y][x] == '.') {
                map[y][x] = '#';
            }
        }
        
        // Spawn enemies
        spawnEnemies(5);
        
        // Spawn items
        spawnItems(8);
    }
    
    private void spawnEnemies(int count) {
        for (int i = 0; i < count; i++) {
            int x = random.nextInt(width - 2) + 1;
            int y = random.nextInt(height - 2) + 1;
            if (map[y][x] == '.') {
                String[] enemyNames = {"Goblin", "Orc", "Skeleton", "Troll", "Dragon"};
                int level = random.nextInt(3) + 1;
                enemies.add(new Enemy(enemyNames[random.nextInt(enemyNames.length)], level));
            }
        }
    }
    
    private void spawnItems(int count) {
        for (int i = 0; i < count; i++) {
            int x = random.nextInt(width - 2) + 1;
            int y = random.nextInt(height - 2) + 1;
            if (map[y][x] == '.') {
                Item item = generateRandomItem();
                items.add(item);
            }
        }
    }
    
    private Item generateRandomItem() {
        Item.ItemType[] types = {Item.ItemType.POTION, Item.ItemType.WEAPON, Item.ItemType.ARMOR, Item.ItemType.GOLD};
        Item.ItemType type = types[random.nextInt(types.length)];
        
        switch (type) {
            case POTION:
                return new Item("Health Potion", type, 30, 20, "Restores 30 HP");
            case WEAPON:
                return new Item("Iron Sword", type, 5, 50, "Increases attack by 5");
            case ARMOR:
                return new Item("Leather Armor", type, 3, 40, "Increases defense by 3");
            case GOLD:
                return new Item("Gold Pouch", type, 25, 0, "Contains 25 gold");
            default:
                return new Item("Mystery Item", type, 10, 10, "A mysterious item");
        }
    }
    
    public boolean isValidPosition(int x, int y) {
        return x >= 0 && x < width && y >= 0 && y < height && map[y][x] != '#';
    }
    
    public char getCell(int x, int y) {
        if (x >= 0 && x < width && y >= 0 && y < height) {
            return map[y][x];
        }
        return '#';
    }
    
    public void setCell(int x, int y, char c) {
        if (x >= 0 && x < width && y >= 0 && y < height) {
            map[y][x] = c;
        }
    }
    
    public int getWidth() {
        return width;
    }
    
    public int getHeight() {
        return height;
    }
    
    public List<Enemy> getEnemies() {
        return enemies;
    }
    
    public List<Item> getItems() {
        return items;
    }
    
    public void removeEnemy(Enemy enemy) {
        enemies.remove(enemy);
    }
    
    public void removeItem(Item item) {
        items.remove(item);
    }
    
    public void printMap(Player player) {
        System.out.println("\n=== GAME MAP ===");
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                if (x == player.getX() && y == player.getY()) {
                    System.out.print('@'); // Player
                } else {
                    System.out.print(map[y][x]);
                }
                System.out.print(' ');
            }
            System.out.println();
        }
        System.out.println("Legend: @ = You, # = Wall, . = Empty, E = Enemy, I = Item");
    }
}

