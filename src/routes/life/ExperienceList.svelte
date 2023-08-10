<script lang="ts">
	import type { ExperienceEntryData } from './ExperienceEntryData';
	import ExperienceEntry from './ExperienceEntry.svelte';

	export let entries: ExperienceEntryData[];
</script>

<div class="flex flex-col gap-5">
	{#each entries as entry}
		<ExperienceEntry {entry} />
	{/each}
</div>
