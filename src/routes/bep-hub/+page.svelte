<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';
    
    let { data } = $props();

    // Helper for currency
    const formatPrice = (cents: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
    };
</script>

<Navbar />

<main class="bg-brand-light min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-brand-dark text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[url('/assets/image06.jpeg')] bg-cover bg-center"></div>
        <div class="container mx-auto px-6 relative z-10 text-center">
            <h1 class="font-serif font-bold text-4xl md:text-6xl mb-6">The BEP Hub</h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
                Business & Entrepreneurs Platform. Empowering the next generation of marketplace leaders through connection, visibility, and resources.
            </p>
        </div>
    </section>

    <!-- Business Directory -->
    <section class="py-16 container mx-auto px-6 max-w-7xl">
        <div class="flex items-center justify-between mb-12">
            <div>
                <h2 class="font-serif text-3xl font-bold text-brand-dark">Professionals Directory</h2>
                <p class="text-gray-600 mt-2">Support businesses owned by fellow Trailblazers.</p>
            </div>
            <button class="btn btn-primary">List Your Business</button>
        </div>

        {#if data.businesses.length === 0}
            <div class="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
                <p class="text-gray-500">No businesses listed yet. Be the first!</p>
            </div>
        {:else}
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each data.businesses as biz}
                <div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-brand-primary hover:shadow-xl transition-shadow">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="font-bold text-xl text-brand-dark">{biz.businessName}</h3>
                            <span class="text-xs font-bold text-brand-primary bg-brand-primary/10 px-2 py-1 rounded mt-1 inline-block">
                                {biz.industry}
                            </span>
                        </div>
                        {#if biz.isVerified}
                            <span class="text-green-600" title="Verified Member">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </span>
                        {/if}
                    </div>
                    <p class="text-gray-600 mb-6 text-sm line-clamp-3">{biz.description}</p>
                    {#if biz.websiteUrl}
                        <a href={biz.websiteUrl} target="_blank" rel="noopener noreferrer" class="text-brand-primary font-bold hover:underline text-sm flex items-center gap-1">
                            Visit Website 
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    {/if}
                </div>
                {/each}
            </div>
        {/if}
    </section>

    <!-- Freelancer Equipment Rental -->
    <section class="py-16 bg-white border-t border-gray-200">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="text-center mb-12">
                <h2 class="font-serif text-3xl font-bold text-brand-dark">Freelancer Gear Rental</h2>
                <p class="text-gray-600 mt-2">High-quality equipment available for rent to community creatives.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {#each data.rentalGear as item}
                <div class="group relative bg-brand-light rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div class="aspect-video bg-gray-200 relative overflow-hidden">
                        <img src={item.imageUrl || '/assets/placeholder.jpg'} alt={item.name} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-2 right-2 bg-brand-dark text-white text-xs font-bold px-2 py-1 rounded">
                            {formatPrice(item.dailyRate)}/day
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold text-gray-900">{item.name}</h3>
                        <p class="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                        <button class="w-full mt-4 btn btn-primary text-xs !py-2">Check Availability</button>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </section>
</main>

<Footer />