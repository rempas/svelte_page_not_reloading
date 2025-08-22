import { divs } from '$lib/divs.svelte'
import { icons } from '$lib/icons.svelte'

let current_theme = "light"

export function changeLanguge() {

}

export function changeTheme() {
   divs.app.classList.toggle("dark")

   if (current_theme == "light") {
      icons.theme = "/icons/sun.svg"
   }

   else {
      icons.theme = "/icons/moon.svg"
   }

   current_theme = current_theme == "light" ? "dark" : "light"

   icons.home = `/icons/home_${current_theme}.svg`
   icons.hamburger = `/icons/hamburger_menu_${current_theme}.svg`
   icons.close_btn = `/icons/close_button_${current_theme}.svg`
   icons.underline = `/icons/quote_underline_${current_theme}.svg`
}
