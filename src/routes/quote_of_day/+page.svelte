<script>
   import { divs } from '$lib/divs.svelte'
   import { tick } from 'svelte';
   import { closeNavbar } from "$lib/toggleNavbar.svelte"

   $effect.pre(() => {
      tick().then(() => {
         divs.app.style.backgroundImage = "url(/images/quote_of_day.jpg)"
         closeNavbar()
      });
   });
</script>

<div>
  <h1>This is an <strong>example</strong> block of <strong>text</strong>.</h1>
  <p>An SVG is used to <strong>emphasize</strong> a single word of a block of text by giving it an underline that uses an SVG. Semantically it is emphasized with a <code>strong</code> tag and visually it is emphasized with the SVG.</p>
</div>

<style lang="postcss">
   @reference "tailwindcss";

   strong {
      position: relative;
   }

   strong::after {
      content: "";
      position: absolute;
      bottom: -0.125rem;
      left: -0.5rem;
      right: -0.5rem;
      height: 0.75rem;
      z-index: -1;
      background-image: url("/icons/quote_underline_light.svg");
      background-repeat: no-repeat;
      background-size: cover;
   }

   p > strong {
      font-weight: 400;
   }

   p > strong::after {
      bottom: -0.2rem;
      height: 0.5rem;
      left: -0.25rem;
      right: -0.25rem;
   }

   body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
   }

   h1, p {
      font-family: "dosis", sans-serif;
      max-width: 800px;
      margin: 0 5% 1rem;
   }

   h1 {
      font-size: 2.5rem;
      font-weight: 600;
   }

   p {
      font-size: 1.125rem;
   }
</style>
