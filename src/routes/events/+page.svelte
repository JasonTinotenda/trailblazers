<script lang="ts">
	let { data } = $props();
	
	// Simple formatting for dates
	const formatDate = (date: Date) => {
		return new Intl.DateTimeFormat('en-GB', { 
			day: 'numeric', month: 'short', year: 'numeric' 
		}).format(date);
	};
</script>

<div class="bg-brand-light min-h-screen py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-serif font-bold text-brand-dark">Upcoming Events</h1>
			<p class="mt-4 text-gray-600">Don't miss out on what's happening in the Trailblazers community.</p>
		</div>

		{#if data.events.length === 0}
			<div class="text-center py-12 bg-white rounded-lg shadow-sm">
				<p class="text-gray-500">No upcoming events scheduled. Check back soon!</p>
			</div>
		{:else}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each data.events as event}
					<div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col h-full">
						<!-- Image Placeholder if no URL -->
						<div class="h-48 bg-gray-200 relative">
							{#if event.imageUrl}
								<img src={event.imageUrl} alt={event.title} class="w-full h-full object-cover" />
							{:else}
								<div class="w-full h-full flex items-center justify-center text-gray-400 bg-brand-dark/5">
									<span class="text-sm">No Image</span>
								</div>
							{/if}
							<div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-primary uppercase">
								{event.type}
							</div>
						</div>
						
						<div class="p-6 flex-grow flex flex-col">
							<div class="flex items-center text-sm text-gray-500 mb-2">
								<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
								{formatDate(event.date)}
							</div>
							
							<h3 class="text-xl font-bold text-brand-dark mb-2">{event.title}</h3>
							<p class="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
							
							<div class="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
								<span class="font-bold text-brand-primary">
									{event.price === 0 ? 'Free' : `$${(event.price / 100).toFixed(2)}`}
								</span>
								<button class="text-sm font-medium text-brand-dark hover:text-brand-primary underline">
									View Details
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>