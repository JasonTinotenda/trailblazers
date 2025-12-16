// import { db } from '$lib/server/db';
// import { events, blogs, groups, testimonials, leaders, faqs } from '$lib/server/schema';
// import { desc, asc } from 'drizzle-orm';

export const load = async () => {
  // MOCK DATA - Replace with DB calls when ready
  // const upcomingEvents = await db.select().from(events)...
  
  const upcomingEvents = [
    { id: 1, title: 'National Camp 2025', description: 'Join hundreds of young adults for the most anticipated event of the year.', date: new Date('2025-08-13'), imageUrl: '/assets/camp.jpg', isFeatured: true },
    { id: 2, title: 'Catalyst Worship Night', description: 'An evening of powerful worship, prayer, and community.', date: new Date('2025-08-15'), imageUrl: '/assets/wallpaper01.jpg', isFeatured: false },
    { id: 3, title: 'End of Summer Cookout', description: 'Join us for free food, games, and good times at Soweto Park.', date: new Date('2025-09-05'), imageUrl: '/assets/image09.jpeg', isFeatured: false },
    { id: 4, title: 'Amplify Leadership Conference', description: 'A weekend dedicated to equipping you for influence.', date: new Date('2025-10-10'), imageUrl: '/assets/wallpaper05.jpeg', isFeatured: false },
  ];

  const latestBlogs = [
    { id: 1, title: '5 Takeaways From Our Winter Conference', category: 'EVENT RECAP', summary: 'It was a powerful weekend of growth and connection.', imageUrl: '/assets/slider03.jpeg' },
    { id: 2, title: 'How to Lead When You Don\'t Feel Ready', category: 'LEADERSHIP INSIGHTS', summary: 'A few thoughts on stepping into your calling.', imageUrl: '/assets/image01.jpeg' },
    { id: 3, title: 'Finding Family: A Story of Belonging', category: 'COMMUNITY STORY', summary: 'Read how one of our trailblazers found a family.', imageUrl: '/assets/slider05.jpeg' },
  ];

  const allGroups = [
    { id: 1, name: 'Campus Connect (UoH)', type: 'campus', leader: 'David & Sarah', dayTime: 'Tuesdays @ 7PM', imageUrl: '/assets/wallpaper04.jpg' },
    { id: 2, name: 'Marketplace Movers', type: 'pro', leader: 'Michael B.', dayTime: 'Thursdays @ 6AM', imageUrl: '/assets/image06.jpeg' },
    { id: 3, name: 'Downtown Creatives', type: 'interest', leader: 'Jane Smith', dayTime: 'Wednesdays @ 6PM', imageUrl: '/assets/wallpaper06.jpg' },
    { id: 4, name: 'North Suburbs Online', type: 'online', leader: 'Emily & Sam', dayTime: 'Mondays @ 8PM', imageUrl: '/assets/wallpaper07.jpg' },
    { id: 5, name: 'MSU Campus Life', type: 'campus', leader: 'Grace & John', dayTime: 'Wednesdays @ 7PM', imageUrl: '/assets/image13.jpeg' },
    { id: 6, name: 'Start-Up Hub', type: 'pro', leader: 'Daniel G.', dayTime: 'Saturdays @ 10AM', imageUrl: '/assets/image01.jpeg' }
  ];

  const allTestimonials = [
    { id: 1, name: "Robin Ayala Doe", role: "Catalyst Inc.", rating: 5, content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
    { id: 2, name: "John De marli", role: "Marketplace Movers", rating: 5, content: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean." },
    { id: 3, name: "Rowhan Smith", role: "Connect Group", rating: 4, content: "When she reached the first hills of the Mountains, she had a last view back on the skyline of her hometown." },
    { id: 4, name: "Sarah Johnson", role: "Amplify Conference", rating: 5, content: "The community has been exceptional. They went above and beyond to help me feel welcome." },
    { id: 5, name: "Michael Chen", role: "Serve Team", rating: 5, content: "I've been volunteering for over a year now and couldn't be happier. The organization is fantastic." },
    { id: 6, name: "Emma Wilson", role: "Creative Team", rating: 5, content: "What impressed me most was how quickly they responded to my ideas. The team is professional." },
  ];

  const leadership = [
    { id: 1, name: "Bishop N Muparutsa", role: "Presiding Bishop", imageUrl: "/assets/presiding.jpg" },
    { id: 2, name: "Bishop Zowa", role: "Bishop of Church Ministries", imageUrl: "/assets/BishopZowa.jpeg" },
    { id: 3, name: "Rev W Machingura", role: "National Young Adults Director", imageUrl: "/assets/RevWashie.jpg" },
    { id: 4, name: "Rev Madzima", role: "National Youth Director", imageUrl: "/assets/RevMadzima.jpg" },
  ];

  const faqList = [
    { id: 1, question: "Who is the Young Adults Ministry for?", answer: "Our ministry is for all young adults, typically from post-high school through their early 30s. This includes university students, young professionals, entrepreneurs, and those starting families." },
    { id: 2, question: "How can I get involved?", answer: "The best way to start is by checking out the Connect section to find a small group or join our Discord. From there, you can explore our resources, serving opportunities, and events." },
    { id: 3, question: "What is the BEP Hub?", answer: "The Business & Entrepreneurs Hub (BEP) is our dedicated initiative for socio-economic empowerment. It's a platform for networking, mentorship, and collaboration." },
  ];

  return { upcomingEvents, latestBlogs, allGroups, allTestimonials, leadership, faqList };
};