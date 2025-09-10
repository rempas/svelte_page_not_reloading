<script>
   import { icons } from '$lib/icons.svelte'
   import { closeNavbar } from "$lib/toggleNavbar.svelte"
   import LeftItem from "$navbar/LeftItem.svelte"
   import toggleNavbar from "$lib/toggleNavbar.svelte"

   let { nav_type } = $props()
   let sidebar_icon = $state(``)

   if (nav_type == "normal")
      sidebar_icon = icons.hamburger
   else
      sidebar_icon = icons.close_btn

</script>

<!-- TODO: Traget the item by its aria-label instead of its id -->
<button aria-label="hamburger menu" id="hamburger_menu" onclick={toggleNavbar}>
   {@html sidebar_icon}
</button>

<div id="left_items" class="flex">
   <button id="home_icon" aria-label="home_button"
   class="mr-5" onclick={closeNavbar}><a href="/">
      {@html icons.home}
   </a></button>

   <LeftItem name="contact" href="/contact" width=1.8 space="mr-3" />
   <LeftItem name="projects" href="https://codeberg.org/rempas/" width=1.85 space=" " />
</div>

<style>
   #hamburger_menu {
      display: none;
   }

   img {
      width: 1.55rem;
   }

   @media (max-width: 700px) {
      #hamburger_menu {
         display: block;
         width: 1.8rem;
         height: 1.8rem;
      }
   }

   /* Sidebar */
   :global(nav.sidebar) {
      #left_items {
         margin-top: 120px;
         flex-direction: column;
         justify-content: space-between;
         height: 6rem;
      }

      #hamburger_menu {
         position: fixed;
         top: calc(10px + 0.2rem);
         left: 24px;
         width: 1.6rem;
      }

      #home_icon {
         position: absolute;
         top: 13px;
         right: 0px;
      }
   }
</style>
