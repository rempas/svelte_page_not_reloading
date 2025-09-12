<script lang=ts>
   import { changeLanguage } from '$lib/languages'
   import { changeTheme } from '$lib/themes'
   import { icons } from '$lib/icons.svelte'
</script>

<div id="switches" class="flex gap-3">
   <button onclick={changeLanguage}>{@html icons.flag}</button>
   <button onclick={changeTheme}>{@html icons.theme}</button>
</div>

<style>
   #switches button {
      cursor: pointer;
      width: 1.4rem;
   }
</style>
