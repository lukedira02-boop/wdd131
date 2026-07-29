document.addEventListener("DOMContentLoaded", () => {
  // Retrieve current review count from localStorage or initialize to 0
  let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

  // Increment count on load
  reviewCount++;

  // Store updated count back to localStorage
  localStorage.setItem("reviewCount-ls", reviewCount);

  // Display counter value on the page
  const counterSpan = document.getElementById("counter");
  if (counterSpan) {
    counterSpan.textContent = reviewCount;
  }

  // Set footer current year
  const yearElement = document.getElementById("currentyear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});