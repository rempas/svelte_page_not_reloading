import { text } from '$lib/text.svelte'
import { icons } from '$lib/icons.svelte'

let current_language = "en"

export function setLanguage() {
   const prefered_language = localStorage.getItem("saved_language")

   if (prefered_language == null) {
      const user_languages = navigator.languages
      console.log("languages: ", user_languages)

      const has_el = user_languages.find((element) => element == "el-GR" || element == "el-CY")
      console.log("has_el: ", has_el)

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
   icons.languages = `/icons/languge_${current_language}.svg`
}
