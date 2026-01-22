package com.codeyard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "redirect:/home.html";
    }

    @GetMapping("/home")
    public String homePage() {
        return "redirect:/home.html";
    }

    @GetMapping("/js-game")
    public String jsGame() {
        return "redirect:/js-game.html";
    }

    @GetMapping("/java-tutorial")
    public String javaTutorial() {
        return "redirect:/java-tutorial.html";
    }

    @GetMapping("/tutorials")
    public String tutorials() {
        return "redirect:/ManageTutorials.html";
    }
}

