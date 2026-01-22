document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  window.addEventListener("load", function () {
    // Start the audio after the page has fully loaded
    var audio = document.getElementById("bg-audio");
  
    // Try to play the audio
    try {
      audio.play();
    } catch (e) {
      console.log("Audio autoplay blocked, requiring interaction.");
    }
  
    // Text and typing effect
    var text = "Hello I am Usha Chougule.";
    var typedTextElement = document.getElementById("typed-text");
    var i = 0;
    var speed = 100; // Adjust speed of typing (milliseconds)
  
    // Typing effect function
    function typeWriter() {
      if (i < text.length) {
        typedTextElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  
    // Start typing effect
    typeWriter();
  });
  
  $(".custom-link").onclick(function () {
    $(".custom-link").css("text-decoration", "underline");
  });
  $(".custom-link").onclickout(function () {
    $(".custom-link").css("opacity", "1");
  });