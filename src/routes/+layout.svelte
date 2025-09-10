<script lang="ts">
   import { tick } from 'svelte';
   import { divs } from '$lib/divs.svelte'
   import { openNavbar, hideNavbar, navbar_collapsed } from "$lib/toggleNavbar.svelte"
   import { setLanguage } from "$lib/languages"
   import { setTheme } from "$lib/themes"
   import Navbar from 'components/Navbar/Navbar.svelte'
   import "../main.css";

   let { children } = $props()
   let app_width = $state(0)

   $effect.pre(() => {
      tick().then(() => {
         setLanguage()
         setTheme()
      });
   });

   $effect(() => {
      if (app_width >= 700 && !navbar_collapsed)
         hideNavbar()

      else if (app_width < 700 && !navbar_collapsed)
         openNavbar()
   })
</script>

<div bind:this={divs.app} id="app" class="flex flex-col"
bind:clientWidth={app_width}>
   <Navbar nav_type="normal"/>
   <Navbar nav_type="sidebar"/>

   {@render children()}
</div>

<style>
   #app {
      padding: 10px 16px 0px 16px;
      min-height: 100dvh;
      background-size: cover;
      background-position: center;
   }

   :global(.IconToColor path) {
      color: oklch(0.279 0.041 260.031);
   }

   :global(.dark) {
      :global(.IconToColor path) {
         color: oklch(0.8357 0.1886 126.24);
      }
   }
</style>
