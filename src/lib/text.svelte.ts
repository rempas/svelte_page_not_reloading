import { navbar_text } from '$text/navbar_text'
import { home_text } from '$text/home_text'
import { form_text } from '$text/form_text'

export const text: Hash<Hash<string, string>> = $state({
   navbar: {
      contact: "",
      projects: "",
      quote: "",
   },

   home: "",

   form: {
      name: "",
      email: "",
      message: "",
      submit: ""
   },

   update(current_language) {
      this.navbar.contact = navbar_text.contact[current_language]
      this.navbar.projects = navbar_text.projects[current_language]
      this.navbar.quote = navbar_text.quote[current_language]
      this.home = home_text[current_language]
      this.form.name = form_text.name[current_language]
      this.form.email = form_text.email[current_language]
      this.form.message = form_text.message[current_language]
      this.form.submit = form_text.submit[current_language]
   }
})
