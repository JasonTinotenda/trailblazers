<script lang="ts">
    let { testimonials } = $props();
    
    let displayCount = $state(3);
    let isLoading = $state(false);
    
    let visibleTestimonials = $derived(testimonials.slice(0, displayCount));
    let hasMore = $derived(displayCount < testimonials.length);

    function loadMore() {
        isLoading = true;
        setTimeout(() => {
            displayCount += 3;
            isLoading = false;
        }, 800);
    }
</script>

<section id="testimonials" class="py-24 bg-brand-light">
    <div class="container mx-auto px-6 max-w-7xl">
        <div class="text-center mb-16">
             <h2 class="text-base font-semibold leading-7 text-brand-primary">WHAT OUR TRAILBLAZERS SAY</h2>
             <p class="mt-2 text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl font-serif">Stories from the Community</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each visibleTestimonials as t}
            <div class="bg-white p-8 rounded-lg shadow-lg card">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-xl mr-4">
                        {t.name.charAt(0)}
                    </div>
                    <div>
                        <h4 class="font-bold text-brand-dark">{t.name}</h4>
                        <p class="text-sm text-gray-600">{t.role}</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">"{t.content}"</p>
                <div class="text-brand-gold">
                    {#each Array(5) as _, i}
                        <span>{i < t.rating ? '★' : '☆'}</span>
                    {/each}
                </div>
            </div>
            {/each}
        </div>

        {#if hasMore}
        <div class="text-center mt-12">
            <button onclick={loadMore} class="bg-brand-primary hover:opacity-90 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 flex items-center justify-center mx-auto min-w-[280px]" disabled={isLoading}>
                {#if isLoading}
                    <div class="loader"></div>
                {:else}
                    Read More Testimonials
                {/if}
            </button>
        </div>
        {/if}
    </div>
</section>