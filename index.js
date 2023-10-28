document.addEventListener("DOMContentLoaded", function() {
    // This code will run when the DOMContentLoaded event is triggered
    const textElement = document.getElementById("text");
    textElement.textContent = "This is really cool!";
  });
  
  // This code will run immediately when index.js loads, before DOMContentLoaded is triggered
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");