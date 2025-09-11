<script lang="ts">
   import { icons } from '$lib/icons.svelte'
   import { text } from '$lib/text.svelte'
</script>

<a href="/quote_of_day" class="flex flex-col items-center">
   {@html text.navbar.quote}
   {@html icons.underline}
</a>

<style>
   :global(#underline) {
      color: oklch(0.3023 0.1279 7.53);
   }

   :global(.dark) {
      :global(#underline) {
         color: oklch(0.8357 0.1886 126.24);
      }
   }
</style>
