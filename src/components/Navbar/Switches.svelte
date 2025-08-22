<script lang=ts>
   import { changeLanguge, changeTheme } from '$lib/switchers.svelte'
   import { icons } from '$lib/icons.svelte'
</script>

<div id="switches" class="flex gap-[0.7rem]">
   <button onclick={changeLanguge}><img src={icons.flag} alt="flag"/></button>
   <button onclick={changeTheme}><img src={icons.theme} alt="theme"/></button>
</div>

<style>
   #switches button {
      cursor: pointer;
      width: 1.3rem;
   }
</style>
