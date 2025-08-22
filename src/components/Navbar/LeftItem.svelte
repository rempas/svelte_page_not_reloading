<script>
   import { closeNavbar } from "$lib/toggleNavbar.svelte"

   let { name, href, width, space } = $props()

   const text = name.charAt(0).toUpperCase() + name.slice(1)
</script>

<a {href} class="flex items-center {space}" onclick={closeNavbar}>
   {text}

   <img src="/icons/{name}.svg" alt="{name}"
   style="width: {width}rem" class="ml-[2px]" />
</a>

<style lang="postcss">
   @reference "tailwindcss";

   a:hover {
      color: theme(--color-rose-300);
   }
</style>
