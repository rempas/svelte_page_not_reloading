import { divs } from '$lib/divs.svelte'
import { icons } from '$lib/icons.svelte'

let current_theme = "dark"

export function setTheme() {
   const prefered_theme = localStorage.getItem("saved_theme")

   if (prefered_theme == null) {
      // TODO: Check the session before the user set theme

      const user_theme = window.matchMedia('(prefers-color-scheme: dark)')

      if (user_theme.matches) {
         current_theme = "dark"
      }

      else current_theme = "light"

      // TODO: Set the session storage here before the user set theme
      //sessionStorage.setItem(current_theme)
   }

   else {
      current_theme = prefered_theme
   }

   setValues()
}

export function changeTheme() {
   divs.app.classList.toggle("dark")
   current_theme = current_theme == "light" ? "dark" : "light"

   // TODO: Doesn't work! Find out why!
   localStorage.setItem("saved_theme", current_theme)
   setValues()
}

function setValues() {
   if (current_theme == "light") {
      icons.theme = "/icons/sun.svg"
   }

   else {
      icons.theme = "/icons/moon.svg"
   }

   icons.home = `/icons/home_${current_theme}.svg`
   icons.hamburger = `/icons/hamburger_menu_${current_theme}.svg`
   icons.close_btn = `/icons/close_button_${current_theme}.svg`
   icons.underline = `/icons/quote_underline_${current_theme}.svg`
}
