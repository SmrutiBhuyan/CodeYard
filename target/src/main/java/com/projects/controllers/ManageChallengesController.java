package com.project.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ManageChallengesController {

    @GetMapping("/manageChallenges")
    public String showChallengesPage() {
        return "manageChallenges";
    }

    @PostMapping("/manageChallenges")
    public String addChallenge(@RequestParam("name") String challengeName, Model model) {
        model.addAttribute("message", "Challenge '" + challengeName + "' added successfully!");
        return "manageChallenges";
    }
}
