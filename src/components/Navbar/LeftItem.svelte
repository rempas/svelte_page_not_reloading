<script>
   import { closeNavbar } from "$lib/toggleNavbar.svelte"
   import { text } from '$lib/text.svelte'
   import { icons } from '$lib/icons.svelte'

   let { name, href, width, space } = $props()
</script>

<a {href} class="flex items-center {space}" onclick={closeNavbar}>
   <div class="mr-2">{@html text.navbar[name]}</div>
   {@html icons[name]}
</a>

<style lang="postcss">
   @reference "tailwindcss";
</style>
