<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<ModeWatcher />

<div class="relative container mx-auto min-h-screen max-w-lg">
	<div
		class="absolute -top-2 right-10 h-px w-px rounded-full shadow-[0_0_200px_120px_rgba(253,224,255,0.3)]"
	></div>
	<div class="bg-linear fixed top-20 h-72 w-screen max-w-lg"></div>
	{@render children?.()}
</div>
