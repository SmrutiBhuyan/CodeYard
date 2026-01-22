# CodeYard - Spring Boot Application

A Spring Boot conversion of the CodeYard learning platform that teaches coding through interactive games and tutorials.

## Project Structure

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
│               ├── *.html (HTML pages)
│               ├── *.css (CSS stylesheets)
│               ├── *.js (JavaScript files)
│               └── *.jpg (Images)
├── pom.xml
└── README.md
```

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

## How to Run

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

## Accessing the Application

Once the application is running, open your browser and navigate to:

- **Home Page**: http://localhost:8080/home.html
- **JavaScript Game**: http://localhost:8080/js-game.html
- **Java Tutorial**: http://localhost:8080/java-tutorial.html
- **Tutorials Management**: http://localhost:8080/ManageTutorials.html

## Features

- **Portfolio/Home Page**: Personal portfolio showcasing projects and skills
- **JavaScript Game Tutorial**: Interactive Snake game with step-by-step learning
- **Java Tutorial**: Introduction to Java programming
- **Tutorial Management**: Platform for managing coding tutorials and challenges

## Technologies Used

- Spring Boot 3.2.0
- Java 17
- Maven
- HTML, CSS, JavaScript
- Bootstrap 5.3.0

## Development

The application uses Spring Boot's embedded Tomcat server and serves static resources from the `src/main/resources/static/` directory.

## Notes

- The application runs on port 8080 by default (configurable in `application.properties`)
- Static resources (HTML, CSS, JS, images) are served from the `/static/` directory
- The Java game (`SimpleGame.java`) is included in the project but requires a desktop environment to run as it uses Swing

