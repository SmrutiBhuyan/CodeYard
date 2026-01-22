# CodeYard - Game-Based Code Learning Platform

A Spring Boot application that teaches programming through interactive game development. Learn to code by building real, playable games!

## 🎮 About CodeYard

CodeYard is a game-based learning platform that makes programming fun and engaging. Instead of traditional tutorials, you'll learn by building actual games that you can play and share.

## 🚀 Features

- **Learn by Building Games**: Master programming languages by creating real, playable games
- **Interactive Tutorials**: Step-by-step guides with hands-on coding exercises
- **Multiple Languages**: Currently supports Java and JavaScript, with more coming soon
- **Game Demos**: Play the games before you build them
- **Integrated Code Editor**: Write and test code directly in the browser

## 📚 Currently Available Languages

### ✅ JavaScript
- **Snake Game**: Learn JavaScript fundamentals through the classic Snake game
- **Block Dodger**: Master event handling and collision detection

### ✅ Java
- **Simple Game**: Learn Java basics and Swing GUI programming through a simple game

### 🔜 Coming Soon
- Python (with Pygame)
- C++
- C# (with Unity)

## 🏗️ Project Structure

```
CodeYard/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── codeyard/
│       │           ├── CodeYardApplication.java
│       │           ├── controller/
│       │           │   └── HomeController.java
│       │           ├── config/
│       │           │   └── WebConfig.java
│       │           └── game/
│       │               └── SimpleGame.java
│       └── resources/
│           ├── application.properties
│           └── static/
│               ├── index.html (Home page)
│               ├── javascript.html (JavaScript learning)
│               ├── java.html (Java learning)
│               ├── *.css (Stylesheets)
│               ├── *.js (JavaScript game files)
│               └── *.jpg (Images)
├── pom.xml
└── README.md
```

## 📋 Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

## 🚀 How to Run

### Option 1: Using Maven

```bash
mvn spring-boot:run
```

### Option 2: Using the JAR file

First, build the project:
```bash
mvn clean package
```

Then run the JAR:
```bash
java -jar target/codeyard-1.0.0.jar
```

## 🌐 Accessing the Application

Once the application is running, open your browser and navigate to:

- **Home Page**: http://localhost:8080/
- **JavaScript Learning**: http://localhost:8080/javascript
- **Java Learning**: http://localhost:8080/java

## 🎯 Learning Path

### JavaScript Path
1. Start with the **Snake Game** - Learn JavaScript basics
2. Build **Block Dodger** - Master event handling and game loops
3. More games coming soon!

### Java Path
1. Build the **Simple Game** - Learn Java basics and Swing
2. More advanced games coming soon!

## 🛠️ Technologies Used

- **Backend**: Spring Boot 3.2.0
- **Frontend**: HTML5, CSS3, JavaScript
- **UI Framework**: Bootstrap 5.3.0
- **Build Tool**: Maven
- **Java Version**: 17

## 📝 Development

The application uses Spring Boot's embedded Tomcat server and serves static resources from the `src/main/resources/static/` directory.

## 📌 Notes

- The application runs on port 8080 by default (configurable in `application.properties`)
- Static resources (HTML, CSS, JS, images) are served from the `/static/` directory
- The Java game (`SimpleGame.java`) requires a desktop environment to run as it uses Swing
- JavaScript games run directly in the browser

## 🎓 How to Use

1. **Choose a Language**: Start by selecting JavaScript or Java from the home page
2. **Play the Game**: Try the game demo to see what you'll build
3. **Start Learning**: Click "Start Learning" to begin the interactive tutorial
4. **Write Code**: Follow the step-by-step instructions and write code in the editor
5. **Run & Test**: Execute your code and see it in action
6. **Progress**: Complete each step to unlock the next one

## 🤝 Contributing

This is a learning platform project. Feel free to extend it with more games and languages!

## 📄 License

This project is open source and available for educational purposes.

---

**Happy Coding! 🎮💻**
