<script>
   let { nav_type, nav_icon } = $props()

   import { divs } from '$lib/divs.svelte'
   import LeftNavItems from "$navbar/LeftNavItems.svelte"
   import QuoteOfTheDay from "$navbar/QuoteOfTheDay.svelte"
   import Switches from "$navbar/Switches.svelte"
</script>

<nav bind:this={divs[nav_type]} class="{nav_type} flex bg-rose-200
rounded-[3px] text-slate-800 dark:text-rose-200
place-content-between px-3 h-[2.25rem] rounded-[3px] items-center">
   <LeftNavItems {nav_type} {nav_icon} />

   {#if nav_type == "normal"}
      <QuoteOfTheDay />
   {/if}

   {#if nav_type == "normal"}
      <Switches />
   {/if}
</nav>

<style lang="postcss">
   @reference "tailwindcss";

   nav {
      z-index: 2;
   }

   nav.sidebar {
      align-items: start;
      justify-content: center;
      left: -100%;
      position: fixed;
      top: 0;
      z-index: 2;

      width: calc(100vw / 2.3);
      height: 100%;

      border-radius: 0px 10px 10px 0px;
      box-shadow: 3px 0 10px rgb(0, 0, 0, 0.3);
      background: theme(--color-rose-200/65%);
      backdrop-filter: blur(10px);

      transition: left 1.5s;
   }

   :global(a:hover) {
      color: theme(--color-rose-400);
   }

   :global(.dark) {
      nav {
         color: theme(--color-red-200);
         background: theme(--color-zinc-900);
      }

      nav.sidebar {
         background: oklch(0.1822 0 0/65%);
      }

      :global(a:hover) {
         color: theme(--color-zinc-500);
      }

   }
</style>
