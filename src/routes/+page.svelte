<!-- ### FILE: src/routes/+page.svelte ### -->
<script lang="ts">
	// In a real scenario, you'd load this data from +page.server.ts
	// For MVP skeleton, we use static placeholders or passed data
	let { data } = $props();
</script>

<svelte:head>
	<title>Home | PAOZ Trailblazers</title>
	<meta name="description" content="The digital ecosystem for PAOZ Young Adults." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-brand-dark h-[600px] flex items-center justify-center overflow-hidden">
	<!-- Background Image Overlay -->
	<div class="absolute inset-0 bg-black/60 z-10"></div>
	<div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
	
	<div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
		<h1 class="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
			Empowering the <span class="text-brand-primary">Next Generation</span>
		</h1>
		<p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
			Join a community of young adults dedicated to spiritual growth, professional excellence, and social impact.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/events" class="bg-brand-primary text-white px-8 py-3 rounded-md font-bold hover:bg-brand-secondary transition transform hover:-translate-y-1">
				Find an Event
			</a>
			<a href="/connect" class="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-brand-dark transition">
				Join a Group
			</a>
		</div>
	</div>
</section>

<!-- Mission / Pillars -->
<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-brand-dark font-serif">Our Pillars</h2>
			<div class="w-20 h-1 bg-brand-primary mx-auto mt-4"></div>
		</div>
		<div class="grid md:grid-cols-3 gap-8">
			<!-- Pillar 1 -->
			<div class="p-6 bg-brand-light rounded-lg text-center hover:shadow-lg transition">
				<div class="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
				</div>
				<h3 class="text-xl font-bold mb-2">Spiritual Growth</h3>
				<p class="text-gray-600">Deepening our walk with God through camps, worship nights, and discipleship.</p>
			</div>
			<!-- Pillar 2 -->
			<div class="p-6 bg-brand-light rounded-lg text-center hover:shadow-lg transition">
				<div class="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
				</div>
				<h3 class="text-xl font-bold mb-2">Community</h3>
				<p class="text-gray-600">Connecting young adults through campus ministries and interest-based groups.</p>
			</div>
			<!-- Pillar 3 -->
			<div class="p-6 bg-brand-light rounded-lg text-center hover:shadow-lg transition">
				<div class="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
				</div>
				<h3 class="text-xl font-bold mb-2">BEP Hub</h3>
				<p class="text-gray-600">Business and Entrepreneurship Program empowering financial independence.</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-brand-primary py-16">
	<div class="max-w-4xl mx-auto px-4 text-center text-white">
		<h2 class="text-3xl font-bold mb-4">Ready to get involved?</h2>
		<p class="mb-8 text-white/90">Whether you are looking for a mentor, a prayer partner, or a business network, there is a place for you here.</p>
		<a href="/demo/lucia/login" class="bg-white text-brand-primary px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition">
			Create an Account
		</a>
	</div>
</section>