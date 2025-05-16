<script lang="ts">
	import { ExternalLinkIcon, MailIcon } from '@lucide/svelte';

	const particles = Array.from({ length: 50 }, () => ({
		width: Math.random() * 2 + 1 + 'px',
		height: Math.random() * 2 + 1 + 'px',
		top: Math.random() * 100 + '%',
		left: Math.random() * 100 + '%'
	}));
</script>

<div class="relative mt-12 flex min-h-screen flex-col overflow-hidden">
	<img src="/favicon.png" class="mx-auto h-12 w-12" alt="Aura" />
	<div class="absolute inset-0 z-0">
		{#each particles as particle, i}
			<div
				class="absolute rounded-full bg-white opacity-20"
				style="width: {particle.width}; height: {particle.height}; top: {particle.top}; left: {particle.left};"
			></div>
		{/each}
	</div>

	<div class="z-10 flex flex-1 flex-col items-center justify-center px-6">
		<h1 class="mb-2 text-4xl font-bold">Aura Get Verified</h1>
		<p class="mb-8 text-[#d0d0d0]">Decentralized verification platform</p>

		<div class="mb-12 flex items-center justify-center">
			<button class="flex items-center text-white">
				<span class="mr-1 font-semibold">What is Aura?</span>
				<ExternalLinkIcon class="h-4 w-4" />
			</button>
		</div>

		<div
			class="relative mb-8 w-full max-w-md overflow-hidden rounded-3xl border border-white bg-white/5 p-6"
		>
			<div
				class="absolute -top-6 -right-6 -z-10 h-px w-px rounded-full shadow-[0_0_200px_120px_rgba(253,224,255,0.4)]"
			></div>

			<h2 class="mb-2 text-center text-3xl font-bold">Sign In</h2>
			<p class="mb-6 text-center text-[#acb5bb]">Use one of these integrations to login</p>

			<div class="relative mb-4">
				<div class="absolute top-1/2 left-4 -translate-y-1/2 text-[#acb5bb]">
					<MailIcon />
				</div>
				<input
					type="email"
					placeholder="Enter your email"
					class="w-full rounded-xl border border-[#545454] bg-transparent py-3 pr-4 pl-12 text-white placeholder:text-[#acb5bb]"
				/>
			</div>

			<button class="mb-2 w-full rounded-xl bg-[#1d61e7] py-3 text-white">Sign in with Email</button
			>

			<div class="my-6 border-t border-[#545454]"></div>

			<button
				class="mb-4 flex w-full items-center justify-center rounded-xl bg-white py-3 text-black"
			>
				<div class="mr-2 h-6 w-6">
					<svg viewBox="0 0 24 24" width="24" height="24">
						<path
							fill="#4285F4"
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
						/>
						<path
							fill="#34A853"
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
						/>
						<path
							fill="#FBBC05"
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
						/>
						<path
							fill="#EA4335"
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
						/>
					</svg>
				</div>
				Sign in with Google
			</button>

			<button
				class="mb-4 flex w-full items-center justify-center rounded-xl border border-[#545454] bg-black py-3 text-white"
			>
				<div class="mr-2 h-6 w-6">
					<svg viewBox="0 0 24 24" width="24" height="24" fill="white">
						<path
							d="M17.05 20.28c-.98.95-2.05.86-3.08.38-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.38C2.79 15.75 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.87 1.2-.28 2.33-.98 3.46-.93 1.48.1 2.59.8 3.3 1.97-3.14 1.72-2.34 5.57.24 6.67-.65 1.4-1.46 2.79-2.08 4.39zm-3.1-18C14.08 1.04 14.09 1 14.09 1 14.09 1 11.88 1.1 10.54 3c-1.1 1.56-.75 3.69-.71 3.8 0 0 1.24.08 2.33-.93.97-.9 1.92-1.59 1.8-2.59z"
						/>
					</svg>
				</div>
				Sign in with Apple
			</button>

			<p class="text-center text-sm text-[#acb5bb]">
				By Signing in you will agree to our privacy policy
			</p>
		</div>
	</div>

	<div class="z-10 flex items-center justify-between p-6">
		<div class="flex items-center">
			<div class="mr-2 h-8 w-8">
				<svg viewBox="0 0 24 24" width="32" height="32" fill="#f4712f">
					<circle cx="12" cy="12" r="10" />
					<path fill="#0d0d1b" d="M12 6v12M6 12h12" />
				</svg>
			</div>
			<span class="font-bold">Bright ID</span>
		</div>
		<a href="#" class="text-white"> Privacy Policy </a>
	</div>
</div>
