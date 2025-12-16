import { error } from '@sveltejs/kit';
// import { db } from '$lib/server/db';
// import { events } from '$lib/server/schema';
// import { eq } from 'drizzle-orm';

export const load = async ({ params }) => {
    const eventId = Number(params.id);

    // --- MOCK DATA (Replace with DB Call: await db.select().from(events).where(eq(events.id, eventId))) ---
    // We need to generate the specific event to match the ID requested
    const getEventById = (id: number) => {
        // Simulating a database lookup
        if (id > 20 || id < 1) return null;

        const isCamp = id % 4 === 0;
        const types = ['CAMP', 'WORKSHOP', 'MEETUP'];
        const type = isCamp ? 'CAMP' : types[id % 3];

        return {
            id: id,
            title: isCamp ? `National Camp 202${5 + id}` : `Community ${type} ${id}`,
            description: `
                <p class="mb-4">Join us for an incredible time of connection, growth, and inspiration. This event is designed to help you take the next step in your spiritual journey and leadership development.</p>
                <h3 class="text-xl font-bold mt-6 mb-2">What to Expect</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Powerful Worship:</strong> Experience an atmosphere of freedom and encounter.</li>
                    <li><strong>Dynamic Teaching:</strong> Practical wisdom for your daily life and leadership.</li>
                    <li><strong>Community:</strong> Meet other young adults who are running the same race.</li>
                </ul>
                <h3 class="text-xl font-bold mt-6 mb-2">Schedule</h3>
                <p>Doors open 30 minutes prior to the start time. Come early for coffee and hangs!</p>
            `, // HTML content for rich text
            date: new Date(2025, 7, 10 + id),
            endTime: new Date(2025, 7, 10 + id, 22, 0), // Ends same day at 10 PM
            location: isCamp ? 'Resurrection Center, Harare' : 'Downtown Hub, 123 Catalyst Ave',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.0!2d31.0!3d-17.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ4JzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2szw!4v1600000000000!5m2!1sen!2szw',
            imageUrl: isCamp ? '/assets/camp.jpg' : `/assets/wallpaper0${(id % 5) + 1}.jpg`,
            type: type,
            price: isCamp ? 5000 : (id % 2 === 0 ? 0 : 1500),
            capacity: isCamp ? 500 : 50,
            registeredCount: Math.floor(Math.random() * 40),
            organizer: 'PAOZ Young Adults Team',
            contactEmail: 'events@paoztrailblazers.org'
        };
    };

    const event = getEventById(eventId);

    if (!event) {
        throw error(404, 'Event not found');
    }

    return { event };
};