import { db } from '$lib/server/db';
import { events } from '$lib/server/db/schema';
import { desc, gte } from 'drizzle-orm';

export const load = async () => {
	// Fetch upcoming events
	const upcomingEvents = await db
		.select()
		.from(events)
		.where(gte(events.date, new Date())) // Only future events
		.orderBy(desc(events.date));

	return {
		events: upcomingEvents
	};
};