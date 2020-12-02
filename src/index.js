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
  console.log(event);
  if (event.target.checked) {
    changeThemeFn(Theme.DARK, Theme.LIGHT);
  } else {
    changeThemeFn(Theme.LIGHT, Theme.DARK);
  }
}

const changeThemeFn = (newTheme, oldTheme) => {
  bodyEl.classList.add(newTheme);
  bodyEl.classList.remove(oldTheme);
  localStorage.setItem("Theme", newTheme);
};
