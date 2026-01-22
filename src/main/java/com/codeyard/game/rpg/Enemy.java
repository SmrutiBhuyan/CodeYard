package com.codeyard.game.rpg;

/**
 * Enemy class for the RPG game
 * Represents enemies that the player can fight
 */
public class Enemy {
    private String name;
    private int health;
    private int maxHealth;
    private int attack;
    private int defense;
    private int experienceReward;
    private int goldReward;
    private int level;
    
    public Enemy(String name, int level) {
        this.name = name;
        this.level = level;
        this.maxHealth = 50 + (level * 20);
        this.health = maxHealth;
        this.attack = 5 + (level * 3);
        this.defense = 2 + level;
        this.experienceReward = 20 + (level * 10);
        this.goldReward = 10 + (level * 5);
    }
    
    public String getName() {
        return name;
    }
    
    public int getHealth() {
        return health;
    }
    
    public void setHealth(int health) {
        this.health = Math.max(0, Math.min(health, maxHealth));
    }
    
    public int getMaxHealth() {
        return maxHealth;
    }
    
    public int getAttack() {
        return attack;
    }
    
    public int getDefense() {
        return defense;
    }
    
    public int getExperienceReward() {
        return experienceReward;
    }
    
    public int getGoldReward() {
        return goldReward;
    }
    
    public int getLevel() {
        return level;
    }
    
    public void takeDamage(int damage) {
        int actualDamage = Math.max(1, damage - defense);
        setHealth(health - actualDamage);
    }
    
    public boolean isAlive() {
        return health > 0;
    }
    
    public int attack(Player player) {
        int damage = attack + (int)(Math.random() * 5);
        player.takeDamage(damage);
        return damage;
    }
    
    @Override
    public String toString() {
        return String.format("Enemy: %s (Lv.%d) | HP: %d/%d | ATK: %d | DEF: %d",
                name, level, health, maxHealth, attack, defense);
    }
}

