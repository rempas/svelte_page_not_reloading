<script lang="ts">
   import { icons } from '$lib/icons.svelte'
   import { text } from '$lib/text.svelte'
</script>

<!-- <div class="flex flex-col place-content-between items-center h-[2rem]"> -->
<!--    <a href="/quote_of_day">{@html text.navbar.quote}</a> -->
<!--    {@html icons.underline} -->
<!-- </div> -->

<a href="/quote_of_day" class="flex flex-col items-center">
   {@html text.navbar.quote}
   {@html icons.underline}
</a>

