package com.codeyard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "redirect:/index.html";
    }

    @GetMapping("/javascript")
    public String javascript() {
        return "redirect:/javascript.html";
    }

    @GetMapping("/java")
    public String java() {
        return "redirect:/java.html";
    }

    // Legacy routes for backward compatibility
    @GetMapping("/home")
    public String homePage() {
        return "redirect:/index.html";
    }

    @GetMapping("/js-game")
    public String jsGame() {
        return "redirect:/javascript.html";
    }

    @GetMapping("/java-tutorial")
    public String javaTutorial() {
        return "redirect:/java.html";
    }

    @GetMapping("/tutorials")
    public String tutorials() {
        return "redirect:/index.html";
    }
}

