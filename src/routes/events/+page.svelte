<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import Navbar from '$lib/components/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';

    let { data } = $props();
    
    // Local state for inputs (synced with URL via applyFilters)
    let searchQuery = $state(data.filters.search);
    let selectedType = $state(data.filters.type);
    let selectedSort = $state(data.filters.sort);

    // Helper to format currency
    const formatPrice = (cents: number) => {
        if (cents === 0) return 'Free';
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
    };

    // Helper to format date
    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(new Date(date));
    };

    // Update URL params to trigger server reload
    function applyFilters() {
        const params = new URLSearchParams($page.url.searchParams);
        
        if (searchQuery) params.set('q', searchQuery);
        else params.delete('q');
        
        if (selectedType !== 'ALL') params.set('type', selectedType);
        else params.delete('type');
        
        params.set('sort', selectedSort);
        params.set('page', '1'); // Reset to page 1 on filter change
        
        goto(`?${params.toString()}`, { keepFocus: true });
    }

    function changePage(newPage: number) {
        const params = new URLSearchParams($page.url.searchParams);
        params.set('page', newPage.toString());
        goto(`?${params.toString()}`);
    }
</script>

<Navbar />

<main class="bg-brand-light min-h-screen">
    
    <!-- 1. Featured Event Hero -->
    {#if data.featuredEvent}
    <section class="relative h-[60vh] w-full flex items-end overflow-hidden group">
        <div class="absolute inset-0 bg-brand-dark">
            <img 
                src={data.featuredEvent.imageUrl} 
                alt={data.featuredEvent.title} 
                class="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        </div>
        
        <div class="relative z-10 container mx-auto px-6 pb-12 max-w-7xl text-white">
            <span class="bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                Featured Event
            </span>
            <h1 class="font-serif font-bold text-4xl md:text-6xl mb-4">{data.featuredEvent.title}</h1>
            <div class="flex flex-wrap gap-6 text-sm md:text-base font-medium text-gray-200 mb-8">
                <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {formatDate(data.featuredEvent.date)}
                </div>
                <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {data.featuredEvent.location}
                </div>
                <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    {data.featuredEvent.type}
                </div>
            </div>
            <button class="btn btn-primary">Register Now</button>
        </div>
    </section>
    {/if}

    <!-- 2. Toolbar (Search, Filter, Sort) -->
    <section class="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm py-4">
        <div class="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row gap-4 justify-between items-center">
            
            <!-- Search -->
            <div class="relative w-full md:w-96">
                <input 
                    type="text" 
                    bind:value={searchQuery} 
                    oninput={applyFilters}
                    placeholder="Search events..." 
                    class="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none"
                >
                <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>

            <div class="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <!-- Type Filter -->
                <select 
                    bind:value={selectedType} 
                    onchange={applyFilters}
                    class="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:border-brand-primary outline-none cursor-pointer"
                >
                    <option value="ALL">All Types</option>
                    <option value="CAMP">Camps</option>
                    <option value="WORKSHOP">Workshops</option>
                    <option value="MEETUP">Meetups</option>
                </select>

                <!-- Sort -->
                <select 
                    bind:value={selectedSort} 
                    onchange={applyFilters}
                    class="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:border-brand-primary outline-none cursor-pointer"
                >
                    <option value="date_asc">Date: Soonest</option>
                    <option value="date_desc">Date: Latest</option>
                    <option value="title_asc">Title: A-Z</option>
                </select>
            </div>
        </div>
    </section>

    <!-- 3. Event Grid -->
    <section class="py-12 container mx-auto px-6 max-w-7xl">
        {#if data.events.length === 0}
            <div class="text-center py-20">
                <p class="text-2xl font-serif text-gray-500">No events found matching your criteria.</p>
                <button onclick={() => { searchQuery=''; selectedType='ALL'; applyFilters(); }} class="mt-4 text-brand-primary font-bold hover:underline">Clear Filters</button>
            </div>
        {:else}
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each data.events as event (event.id)}
                    <div class="card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                        
                        <!-- Image & Badges -->
                        <div class="relative h-48 overflow-hidden">
                            <img 
                                src={event.imageUrl} 
                                alt={event.title} 
                                loading="lazy"
                                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            >
                            <div class="absolute top-3 left-3 flex gap-2">
                                <span class="bg-white/90 backdrop-blur text-brand-dark text-xs font-bold px-2 py-1 rounded uppercase">
                                    {event.type}
                                </span>
                                {#if event.isFeatured}
                                    <span class="bg-brand-gold text-white text-xs font-bold px-2 py-1 rounded uppercase">
                                        Featured
                                    </span>
                                {/if}
                            </div>
                            <div class="absolute bottom-0 right-0 bg-brand-primary text-white px-4 py-1 rounded-tl-lg font-bold">
                                {formatPrice(event.price)}
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="p-6 flex flex-col flex-grow">
                            <!-- Date -->
                            <div class="text-brand-primary font-bold text-sm mb-2 uppercase tracking-wide">
                                {formatDate(event.date)}
                            </div>

                            <!-- Title -->
                            <h3 class="font-serif font-bold text-xl text-brand-dark mb-2 line-clamp-2">
                                {event.title}
                            </h3>

                            <!-- Location -->
                            <div class="flex items-center text-gray-500 text-sm mb-4">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                {event.location}
                            </div>

                            <!-- Capacity Bar -->
                            {#if event.capacity}
                                <div class="mb-4">
                                    <div class="flex justify-between text-xs text-gray-500 mb-1">
                                        <span>{event.registeredCount} registered</span>
                                        <span>{event.capacity - event.registeredCount} spots left</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            class="bg-brand-secondary h-2 rounded-full" 
                                            style="width: {(event.registeredCount / event.capacity) * 100}%"
                                        ></div>
                                    </div>
                                </div>
                            {/if}

                            <!-- Early Bird Warning -->
                            {#if event.earlyBirdDeadline && new Date(event.earlyBirdDeadline) > new Date()}
                                <div class="bg-orange-50 text-orange-800 text-xs p-2 rounded mb-4 border border-orange-100">
                                    ⏰ Early Bird ends {new Date(event.earlyBirdDeadline).toLocaleDateString()}
                                </div>
                            {/if}

                            <div class="mt-auto pt-4 border-t border-gray-100">
                                <button class="w-full text-center text-brand-primary font-bold hover:text-brand-dark transition-colors">
                                    View Details & Register →
                                </button>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </section>

    <!-- 4. Pagination -->
    {#if data.pagination.totalPages > 1}
    <section class="pb-24 container mx-auto px-6 flex justify-center">
        <div class="flex gap-2">
            <button 
                disabled={data.pagination.currentPage === 1}
                onclick={() => changePage(data.pagination.currentPage - 1)}
                class="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            
            {#each Array(data.pagination.totalPages) as _, i}
                <button 
                    onclick={() => changePage(i + 1)}
                    class="w-10 h-10 rounded border {data.pagination.currentPage === i + 1 ? 'bg-brand-primary text-white border-brand-primary' : 'border-gray-300 hover:bg-gray-50'}"
                >
                    {i + 1}
                </button>
            {/each}

            <button 
                disabled={data.pagination.currentPage === data.pagination.totalPages}
                onclick={() => changePage(data.pagination.currentPage + 1)}
                class="px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    </section>
    {/if}

</main>

<Footer />