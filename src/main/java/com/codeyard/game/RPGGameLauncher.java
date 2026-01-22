package com.codeyard.game;

import com.codeyard.game.rpg.RPGGame;

/**
 * Launcher for the RPG Game
 * Can be run from Spring Boot application or standalone
 */
public class RPGGameLauncher {
    public static void main(String[] args) {
        System.out.println("Starting CodeYard RPG Game...");
        RPGGame game = new RPGGame();
        game.start();
    }
}

