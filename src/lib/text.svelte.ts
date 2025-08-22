let body_english: string = "<h1>Passion meets excitment!</h1><p>I am a young guy, aspiring to do big things and do his part in the big chain called. Life<br>I am a passionate freelancer, trying to make meets end by providing quality work and support to anyone in need of webpages and webapps. Additionally, for any aspiring to follow the path of software development, I offer lessons and complete course about making websites, webapps and about various programming languges</p><p>No matter what you need, I'm here to assist! Visit and fill the <a href='/contact'>contact form</a>! What are you waiting for?</p>"

export let text: Hash<Hash<string>> = $state({
   navbar: {
      contact: "Contact",
      projects: "Projects",
      quote: "Quote of the day",
   },

   body: {
      home: body_english,
      contact: "",
      quote: "",
   },

   form: {
      name: "Your name",
      email: "Your email",
      text: "Your text",
   }
})
