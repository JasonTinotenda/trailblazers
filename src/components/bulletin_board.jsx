import { useState, useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import eventImage from '../assets/image01.jpeg';

const events = [
  {
    id: 1,
    title: 'Community Cleanup Drive',
    href: '#',
    imageUrl: eventImage,
    description:
      'Join us for a community cleanup drive to keep our neighborhood clean and green. Volunteers needed!',
    date: 'April 12, 2025',
    datetime: '2025-04-12',
    category: { title: 'Community Service', href: '#' },
    highlights: [
      'Eco-friendly initiative',
      'Meet fellow community members',
      'Refreshments provided',
    ],
    details: 'Help us make a difference by participating in a community-wide cleanup effort. Bring gloves and trash bags.',
  },
  {
    id: 1,
    title: 'Community Cleanup Drive',
    href: '#',
    imageUrl: eventImage,
    description:
      'Join us for a community cleanup drive to keep our neighborhood clean and green. Volunteers needed!',
    date: 'April 12, 2025',
    datetime: '2025-04-12',
    category: { title: 'Community Service', href: '#' },
    highlights: [
      'Eco-friendly initiative',
      'Meet fellow community members',
      'Refreshments provided',
    ],
    details: 'Help us make a difference by participating in a community-wide cleanup effort. Bring gloves and trash bags.',
  },
  {
    id: 1,
    title: 'Community Cleanup Drive',
    href: '#',
    imageUrl: eventImage,
    description:
      'Join us for a community cleanup drive to keep our neighborhood clean and green. Volunteers needed!',
    date: 'April 12, 2025',
    datetime: '2025-04-12',
    category: { title: 'Community Service', href: '#' },
    highlights: [
      'Eco-friendly initiative',
      'Meet fellow community members',
      'Refreshments provided',
    ],
    details: 'Help us make a difference by participating in a community-wide cleanup effort. Bring gloves and trash bags.',
  },
];

export default function BulletinBoard() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000); // Slow sliding interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-16 sm:py-8 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold text-orange-600">Upcomming Events</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
            Announcements & Notices
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Stay up-to-date with our latest events and trailblazers initiatives.
          </p>
        </div>
        <div className="hidden sm:grid sm:grid-cols-3 gap-x-8 gap-y-16 border-t border-gray-300 pt-10">
          {events.map((event) => (
            <article key={event.id} className="flex flex-col items-start">
              <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover rounded-xl shadow-md" />
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                <a href={event.href}>{event.title}</a>
              </h3>
              <p className="mt-5 text-sm text-gray-600">{event.description}</p>
              <span className="text-sm font-semibold text-gray-500">{event.date}</span>
              <button onClick={() => setSelectedEvent(event)} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </article>
          ))}
        </div>
        <div className="sm:hidden overflow-hidden relative mt-8">
          <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
            {events.map((event) => (
              <div key={event.id} className="min-w-full flex flex-col items-start px-4">
                <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover rounded-xl shadow-md" />
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  <a href={event.href}>{event.title}</a>
                </h3>
                <p className="mt-5 text-sm text-gray-600">{event.description}</p>
                <span className="text-sm font-semibold text-gray-500">{event.date}</span>
                <button onClick={() => setSelectedEvent(event)} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedEvent && (
        <Dialog open={!!selectedEvent} onClose={() => setSelectedEvent(null)} className="fixed inset-0 z-10 overflow-y-auto">
          <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-30 backdrop-blur-sm" />
          <div className="flex min-h-screen items-center justify-center">
            <DialogPanel className="relative bg-white rounded-lg shadow-xl max-w-lg mx-auto p-6">
              <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-500">
                <XMarkIcon className="h-6 w-6" />
              </button>
              <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="text-2xl font-bold text-gray-900 mt-4">{selectedEvent.title}</h2>
              <p className="mt-2 text-gray-700">{selectedEvent.description}</p>
              <p className="mt-4 text-sm font-semibold text-gray-500">Date: {selectedEvent.date}</p>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <ul className="list-disc space-y-2 pl-4 text-sm text-gray-600">
                  {selectedEvent.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Details</h3>
                <p className="mt-2 text-sm text-gray-600">{selectedEvent.details}</p>
              </div>
              <button className=" mt-6 w-full bg-gray-400 text-white py-2 rounded-lg cursor-not-allowed opacity-50">Book</button>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </div>
  );
}