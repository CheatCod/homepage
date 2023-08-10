<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
</script>

<div class="w-full min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-auto">
	<title>Hello • Peter</title>
	<div class="max-w-[1680px] p-16 flex flex-col gap-12 items-start">
		<h1 class="text-4xl">Hello!</h1>
		<div class="flex flex-col gap-12 items-start">
			<div class="xl:text-4xl xl:leading-[3rem] leading-normal">
				<p>I'm Peter. A student at the University of Waterloo.</p>
				<p>
					<b>Co-Founder</b> and <b> Lead Developer</b> of
					<a href="https://github.com/Lodestone-Team/lodestone" class="underline"> Lodestone</a>.
				</p>
				<p>
					I enjoy building dynamic, creative projects from scratch to production that make others'
					lives, as well as my own, easier.
				</p>
				<p>
					I also write <a href="https://cheatcod3.hashnode.dev/" class="underline"> blogs</a>.
				</p>
			</div>
			<div class="flex flex-row items-center gap-4">
				<button
					on:click={() => {
						window.location.href = '/life';
					}}>More about me</button
				>
				<a href="/resume.pdf" target="_blank" class="underline"> resume.pdf </a>
			</div>
			<div class="flex flex-row items-start gap-5">
				<a href="https://github.com/CheatCod">
					<Fa icon={faGithub} size="2x" class="cursor-pointer" />
				</a>
				<a href="https://www.linkedin.com/in/peter-jiang-uw/">
					<Fa icon={faLinkedin} size="2x" class="cursor-pointer" />
				</a>
				<a href="mailto:peter.jiang@uwaterloo.ca">
					<Fa icon={faEnvelope} size="2x" class="cursor-pointer" />
				</a>
			</div>
		</div>
	</div>
</div>
