<script lang="ts">
	import type { ExperienceEntryData } from './ExperienceEntryData';
	import Fa from 'svelte-fa';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import { faStar } from '@fortawesome/free-solid-svg-icons';
	import data from '$lib/data/data.json';
	import pfp from '$lib/assets/logo.jpg';
	import ExperienceList from './ExperienceList.svelte';

	import ExperienceEntry from './ExperienceEntry.svelte';
	const dataMap = data as Record<string, ExperienceEntryData>;
	const dataList = Object.values(dataMap);
</script>

<div class="max-w-[960px] px-12 py-8 w-full mx-auto flex flex-col gap-16">
	<div class="flex flex-row items-center gap-5">
		<img
			src={pfp}
			alt="Profile"
			class="rounded-full min-w-[100px] min-w-h-[100px] max-w-[150px] max-h-[150px]"
		/>
		<div class="flex flex-col">
			<p class="text-color text-[26px] xl:text-[30px]">Peter Jiang</p>
			<p class="accent-color">Software Engineer</p>
			<p class="accent-color">@ University of Waterloo</p>
			<div class="flex flex-row gap-3 mt-2">
				<a href="https://github.com/CheatCod">
					<Fa icon={faGithub} class="cursor-pointer" />
				</a>
				<a href="https://www.linkedin.com/in/peter-jiang-uw/">
					<Fa icon={faLinkedin} class="cursor-pointer" />
				</a>
				<a href="mailto:peter.jiang@uwaterloo.ca">
					<Fa icon={faEnvelope} class="cursor-pointer" />
				</a>
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-5">
		<h1 class="flex flex-row items-center gap-3">
			<Fa icon={faStar} size="xs" style="color : #E4C663" />
			Starred
		</h1>
		<ExperienceList entries={[dataMap['lodestone']]} />
	</div>
	<div class="flex flex-col gap-5">
		<h1>Work Experience</h1>
		<ExperienceList entries={dataList.filter((entry) => entry.type === 'work')} />
	</div>
	<div class="flex flex-col gap-5">
		<h1>Projects</h1>
		<ExperienceList entries={dataList.filter((entry) => entry.type === 'project')} />
	</div>
</div>
