package com.codeyard.game.rpg;

/**
 * Player class for the RPG game
 * Represents the main character in the game
 */
public class Player {
    private String name;
    private int health;
    private int maxHealth;
    private int level;
    private int experience;
    private int experienceToNext;
    private int attack;
    private int defense;
    private int gold;
    private int x;
    private int y;
    
    public Player(String name) {
        this.name = name;
        this.health = 100;
        this.maxHealth = 100;
        this.level = 1;
        this.experience = 0;
        this.experienceToNext = 100;
        this.attack = 10;
        this.defense = 5;
        this.gold = 50;
        this.x = 0;
        this.y = 0;
    }
    
    // Getters and Setters
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getHealth() {
        return health;
    }
    
    public void setHealth(int health) {
        this.health = Math.min(health, maxHealth);
        if (this.health < 0) {
            this.health = 0;
        }
    }
    
    public int getMaxHealth() {
        return maxHealth;
    }
    
    public void setMaxHealth(int maxHealth) {
        this.maxHealth = maxHealth;
    }
    
    public int getLevel() {
        return level;
    }
    
    public void setLevel(int level) {
        this.level = level;
    }
    
    public int getExperience() {
        return experience;
    }
    
    public void addExperience(int exp) {
        this.experience += exp;
        checkLevelUp();
    }
    
    public int getExperienceToNext() {
        return experienceToNext;
    }
    
    public int getAttack() {
        return attack;
    }
    
    public void setAttack(int attack) {
        this.attack = attack;
    }
    
    public int getDefense() {
        return defense;
    }
    
    public void setDefense(int defense) {
        this.defense = defense;
    }
    
    public int getGold() {
        return gold;
    }
    
    public void addGold(int amount) {
        this.gold += amount;
    }
    
    public boolean spendGold(int amount) {
        if (this.gold >= amount) {
            this.gold -= amount;
            return true;
        }
        return false;
    }
    
    public int getX() {
        return x;
    }
    
    public void setX(int x) {
        this.x = x;
    }
    
    public int getY() {
        return y;
    }
    
    public void setY(int y) {
        this.y = y;
    }
    
    public void move(int dx, int dy) {
        this.x += dx;
        this.y += dy;
    }
    
    public void takeDamage(int damage) {
        int actualDamage = Math.max(1, damage - defense);
        setHealth(health - actualDamage);
    }
    
    public void heal(int amount) {
        setHealth(health + amount);
    }
    
    public boolean isAlive() {
        return health > 0;
    }
    
    private void checkLevelUp() {
        while (experience >= experienceToNext) {
            levelUp();
        }
    }
    
    private void levelUp() {
        experience -= experienceToNext;
        level++;
        maxHealth += 20;
        health = maxHealth; // Full heal on level up
        attack += 5;
        defense += 2;
        experienceToNext = (int)(experienceToNext * 1.5);
        
        System.out.println("🎉 Level Up! You are now level " + level + "!");
        System.out.println("Health: " + maxHealth + " | Attack: " + attack + " | Defense: " + defense);
    }
    
    public int attack(Enemy enemy) {
        int damage = attack + (int)(Math.random() * 5);
        enemy.takeDamage(damage);
        return damage;
    }
    
    @Override
    public String toString() {
        return String.format("Player: %s | Level: %d | HP: %d/%d | EXP: %d/%d | Gold: %d",
                name, level, health, maxHealth, experience, experienceToNext, gold);
    }
}

