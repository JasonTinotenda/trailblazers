<script lang="ts">
    let { events } = $props();
    // We only show the top 3 events on the homepage
    let displayEvents = $derived(events.slice(0, 3));
</script>

<section id="events-preview" class="py-24 bg-white">
    <div class="container mx-auto px-6 max-w-7xl">
        <div class="text-center mb-16">
            <h2 class="text-base font-semibold leading-7 text-brand-primary">JOIN US</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif">Upcoming Events</p>
            <p class="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600">
                Don't miss out on what's happening in the community.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
            {#each displayEvents as event}
            <div class="card bg-brand-light rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <img src={event.imageUrl || '/assets/placeholder.jpg'} alt={event.title} class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col flex-grow">
                    <p class="text-sm font-bold text-brand-primary">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                    <h3 class="font-serif font-bold text-xl mt-2">{event.title}</h3>
                    <p class="text-gray-600 mt-2 line-clamp-2 flex-grow">{event.description}</p>
                    
                    <!-- Link to the specific event details page -->
                    <a href="/events/{event.id}" class="inline-block mt-4 text-brand-primary font-bold hover:underline">
                        View Details →
                    </a>
                </div>
            </div>
            {/each}
        </div>

        <div class="text-center">
            <a href="/events" class="btn btn-primary">View All Events</a>
        </div>
    </div>
</section>