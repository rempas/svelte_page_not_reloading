<script lang=ts>
   import { changeLanguage } from '$lib/languages'
   import { changeTheme } from '$lib/themes'
   import { icons } from '$lib/icons.svelte'
</script>

<div id="switches" class="flex gap-[0.7rem]">
   <button onclick={changeLanguage}><img src={icons.flag} alt="flag"/></button>
   <button onclick={changeTheme}><img src={icons.theme} alt="theme"/></button>
</div>

<style>
   #switches button {
      cursor: pointer;
      width: 1.4rem;
   }
</style>
