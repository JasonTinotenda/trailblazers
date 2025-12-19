// ### FILE: src/lib/server/db/seed.ts ###
import { db } from './index';
import { events, groups } from './schema';
import { encodeBase32LowerCase } from '@oslojs/encoding';

function generateId() {
	const bytes = crypto.getRandomValues(new Uint8Array(15));
	return encodeBase32LowerCase(bytes);
}

export async function seed() {
	console.log('Seeding database...');

	// Seed Events (Updated for 2026)
	await db.insert(events).values([
		{
			id: generateId(),
			title: 'National Youth Camp 2026',
			slug: 'national-camp-2026',
			description: 'The biggest gathering of young adults in Zimbabwe. 3 days of worship, word, and connection.',
			type: 'camp',
			date: new Date('2026-08-15'), // Future date
			location: 'Marondera Resort',
			price: 15000, 
			capacity: 500,
			isPublished: true
		},
		{
			id: generateId(),
			title: 'Harare Worship Night',
			slug: 'harare-worship-night-feb-2026',
			description: 'An evening of unplugged worship in the city center.',
			type: 'meetup',
			date: new Date('2026-02-20'), // Future date
			location: 'PAOZ City Church',
			price: 0,
			capacity: 100,
			isPublished: true
		}
	]);

	// Seed Groups (Keep as is)
	await db.insert(groups).values([
		{
			id: generateId(),
			name: 'UZ Campus Connect',
			leaderName: 'Tinashe M.',
			type: 'campus',
			meetingTime: 'Wednesdays 17:00',
			location: 'Great Hall, UZ',
			description: 'For all students at University of Zimbabwe.'
		},
		{
			id: generateId(),
			name: 'Marketplace Movers',
			leaderName: 'Sarah K.',
			type: 'professional',
			meetingTime: 'First Friday of Month',
			location: 'Avondale Coffee Shop',
			description: 'Networking for Christian entrepreneurs.'
		}
	]);

	console.log('Seeding complete!');
}