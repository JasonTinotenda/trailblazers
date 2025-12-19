<script lang="ts">
    let { faqs } = $props();
    let openId = $state(1);

    function toggle(id: number) {
        openId = openId === id ? 0 : id;
    }
</script>

<section id="faq" class="py-24 bg-white">
    <div class="container mx-auto px-6 max-w-4xl">
        <div class="text-center mb-16">
            <h2 class="font-serif text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div class="space-y-4">
            {#each faqs as faq}
            <div class="border border-gray-200 rounded-lg bg-white">
                <button onclick={() => toggle(faq.id)} class="w-full cursor-pointer p-6 flex justify-between items-center text-left">
                    <span class="font-semibold text-lg">{faq.question}</span>
                    <svg class="w-5 h-5 text-gray-500 transform transition-transform {openId === faq.id ? 'rotate-180' : ''}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {#if openId === faq.id}
                    <div class="p-6 pt-0 text-gray-600 border-t border-gray-50">
                        <p class="mt-4">{faq.answer}</p>
                    </div>
                {/if}
            </div>
            {/each}
        </div>
    </div>
</section>