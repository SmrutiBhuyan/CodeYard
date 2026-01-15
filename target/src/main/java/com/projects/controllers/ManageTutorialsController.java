package com.project.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ManageTutorialsController {

    @GetMapping("/manageTutorials")
    public String showTutorialsPage() {
        return "manageTutorials";
    }

    @PostMapping("/manageTutorials")
    public String addTutorial(@RequestParam("name") String tutorialName, Model model) {
        model.addAttribute("message", "Tutorial '" + tutorialName + "' added successfully!");
        return "manageTutorials";
    }
}
