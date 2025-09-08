import { text } from '$lib/text/text_hash.svelte'
import { navbar_text, home_text, form_text } from '$lib/text/text_strings.ts'

let current_theme = "light"
let current_language = "en"

export function setLanguage() {

}

export function changeLanguage() {
   current_language = current_language == "en" ? "el" : "en"

   text.navbar.contact = navbar_text.contact[current_language]
   text.navbar.projects = navbar_text.projects[current_language]
   text.navbar.quote = navbar_text.quote[current_language]
   text.home = home_text[current_language]
   text.form.name = form_text.name[current_language]
   text.form.email = form_text.email[current_language]
   text.form.text = form_text.text[current_language]
   text.form.submit = form_text.submit[current_language]
}

