import { navbar_text, home_text, form_text } from '$lib/text/text_strings.ts'

export let text: Hash<Hash<string, string>> = $state({
   navbar: {
      contact: navbar_text.contact.en,
      projects: navbar_text.projects.en,
      quote: navbar_text.quote.en,
   },

   home: home_text.en,

   form: {
      name: form_text.name.en,
      email: form_text.email.en,
      text: form_text.text.en,
      submit: form_text.submit.en
   }
})
