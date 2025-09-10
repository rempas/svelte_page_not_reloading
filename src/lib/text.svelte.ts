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
   }
})
