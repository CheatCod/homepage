<script lang="ts">
	import type { ExperienceEntryData } from './ExperienceEntryData';
	import Fa from 'svelte-fa';

	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	export let entry: ExperienceEntryData;

	const tagString = entry.tags.join(' • ');
</script>

<div class="flex flex-row gap-5">
	<div class="flex flex-col items-start min-w-fit">
		<p class="secondary-accent-color">{entry.date.start}</p>
		{#if entry.date.end}
			<p class="secondary-accent-color pointer-events-none">|</p>
			<p class="secondary-accent-color">{entry.date.end}</p>
		{/if}
	</div>
	<div class="flex flex-col items-start grow-0 gap-3">
		<div class="flex flex-col items-start grow-0">
			<p class="secondary-color">{entry.title} @ <b>{entry.organization}</b></p>
			{#if entry.link}
				<a href={entry.link}>
					<Fa icon={faArrowUpRightFromSquare} size="xs" class="cursor-pointer" />
				</a>
			{/if}
		</div>

		<p class="accent-color">{entry.description}</p>
		<b class="secondary-accent-color">{tagString}</b>
	</div>
</div>
