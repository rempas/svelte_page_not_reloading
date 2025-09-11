<script lang="ts">
   import type { PageProps } from './$types';
   import { text } from '$lib/text.svelte'
   import { divs } from '$lib/divs.svelte'
   import { icons } from '$lib/icons.svelte'
   import { tick } from 'svelte';
   import { closeNavbar } from "$lib/toggleNavbar.svelte"

   let { data, form }: PageProps = $props();

   $effect.pre(() => {
      tick().then(() => {
         divs.app.style.backgroundImage = "url(/images/contact.jpg)"
         closeNavbar()
      });
   });
</script>

<!-- try to not have to use the "contact-inputs" class and also style the first input and see if there is a problem with that -->
<div id="contact_form_div">
   <form method="POST">
      <input type="hidden" name="access_key" value="b7c662f7-9e3e-476b-b862-dc23f9342776">
      <div id="form-title">
         <h2>{@html text.navbar.contact}</h2>
         <hr>
      </div>

      <input type="text" name="name" placeholder={text.form.name}
         class="contact-inputs" required>
      <input type="email" name="email" placeholder={text.form.email}
         class="contact-inputs" required>
      <textarea id="text-area" name="message" class="contact-inputs"
         placeholder={text.form.message} required></textarea>
      <button>{@html text.form.submit}{@html icons.send_arrow}</button>
   </form>
</div>

<!-- TODO: Check why this doesn't work! -->
<!-- {#if form?.success} -->
<!--         this message is ephemeral; it exists because the page was rendered in -->
<!--          response to a form submission. it will vanish if the user reloads -->
<!--    <p>Successfully logged in! Welcome back, {data.user.name}</p> -->
<!-- {/if} -->


<style lang="postcss">
   @reference "tailwindcss";

   #contact_form_div {
      color: theme(--color-rose-200);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: calc(1rem + 10dvh);
   }

   form {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;
   }

   #form-title {
      margin-left: 5px;
      margin-bottom: 0.5rem;
   }

   h2 {
      font-weight: 600;
      font-size: 2.5rem;
      margin-bottom: 3px;
   }

   hr {
      border: none;
      margin-left: 2px;
      width: 7.5rem;
      height: 0.4rem;
      background-color: theme(--color-rose-200);
      border-radius: 10px;
   }

   .contact-inputs {
      font-family: "Superior Serif Medium";
      width: calc(20vw + 10rem);
      max-width: 450px;
      height: 3rem;
      max-height: 60px;
      padding-top: 0.1rem;
      padding-left: 1.15rem;
      border-radius: 50px;
      background-color: theme(--color-rose-200);
   }

   .contact-inputs, .contact-inputs::placeholder {
      color: theme(--color-zinc-700);
   }

   #text-area {
      height: 8rem;
      max-height: 170px;
      padding-top: 15px;
      border-radius: 20px;
   }

   .contact-inputs:focus {
      border: 2px solid #ff994f;
   }

   button {
      display: flex;
      align-items: center;
      padding: 0.6rem 1.2rem;
      font-size: 1.1rem;
      color: theme(--color-zinc-800);
      gap: 10px;
      border-radius: 50px;
      background: linear-gradient(270deg,
         theme(--color-rose-200),
         theme(--color-rose-300)
      );

      cursor: pointer;

      img {
         /* filter: invert(100%) sepia(40%) saturate(3084%) hue-rotate(182deg) brightness(106%) contrast(103%); */
         width: 1.7rem;
      }
   }

   :global(.dark) {
      h2 {
         color: theme(--color-slate-800);
      }

      .contact-inputs, ::placeholder, hr {
         color: theme(--color-rose-200);
         background: theme(--color-zinc-800);
      }

      button {
         color: theme(--color-rose-200);
         background: linear-gradient(270deg,
            theme(--color-zinc-600),
            theme(--color-zinc-900)
         );

         img {
            width: 1.7rem;
         }
      }
   }
</style>
