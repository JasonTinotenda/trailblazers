import { db } from '$lib/server/db';
import { inquiries } from '$lib/server/db/schema';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name')?.toString();
        const email = data.get('email')?.toString();
        const message = data.get('message')?.toString();

        if (!name || !email || !message) {
            return fail(400, { missing: true });
        }

        try {
            await db.insert(inquiries).values({
                name,
                email,
                message,
                type: 'GENERAL',
                status: 'PENDING'
            });
            return { success: true };
        } catch (err) {
            console.error(err);
            return fail(500, { error: 'Database error' });
        }
    }
};