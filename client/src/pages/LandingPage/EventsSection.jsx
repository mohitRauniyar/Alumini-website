import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const events = [
  { name: 'Virtual Open Day', date: 'June 15, 2023', description: 'Explore our campus from anywhere in the world.' },
  { name: 'Alumni Networking Event', date: 'July 1, 2023', description: 'Connect with successful graduates and expand your network.' },
  { name: 'Research Symposium', date: 'July 10, 2023', description: 'Discover groundbreaking research from our faculty and students.' },
];

const EventsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center"
            >
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <FaCalendarAlt className="text-4xl text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
