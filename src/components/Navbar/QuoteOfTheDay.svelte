<script lang="ts">
   import { icons } from '$lib/icons.svelte'
   import { text } from '$lib/text/text_hash.svelte'
</script>

<div class="flex flex-col place-content-between items-center h-[2rem]">
   <a href="/quote_of_day">{@html text.navbar.quote}</a>
   <div id="underline" class="w-[8.5rem] h-[0.72rem] bg-no-repeat bg-cover"
   style="background-image: url({icons.underline})"></div>
</div>
