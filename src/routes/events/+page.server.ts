// import { db } from '$lib/server/db';
// import { events } from '$lib/server/schema';
// import { desc, asc, ilike, eq, and, sql } from 'drizzle-orm';

export const load = async ({ url }) => {
    // 1. Parse Query Parameters
    const search = url.searchParams.get('q') || '';
    const type = url.searchParams.get('type') || 'ALL';
    const sort = url.searchParams.get('sort') || 'date_asc';
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = 9;
    const offset = (page - 1) * limit;

    // --- MOCK DATA GENERATION (Replace with DB Logic below) ---
    const generateMockEvents = () => {
        const types = ['CAMP', 'WORKSHOP', 'MEETUP'];
        const mockEvents = [];
        
        // Create 20 mock events
        for (let i = 1; i <= 20; i++) {
            const isCamp = i % 4 === 0;
            const eventType = isCamp ? 'CAMP' : types[i % 3];
            
            mockEvents.push({
                id: i,
                title: isCamp ? `National Camp 202${5 + i}` : `Community ${eventType} ${i}`,
                description: `An amazing opportunity to gather for ${eventType.toLowerCase()} and growth.`,
                date: new Date(2025, 7, 10 + i), // August 2025
                location: isCamp ? 'Resurrection Center' : 'Downtown Hub',
                imageUrl: isCamp ? '/assets/camp.jpg' : `/assets/wallpaper0${(i % 5) + 1}.jpg`,
                type: eventType,
                price: isCamp ? 5000 : (i % 2 === 0 ? 0 : 1500), // 0, $15, or $50
                earlyBirdDeadline: isCamp ? new Date(2025, 5, 1) : null,
                capacity: isCamp ? 500 : 50,
                registeredCount: Math.floor(Math.random() * 40),
                isFeatured: i === 1 // First one is featured
            });
        }
        return mockEvents;
    };

    let allEvents = generateMockEvents();

    // 2. Filter Logic (In-memory for mock, use WHERE clause in SQL)
    let filteredEvents = allEvents.filter(e => {
        const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase()) || 
                              e.description.toLowerCase().includes(search.toLowerCase());
        const matchesType = type === 'ALL' || e.type === type;
        return matchesSearch && matchesType;
    });

    // 3. Sort Logic
    filteredEvents.sort((a, b) => {
        if (sort === 'date_asc') return a.date.getTime() - b.date.getTime();
        if (sort === 'date_desc') return b.date.getTime() - a.date.getTime();
        if (sort === 'title_asc') return a.title.localeCompare(b.title);
        return 0;
    });

    // 4. Pagination Logic
    const totalEvents = filteredEvents.length;
    const totalPages = Math.ceil(totalEvents / limit);
    const paginatedEvents = filteredEvents.slice(offset, offset + limit);

    // 5. Separate Featured Event (For the Hero Section)
    // In a real app, you might fetch this separately to ensure it always shows regardless of filters,
    // or only show it on the first page.
    const featuredEvent = allEvents.find(e => e.isFeatured) || allEvents[0];

    return {
        events: paginatedEvents,
        featuredEvent,
        pagination: {
            currentPage: page,
            totalPages,
            totalEvents
        },
        filters: {
            search,
            type,
            sort
        }
    };
};