<script lang="ts">
   import { icons } from '$lib/icons.svelte'
   import { text } from '$lib/text.svelte'
</script>

<a href="/quote_of_day" class="flex flex-col items-center">
   {@html text.navbar.quote}
   {@html icons.underline}
</a>
