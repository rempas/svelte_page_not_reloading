import { navbar_text } from '$text/navbar_text'
import { home_text } from '$text/home_text'
import { form_text } from '$text/form_text'

export const text: Hash<Hash<string, string>> = $state({
   navbar: {
      contact: navbar_text.contact.en,
      projects: navbar_text.projects.en,
      quote: navbar_text.quote.en,
   },

   home: home_text.en,

   form: {
      name: form_text.name.en,
      email: form_text.email.en,
      message: form_text.message.en,
      submit: form_text.submit.en
   },

   update(current_language) {
      self.navbar.contact = navbar_text.contact[current_language]
      self.navbar.projects = navbar_text.projects[current_language]
      self.navbar.quote = navbar_text.quote[current_language]
      self.home = home_text[current_language]
      self.form.name = form_text.name[current_language]
      self.form.email = form_text.email[current_language]
      self.form.message = form_text.message[current_language]
      self.form.submit = form_text.submit[current_language]
   }
})
