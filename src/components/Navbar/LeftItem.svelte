<script>
   import { closeNavbar } from "$lib/toggleNavbar.svelte"
   import { text } from '$lib/text/text_hash.svelte'

   let { name, href, width, space } = $props()
</script>

<a {href} class="flex items-center {space}" onclick={closeNavbar}>
   {@html text.navbar[name]}

   <img src="/icons/{name}.svg" alt="{name}"
   style="width: {width}rem" class="ml-[2px]" />
</a>

<style lang="postcss">
   @reference "tailwindcss";

   a:hover {
      color: theme(--color-rose-300);
   }
</style>
