import "./styles.css";

import foodMenu from "./menu.json";
import itemsFood from "./menu.hbs";
const menuEl = document.querySelector(".js-menu");
const markup = itemsFood(foodMenu);
menuEl.insertAdjacentHTML("beforeend", markup);
console.log(foodMenu);

const changeTheme = document.querySelector(`#theme-switch-toggle`);
changeTheme.addEventListener("change", OnOffTheme);
const bodyEl = document.querySelector(`body`);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
if (localStorage.getItem("Theme") === Theme.DARK) {
  bodyEl.classList.add(Theme.DARK);
  changeTheme.checked = true;
}

function OnOffTheme(event) {
  bodyEl.classList.add(Theme.LIGHT);
  console.log(event);
  if (event.target.checked) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
    localStorage.setItem("Theme", Theme.DARK);
  } else {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
    localStorage.setItem("Theme", Theme.LIGHT);
  }
}
