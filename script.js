// Sample data for tutorials and challenges
const tutorials = [
    {
        title: "Introduction to Python",
        description: "Learn the basics of Python programming, including variables, loops, and functions. Perfect for beginners looking to start their coding journey.",
        link: "#"
    },
    {
        title: "Mastering Java",
        description: "Dive into object-oriented programming with Java. Learn classes, interfaces, and collections through hands-on projects.",
        link: "#"
    },
    {
        title: "Web Development Basics",
        description: "Get started with HTML, CSS, and JavaScript to build your first website from scratch!",
        link: "#"
    }
];

const challenges = [
    {
        title: "Challenge 1: Fibonacci Sequence",
        description: "Write a program to generate the Fibonacci sequence up to a given number. Test your logic and looping skills.",
        link: "#"
    },
    {
        title: "Challenge 2: Sorting Algorithms",
        description: "Implement and compare sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort.",
        link: "#"
    },
    {
        title: "Challenge 3: Prime Numbers",
        description: "Create a function to check whether a given number is prime and generate a list of prime numbers within a range.",
        link: "#"
    },
    {
        title: "Challenge 4: Palindrome Checker",
        description: "Build a program to verify if a word or sentence is a palindrome. Enhance your string manipulation skills.",
        link: "#"
    }
];

// Function to render cards dynamically
function renderCards(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" class="btn">Start Now</a>
        `;
        container.appendChild(card);
    });
}

// Render tutorials and challenges on page load
document.addEventListener('DOMContentLoaded', () => {
    renderCards(tutorials, 'tutorials-container');
    renderCards(challenges, 'challenges-container');
});
