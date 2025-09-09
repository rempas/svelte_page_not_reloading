import { divs } from '$lib/divs.svelte'
import { icons } from '$lib/icons.svelte'

let current_theme = "dark"

export function setTheme() {
   const prefered_theme = localStorage.getItem("saved_theme")

   if (prefered_theme == null) {
      const user_theme = window.matchMedia('(prefers-color-scheme: dark)')

      if (user_theme.matches) {
         current_theme = "dark"
      }

      else current_theme = "light"
   }

   else {
      current_theme = prefered_theme
   }

   setValues()
}

export function changeTheme() {
   current_theme = current_theme == "light" ? "dark" : "light"
   localStorage.setItem("saved_theme", current_theme)
   setValues()
}

function setValues() {
   if (current_theme == "light") {
      divs.app.classList.remove("dark")
      icons.theme = "/icons/moon.svg"
   }

   else {
      divs.app.classList.add("dark")
      icons.theme = "/icons/sun.svg"
   }

   icons.home = `/icons/home_${current_theme}.svg`
   icons.hamburger = `/icons/hamburger_menu_${current_theme}.svg`
   icons.close_btn = `/icons/close_button_${current_theme}.svg`
   icons.underline = `/icons/quote_underline_${current_theme}.svg`
}
