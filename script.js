function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const birthYear = 2002;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    document.getElementById("age").textContent = age;
