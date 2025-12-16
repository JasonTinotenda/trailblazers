<script lang="ts">
    let { leaders } = $props();
</script>

<section id="about" class="py-24 bg-brand-light">
    <div class="container mx-auto px-6 max-w-7xl">
         <div class="text-center mb-20">
            <h2 class="text-base font-semibold leading-7 text-brand-primary">WHO WE ARE</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif">A Movement of World-Changers</p>
        </div>

        <!-- Vision -->
        <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div class="w-full h-full">
                <img src="/assets/sermon1.jpg" alt="PAOZ Community" class="rounded-lg shadow-xl object-cover w-full h-full">
            </div>
            <div>
                <p class="font-bold text-sm text-brand-primary tracking-widest uppercase">OUR VISION</p>
                <h2 class="font-serif text-3xl md:text-4xl font-bold mt-4">To know Christ, Make Him known and Change the World.</h2>
                <p class="mt-6 text-lg text-gray-600">We are a Bible-based Pentecostal Church passionately fulfilling the Great Commission. Our Young Adults Ministry functions as a dynamic catalyst, intentionally developing leaders who are spiritually grounded.</p>
            </div>
        </div>

        <!-- Leadership -->
        <div class="py-12">
            <div class="mx-auto max-w-7xl">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif mb-12 text-center">Meet Our Leadership</h2>
                <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {#each leaders as leader}
                    <li>
                        <div class="flex items-center gap-x-4 bg-white p-4 rounded-lg shadow-sm">
                            <img class="h-16 w-16 rounded-full object-cover" src={leader.imageUrl} alt={leader.name}>
                            <div>
                                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{leader.name}</h3>
                                <p class="text-xs font-semibold leading-6 text-brand-primary">{leader.role}</p>
                            </div>
                        </div>
                    </li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Pillars -->
        <div class="bg-white py-24 sm:py-32 rounded-lg mt-12">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <h2 class="text-base font-semibold leading-7 text-brand-primary">OUR FRAMEWORK</h2>
                    <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif">Everything You Need for a Life of Impact</p>
                </div>
                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-white">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v11.494m-9-5.494h18" /></svg>
                                </div>
                                Spiritual Impact
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">Nurturing a generation hungry for God through worship, prayer, and study.</dd>
                        </div>
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-white">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                Leadership Development
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">Enhancing leadership skills to deploy your God-given gifts into key places of influence.</dd>
                        </div>
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-white">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                                Socio-Economic Empowerment
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">Providing entrepreneurial skills and creating platforms through our BEP Hub.</dd>
                        </div>
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-gray-900">
                                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-white">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                                </div>
                                College & University Ministry
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">Establishing vibrant ministries in higher learning institutions.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</section>