// Get the current year
var currentYear = new Date().getFullYear();

// Set the current year in the footer's first paragraph
document.getElementById("year").textContent = currentYear;

// Set the last modified date in the second paragraph
document.getElementById("lastModified").textContent = document.lastModified;
