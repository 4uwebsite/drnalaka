// Get the button element
var button = document.getElementById("floatingBtn");
var isScrolling;

// Show the button when scrolled
window.addEventListener("scroll", function() {
  // Clear the existing timeout to prevent flickering
  clearTimeout(isScrolling);

  // Show the button
  button.style.display = "block";

  // Set a timeout to hide the button after 2 seconds of scrolling stops
  isScrolling = setTimeout(function() {
    button.style.display = "none";
  }, 2000);
});

// Scroll to the top when the button is clicked
button.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
