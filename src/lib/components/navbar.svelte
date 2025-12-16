<script lang="ts">
    import { page } from '$app/stores';
    let mobileMenuOpen = $state(false);

    function toggleMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMenu() {
        mobileMenuOpen = false;
    }
</script>

<div class="sticky top-0 z-50">
    <!-- Announcement Bar -->
    <div class="bg-brand-gold text-brand-dark font-semibold text-center p-3 text-sm md:text-base">
        <a href="#events" class="hover:underline">
            🔥 Early Bird Registration for National Camp is NOW OPEN! Register today and save! 🔥
        </a>
    </div>

    <!-- Header -->
    <header class="bg-white/90 backdrop-blur-md shadow-sm">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
            <a href="/" class="flex items-center gap-2 font-serif font-bold text-2xl tracking-wider text-brand-dark">
                <img src="/assets/PAOZLOGO.png" alt="PAOZ TRAILBLAZERS Logo" class="h-8">
                <span>Trailblazers</span>
            </a>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8 font-semibold text-sm lg:text-base">
                <a href="/events" class="py-2 hover:text-brand-primary nav-link">Events</a>
                <a href="#blog" class="py-2 hover:text-brand-primary nav-link">Blog</a>
                <a href="#connect" class="py-2 hover:text-brand-primary nav-link">Connect</a>
                <a href="#serve" class="py-2 hover:text-brand-primary nav-link">Serve</a>
                <a href="#about" class="py-2 hover:text-brand-primary nav-link">About</a>
                <a href="#contact" class="py-2 hover:text-brand-primary nav-link">Contact</a>
            </div>
            
            <a href="#events" class="hidden md:inline-block btn btn-primary !py-2 !px-6 text-sm">Register For Camp</a>
            
            <!-- Mobile Button -->
            <button class="md:hidden text-brand-dark" onclick={toggleMenu} aria-label="Open mobile menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </nav>

        <!-- Mobile Menu -->
        {#if mobileMenuOpen}
            <div class="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg" transition:slide>
                <div class="px-4 pt-2 pb-6 space-y-1">
                    <a href="/events" onclick={closeMenu} class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 border-b border-gray-50">
                        Events
                    </a>
                    {#each ['Blog', 'Connect', 'Serve', 'About', 'Contact'] as item}
                        <a href="#{item.toLowerCase()}" onclick={closeMenu} class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 border-b border-gray-50">
                            {item}
                        </a>
                    {/each}
                    <a href="#im-new" onclick={closeMenu} class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50">I'm New</a>
                    <a href="#parents" onclick={closeMenu} class="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50">For Parents</a>
                </div>
            </div>
        {/if}
    </header>
</div>