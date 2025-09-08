import { text } from '$lib/text/text_hash.svelte'
import { navbar_text, home_text, form_text } from '$lib/text/text_strings.ts'

let current_theme = "light"
let current_languge = "en"

export function setLanguge() {

}

export function changeLanguge() {
   current_languge = current_languge == "en" ? "el" : "en"

   text.navbar.contact = navbar_text.contact[current_languge]
   text.navbar.projects = navbar_text.projects[current_languge]
   text.navbar.quote = navbar_text.quote[current_languge]
   text.home = home_text[current_languge]
   text.form.name = form_text.name[current_languge]
   text.form.email = form_text.email[current_languge]
   text.form.text = form_text.text[current_languge]
   text.form.submit = form_text.submit[current_languge]
}

