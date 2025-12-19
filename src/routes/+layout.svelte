<!-- ### FILE: src/routes/+layout.svelte ### -->
<script lang="ts">
	import './layout.css'; // Ensure this points to your CSS file (was layout.css in your file list, check naming)
	import { page } from '$app/stores';
	
	let { children } = $props();
	let isMenuOpen = $state(false);

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Events', href: '/events' },
		{ name: 'Connect', href: '/connect' },
		{ name: 'BEP Hub', href: '/bep-hub' },
		{ name: 'About', href: '/about' },
	];
</script>

<div class="min-h-screen flex flex-col font-sans text-brand-dark bg-brand-light">
	<!-- Navigation -->
	<nav class="bg-white shadow-sm sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex">
					<div class="flex-shrink-0 flex items-center">
						<a href="/" class="text-2xl font-bold text-brand-primary font-serif">TRAILBLAZERS</a>
					</div>
					<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
						{#each navLinks as link}
							<a 
								href={link.href}
								class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200
								{$page.url.pathname === link.href ? 'border-brand-primary text-brand-dark' : 'border-transparent text-gray-500 hover:text-brand-primary hover:border-gray-300'}"
							>
								{link.name}
							</a>
						{/each}
					</div>
				</div>
				
				<!-- Mobile Menu Button -->
				<div class="-mr-2 flex items-center sm:hidden">
					<button 
						onclick={() => isMenuOpen = !isMenuOpen}
						class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
					>
						<span class="sr-only">Open main menu</span>
						<!-- Icon -->
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
						</svg>
					</button>
				</div>
				
				<!-- Auth / CTA -->
				<div class="hidden sm:ml-6 sm:flex sm:items-center">
					{#if $page.data.user}
						<a href="/demo/lucia" class="text-sm font-medium text-gray-700 hover:text-brand-primary">
							Hi, {$page.data.user.username}
						</a>
					{:else}
						<a href="/demo/lucia/login" class="bg-brand-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-secondary transition">
							Join / Login
						</a>
					{/if}
				</div>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div class="sm:hidden bg-white border-t">
				<div class="pt-2 pb-3 space-y-1">
					{#each navLinks as link}
						<a 
							href={link.href}
							class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium
							{$page.url.pathname === link.href ? 'bg-orange-50 border-brand-primary text-brand-primary' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300'}"
							onclick={() => isMenuOpen = false}
						>
							{link.name}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</nav>

	<!-- Main Content -->
	<main class="flex-grow">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-brand-dark text-white">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<h3 class="text-lg font-serif font-bold text-brand-gold mb-4">PAOZ Trailblazers</h3>
				<p class="text-gray-400 text-sm">Empowering the next generation of leaders through spiritual growth and socio-economic development.</p>
			</div>
			<div>
				<h3 class="text-lg font-bold mb-4">Quick Links</h3>
				<ul class="space-y-2 text-sm text-gray-400">
					<li><a href="/events" class="hover:text-white">Upcoming Events</a></li>
					<li><a href="/connect" class="hover:text-white">Find a Group</a></li>
					<li><a href="/bep-hub" class="hover:text-white">BEP Hub</a></li>
				</ul>
			</div>
			<div>
				<h3 class="text-lg font-bold mb-4">Contact</h3>
				<p class="text-gray-400 text-sm">Harare, Zimbabwe</p>
				<p class="text-gray-400 text-sm">info@paoztrailblazers.org</p>
			</div>
		</div>
		<div class="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
			&copy; {new Date().getFullYear()} PAOZ Trailblazers. All rights reserved.
		</div>
	</footer>
</div>