<script lang="ts">
 import "../app.css";
 import { ModeWatcher } from "mode-watcher";
 let { children } = $props();
</script>
 
<ModeWatcher />

<div class="container mx-auto py-10 min-h-screen">
	{@render children?.()}
</div>