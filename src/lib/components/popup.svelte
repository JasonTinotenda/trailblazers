<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    let show = $state(false);

    onMount(() => {
        const timer = setTimeout(() => {
            show = true;
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    });
</script>

{#if show}
    <div 
        class="fixed bottom-5 right-5 bg-white shadow-2xl rounded-lg p-6 max-w-sm z-50 border-t-4 border-brand-primary"
        in:fly={{ y: 20, duration: 500 }}
        out:fade
    >
        <button onclick={() => show = false} class="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h3 class="font-serif font-bold text-xl">Ready for an Adventure?</h3>
        <p class="text-gray-600 mt-2">National Camp 2025 is coming! Discover an unforgettable experience.</p>
        <a href="#events" onclick={() => show = false} class="inline-block mt-4 btn btn-primary !py-2 !px-5">Learn More</a>
    </div>
{/if}