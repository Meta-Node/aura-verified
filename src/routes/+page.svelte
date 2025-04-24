<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	let user = null;
	let auth: any = null;
	let googleProvider: any = null;

	// Dynamically import Firebase only in the browser
	onMount(async () => {
		if (browser) {
			const { auth: firebaseAuth, googleProvider: provider } = await import('../lib/firebase');
			auth = firebaseAuth;
			googleProvider = provider;

			// Set up auth state listener
			auth.onAuthStateChanged((currentUser: any) => {
				user = currentUser;
				console.log(currentUser);
			});
		}
	});

	async function loginWithGoogle() {
		if (!browser || !auth || !googleProvider) return;
		try {
			const { signInWithPopup } = await import('firebase/auth');
			const result = await signInWithPopup(auth, googleProvider);
			user = result.user;
		} catch (error) {
			console.error('Login failed:', error);
		}
	}
</script>

<h3 class="text-center text-3xl font-bold">Aura Get Verified</h3>

<p class="mt-10 text-center">To get started signup using these integrations</p>
<div
	class="text-card-foreground mx-auto mt-5 flex w-full max-w-sm flex-col gap-2 space-y-4 rounded-lg p-6 shadow-sm"
>
	<button
		class="flex h-12 items-center justify-center gap-2 rounded-md border
                  border-gray-300 bg-white px-4 text-gray-700
                  transition-all duration-200 hover:shadow-md
                  focus:ring-2 focus:ring-blue-500
                  focus:ring-offset-2 focus:outline-none dark:bg-white dark:text-gray-700"
		on:click={loginWithGoogle}
	>
		<div class="flex h-6 w-6 items-center justify-center">
			<span class="icon-[flat-color-icons--google] h-5 w-5"></span>
		</div>
		<span class="font-medium">Continue with Google</span>
	</button>

	<button
		class="flex h-12 items-center justify-center gap-2 rounded-md bg-black
                  px-4 text-white
                  transition-all duration-200 hover:bg-gray-900
                  focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
                  focus:outline-none dark:bg-black dark:text-white dark:hover:bg-gray-900"
	>
		<span class="icon-[ic--baseline-apple] h-5 w-5"></span>
		<span class="font-medium">Continue with Apple</span>
	</button>

	<button
		class="flex h-12 items-center justify-center gap-2 rounded-md bg-[#1877F2]
                  px-4 text-white
                  transition-all duration-200 hover:bg-[#166FE5]
                  focus:ring-2 focus:ring-[#1877F2] focus:ring-offset-2
                  focus:outline-none dark:bg-[#1877F2] dark:text-white dark:hover:bg-[#166FE5]"
	>
		<div class="flex h-6 w-6 items-center justify-center">
			<span class="icon-[logos--facebook] h-5 w-5"></span>
		</div>
		<span class="font-medium">Continue with Facebook</span>
	</button>
</div>
<p class="text-muted-foreground mt-4 text-center text-xs">
	By continuing, you agree to our Terms of Service and Privacy Policy
</p>
