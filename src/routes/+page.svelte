<script>
   import { text } from '$lib/text.svelte'
   import { divs } from '$lib/divs.svelte'
   import { tick } from 'svelte';
   import { closeNavbar } from "$lib/toggleNavbar.svelte"

   $effect.pre(() => {
      tick().then(() => {
         divs.app.style.backgroundImage = "url(/images/home.jpg)"
         closeNavbar()
      });
   });
</script>

<div class="flex flex-col place-content-between">
   {@html text.body.home}
</div>

<style lang="postcss">
   @reference "tailwindcss";

   :global h1 {
      font-weight: 500;
      font-family: "Mouldy Cheese";
      font-size: 1.3rem + 1vw;
      color: theme(--color-rose-200);
      font-size: calc(1.90rem + 0.1vw);
   }

   :global(.dark h1) {
      color: theme(--color-slate-800);
   }

   :global(:is(p:nth-child(2), p:nth-child(3))) {
      margin-top: 20px;
      text-align: justify;
      color: theme(--color-slate-800);
   }

   :global(p:nth-child(2)) {
      font-family: "Superior Serif Medium";
      width: clamp(2rem, 80vw, 45rem);
      font-size: 1rem;
   }

   :global(p:nth-child(3)) {
      margin-top: 15px;
      font-family: "Superior Serif Regular";
      width: clamp(2rem, 80vw, 35rem);
      font-size: 0.8rem;
   }

   div :global(a) {
      color: theme(--color-rose-200);
   }

   :global(.dark) {
      div :global(a) {
         color: theme(--color-slate-800);
      }

      :global(:is(p:nth-child(2), p:nth-child(3))) {
         color: theme(--color-rose-200);
      }
   }
</style>
