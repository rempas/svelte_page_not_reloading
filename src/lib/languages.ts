import { text } from '$lib/text/text_hash.svelte'
import { navbar_text, home_text, form_text } from '$lib/text/text_strings.ts'

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
   text.navbar.contact = navbar_text.contact[current_language]
   text.navbar.projects = navbar_text.projects[current_language]
   text.navbar.quote = navbar_text.quote[current_language]
   text.home = home_text[current_language]
   text.form.name = form_text.name[current_language]
   text.form.email = form_text.email[current_language]
   text.form.text = form_text.text[current_language]
   text.form.submit = form_text.submit[current_language]
}
