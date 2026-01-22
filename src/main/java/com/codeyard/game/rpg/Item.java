package com.codeyard.game.rpg;

/**
 * Item class for the RPG game
 * Represents items that can be used or equipped
 */
public class Item {
    public enum ItemType {
        WEAPON, ARMOR, POTION, GOLD, KEY
    }
    
    private String name;
    private ItemType type;
    private int value;
    private int price;
    private String description;
    
    public Item(String name, ItemType type, int value, int price, String description) {
        this.name = name;
        this.type = type;
        this.value = value;
        this.price = price;
        this.description = description;
    }
    
    public String getName() {
        return name;
    }
    
    public ItemType getType() {
        return type;
    }
    
    public int getValue() {
        return value;
    }
    
    public int getPrice() {
        return price;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void use(Player player) {
        switch (type) {
            case POTION:
                player.heal(value);
                System.out.println("You used " + name + " and restored " + value + " HP!");
                break;
            case WEAPON:
                player.setAttack(player.getAttack() + value);
                System.out.println("You equipped " + name + "! Attack increased by " + value);
                break;
            case ARMOR:
                player.setDefense(player.getDefense() + value);
                System.out.println("You equipped " + name + "! Defense increased by " + value);
                break;
            case GOLD:
                player.addGold(value);
                System.out.println("You found " + value + " gold!");
                break;
        }
    }
    
    @Override
    public String toString() {
        return String.format("%s (%s) - %s | Value: %d | Price: %d gold",
                name, type, description, value, price);
    }
}

