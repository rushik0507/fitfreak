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
