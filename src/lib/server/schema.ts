import { pgTable, serial, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core';

// Events Table
export const eventTypeEnum = pgEnum('event_type', ['CAMP', 'WORKSHOP', 'MEETUP']);

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  date: timestamp('date').notNull(),
  location: text('location').notNull(),
  imageUrl: text('image_url'),
  
  // New Fields for V2.0
  type: text('type').notNull(), // 'CAMP', 'WORKSHOP', 'MEETUP' (Using text for simplicity in mock, use enum in real DB)
  price: integer('price').default(0), // Stored in cents/lowest currency unit (e.g., 1000 = $10.00)
  earlyBirdDeadline: timestamp('early_bird_deadline'),
  capacity: integer('capacity'),
  registeredCount: integer('registered_count').default(0),
  
  isFeatured: boolean('is_featured').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

// Blog Posts Table
export const blogs = pgTable('blogs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  category: text('category'), // e.g., 'Campus Life', 'Leadership'
  summary: text('summary').notNull(),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Connect Groups Table
export const groups = pgTable('groups', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  leader: text('leader').notNull(),
  dayTime: text('day_time').notNull(),
  type: text('type').notNull(), // 'campus', 'pro', 'interest', 'online'
  imageUrl: text('image_url'),
});

// Testimonials Table
export const testimonials = pgTable('testimonials', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    role: text('role'), // Company or Ministry role
    content: text('content').notNull(),
    rating: integer('rating').default(5),
    createdAt: timestamp('created_at').defaultNow(),
});

// Leadership Table
export const leaders = pgTable('leaders', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    role: text('role').notNull(),
    imageUrl: text('image_url'),
    order: integer('order').default(0),
});

// FAQ Table
export const faqs = pgTable('faqs', {
    id: serial('id').primaryKey(),
    question: text('question').notNull(),
    answer: text('answer').notNull(),
    order: integer('order').default(0),
});