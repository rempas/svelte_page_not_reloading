import type { Actions } from './$types'

export const actions = {
   default: async ({cookies, request}) => {
      const formData = await request.formData()
      const object = Object.fromEntries(formData)
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
         method: "POST",

         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },

         body: json
      });

      const result = await response.json();

      if (result.success) {
         status = result.message || "Success"
      }
   }
} satisfies Actions;
