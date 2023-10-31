const button = document.querySelector(".rev-button");
const nav = document.querySelector(".sidenav");
const revnav = document.getElementById("res");

var count = 0;

button.addEventListener("click", () => {
  if (count % 2 == 0) {
    nav.style.display = "block";
    revnav.style.backgroundColor = "transparent";
    count++;
  } else {
    nav.style.display = "none";
    revnav.style.backgroundColor = "transparent";
    count++;
  }
});

const btn = document.querySelector(".sidebar-button");
const sidebar = document.querySelector(".sidebar");
const sectionside = document.querySelector(".side-section");

function toggleMenu() {
  sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
}

// Event listener for the button click
btn.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent click event from reaching document
  toggleMenu();
  btn.style.display = "none";
});

// Event listener for clicks outside the sidebar
document.addEventListener("click", function (event) {
  if (event.target !== btn && !sidebar.contains(event.target)) {
    sidebar.style.display = "none";
    btn.style.display = "block";
  }
});
