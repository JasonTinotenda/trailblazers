<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';
    
    let { data } = $props();
    let { event } = data;

    // Helper to format currency
    const formatPrice = (cents: number) => {
        if (cents === 0) return 'Free';
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
    };

    // Helper for dates
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(date));
    };
    
    const formatTime = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' }).format(new Date(date));
    };
</script>

<Navbar />

<main class="bg-brand-light min-h-screen pb-24">
    
    <!-- Hero Header -->
    <div class="relative h-[50vh] w-full overflow-hidden">
        <img src={event.imageUrl} alt={event.title} class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <span class="bg-brand-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4">{event.type}</span>
            <h1 class="font-serif font-bold text-4xl md:text-6xl max-w-4xl">{event.title}</h1>
        </div>
    </div>

    <div class="container mx-auto px-6 max-w-7xl -mt-16 relative z-10">
        <div class="grid lg:grid-cols-3 gap-8">
            
            <!-- Left Column: Content -->
            <div class="lg:col-span-2 space-y-8">
                
                <!-- Main Info Card -->
                <div class="bg-white rounded-xl shadow-lg p-8">
                    <h2 class="font-serif font-bold text-2xl mb-6 text-brand-dark">About This Event</h2>
                    <!-- Rich Text Content -->
                    <div class="prose prose-lg text-gray-600 max-w-none">
                        {@html event.description}
                    </div>
                </div>

                <!-- Map / Location -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div class="p-6 border-b border-gray-100">
                        <h3 class="font-bold text-xl">Location</h3>
                        <p class="text-gray-600">{event.location}</p>
                    </div>
                    <iframe 
                        src={event.mapUrl} 
                        width="100%" 
                        height="300" 
                        style="border:0;" 
                        allowfullscreen={true} 
                        loading="lazy" 
                        title="Event Location">
                    </iframe>
                </div>
            </div>

            <!-- Right Column: Sticky Sidebar -->
            <div class="lg:col-span-1">
                <div class="sticky top-24 space-y-6">
                    
                    <!-- Registration Card -->
                    <div class="bg-white rounded-xl shadow-xl p-6 border-t-4 border-brand-primary">
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-gray-500 font-medium">Price</span>
                            <span class="text-3xl font-bold text-brand-primary">{formatPrice(event.price)}</span>
                        </div>

                        <div class="space-y-4 mb-8">
                            <div class="flex items-start gap-3">
                                <div class="bg-brand-light p-2 rounded text-brand-primary">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-gray-900">Date</p>
                                    <p class="text-sm text-gray-600">{formatDate(event.date)}</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="bg-brand-light p-2 rounded text-brand-primary">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-gray-900">Time</p>
                                    <p class="text-sm text-gray-600">{formatTime(event.date)} - {formatTime(event.endTime)}</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="bg-brand-light p-2 rounded text-brand-primary">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-gray-900">Capacity</p>
                                    <p class="text-sm text-gray-600">{event.registeredCount} / {event.capacity} registered</p>
                                </div>
                            </div>
                        </div>

                        <button class="w-full btn btn-primary text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                            Register Now
                        </button>
                        <p class="text-xs text-center text-gray-400 mt-3">Secure registration powered by PAOZ</p>
                    </div>

                    <!-- Organizer Info -->
                    <div class="bg-white rounded-xl shadow p-6">
                        <h4 class="font-bold text-gray-900 mb-2">Organizer</h4>
                        <p class="text-gray-600 text-sm mb-4">{event.organizer}</p>
                        <a href="mailto:{event.contactEmail}" class="text-brand-primary text-sm font-semibold hover:underline">Contact Organizer</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</main>

<Footer />