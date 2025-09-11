<script>
   import { icons } from '$lib/icons.svelte'
   import { closeNavbar } from "$lib/toggleNavbar.svelte"
   import LeftItem from "$navbar/LeftItem.svelte"
   import toggleNavbar from "$lib/toggleNavbar.svelte"

   let { nav_icon, nav_type } = $props()
</script>

<button aria-label="hamburger menu" onclick={toggleNavbar}>
   {@html icons[nav_icon]}
</button>

<div id={nav_type} class="flex items-center">
   <a class="mr-5" href="/" onclick={closeNavbar}>
      {@html icons.home}
   </a>

   <LeftItem name="contact" href="/contact" width=1.8 space="mr-3" />
   <LeftItem name="projects" href="https://codeberg.org/rempas/" width=1.85 space=" " />
</div>

<style>
   button {
      display: none;
      /* NOTE: I shouldn't had to do that! A button shoul always automitaclly have the pointer! Report this bug! */
      cursor: pointer;
   }

   img {
      width: 1.55rem;
   }

   @media (max-width: 700px) {
      #normal {
         display: none;
      }

      button {
         display: block;
         width: 1.8rem;
         height: 1.8rem;
      }
   }

   /* Sidebar */
   :global(nav.sidebar) {
      div {
         margin-top: 120px;
         flex-direction: column;
         justify-content: space-between;
         height: 6rem;
      }

      button {
         position: fixed;
         top: calc(10px + 0.2rem);
         left: 24px;
         width: 1.6rem;
      }

      a {
         position: absolute;
         top: 0.6rem;
         right: 0px;
      }
   }
</style>
