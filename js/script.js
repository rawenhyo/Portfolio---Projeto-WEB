const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});
