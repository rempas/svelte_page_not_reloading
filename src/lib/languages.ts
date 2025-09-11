import { text } from '$lib/text.svelte'
import { icons } from '$lib/icons.svelte'
import { en_icon } from '$icons/en'
import { el_icon } from '$icons/el'

let current_language = "en"

export function setLanguage() {
   const prefered_language = localStorage.getItem("saved_language")

   if (prefered_language == null) {
      const user_languages = navigator.languages
      const has_el = user_languages.find((element) => element == "el-GR" || element == "el-CY")

      if (has_el != undefined) {
         current_language = "el"
      }

      else current_language = "en"
   }

   else {
      current_language = prefered_language
   }

   setValues()
}

export function changeLanguage() {
   current_language = current_language == "en" ? "el" : "en"
   localStorage.setItem("saved_language", current_language)
   setValues()
}

function setValues() {
   text.update(current_language)
   icons.flag = current_language == 'el'? en_icon(1.5) : el_icon(1.5)
}
