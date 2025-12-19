// ### FILE: src/lib/server/db/schema.ts ###
import { pgTable, serial, integer, text, timestamp, boolean, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const userRoleEnum = pgEnum('user_role', ['member', 'leader', 'admin']);
export const eventTypeEnum = pgEnum('event_type', ['camp', 'workshop', 'meetup', 'service']);
export const groupTypeEnum = pgEnum('group_type', ['campus', 'professional', 'online', 'interest']);

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	username: text('username').notNull().unique(),
	email: text('email'),
	role: userRoleEnum('role').default('member').notNull(), // CHANGED: Uses Enum
	passwordHash: text('password_hash').notNull(),
	createdAt: timestamp('created_at').defaultNow(),
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const events = pgTable('events', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	slug: text('slug').notNull().unique(),
	description: text('description'),
	type: eventTypeEnum('type').notNull(), // CHANGED: Uses Enum
	date: timestamp('date', { withTimezone: true, mode: 'date' }).notNull(),
	location: text('location').notNull(),
	price: integer('price').default(0),
	capacity: integer('capacity'),
	imageUrl: text('image_url'),
	isPublished: boolean('is_published').default(true),
});

export const groups = pgTable('groups', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	leaderName: text('leader_name').notNull(),
	type: groupTypeEnum('type').notNull(), // CHANGED: Uses Enum
	meetingTime: text('meeting_time'),
	location: text('location'),
	description: text('description'),
	imageUrl: text('image_url'),
});

// Relations
export const userRelations = relations(user, ({ many }) => ({
	sessions: many(session),
}));

export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id],
	}),
}));

// Types
export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
export type Event = typeof events.$inferSelect;
export type Group = typeof groups.$inferSelect;