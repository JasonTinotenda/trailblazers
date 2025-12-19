import { db } from '$lib/server/db';
import { bepProfiles, equipment } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load = async () => {
    // Fetch verified businesses
    const businesses = await db.select()
        .from(bepProfiles)
        .where(eq(bepProfiles.isVerified, true));

    // Fetch available equipment for freelancers
    const rentalGear = await db.select()
        .from(equipment)
        .where(eq(equipment.status, 'AVAILABLE'));

    return {
        businesses,
        rentalGear
    };
};