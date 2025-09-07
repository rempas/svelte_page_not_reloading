<script>
   import { divs } from '$lib/divs.svelte'
   import { tick } from 'svelte';
   import { closeNavbar } from "$lib/toggleNavbar.svelte"
   import { getQuote } from '$lib/quote_of_day.ts'

   const quote = getQuote()

   $effect.pre(() => {
      tick().then(() => {
         divs.app.style.backgroundImage = "url(/images/quote3.svg)"
         closeNavbar()
      });
   });
</script>

<div id="container">
   <div id="overlay"></div>
   <div id="quote">
      <div class="tag">“</div>
      <i>{@html quote[0]}</i>
      <div id="closing_tag" class="tag"><div>”</div></div>
   </div>
</div>

<style lang="postcss">
   @reference "tailwindcss";

   #container {
      display: flex;
      align-items: center;
      place-content: center;
      top: -80px;
      left: 0;
      width: 100%;
      height: 100%;
      flex-grow: 1;
   }

   #quote {
      z-index: 2;
      font-size: 1.3rem;
   }

   .tag {
      font-size: 1.2rem;
      font-weight: 500;
   }

   #closing_tag {
      display: flex;
      place-content: end;
   }

   i {
      padding: 0px 20px;
   }

   #overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
   }

   :global(:has(.dark)) {
      #quote {
         color: white;
      }

      #overlay {
         background: rgba(0, 0, 0, 10%);
      }
   }

</style>
